# 📋 Estrutura do Painel Admin - Ligon Resort Spa

## 🗂️ Arquivos do Sistema Admin

### 🔐 Autenticação
1. **`admin-login.html`** - Tela inicial de senha
   - URL: `/admin-login.html`
   - Senha: `ligon@@2025`
   - Função: Primeira camada de segurança

2. **`admin-auth.html`** - Tela de login com usuário/senha
   - URL: `/admin-auth.html`
   - Credenciais:
     - Usuário: `admin`
     - Senha: `admin123`
   - Função: Autenticação completa do administrador

### 📊 Páginas Principais
3. **`admin-dashboard.html`** - Dashboard principal
   - URL: `/admin-dashboard.html`
   - Função: Visão geral com estatísticas, receita, produtos, serviços e vendas

4. **`admin-produtos.html`** - Gerenciamento de Produtos
   - URL: `/admin-produtos.html`
   - Função: CRUD completo de produtos (criar, editar, excluir, visualizar)

5. **`admin-servicos.html`** - Gerenciamento de Serviços
   - URL: `/admin-servicos.html`
   - Função: CRUD completo de serviços/procedimentos

6. **`admin-vendas.html`** - Lançamento de Vendas
   - URL: `/admin-vendas.html`
   - Função: Registrar vendas de produtos e serviços

7. **`admin-relatorios.html`** - Relatórios
   - URL: `/admin-relatorios.html`
   - Função: Relatórios financeiros, estoque e vendas

### 🎨 Arquivos de Estilo e Scripts
8. **`admin.css`** - Estilos do painel administrativo
   - URL: `/admin.css`

9. **`admin.js`** - Funções utilitárias do admin
   - URL: `/admin.js`

## 🔄 Fluxo de Acesso

```
1. admin-login.html (senha: ligon@@2025)
   ↓
2. admin-auth.html (usuário: admin, senha: admin123)
   ↓
3. admin-dashboard.html
   ↓
   ├─→ admin-produtos.html
   ├─→ admin-servicos.html
   ├─→ admin-vendas.html
   └─→ admin-relatorios.html
```

## 📍 Caminhos Absolutos (Local)

**Windows (XAMPP):**
- `C:\xampp\htdocs\ligon_1\admin-login.html`
- `C:\xampp\htdocs\ligon_1\admin-auth.html`
- `C:\xampp\htdocs\ligon_1\admin-dashboard.html`
- `C:\xampp\htdocs\ligon_1\admin-produtos.html`
- `C:\xampp\htdocs\ligon_1\admin-servicos.html`
- `C:\xampp\htdocs\ligon_1\admin-vendas.html`
- `C:\xampp\htdocs\ligon_1\admin-relatorios.html`

**URLs Locais (http://localhost):**
- `http://localhost/ligon_1/admin-login.html`
- `http://localhost/ligon_1/admin-auth.html`
- `http://localhost/ligon_1/admin-dashboard.html`
- `http://localhost/ligon_1/admin-produtos.html`
- `http://localhost/ligon_1/admin-servicos.html`
- `http://localhost/ligon_1/admin-vendas.html`
- `http://localhost/ligon_1/admin-relatorios.html`

## 🔑 Credenciais de Acesso

### Primeira Camada
- **Arquivo:** `admin-login.html`
- **Senha:** `ligon@@2025`

### Segunda Camada
- **Arquivo:** `admin-auth.html`
- **Usuário:** `admin`
- **Senha:** `admin123`

## 💾 Armazenamento de Dados

- **localStorage:** Produtos, serviços, vendas, usuários
- **sessionStorage:** Autenticação e sessão do usuário

### Chaves do localStorage:
- `ligon_produtos` - Array de produtos
- `ligon_servicos` - Array de serviços
- `ligon_vendas` - Array de vendas
- `admin_users` - Array de usuários admin

### Chaves do sessionStorage:
- `admin_pre_auth` - Flag de pré-autenticação
- `admin_authenticated` - Flag de autenticação
- `admin_user` - Dados do usuário logado

## 🔗 Integração com Site Público

Os dados cadastrados no admin aparecem automaticamente em:
- `procedimentos-catalogo.html` - Carrega serviços do admin
- `produtos.html` - Carrega produtos do admin
- `procedimento-detalhes.html` - Detalhes dos serviços do admin
- `produto-detalhes.html` - Detalhes dos produtos do admin

## 📝 Funcionalidades Disponíveis

### Dashboard
- ✅ Estatísticas gerais
- ✅ Receita total
- ✅ Contagem de produtos e serviços
- ✅ Atividades recentes

### Produtos
- ✅ Listar produtos
- ✅ Cadastrar novo produto
- ✅ Editar produto existente
- ✅ Excluir produto
- ✅ Upload de múltiplas imagens
- ✅ Categorias: Corporal, Facial, Aromaterapia, Cabelo
- ✅ Marcar como destaque

### Serviços
- ✅ Listar serviços
- ✅ Cadastrar novo serviço
- ✅ Editar serviço existente
- ✅ Excluir serviço
- ✅ Upload de múltiplas imagens
- ✅ Categorias: Massagens, Faciais, Corporais, Relaxamento, Estética

### Vendas
- ✅ Registrar venda de produto
- ✅ Registrar venda de serviço
- ✅ Vendas mistas (produto + serviço)
- ✅ Atualização automática de estoque

### Relatórios
- ✅ Relatório Financeiro (Lucro Bruto, Líquido, Receita, Estoque)
- ✅ Relatório de Estoque (Status: Normal, Baixo, Sem Estoque)
- ✅ Relatório de Vendas (Filtros: Hoje, Semana, Mês, Ano)
- ✅ Vendas por Categoria

## 🚀 Próximos Passos para Melhorias

Agora que temos a estrutura completa, podemos:
1. ✅ Melhorar a interface do dashboard
2. ✅ Adicionar novas funcionalidades
3. ✅ Implementar melhorias de UX/UI
4. ✅ Adicionar novos relatórios
5. ✅ Melhorar segurança
6. ✅ Adicionar exportação de dados

---

**Última atualização:** 2025-01-23
**Status:** Sistema funcional e pronto para melhorias

