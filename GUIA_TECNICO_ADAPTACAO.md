# 🔧 GUIA TÉCNICO - Adaptação do Site

## 📁 ESTRUTURA DE ARQUIVOS

### Arquivos que precisam ser adaptados:

```
ligon_1/
├── Ligon Resort Spa.html    # Arquivo HTML principal
├── styles.css                   # Estilos CSS customizados
├── scripts.js                   # JavaScript customizado
└── [outros arquivos de assets]
```

---

## 🔄 ALTERAÇÕES NECESSÁRIAS NO CÓDIGO

### 1. ARQUIVO HTML (`Ligon Resort Spa.html`)

#### 1.1. Meta Tags (linhas 7-36)
```html
<!-- ALTERAR: -->
<meta name="csrf-token" content="[NOVO_TOKEN]">
<meta name="app-url" content="//[NOVO_DOMINIO]/">
<meta name="file-base-url" content="//[NOVO_DOMINIO]/public/">
<title>[NOVO_NOME] | [NOVO_NOME]</title>
<meta name="description" content="[NOVA_DESCRICAO]">
<meta name="keywords" content="[NOVAS_PALAVRAS_CHAVE]">
```

#### 1.2. Open Graph e Social Media (linhas 21-36)
```html
<!-- ALTERAR: -->
<meta itemprop="name" content="[NOVO_NOME]">
<meta itemprop="image" content="[NOVA_IMAGEM_OG]">
<meta property="og:title" content="[NOVO_TITULO]">
<meta property="og:url" content="https://[NOVO_DOMINIO]">
<meta property="og:image" content="[NOVA_IMAGEM_OG]">
<meta property="og:site_name" content="[NOVO_NOME]">
```

#### 1.3. Favicon e Ícones (linhas 37-38)
```html
<!-- ALTERAR: -->
<link rel="icon" href="[NOVO_FAVICON]">
<link rel="apple-touch-icon" href="[NOVO_APPLE_ICON]">
```

#### 1.4. Google Maps API Key (linha 6)
```html
<!-- ALTERAR: -->
<script src="https://maps.googleapis.com/maps/api/js?key=[NOVA_API_KEY]&libraries=places"></script>
```

#### 1.5. URLs de Recursos Externos (linhas 50-55)
```html
<!-- ALTERAR se o backend estiver em domínio diferente: -->
<link rel="stylesheet" href="https://[NOVO_DOMINIO]/public/assets/css/vendors.css">
<link rel="stylesheet" href="https://[NOVO_DOMINIO]/public/assets/css/aiz-core.css?v=5625">
<!-- ... etc -->
```

#### 1.6. Logo e Nome da Empresa (linha ~204)
```html
<!-- ALTERAR: -->
<a href="https://[NOVO_DOMINIO]" class="logo-holder">
    <img src="[NOVO_LOGO]" alt="[NOVO_NOME]">
</a>
```

#### 1.7. Links de Navegação
- [ ] Menu principal (linhas ~215-557)
- [ ] Links de unidades (se aplicável)
- [ ] Links de serviços/tratamentos
- [ ] Links de redes sociais
- [ ] Links de contato

#### 1.8. Informações de Contato
- [ ] Telefone (várias ocorrências)
- [ ] WhatsApp
- [ ] E-mail
- [ ] Endereço

---

### 2. ARQUIVO CSS (`styles.css`)

#### 2.1. Cores Principais (linhas 113-136)
```css
/* ALTERAR: */
:root{
    --primary: #6B7B15;           /* Cor primária */
    --hov-primary: #93dc23;      /* Cor hover */
    --secondary-base: #6B7B15;    /* Cor secundária */
    /* ... outras cores */
}
```

#### 2.2. Cores de Botões
- [ ] Botão WhatsApp (linha ~276): `background-color: #01d14c;`
- [ ] Botão telefone (linha ~308): `background-color: #00d058;`
- [ ] Botão flutuante (linha ~239): `background-color: #007bff;`

---

### 3. ARQUIVO JAVASCRIPT (`scripts.js`)

#### 3.1. URLs da API (múltiplas ocorrências)
```javascript
// ALTERAR todas as ocorrências de:
'https://eliaspa.com.br/...'

// Para:
'https://[NOVO_DOMINIO]/...'
```

**Endpoints que precisam ser alterados:**
- `/idioma` (linha ~2284)
- `/moeda` (linha ~2298)
- `/busca-ajax` (linha ~2322)
- `/carrinho/remover-do-carrinho` (linha ~2349)
- `/comparar/adicionar` (linha ~2371)
- `/carrinho/exibir-modal-carrinho` (linha ~2389)
- `/produto/preco-variante` (linha ~2407)
- `/carrinho/adicionar-ao-carrinho` (linha ~2459)
- `/carrinho/adicionar-ao-carrinho-combo` (linha ~2489)
- `/getlocation` (linha ~2373, 2418, 2868)
- `/salvar-localizacao` (linha ~2740)
- `/notificacao-nao-linkavel/lida` (linha ~2580)
- `/carrinho/atualizar-quantidade` (linha ~2647)
- `/carrinho/atualizar-status-do-carrinho` (linha ~2679)

