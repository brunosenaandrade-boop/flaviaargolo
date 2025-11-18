'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import WhatsAppButton from './WhatsAppButton';

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
            FA
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Dra. Flávia</h1>
            <p className="text-xs text-gray-500 font-semibold">Advogada Direito Família</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-primary font-semibold transition-colors relative group">
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
          </Link>
          <Link href="#servicos" className="text-gray-700 hover:text-primary font-semibold transition-colors relative group">
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
          </Link>
          <Link href="#quem-sou" className="text-gray-700 hover:text-primary font-semibold transition-colors relative group">
            Quem Sou
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
          </Link>
          <Link href="#depoimentos" className="text-gray-700 hover:text-primary font-semibold transition-colors relative group">
            Depoimentos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
          </Link>
        </nav>

        {/* CTA Button */}
        <WhatsAppButton
          message="Olá Dra. Flávia! Gostaria de agendar uma consulta."
          size="sm"
        />
      </div>
    </header>
  );
}
