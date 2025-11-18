# 🎯 PLANO DE AÇÃO - SITE DRA. FLÁVIA ARGOLO
## Roadmap Executivo Pós-Análise 360°

**Data:** 18/11/2025  
**Score Atual:** 92/100 ⭐⭐⭐⭐⭐  
**Status:** Pronto para deploy com ajustes  

---

## 🚨 PRIORIDADE P0 (BLOCKER) - ANTES DE DEPLOY

### 🔴 TAREFA #1: Conectar Supabase
**Tempo:** 1-2 horas  
**Impacto:** CRÍTICO  
**Responsável:** Desenvolvedor

**Checklist:**
- [ ] Criar projeto em supabase.com
- [ ] Criar tabela `leads_chatbot`:
  ```sql
  CREATE TABLE leads_chatbot (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    nome TEXT,
    contato TEXT,
    servico_interesse TEXT,
    urgencia TEXT DEFAULT 'NORMAL',
    mensagem_completa TEXT,
    qualified_score INTEGER,
    status TEXT DEFAULT 'novo',
    conversation_json JSONB
  );
  
  CREATE INDEX idx_leads_created_at ON leads_chatbot(created_at DESC);
  CREATE INDEX idx_leads_status ON leads_chatbot(status);
  ```
- [ ] Configurar RLS (Row Level Security)
- [ ] Pegar credenciais (URL + keys)
- [ ] Adicionar em `.env.local`:
  ```
  NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
  SUPABASE_SERVICE_KEY=eyJxxx...
  ```
- [ ] Descomentar código em `app/api/leads/route.ts`
- [ ] Testar inserção de lead
- [ ] Verificar no Supabase se salvou

**Resultado Esperado:**
✅ Leads salvos no banco  
✅ Dashboard Supabase mostrando dados  

---

### 🔴 TAREFA #2: Otimizar Imagens
**Tempo:** 30 minutos  
**Impacto:** ALTO (Performance)  
**Responsável:** Desenvolvedor

**Checklist:**
- [ ] Editar `next.config.js`:
  ```javascript
  // REMOVER:
  images: {
    unoptimized: true,
  },
  
  // ADICIONAR:
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  ```
- [ ] Converter imagens para WebP:
  ```bash
  # Instalar sharp-cli se necessário
  npm install -g sharp-cli
  
  # Converter imagens
  sharp -i public/images/01.png -o public/images/01.webp --webp
  sharp -i public/images/02.png -o public/images/02.webp --webp
  sharp -i public/images/03.png -o public/images/03.webp --webp
  ```
- [ ] Atualizar imports nos componentes
- [ ] Testar build: `npm run build`
- [ ] Verificar tamanho das imagens

**Resultado Esperado:**
✅ Lighthouse Performance 90+  
✅ Carregamento 2-3x mais rápido  

---

## ⚠️ PRIORIDADE P1 (IMPORTANTE) - PRIMEIRA SEMANA

### 🟡 TAREFA #3: Configurar Google Analytics
**Tempo:** 1 hora  
**Impacto:** ALTO (Métricas)  
**Responsável:** Marketing/Dev

**Checklist:**
- [ ] Criar conta GA4 em analytics.google.com
- [ ] Criar propriedade "Site Dra. Flávia Argolo"
- [ ] Pegar ID (G-XXXXXXXXXX)
- [ ] Adicionar em `.env.local`:
  ```
  NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
  ```
- [ ] Criar `app/GoogleAnalytics.tsx`:
  ```typescript
  'use client';
  import Script from 'next/script';
  
  export default function GoogleAnalytics({ gaId }: { gaId: string }) {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
      </>
    );
  }
  ```
- [ ] Adicionar em `app/layout.tsx`
- [ ] Configurar eventos customizados:
  - Click WhatsApp
  - Chatbot aberto
  - Lead qualificado
- [ ] Testar com Google Tag Assistant

**Resultado Esperado:**
✅ Dados de tráfego em tempo real  
✅ Conversões rastreadas  

---

### 🟡 TAREFA #4: Adicionar Menu Mobile
**Tempo:** 2 horas  
**Impacto:** MÉDIO (UX)  
**Responsável:** Desenvolvedor

**Checklist:**
- [ ] Criar `components/MobileMenu.tsx`
- [ ] Adicionar hamburger icon (Lucide React)
- [ ] Implementar com Framer Motion
- [ ] Adicionar overlay com backdrop-blur
- [ ] Links estilizados
- [ ] Adicionar em `Header.tsx`
- [ ] Testar em mobile real

**Resultado Esperado:**
✅ Navegação fácil em mobile  
✅ Animações suaves  

---

### 🟡 TAREFA #5: Deploy Staging
**Tempo:** 1 hora  
**Impacto:** ALTO  
**Responsável:** Desenvolvedor

**Checklist:**
- [ ] Push código para GitHub
- [ ] Conectar repositório no Vercel
- [ ] Configurar variáveis de ambiente:
  ```
  GEMINI_API_KEY=...
  NEXT_PUBLIC_SUPABASE_URL=...
  NEXT_PUBLIC_SUPABASE_ANON_KEY=...
  SUPABASE_SERVICE_KEY=...
  NEXT_PUBLIC_GA_ID=...
  ```
- [ ] Deploy automático
- [ ] Testar site em staging
- [ ] Verificar todos fluxos

