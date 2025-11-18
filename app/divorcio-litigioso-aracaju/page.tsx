import { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Divórcio Litigioso - Dra. Flávia Argolo',
  description: 'Divórcio com disputa e litigioso em Aracaju. Especialista que protege seus direitos. 24 anos de experiência.'
};

export default function DivorcioLitigiosoPage() {
  return (
    <LandingPageTemplate
      titulo="Divórcio Complicado? Proteja Seus Direitos"
      subtitulo="Quando o Acordo Não É Possível, Você Precisa de Quem Saiba Lutar Por Você"
      mensagemWhatsApp="Olá Dra. Flávia! Vim do seu site sobre *divórcio litigioso* e preciso de ajuda. Meu nome é: "
      servico="Divórcio Litigioso"
      doresconsulta={[
        "Há desacordos sobre bens, pensão ou guarda?",
        "O outro lado não quer cooperar?",
        "Precisa proteger seus direitos em juízo?"
      ]}
      perguntasFrequentes={[
        {
          pergunta: "Como é um divórcio litigioso?",
          resposta: "É quando as partes não chegam a um acordo e precisam ir a juízo. O juiz decide sobre divisão de bens, pensão alimentícia, guarda dos filhos. Demora mais, mas seus direitos são protegidos."
        },
        {
          pergunta: "Quanto tempo leva um divórcio litigioso?",
          resposta: "Pode levar 1 a 3 anos, dependendo da complexidade e do congestionamento da justiça. Mas vamos agilizar ao máximo usando todas as ferramentas legais disponíveis."
        },
        {
          pergunta: "Como funciona a divisão de bens em um divórcio litigioso?",
          resposta: "Os bens adquiridos durante o casamento são divididos conforme o regime de bens. Vou garantir que você receba sua parte justa e que todos os patrimônios sejam identificados."
        },
        {
          pergunta: "E quanto à guarda dos filhos?",
          resposta: "A guarda é decidida no melhor interesse da criança. Vou lutar por você, mas sempre mantendo em mente que as crianças precisam de ambos os pais. Vamos buscar um acordo que funcione."
        }
      ]}
      ctaFinal="Proteja Seus Direitos Com Quem Sabe Lutar"
    />
  );
}
