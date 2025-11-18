import { Check, X, Sparkles, ArrowRight } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
// ✅ Footer removido - renderizado globalmente em layout.tsx

interface LandingPageTemplateProps {
  titulo: string;
  subtitulo: string;
  mensagemWhatsApp: string;
  servico: string;
  doresconsulta: string[];
  perguntasFrequentes: Array<{
    pergunta: string;
    resposta: string;
  }>;
  ctaFinal: string;
}

export default function LandingPageTemplate({
  titulo,
  subtitulo,
  mensagemWhatsApp,
  servico,
  doresconsulta,
  perguntasFrequentes,
  ctaFinal
}: LandingPageTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* HERO - PREMIUM */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        {/* Background decorativo premium */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6 border border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">{servico}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-relaxed">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent block">
                {titulo}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {subtitulo}
            </p>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl mb-12 border border-white/10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-left">Você está passando por isso?</h2>
              <ul className="space-y-4 mb-6">
                {doresconsulta.map((dor, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                    <span className="text-left text-gray-200">{dor}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-primary italic border-l-4 border-primary pl-4">
                "Você não está sozinha(o). Vou guiar você em cada passo, sem julgamentos, só acolhimento."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message={mensagemWhatsApp}
                variant="primary"
                size="lg"
              />
              <div className="inline-flex items-center justify-center gap-2 border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all cursor-pointer">
                Saiba Mais Sobre {servico}
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-400">
              ✓ Resposta em até 2 horas | ✓ Parcelamento facilitado | ✓ Primeira consulta sem compromisso
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700 mt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24+</div>
                <p className="text-gray-400 text-sm">Anos de Experiência</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5k+</div>
                <p className="text-gray-400 text-sm">Famílias Ajudadas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-400 text-sm">Acolhimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Como o Processo Funciona</h2>
            <p className="text-xl text-gray-600">Três passos simples para resolver seu caso com segurança jurídica</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', titulo: 'Conversa Inicial', desc: 'Fale comigo no WhatsApp sobre seu caso. Sem pressa, só acolhimento e escuta genuína.' },
              { num: '2', titulo: 'Consulta Detalhada', desc: 'Reunião presencial ou online para entender todos os detalhes e definir a melhor estratégia.' },
              { num: '3', titulo: 'Execução Ágil', desc: 'Processo rápido, transparente e focado em resultados concretos para sua situação.' }
            ].map((step, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:from-primary/5 hover:to-primary/10 transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-primary">{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">{step.titulo}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM SOU - PREMIUM */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Imagem */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative w-full aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-8xl font-bold">
                  FA
                </div>
              </div>

              {/* Conteúdo */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Dra. Flávia Argolo</h2>
                <p className="text-2xl text-primary font-semibold mb-6">
                  OAB/SE 3458 | 24 anos de excelência
                </p>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Formada pela Universidade Federal de Sergipe, com pós-graduação em Direito Processual Civil e especialização em Direito de Família.
                </p>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Há mais de duas décadas, ajudo pessoas em Aracaju a resolverem conflitos familiares com <span className="text-primary font-semibold">acolhimento genuíno, transparência absoluta e excelência técnica.</span>
                </p>

                <p className="text-lg text-primary italic mb-8 border-l-4 border-primary pl-6">
                  "Meu maior compromisso é fazer com que você se sinta parte da minha família. Cada caso é único e merece atenção personalizada."
                </p>

                <div className="space-y-3">
                  {[
                    'Pós-graduada em Direito Processual Civil',
                    'Especialista em Direito de Família',
                    'Atendimento 100% humanizado',
                    'Parcelamento facilitado',
                    'Disponível 24/7 em urgências'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES - CENTRALIZADO */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto w-full text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Respostas claras sobre o processo</p>
          </div>

          <div className="max-w-3xl mx-auto w-full space-y-4">
            {perguntasFrequentes.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <summary className="font-bold text-lg cursor-pointer flex items-center justify-between hover:text-primary transition-colors">
                  <span className="text-gray-900 flex-1 text-left">{faq.pergunta}</span>
                  <span className="text-primary group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed text-left">{faq.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL - PREMIUM */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-primary/90 py-24">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {ctaFinal}
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Vamos resolver isso juntas. Atendimento humanizado e resultados concretos.
          </p>
          <WhatsAppButton
            message={mensagemWhatsApp}
            variant="white"
            size="lg"
          />
          <p className="mt-8 text-white/80 text-sm">
            💰 Consulta: R$ 250 | 📅 Horário: Seg-Sex 8:30-18h | 🚀 Resposta em até 2h
          </p>
        </div>
      </section>
    </div>
  );
}
