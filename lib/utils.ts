/**
 * Utilitários gerais da aplicação
 */

export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes
    .filter((c) => typeof c === 'string')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getWhatsAppLink(message: string, phone: string = '5579999985695'): string {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
}

export function extractNameFromText(text: string): string | null {
  const match = text.match(
    /(?:meu nome é|me chamo|sou|eu sou|chamO-me|meu nome)\s+([a-záéíóúãõâêîôûàèìòù\s]+)/i
  );
  return match ? match[1].trim() : null;
}

export function extractPhoneFromText(text: string): string | null {
  const match = text.match(/(\d{10,11})/);
  return match ? match[1] : null;
}

export function extractEmailFromText(text: string): string | null {
  const match = text.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
  return match ? match[0] : null;
}

export function detectServiceFromText(text: string): string {
  const textLower = text.toLowerCase();
  if (textLower.includes('divórcio') || textLower.includes('divorcio')) return 'Divórcio';
  if (textLower.includes('pensão') || textLower.includes('pensao') || textLower.includes('alimentos'))
    return 'Pensão Alimentícia';
  if (textLower.includes('inventário') || textLower.includes('inventario') || textLower.includes('partilha'))
    return 'Inventário';
  if (textLower.includes('guarda') || textLower.includes('filhos') || textLower.includes('visita'))
    return 'Guarda';
  return 'Não especificado';
}

export function detectUrgencyFromText(text: string): boolean {
  const urgencyWords = ['urgente', 'rápido', 'hoje', 'agora', 'emergência', 'atrasado', 'prazo', 'imediato'];
  return urgencyWords.some((word) => text.toLowerCase().includes(word));
}

export function calculateLeadScore(
  hasName: boolean,
  hasContact: boolean,
  hasService: boolean,
  hasUrgency: boolean,
  messageCount: number
): number {
  let score = 0;
  if (hasName) score += 25;
  if (hasContact) score += 30;
  if (hasService) score += 25;
  if (hasUrgency) score += 15;
  if (messageCount >= 3) score += 5;
  return Math.min(score, 100);
}

export function isQualifiedLead(score: number): boolean {
  return score >= 70;
}
