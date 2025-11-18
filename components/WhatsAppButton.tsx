'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'primary' | 'white' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function WhatsAppButton({
  message = "Olá Dra. Flávia! Gostaria de agendar uma consulta.",
  variant = 'primary',
  size = 'md',
  className = ''
}: WhatsAppButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary',
    white: 'bg-white text-primary hover:bg-gray-50 border-2 border-primary/20',
    secondary: 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
  };

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const whatsappLink = getWhatsAppLink(message);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Falar no WhatsApp</span>
    </a>
  );
}
