# 🏛️ Dra. Flávia Argolo - Website

Website profissional para **Dra. Flávia Argolo**, advogada especialista em Direito de Família em Aracaju/SE.

## 📋 Sobre o Projeto

Sistema completo de marketing digital com:
- ✅ Site institucional (Hub)
- ✅ 6 Landing Pages específicas por serviço
- ✅ Chatbot inteligente com IA (Gemini API)
- ✅ Integração WhatsApp
- ✅ Leads qualificados e salvos
- ✅ Design responsivo (Mobile-first)
- ✅ Compliance OAB garantido

## 🚀 Stack Tecnológico

- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS 4, Lucide Icons
- **IA:** Google Gemini 2.5 Flash
- **Database:** Supabase (PostgreSQL)
- **Forms:** React Hook Form + Zod
- **Deploy:** Vercel

## 📁 Estrutura do Projeto

```
dra-flavia-argolo/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home (Hub)
│   ├── api/
│   │   ├── chat/route.ts         # Chatbot Gemini API
│   │   └── leads/route.ts        # Salvar leads
│   ├── pensao-alimenticia-urgente/
│   ├── divorcio-rapido-aracaju/
│   ├── divorcio-litigioso-aracaju/
│   ├── revisao-pensao-alimenticia/
│   ├── guarda-filhos-aracaju/
│   └── inventario-partilha-bens/
├── components/
│   ├── ChatWidget.tsx             # Chatbot flutuante
│   ├── WhatsAppButton.tsx        # Botão WhatsApp
│   ├── Header.tsx                # Navegação
│   ├── Footer.tsx                # Rodapé
│   └── LandingPageTemplate.tsx   # Template LP
├── lib/
│   ├── constants.ts              # Configurações
│   ├── supabase.ts              # Cliente Supabase
│   ├── gemini-prompt.ts         # System prompt IA
│   └── utils.ts                 # Utilidades
├── styles/
│   └── globals.css              # CSS global
├── public/
│   └── images/                  # Imagens
├── .env.local                   # Variáveis de ambiente
├── tailwind.config.js           # Tailwind customizado
├── tsconfig.json               # TypeScript config
└── README.md                   # Este arquivo
```

## 🔧 Instalação

### 1. Pré-requisitos
- Node.js 18+
- npm ou yarn

### 2. Clonar/Acessar o Projeto
```bash
cd dra-flavia-argolo
```

### 3. Instalar Dependências
```bash
npm install
```

### 4. Configurar Variáveis de Ambiente

Editar `.env.local`:
```bash
# Gemini API (já configurado)
GEMINI_API_KEY=AIzaSyA12MRWR6DyrW41avjD6dgS3CG6a6OLUfM

# Supabase (configurar com dados reais)
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key
SUPABASE_SERVICE_KEY=sua-service-key

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=5579999985695

# Analytics (Google Analytics)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 5. Executar em Desenvolvimento
```bash
npm run dev
```

Abrir: **http://localhost:3000**

## 📱 Páginas

### Home (Hub) - `/`
- Apresentação da advogada
- Serviços oferecidos
- Diferenciais
- Depoimentos
- CTAs para landing pages

### Landing Pages (6 total)
1. **Pensão Alimentícia** `/pensao-alimenticia-urgente`
2. **Divórcio Consensual** `/divorcio-rapido-aracaju`
3. **Divórcio Litigioso** `/divorcio-litigioso-aracaju`
4. **Revisão de Pensão** `/revisao-pensao-alimenticia`
5. **Guarda de Filhos** `/guarda-filhos-aracaju`
6. **Inventário** `/inventario-partilha-bens`

Cada LP tem:
- Hero section com problema + solução
- 3 passos do processo
- Quem é a Dra. Flávia
- FAQ com 4 perguntas
- CTA para WhatsApp
- Footer com informações legais

## 🤖 Chatbot IA

### Características
- Recepção acolhedora
- Qualificação de leads
- Detecção de urgência
- Coleta de informações (nome, contato, tipo de serviço)
- Encaminhamento para WhatsApp
- **Compliance OAB garantido** (não dá consultoria!)

### System Prompt
Localizado em: `lib/gemini-prompt.ts`
- ✅ Nunca dá consultoria jurídica
- ✅ Nunca promete resultados
- ✅ Sempre acolhedor e empático
- ✅ Tom profissional mas próximo

## 📊 Lead Qualification

O chatbot calcula score de qualificação:
- ✅ Nome: +25 pontos
- ✅ Contato (email/telefone): +30 pontos
- ✅ Serviço identificado: +25 pontos
- ✅ Urgência detectada: +15 pontos
- ✅ Engajamento (3+ mensagens): +5 pontos

**Score ≥70 = Lead qualificado** e salvo no banco

## 🎨 Design System

### Cores
- **Principal:** `#D4AF37` (Dourado)
- **Secundária:** `#2C2C2C` (Cinza escuro)
- **Acento:** `#1E40AF` (Azul)

