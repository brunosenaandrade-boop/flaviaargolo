import { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Divórcio Rápido em Aracaju - Dra. Flávia Argolo',
  description: 'Divórcio consensual rápido e sem brigas em Aracaju. Especialista em divórcio com 24 anos de experiência. Atendimento humanizado.'
};

export default function DivorcioRapidoPage() {
  return (
    <LandingPageTemplate
      titulo="Divórcio Rápido e Sem Brigas em Aracaju"
      subtitulo="Termine Esse Ciclo Com Dignidade e Paz. Especialista em Aracaju."
      mensagemWhatsApp="Olá Dra. Flávia! Vim do seu site sobre *divórcio consensual* e gostaria de entender como você pode me ajudar. Meu nome é: "
      servico="Divórcio Consensual"
      doresconsulta={[
        "Cansada(o) do desgaste emocional?",
        "Preocupada(o) com custos?",
        "Sem saber por onde começar?"
      ]}
      perguntasFrequentes={[
        {
          pergunta: "Qual a diferença entre divórcio consensual e litigioso?",
          resposta: "Divórcio consensual é quando ambas as partes estão de acordo com o fim do casamento e as condições (pensão, bens, guarda). É mais rápido, mais barato e menos desgastante. Já o litigioso é quando há desacordos que precisam ser resolvidos em juízo."
        },
        {
          pergunta: "Quanto tempo leva para um divórcio consensual?",
          resposta: "Um divórcio consensual pode ser feito em semanas, dependendo de quanto tempo levamos para preparar a documentação. É muito mais rápido que um divórcio litigioso."
        },
        {
          pergunta: "Quanto custa um divórcio consensual?",
          resposta: "Os valores variam conforme a complexidade do caso e sua situação financeira. Na consulta inicial (R$ 250), te passo um orçamento detalhado. Trabalho com parcelamento."
        },
        {
          pergunta: "Preciso de advogado para divorciar?",
          resposta: "Para qualquer divórcio, é recomendado ter orientação jurídica profissional. Eu garanto que seus direitos sejam protegidos e que o processo seja rápido e com o mínimo de dor possível."
        }
      ]}
      ctaFinal="Termine Esse Capítulo Com Dignidade e Paz"
    />
  );
}
