import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata = {
  title: 'Pensão Alimentícia Urgente - Dra. Flávia Argolo',
  description: 'Especialista em pensão alimentícia em Aracaju. Execução, revisão e exoneração. Atendimento humanizado com 24 anos de experiência.'
};

export default function PensaoAlimenticiaPage() {
  return (
    <LandingPageTemplate
      titulo="Pensão Alimentícia Atrasada? Resolva Agora em Aracaju"
      subtitulo="Especialista há 24 anos. Atendimento humanizado. Garanta os direitos de quem você ama."
      servico="Pensão Alimentícia"
      mensagemWhatsApp="Olá Dra. Flávia! Vim do seu site sobre *pensão alimentícia* e preciso de orientação urgente."
      doresconsulta={[
        'Sem receber pensão há meses?',
        'Preocupada com o sustento dos seus filhos?',
        'Sem saber por onde começar?'
      ]}
      perguntasFrequentes={[
        {
          pergunta: 'Quanto custa para executar pensão alimentícia atrasada?',
          resposta: 'Os valores variam de acordo com a complexidade do caso e sua situação financeira. A consulta inicial é de R$ 250 e nela eu já te passo um orçamento detalhado. Trabalho com parcelamento facilitado.'
        },
        {
          pergunta: 'Quanto tempo demora para receber a pensão atrasada?',
          resposta: 'Depende de cada caso, mas processos de execução de alimentos têm prioridade legal. Em média, conseguimos resultados em 2-6 meses. Na consulta, avalio seu caso especificamente e te dou um prazo mais preciso.'
        },
        {
          pergunta: 'Posso pedir pensão de meses ou anos anteriores?',
          resposta: 'Sim! Você pode cobrar pensões atrasadas. O prazo de prescrição é de 2 anos a partir do vencimento de cada parcela. Quanto antes agirmos, melhor. Vamos conversar sobre seu caso?'
        },
        {
          pergunta: 'Você aceita parcelamento nos honorários?',
          resposta: 'Sim! Entendo que muitas vezes a situação financeira está difícil justamente pela falta da pensão. Trabalho com parcelamento facilitado para que você consiga garantir seus direitos.'
        }
      ]}
      ctaFinal="Não Espere Mais. Seus Filhos Merecem Esse Direito."
    />
  );
}
