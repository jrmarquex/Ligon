# 📋 CHECKLIST - Informações Necessárias para Adaptação do Site

## 🎯 INFORMAÇÕES BÁSICAS DO NEGÓCIO

### 1. Dados da Empresa/SPA/Resort
- [ ] **Nome completo do estabelecimento**
- [ ] **Nome curto/abreviação** (para usar em títulos)
- [ ] **Slogan ou frase de impacto**
- [ ] **CNPJ** (se aplicável)
- [ ] **Descrição do negócio** (2-3 parágrafos)
- [ ] **História/Missão/Visão** (opcional, mas recomendado)

### 2. Contatos
- [ ] **Telefone principal** (com DDD)
- [ ] **WhatsApp** (número completo)
- [ ] **E-mail comercial**
- [ ] **E-mail de suporte**
- [ ] **Endereço completo** (rua, número, bairro, cidade, estado, CEP)
- [ ] **Coordenadas GPS** (latitude e longitude) - para Google Maps

### 3. Redes Sociais
- [ ] **Facebook** (URL completa)
- [ ] **Instagram** (@usuario)
- [ ] **Twitter/X** (se tiver)
- [ ] **LinkedIn** (se tiver)
- [ ] **YouTube** (se tiver)
- [ ] **TikTok** (se tiver)

---

## 🖼️ CONTEÚDO VISUAL

### 4. Logos e Identidade Visual
- [ ] **Logo principal** (formato PNG/SVG, fundo transparente)
- [ ] **Logo para favicon** (16x16 ou 32x32 pixels, formato ICO/PNG)
- [ ] **Logo para Apple Touch Icon** (180x180 pixels)
- [ ] **Imagem para Open Graph** (1200x630 pixels) - para compartilhamento em redes sociais
- [ ] **Paleta de cores** (códigos hexadecimais):
  - [ ] Cor primária
  - [ ] Cor secundária
  - [ ] Cor de destaque/hover
  - [ ] Cores complementares (se houver)

### 5. Imagens do Estabelecimento
- [ ] **Fotos do ambiente interno** (mínimo 5-10 fotos em alta qualidade)
- [ ] **Fotos do ambiente externo** (se aplicável)
- [ ] **Fotos de tratamentos/serviços** (se tiver)
- [ ] **Banner principal** (para hero section - recomendado: 1920x1080px)
- [ ] **Imagens de fundo** (se necessário)
- [ ] **Ícone de loading** (gif animado, se quiser personalizado)

---

## 🏢 INFORMAÇÕES DE LOCALIZAÇÃO

### 6. Unidades/Locações
Se o spa/resort tiver múltiplas unidades, para cada uma:
- [ ] **Nome da unidade**
- [ ] **Endereço completo**
- [ ] **Telefone específico**
- [ ] **Coordenadas GPS** (latitude e longitude)
- [ ] **Slug/identificador único** (ex: "centro", "zona-sul", etc.)
- [ ] **Horário de funcionamento**
- [ ] **Fotos da unidade**

**Exemplo de formato:**
```
Unidade 1:
- Nome: "SPA Centro"
- Endereço: "Rua Exemplo, 123, Centro, São Paulo - SP, 01234-567"
- Telefone: "(11) 1234-5678"
- Latitude: -23.5505
- Longitude: -46.6333
- Slug: "centro"
```

---

## 💆 SERVIÇOS/TRATAMENTOS

### 7. Catálogo de Serviços
Para cada serviço/tratamento oferecido:
- [ ] **Nome do serviço**
- [ ] **Categoria** (ex: Massagem, Facial, Corporal, Ritual, etc.)
- [ ] **Descrição detalhada**
- [ ] **Duração** (em minutos)
- [ ] **Preço** (ou faixa de preço)
- [ ] **Imagem do serviço** (se tiver)
- [ ] **Slug/URL amigável** (ex: "massagem-relaxante")

**Formato sugerido (planilha Excel ou Google Sheets):**
| Nome | Categoria | Descrição | Duração | Preço | Imagem | Slug |
|------|-----------|-----------|---------|-------|--------|------|
| Massagem Relaxante | Massagem | Descrição... | 60 min | R$ 150 | foto.jpg | massagem-relaxante |

---

## 🌐 CONFIGURAÇÕES TÉCNICAS

### 8. Domínio e Hospedagem
- [ ] **Domínio** (ex: www.spacliente.com.br)
- [ ] **URL base do site** (se já estiver configurado)
- [ ] **URL do backend/API** (se for diferente do frontend)
- [ ] **Informações de acesso ao servidor** (FTP, SSH, etc.) - se necessário

### 9. Integrações
- [ ] **Google Maps API Key** (se quiser usar Google Maps próprio)
- [ ] **Google Analytics ID** (se quiser rastreamento)
- [ ] **Google Tag Manager ID** (se usar)
- [ ] **Facebook Pixel ID** (se usar para anúncios)
- [ ] **WhatsApp Business API** (se tiver integração avançada)

