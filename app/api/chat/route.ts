import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';
import { SYSTEM_PROMPT } from '@/lib/gemini-prompt';
import { getEnv } from '@/lib/env';
import { getClientIp, checkRateLimit } from '@/lib/rate-limit';
import {
  extractNameFromText,
  extractPhoneFromText,
  extractEmailFromText,
  detectServiceFromText,
  detectUrgencyFromText,
  calculateLeadScore,
  isQualifiedLead
} from '@/lib/utils';

// Validation schema
const ChatRequestSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(['user', 'assistant']),
      content: z.string().min(1)
    })
  )
});


let genAI: GoogleGenerativeAI;

try {
  const apiKey = getEnv('GEMINI_API_KEY');
  genAI = new GoogleGenerativeAI(apiKey);
} catch (error) {
  console.error('Failed to initialize Gemini API:', error);
  // Will be caught in POST handler
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(req.headers);
    const rateLimit = checkRateLimit(clientIp, 20, 60000); // 20 requests per minute

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again in a few moments.',
          retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000)
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000))
          }
        }
      );
    }

    const body = await req.json();

    // Validate input
    const validationResult = ChatRequestSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid request format', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { messages } = validationResult.data;

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    // Format chat history for Gemini
    const chatHistory = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: chatHistory,
    });

    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(lastMessage);
    const response = result.response.text();

    // Analyze conversation for lead qualification
    const conversationText = messages.map((m: any) => m.content).join(' ');

    const hasName = extractNameFromText(conversationText) !== null;
    const hasContact =
      extractPhoneFromText(conversationText) !== null ||
      extractEmailFromText(conversationText) !== null;
    const hasService = detectServiceFromText(conversationText) !== 'Não especificado';
    const hasUrgency = detectUrgencyFromText(conversationText);

    const score = calculateLeadScore(
      hasName,
      hasContact,
      hasService,
      hasUrgency,
      messages.length
    );

    const qualified = isQualifiedLead(score);

    return NextResponse.json({
      message: response,
      qualified,
      score,
      urgency: hasUrgency ? 'ALTA' : 'NORMAL',
      metadata: {
        hasName,
        hasContact,
        hasService,
        hasUrgency
      }
    });
  } catch (error) {
    console.error('Erro no chatbot:', error);

    // Return error with appropriate status code
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      {
        message:
          'Desculpe, tive um problema técnico. Por favor, fale direto no WhatsApp: (79) 99998-5695',
        qualified: false,
        score: 0,
        error: errorMessage
      },
      { status: 500 }
    );
  }
}
