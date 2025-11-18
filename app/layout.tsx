import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidgetClient from '@/components/ChatWidgetClient';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.nome} - Advogada Especialista em Direito de Família`,
  description: `${SITE_CONFIG.descricao}. ${SITE_CONFIG.diferenciais[0]}. Atendimento humanizado em Aracaju/SE.`,
  keywords: [
    'advogada aracaju',
    'direito de família',
    'divórcio',
    'pensão alimentícia',
    'inventário',
    'guarda de filhos',
    'aracaju',
    'sergipe'
  ],
  authors: [{ name: SITE_CONFIG.nome }],
  creator: SITE_CONFIG.nome,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: `${SITE_CONFIG.nome} - Advogada Especialista em Direito de Família`,
    description: SITE_CONFIG.descricao,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.nome
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.nome} - Advogada Especialista em Direito de Família`,
    description: SITE_CONFIG.descricao,
    images: ['/og-image.png']
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatWidgetClient />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