### 10. Sistema de Pagamento (se aplicável)
- [ ] **Gateway de pagamento** (Mercado Pago, PagSeguro, Stripe, etc.)
- [ ] **Chaves de API** (se já tiver configurado)
- [ ] **Formas de pagamento aceitas** (cartão, PIX, boleto, etc.)

---

## 📝 CONTEÚDO TEXTUAL

### 11. Textos do Site
- [ ] **Texto da página inicial** (hero section)
- [ ] **Sobre nós** (página ou seção)
- [ ] **Política de privacidade** (se necessário)
- [ ] **Termos de uso** (se necessário)
- [ ] **Política de cancelamento** (para agendamentos)
- [ ] **FAQ** (Perguntas Frequentes) - se quiser incluir

### 12. SEO e Metadados
- [ ] **Palavras-chave principais** (para SEO)
- [ ] **Meta description** (descrição para buscadores)
- [ ] **Título da página** (para SEO)

---

## 🔧 CONFIGURAÇÕES ESPECÍFICAS DO BACKEND

### 13. URLs e Endpoints da API
Se o backend já estiver configurado, precisamos das URLs:
- [ ] **URL base da API** (ex: https://api.spacliente.com.br)
- [ ] **Endpoint de busca** (ex: /busca-ajax)
- [ ] **Endpoint de carrinho** (ex: /carrinho/adicionar-ao-carrinho)
- [ ] **Endpoint de localização** (ex: /getlocation)
- [ ] **Endpoint de unidades** (ex: /unidades)
- [ ] **Endpoint de produtos/serviços** (ex: /experiencia)
- [ ] **Token CSRF** (se necessário)

### 14. Autenticação e Segurança
- [ ] **Sistema de login** (se os clientes precisarem fazer login)
- [ ] **Sistema de cadastro** (se necessário)
- [ ] **Recuperação de senha** (se aplicável)

---

## 📱 FUNCIONALIDADES ESPECÍFICAS

### 15. Funcionalidades Desejadas
Marque quais funcionalidades a cliente quer manter/adaptar:
- [ ] **Sistema de agendamento online**
- [ ] **Carrinho de compras** (se vender produtos)
- [ ] **Sistema de localização de unidades**
- [ ] **Busca de serviços**
- [ ] **Sistema de comparação** (comparar serviços)
- [ ] **Lista de desejos/favoritos**
- [ ] **Sistema de cupons/descontos**
- [ ] **Blog/Notícias**
- [ ] **Galeria de fotos**
- [ ] **Depoimentos/Avaliações**
- [ ] **Chat online**
- [ ] **Formulário de contato**

---

## 🎨 PREFERÊNCIAS DE DESIGN

### 16. Estilo e Aparência
- [ ] **Estilo preferido** (moderno, clássico, minimalista, luxuoso, etc.)
- [ ] **Referências de sites** (links de sites que a cliente gosta)
- [ ] **Elementos que devem ser mantidos** (do site atual)
- [ ] **Elementos que devem ser removidos**
- [ ] **Elementos que devem ser adicionados**

---

## 📊 INFORMAÇÕES ADICIONAIS

### 17. Dados Complementares
- [ ] **Horário de funcionamento geral**
- [ ] **Idiomas** (se o site será multilíngue)
- [ ] **Moeda** (se aceitar outras moedas além de Real)
- [ ] **Certificações/Selos** (se tiver certificações que quer exibir)
- [ ] **Parceiros** (se quiser exibir logos de parceiros)
- [ ] **Prêmios/Reconhecimentos** (se tiver)

---

## ✅ CHECKLIST DE ENTREGA

### Arquivos que você deve enviar:
- [ ] Todos os arquivos HTML, CSS e JS do projeto atual
- [ ] Banco de dados (se houver) - backup SQL
- [ ] Documentação do backend (se houver)
- [ ] Credenciais de acesso (domínio, servidor, etc.)
- [ ] Informações preenchidas neste checklist

---

## 📌 OBSERVAÇÕES IMPORTANTES

1. **Todas as imagens devem estar em alta qualidade** (mínimo 1920px de largura para banners)
2. **Textos devem ser revisados** antes de enviar
3. **URLs e links** devem ser verificados
4. **Informações de contato** devem estar atualizadas
5. **Se houver sistema de backend**, é importante ter acesso ou documentação completa

---

## 🚀 PRÓXIMOS PASSOS

Após coletar todas essas informações:
1. Organizar os arquivos em pastas
2. Criar documentação técnica
3. Preparar ambiente de desenvolvimento
4. Iniciar adaptação mantendo estrutura atual

---

**Data de criação:** [Data atual]  
**Responsável:** [Seu nome]  
**Cliente:** [Nome da cliente]

