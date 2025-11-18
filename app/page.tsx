// Site Dra. Flávia Argolo - v3.1 - Hero corrigido conforme design desejado
import Link from 'next/link';
import Image from 'next/image';
import { Award, Heart, Users, FileText, CheckCircle, ArrowRight, Sparkles, Clock, Shield } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE_CONFIG } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* HERO SECTION - COM IMAGEM DE FUNDO */}
      <section className="relative min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/01.png"
            alt="Dra. Flávia Argolo - Advocacia Especializada"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Overlay escuro para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950/95"></div>
        </div>

        {/* Badge no canto superior direito - CORRIGIDO */}
        <div className="absolute top-8 right-8 z-20 md:top-12 md:right-12">
          <div className="relative group">
            {/* Badge circular com borda dourada */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-primary flex items-center justify-center bg-slate-900/90 backdrop-blur-sm shadow-2xl group-hover:scale-110 transition-transform">
              <div className="text-center">
                <div className="text-3xl mb-1">⭐</div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-wide">Excelente</p>
                <p className="text-[8px] text-gray-300">(reputação)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo principal - SIMPLIFICADO */}
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="block mb-2" style={{ 
                color: '#D4AF37',
                textShadow: '0 0 40px rgba(212,175,55,0.7), 0 0 80px rgba(212,175,55,0.4)',
                filter: 'brightness(1.3)'
              }}>
                Protegendo Famílias
              </span>
              <span className="text-white block">
                em Aracaju
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Advogada especialista que <span className="text-primary font-bold">acolhe, entende e resolve.</span>
              <br className="hidden sm:block" />
              Com <span className="text-primary font-bold">5 mil famílias ajudadas</span> em Aracaju.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                message="Olá Dra. Flávia! Vim do seu site e gostaria de agendar uma consulta."
                variant="primary"
                size="lg"
              />
              <Link
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 hover:border-white/50 transition-all"
              >
                Explorar Serviços
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: CONHEÇA NOSSA EXPERIÊNCIA (Stats Cards Brancos) */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900">
            Conheça Nossa Experiência
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 - 24+ Anos */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary" strokeWidth={2.5} />
                </div>
                <div className="text-5xl font-black text-primary mb-3">24+</div>
                <p className="text-lg font-bold text-slate-900">Anos de Experiência</p>
              </div>
            </div>

            {/* Card 2 - 5k+ Famílias */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" strokeWidth={2.5} />
                </div>
                <div className="text-5xl font-black text-primary mb-3">5k+</div>
                <p className="text-lg font-bold text-slate-900">Famílias Ajudadas</p>
              </div>
            </div>

            {/* Card 3 - 100% Acolhimento */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-primary" strokeWidth={2.5} />
                </div>
                <div className="text-5xl font-black text-primary mb-3">100%</div>
                <p className="text-lg font-bold text-slate-900">Acolhimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO POSSO AJUDAR */}
      <section id="servicos" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-bold text-sm">ESPECIALIDADES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Como Posso Ajudar Você?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Especialista em Direito de Família com soluções para cada situação</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Card 1 - Pensão Alimentícia - PREMIUM MINIMALISTA */}
            <Link
              href="/pensao-alimenticia-urgente"
              className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-4 border border-gray-200 hover:border-primary/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 shadow-xl"
                     style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8932D 100%)' }}>
                  <Heart className="w-10 h-10" style={{ color: '#ffffff', strokeWidth: 2 }} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">Pensão Alimentícia</h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  Execução, revisão e exoneração. Garanta os direitos de quem você ama com urgência e segurança.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Saiba mais <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Card 2 - Divórcio - PREMIUM MINIMALISTA */}
            <Link
              href="/divorcio-rapido-aracaju"
              className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-4 border border-gray-200 hover:border-primary/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 shadow-xl"
                     style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8932D 100%)' }}>
                  <Users className="w-10 h-10" style={{ color: '#ffffff', strokeWidth: 2 }} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">Divórcio</h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  Consensual ou litigioso. Termine esse ciclo com dignidade, paz e segurança jurídica.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Saiba mais <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Card 3 - Inventário - PREMIUM MINIMALISTA */}
            <Link
              href="/inventario-partilha-bens"
              className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-4 border border-gray-200 hover:border-primary/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 shadow-xl"
                     style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8932D 100%)' }}>
                  <FileText className="w-10 h-10" style={{ color: '#ffffff', strokeWidth: 2 }} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">Inventário</h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  Partilha de bens com transparência, rapidez e justiça para toda família.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Saiba mais <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* POR QUE ME ESCOLHER */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-bold text-sm">DIFERENCIAIS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Por Que Me Escolher?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Diferenciais que fazem toda diferença na sua vida</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Award, title: "24 Anos de Experiência", desc: "Mais de duas décadas resolvendo casos complexos", color: "from-amber-500 to-yellow-600" },
              { icon: Heart, title: "Atendimento Familiar", desc: "Você se torna parte da minha família", color: "from-rose-500 to-pink-600" },
              { icon: CheckCircle, title: "Especialista Certificada", desc: "Pós-graduação em Direito Processual Civil", color: "from-emerald-500 to-teal-600" },
              { icon: Users, title: "Humanização", desc: "Especialização em Direito de Família", color: "from-blue-500 to-cyan-600" },
              { icon: Sparkles, title: "Parcelamento", desc: "Facilitado para sua situação financeira", color: "from-violet-500 to-purple-600" },
              { icon: Award, title: "Flexibilidade", desc: "Atendo fins de semana em urgências", color: "from-orange-500 to-red-600" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group relative p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-primary transition-all hover:-translate-y-2 shadow-lg hover:shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUEM SOU - PREMIUM */}
      <section id="quem-sou" className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
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
                  OAB/SE {SITE_CONFIG.oabSE} | 24 anos de excelência
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
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">O Que Dizem Sobre Mim</h2>
            <p className="text-xl text-gray-600">Histórias reais de pessoas que transformaram suas vidas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "M.S.", case: "Divórcio Consensual", text: "Profissional excepcional! Me acolheu em um momento muito difícil. Resolveu meu caso com rapidez, transparência e muito cuidado. Recomendo de coração!" },
              { name: "T.B.", case: "Pensão Alimentícia", text: "Consegui garantir os direitos dos meus filhos. A Dra. Flávia foi incansável e me tratou como família. Muito grata!" }
            ].map((depoimento, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{depoimento.text}"</p>
                <p className="font-bold text-gray-900">{depoimento.name}</p>
                <p className="text-sm text-primary font-semibold">{depoimento.case}</p>
              </div>
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
            Pronta(o) Para Transformar Sua Vida?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Agende uma consulta hoje mesmo. Primeira conversa é rápida (5 min) e sem compromisso.
          </p>
          <WhatsAppButton
            message="Olá Dra. Flávia! Quero agendar uma consulta para resolver meu caso."
            variant="white"
            size="lg"
          />
          <p className="mt-6 text-white/80 text-sm">
            💰 Consulta: R$ 250 | 📅 Horário: Seg-Sex 8:30-18h | 🚀 Resposta em até 2h
          </p>
        </div>
      </section>
    </>
  );
}
