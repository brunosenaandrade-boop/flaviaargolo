import { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Revisão de Pensão Alimentícia - Dra. Flávia Argolo',
  description: 'Revisão e readequação de pensão alimentícia em Aracaju. Situação mudou? Vamos ajustar o valor de forma justa.'
};

export default function RevisaoPensaoPage() {
  return (
    <LandingPageTemplate
      titulo="Revisão de Pensão Alimentícia em Aracaju"
      subtitulo="Sua Situação Mudou? Vamos Readequar a Pensão de Forma Justa"
      mensagemWhatsApp="Olá Dra. Flávia! Vim do seu site sobre *revisão de pensão alimentícia* e gostaria de orientação. Meu nome é: "
      servico="Revisão de Pensão"
      doresconsulta={[
        "Sua situação financeira piorou e não consegue pagar a pensão?",
        "Você recebe pensão mas a situação mudou e precisa de mais?",
        "O outro recebeu herança ou aumentou de salário?"
      ]}
      perguntasFrequentes={[
        {
          pergunta: "Quando posso pedir revisão de pensão alimentícia?",
          resposta: "Você pode pedir revisão sempre que houver mudança significativa na situação financeira (desemprego, aumento de salário, herança, etc). Não precisa esperar um tempo específico."
        },
        {
          pergunta: "Como funciona o processo de revisão?",
          resposta: "Entramos com ação de revisão de pensão alimentícia no juízo competente. Apresentamos a mudança de circunstâncias (documentos comprobatórios) e o juiz decide se aumenta, diminui ou mantém o valor."
        },
        {
          pergunta: "Qual é o novo valor de pensão após a revisão?",
          resposta: "Depende da sua situação. O juiz leva em conta: capacidade de quem paga, necessidades de quem recebe, saúde, educação dos filhos, etc. Isso é analisado especificamente no seu caso."
        },
        {
          pergunta: "Quanto tempo leva uma revisão?",
          resposta: "Processos de revisão de alimentos têm prioridade. Geralmente resolvem em 4-8 meses. Vou agilizar ao máximo."
        }
      ]}
      ctaFinal="Vamos Readequar Sua Pensão de Forma Justa"
    />
  );
}
