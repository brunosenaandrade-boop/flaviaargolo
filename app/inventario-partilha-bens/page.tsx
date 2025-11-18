import { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Inventário e Partilha de Bens - Dra. Flávia Argolo',
  description: 'Inventário de sucessão e partilha de bens em Aracaju. Resolva com transparência e rapidez.'
};

export default function InventarioPage() {
  return (
    <LandingPageTemplate
      titulo="Inventário Sem Burocracia em Aracaju"
      subtitulo="Resolva a Partilha de Bens Com Transparência, Rapidez e Justiça"
      mensagemWhatsApp="Olá Dra. Flávia! Vim do seu site sobre *inventário* e gostaria de agendar uma conversa. Meu nome é: "
      servico="Inventário"
      doresconsulta={[
        "Há uma herança a ser dividida?",
        "Precisa inventariar os bens de um falecido?",
        "Há conflito entre herdeiros sobre a divisão?"
      ]}
      perguntasFrequentes={[
        {
          pergunta: "O que é inventário?",
          resposta: "Inventário é o processo judicial de identificação, avaliação e partilha dos bens deixados por uma pessoa falecida. É obrigatório para transferir os bens para os herdeiros."
        },
        {
          pergunta: "Qual a diferença entre inventário judicial e extrajudicial?",
          resposta: "Extrajudicial é mais rápido e barato - feito em cartório quando todos os herdeiros estão de acordo. Judicial é quando há conflitos e precisa de sentença do juiz."
        },
        {
          pergunta: "Quanto tempo demora um inventário?",
          resposta: "Extrajudicial: de 30 a 90 dias. Judicial: pode variar bastante, de 6 meses a 2 anos, dependendo da complexidade e conflitos."
        },
        {
          pergunta: "Quanto custa fazer um inventário?",
          resposta: "Valores variam conforme o volume de bens e complexidade. Há custas judiciais (proporcionais ao valor dos bens) e honorários advocatícios. Faço parcelamento."
        }
      ]}
      ctaFinal="Resolva Sua Herança Com Transparência e Paz"
    />
  );
}
