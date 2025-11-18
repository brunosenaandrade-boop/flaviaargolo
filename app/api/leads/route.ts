import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getClientIp, checkRateLimit } from '@/lib/rate-limit';
import {
  extractNameFromText,
  extractPhoneFromText,
  extractEmailFromText,
  detectServiceFromText,
  detectUrgencyFromText
} from '@/lib/utils';

/**
 * API Route para salvar leads do chatbot
 * TODO: Integrar com Supabase quando credenciais forem configuradas
 */

// Validation schema
const LeadRequestSchema = z.object({
  conversation: z.array(
    z.object({
      role: z.enum(['user', 'assistant']),
      content: z.string().min(1)
    })
  ),
  qualified_score: z.number().min(0).max(100)
});

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(req.headers);
    const rateLimit = checkRateLimit(clientIp, 10, 60000); // 10 requests per minute

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
    const validationResult = LeadRequestSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid request format', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { conversation, qualified_score } = validationResult.data;

    // Extract information from conversation
    const conversationText = conversation.map((m: any) => m.content).join('\n');

    const nome = extractNameFromText(conversationText);
    const phone = extractPhoneFromText(conversationText);
    const email = extractEmailFromText(conversationText);
    const contato = phone || email;
    const servico = detectServiceFromText(conversationText);
    const urgencia = detectUrgencyFromText(conversationText) ? 'ALTA' : 'NORMAL';

    // Log the lead (for now, just logging since Supabase isn't configured)
    console.log('📌 NOVO LEAD QUALIFICADO:', {
      nome,
      contato,
      servico,
      urgencia,
      score: qualified_score,
      timestamp: new Date().toISOString()
    });

    // TODO: Uncomment when Supabase is configured
    /*
    const { supabaseAdmin } = await import('@/lib/supabase');

    const { data, error } = await supabaseAdmin
      .from('leads_chatbot')
      .insert({
        nome,
        contato,
        servico_interesse: servico,
        urgencia,
        mensagem_completa: conversationText,
        qualified_score,
        status: 'novo',
        conversation_json: conversation
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao salvar lead:', error);
      throw error;
    }

    // Send notification if high priority
    if (qualified_score >= 70) {
      await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId: data.id,
          nome,
          contato,
          servico,
          urgencia
        })
      }).catch(err => console.error('Erro ao notificar:', err));
    }

    return NextResponse.json({ success: true, leadId: data.id });
    */

    // For now, just return success
    return NextResponse.json({ success: true, leadId: null });
  } catch (error) {
    console.error('Erro ao salvar lead:', error);
    return NextResponse.json(
      { error: 'Erro ao salvar lead' },
      { status: 500 }
    );
  }
}