**Resultado Esperado:**
✅ Site online em domínio teste  
✅ Todos fluxos funcionando  

---

## 💚 PRIORIDADE P2 (NICE TO HAVE) - SEGUNDA SEMANA

### 🟢 TAREFA #6: Dashboard de Leads
**Tempo:** 8 horas  
**Impacto:** ALTO  
**Responsável:** Desenvolvedor

**Checklist:**
- [ ] Criar rota `/admin/leads`
- [ ] Autenticação simples (Supabase Auth)
- [ ] Listar todos leads (tabela)
- [ ] Filtros (data, urgência, serviço, status)
- [ ] Detalhes de cada conversa (modal)
- [ ] Ações:
  - Marcar como contatado
  - Adicionar notas
  - Enviar para "arquivo"
- [ ] Métricas dashboard:
  - Leads hoje
  - Taxa de qualificação
  - Serviços mais procurados
- [ ] Exportar CSV

**Resultado Esperado:**
✅ Organização total de leads  
✅ Follow-up eficiente  

---

### 🟢 TAREFA #7: Notificações em Tempo Real
**Tempo:** 4-6 horas  
**Impacto:** ALTO  
**Responsável:** Desenvolvedor

**Checklist:**
- [ ] Integrar WhatsApp Business API (ou Twilio)
- [ ] Criar endpoint `/api/notify`
- [ ] Quando lead qualificado:
  - [ ] Enviar WhatsApp para Dra. Flávia
  - [ ] Enviar email com detalhes
  - [ ] (Opcional) Notificação browser
- [ ] Configurar Resend/SendGrid
- [ ] Templates de mensagem
- [ ] Testar notificações

**Resultado Esperado:**
✅ Resposta imediata a leads  
✅ Aumento de conversão  

---

### 🟢 TAREFA #8: Meta Pixel & Ads
**Tempo:** 1 hora  
**Impacto:** ALTO (se fizer ads)  
**Responsável:** Marketing/Dev

**Checklist:**
- [ ] Criar Business Manager Facebook
- [ ] Criar Pixel
- [ ] Adicionar código no layout
- [ ] Configurar eventos:
  - PageView
  - ViewContent (LPs)
  - InitiateCheckout (click WA)
  - Lead (conversa qualificada)
- [ ] Verificar com Facebook Pixel Helper
- [ ] Criar audiências:
  - Visitantes do site
  - Leads qualificados
  - Clicou em WhatsApp

**Resultado Esperado:**
✅ Retargeting configurado  
✅ Otimização de campanhas  

---

### 🟢 TAREFA #9: Blog/Artigos SEO
**Tempo:** 4 horas (estrutura) + conteúdo contínuo  
**Impacto:** ALTO (longo prazo)  
**Responsável:** Marketing + Dev

**Checklist:**
- [ ] Criar estrutura de blog:
  - [ ] Rota `/blog`
  - [ ] Rota `/blog/[slug]`
  - [ ] Usar MDX para artigos
- [ ] Design de post (leitura fácil)
- [ ] Artigos prioritários:
  1. "Como calcular pensão alimentícia em Sergipe"
  2. "Divórcio consensual vs litigioso"
  3. "Quanto tempo demora um inventário?"
  4. "Guarda compartilhada: como funciona"
  5. "Revisão de pensão: quando pedir?"
- [ ] Schema.org markup (Article)
- [ ] Social sharing buttons
- [ ] SEO otimizado (palavras-chave)

**Resultado Esperado:**
✅ Tráfego orgânico gratuito  
✅ Autoridade no assunto  

---

## 🔵 PRIORIDADE P3 (FUTURO) - BACKLOG

### Tarefas para Futuro:
- Sistema de agendamento (Calendly)
- Testes automatizados
- PWA (Progressive Web App)
- Chatbot multilíngue
- Área do cliente
- Calculadora de pensão (estimativa)
- Vídeos explicativos
- Depoimentos em vídeo
- Chat ao vivo (Intercom/Drift)

---

## 📅 CRONOGRAMA SUGERIDO

### **Semana 1** (Pré-Deploy)
- Dia 1-2: P0 (Supabase + Imagens)
- Dia 3: P1 (Analytics + Menu Mobile)
- Dia 4: Deploy Staging
- Dia 5: Testes e ajustes

### **Semana 2** (Pós-Deploy)
- Dia 1-3: Dashboard de Leads
- Dia 4-5: Notificações

### **Semana 3+** (Otimização)
- Meta Pixel
- Blog
- Melhorias contínuas

---

## 🎯 METAS DE SUCESSO

### **Técnicas:**
- [ ] Lighthouse Performance 90+
- [ ] Lighthouse SEO 95+
- [ ] Zero erros no console
- [ ] 100% uptime

### **Negócio:**
- [ ] 50+ leads/mês
- [ ] Taxa conversão 10%+
- [ ] Tempo resposta <2h
- [ ] ROI positivo em ads

---

## 📊 KPIs PARA ACOMPANHAR

### **Semanais:**
- Leads qualificados
- Taxa de conversão chat
- Cliques em WhatsApp
- Tempo médio no site

### **Mensais:**
- Novos clientes
- ROI em ads
- Tráfego orgânico
- Posição no Google

---

**Documento gerado por:** Bruno Sena  
**Última atualização:** 18/11/2025  
**Versão:** 1.0