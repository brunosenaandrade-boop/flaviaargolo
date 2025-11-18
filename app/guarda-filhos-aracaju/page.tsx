import { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Guarda de Filhos - Dra. Flávia Argolo',
  description: 'Guarda e regulamentação de visitas em Aracaju. Proteja o direito de convivência de seus filhos.'
};

export default function GuardaFilhosPage() {
  return (
    <LandingPageTemplate
      titulo="Guarda de Filhos: Proteja o Direito de Convivência"
      subtitulo="Cada Criança Merece o Amor de Ambos os Pais. Vamos Garantir Isso Juntos."
      mensagemWhatsApp="Olá Dra. Flávia! Vim do seu site sobre *guarda de filhos* e preciso de ajuda. Meu nome é: "
      servico="Guarda de Filhos"
      doresconsulta={[
        "Tem dúvidas sobre guarda compartilhada ou exclusiva?",
        "Quer regulamentar as visitas?",
        "Precisa mudar a decisão de guarda já existente?"
      ]}
      perguntasFrequentes={[
        {
          pergunta: "Qual a diferença entre guarda compartilhada e exclusiva?",
          resposta: "Guarda exclusiva: um pai tem direito de guarda e o outro tem direito de visita. Compartilhada: ambos têm direitos iguais de guarda. O juiz decide baseado no que é melhor para a criança."
        },
        {
          pergunta: "Como é regulamentada a visita?",
          resposta: "Pode ser conforme acordo entre as partes ou decisão judicial. Geralmente é períodos alternados: um fim de semana por mês para o pai, alterando feriados, férias, etc."
        },
        {
          pergunta: "Quanto custa um processo de guarda?",
          resposta: "Valores variam conforme complexidade. A consulta inicial é R$ 250. Faço orçamento detalhado e ofereço parcelamento facilitado."
        },
        {
          pergunta: "O que influencia a decisão judicial sobre guarda?",
          resposta: "O juiz considera: melhor interesse da criança, capacidade de cada pai, relacionamento com os filhos, ambiente familiar, escola, saúde. Sempre priorizando o bem-estar da criança."
        }
      ]}
      ctaFinal="Proteja o Direito de Convivência de Seus Filhos"
    />
  );
}