#### 3.2. Coordenadas GPS Padrão (linhas ~2795-2798)
```javascript
// ALTERAR:
default_longitude = -47.89310574531555;
default_latitude = -15.798231005191505;
var lat = -33.8688;
var lng = 151.2195;
```

#### 3.3. Array de Unidades (linha ~2354)
```javascript
// ALTERAR com as novas unidades:
const unidades = [
    {
        "delivery_pickup_longitude": [LONGITUDE],
        "delivery_pickup_latitude": [LATITUDE],
        "slug": "[slug-unidade]",
        "user": null
    },
    // ... mais unidades
];
```

#### 3.4. Token CSRF (linha ~2744)
```javascript
// ALTERAR:
'X-CSRF-TOKEN': 'YPTvty0xPvZxgxESxFfxa34gOQeL0mbx9uKMyHKY'
// Para o novo token
```

#### 3.5. Google Maps API Key (se necessário)
- Verificar se há outras referências à API key do Google Maps

---

## 🔍 BUSCA E SUBSTITUIÇÃO EM MASSA

### Comandos para substituição rápida (usar com cuidado):

#### 1. Substituir domínio em todos os arquivos:
```
Buscar: eliaspa.com.br
Substituir: [NOVO_DOMINIO]
```

#### 2. Substituir nome da empresa:
```
Buscar: Ligon Resort Spa
Substituir: [NOVO_NOME]
```

#### 3. Substituir URLs de imagens:
```
Buscar: https://eliaspa.com.br/public/uploads/
Substituir: https://[NOVO_DOMINIO]/public/uploads/
```

---

## 📋 CHECKLIST DE ALTERAÇÕES TÉCNICAS

### HTML
- [ ] Meta tags (title, description, keywords)
- [ ] Open Graph tags
- [ ] Favicon e ícones
- [ ] Logo principal
- [ ] Links de navegação
- [ ] Informações de contato
- [ ] Links de redes sociais
- [ ] URLs de recursos (CSS, JS externos)
- [ ] Google Maps API Key

### CSS
- [ ] Cores principais (variáveis CSS)
- [ ] Cores de botões
- [ ] Imagens de fundo (se houver)
- [ ] Fontes (se quiser alterar)

### JavaScript
- [ ] Todas as URLs da API (backend)
- [ ] Coordenadas GPS padrão
- [ ] Array de unidades
- [ ] Token CSRF
- [ ] Google Maps API Key (se necessário)
- [ ] Mensagens de texto (se quiser traduzir)

### Backend (se tiver acesso)
- [ ] Configuração de domínio
- [ ] Banco de dados (produtos, unidades, etc.)
- [ ] Configurações de API
- [ ] Upload de imagens/logos
- [ ] Configurações de e-mail
- [ ] Integrações de pagamento

---

## 🗂️ ESTRUTURA DE PASTAS RECOMENDADA

Após adaptação, a estrutura deve ser:

```
projeto-cliente/
├── index.html (ou nome apropriado)
├── styles.css
├── scripts.js
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   ├── banners/
│   │   └── servicos/
│   └── fonts/ (se houver fontes customizadas)
└── README.md (documentação)
```

---

## 🔐 SEGURANÇA

### Itens a verificar:
- [ ] Remover API keys expostas (se houver)
- [ ] Validar tokens CSRF
- [ ] Verificar permissões de arquivos
- [ ] Validar inputs de formulários
- [ ] Verificar HTTPS (se aplicável)

---

## 🧪 TESTES NECESSÁRIOS

Após adaptação, testar:
- [ ] Todas as páginas carregam corretamente
- [ ] Imagens aparecem
- [ ] Links funcionam
- [ ] Formulários enviam dados
- [ ] Busca funciona
- [ ] Carrinho funciona (se aplicável)
- [ ] Localização/Mapas funciona
- [ ] Responsividade (mobile, tablet, desktop)
- [ ] Compatibilidade de navegadores
- [ ] Performance (velocidade de carregamento)

---

## 📞 SUPORTE

Se precisar de ajuda durante a adaptação:
1. Verificar console do navegador (F12) para erros
2. Verificar Network tab para requisições falhando
3. Verificar se todas as URLs estão corretas
4. Verificar se o backend está respondendo

---

**Última atualização:** [Data]  
**Versão:** 1.0