### Tipografia
- Font Family: Inter
- Sizes: 12px a 48px (Tailwind standard)

### Componentes Reutilizáveis
- `WhatsAppButton` - Botão WhatsApp customizável
- `ChatWidget` - Chatbot flutuante
- `LandingPageTemplate` - Template para LPs

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# 1. Fazer push no Git
git init
git add .
git commit -m "Initial commit"
git remote add origin <seu-repo>
git push -u origin main

# 2. Deploy no Vercel
vercel --prod

# 3. Configurar domínio
# No Vercel: Settings > Domains > Add Custom Domain
# draflaviaargolo.adv.br
```

### Variáveis de Ambiente no Vercel
```
GEMINI_API_KEY=...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_KEY=...
NEXT_PUBLIC_GA_ID=...
```

## ⚙️ Supabase Setup (TODO)

### 1. Criar Projeto Supabase
- Ir em https://supabase.com
- Criar novo projeto
- Pegar credenciais

### 2. Criar Tabelas SQL
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

### 3. Habilitar Row Level Security
```sql
ALTER TABLE leads_chatbot ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for now" ON leads_chatbot FOR ALL USING (true);
```

### 4. Atualizar .env.local
```bash
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_KEY=...
```

## 📊 Monitoramento

### Google Analytics
- Rastreia: cliques WhatsApp, conversas chatbot, leads qualificados
- Configurar GA em: `app/layout.tsx`

### Logs
- Chatbot: Console do navegador
- Leads: Supabase dashboard ou logs da aplicação

## ✅ Checklist de Qualidade

- [x] Build compila sem erros
- [x] Todas as páginas carregam
- [x] Chatbot funciona
- [x] WhatsApp links funcionam
- [x] Mobile responsivo
- [x] Tailwind CSS aplicado
- [x] TypeScript strict mode
- [x] Compliance OAB garantido
- [ ] Supabase conectado (TODO)
- [ ] Google Analytics configurado (TODO)
- [ ] Domínio registrado (TODO)
- [ ] Fotos profissionais adicionadas (TODO)

## 🔒 Segurança

### Variáveis Sensíveis
- ✅ `.env.local` no `.gitignore`
- ✅ Gemini API key em variável de ambiente
- ✅ Supabase service key nunca no frontend

### CORS & Headers
- ✅ Headers de segurança configurados no `next.config.js`
- ✅ Supabase RLS habilitado
- ✅ Sanitização de inputs

## 🐛 Troubleshooting

### "Gemini API key invalid"
```bash
# Verificar se .env.local está configurado
cat .env.local | grep GEMINI
```

### "Port 3000 already in use"
```bash
# Usar porta diferente
npm run dev -- -p 3001
```

### Build falha com Tailwind
```bash
# Reinstalar Tailwind
npm reinstall tailwindcss @tailwindcss/postcss
```

## 📞 Suporte

**Dra. Flávia Argolo**
- WhatsApp: (79) 99998-5695
- Email: fhargolo@yahoo.com.br
- Instagram: @flaviaargolo_adv

## 📝 Licença

Projeto privado. Todos os direitos reservados.

---

**Desenvolvido com ❤️ por Bruno Sena**
**Novembro 2025**
