'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold shadow-lg">
                FA
              </div>
              <div>
                <h3 className="text-xl font-bold">Dra. Flávia Argolo</h3>
                <p className="text-xs text-primary font-semibold">OAB/SE {SITE_CONFIG.oabSE}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Advogada especialista em Direito de Família com 24 anos de experiência.
              Atendimento humanizado e acolhedor.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold mb-5 text-lg border-l-4 border-primary pl-3">Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/pensao-alimenticia-urgente" className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                  → Pensão Alimentícia
                </Link>
              </li>
              <li>
                <Link href="/divorcio-rapido-aracaju" className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                  → Divórcio
                </Link>
              </li>
              <li>
                <Link href="/inventario-partilha-bens" className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                  → Inventário
                </Link>
              </li>
              <li>
                <Link href="/guarda-filhos-aracaju" className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                  → Guarda de Filhos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-5 text-lg border-l-4 border-primary pl-3">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a
                  href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.telefoneWhatsApp}`}
                  className="hover:text-primary transition font-semibold"
                >
                  {SITE_CONFIG.telefone}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary transition">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="leading-relaxed">{SITE_CONFIG.endereco.completo}</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-bold mb-5 text-lg border-l-4 border-primary pl-3">Redes Sociais</h4>
            <a
              href={`https://instagram.com/${SITE_CONFIG.instagram.replace('@', '')}`}
              className="flex items-center gap-3 hover:text-primary transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold">{SITE_CONFIG.instagram}</p>
                <p className="text-xs text-gray-400">Siga-nos no Instagram</p>
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Legal */}
        <div className="text-center text-sm text-gray-400 space-y-3">
          <p className="text-white font-semibold">
            &copy; 2024 Dra. Flávia Argolo. Todos os direitos reservados.
          </p>
          <p className="max-w-3xl mx-auto leading-relaxed text-xs">
            <span className="text-primary font-bold">Aviso Legal:</span> A captação de clientes ou a mercantilização da advocacia é proibida pela OAB.
            Este site possui caráter informativo e consultivo. Consulte com o profissional antes de tomar qualquer decisão jurídica.
          </p>
        </div>
      </div>
    </footer>
  );
}
