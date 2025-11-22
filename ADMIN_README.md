# Sistema de Administração - Ligon Resort Spa

## Como Acessar o Sistema Admin

### Passo 1: Acesso Inicial
1. Abra o arquivo `admin-login.html` no navegador
2. Digite a senha: `ligon@@2025`
3. Clique em "Acessar"

### Passo 2: Login no Admin
1. Após a senha inicial, você será redirecionado para a tela de login
2. Use as credenciais padrão:
   - **Usuário:** `admin`
   - **Senha:** `admin123`

## Funcionalidades Disponíveis

### 1. Dashboard
- Visualização geral do sistema
- Estatísticas de produtos, serviços e vendas
- Receita total
- Atividades recentes

### 2. Gerenciamento de Produtos
- **Visualizar** todos os produtos cadastrados
- **Cadastrar** novos produtos com:
  - Nome, preço, estoque
  - Categoria (Corporal, Facial, Aromaterapia, Cabelo)
  - Descrição completa
  - Múltiplas imagens
  - URL de vídeo (opcional)
  - Marcar como destaque
- **Editar** produtos existentes
- **Excluir** produtos

### 3. Gerenciamento de Serviços
- **Visualizar** todos os serviços cadastrados
- **Cadastrar** novos serviços com:
  - Nome, preço, duração
  - Categoria (Massagens, Faciais, Corporais, Relaxamento, Estética)
  - Descrição completa
  - Múltiplas imagens
  - URL de vídeo (opcional)
- **Editar** serviços existentes
- **Excluir** serviços

### 4. Lançamento de Vendas
- Registrar vendas de produtos ou serviços
- Vendas mistas (produto + serviço)
- Atualização automática de estoque
- Registro de cliente e data

### 5. Relatórios
- **Relatório Financeiro:**
  - Lucro Bruto
  - Lucro Líquido
  - Receita Total
  - Valor do Estoque
- **Relatório de Estoque:**
  - Lista todos os produtos
  - Estoque atual
  - Valor total por produto
  - Status (Normal, Estoque Baixo, Sem Estoque)
- **Relatório de Vendas:**
  - Filtros por período (Hoje, Semana, Mês, Ano)
  - Detalhes de cada venda
- **Vendas por Categoria:**
  - Quantidade de vendas de produtos
  - Quantidade de vendas de serviços
  - Quantidade de vendas mistas

## Integração com o Site

Os produtos e serviços cadastrados no admin aparecem automaticamente nas páginas:
- `produtos.html` - Catálogo de produtos
- `procedimentos-catalogo.html` - Catálogo de serviços/procedimentos

Os dados são armazenados no `localStorage` do navegador e são carregados automaticamente quando as páginas são abertas.

## Estrutura de Arquivos

```
admin-login.html          - Tela inicial de senha
admin-auth.html           - Tela de login/senha
admin-dashboard.html      - Dashboard principal
admin-produtos.html       - Gerenciamento de produtos
admin-servicos.html       - Gerenciamento de serviços
admin-vendas.html         - Lançamento de vendas
admin-relatorios.html     - Relatórios
admin.css                 - Estilos do admin
admin.js                  - Funções utilitárias
```

## Notas Importantes

1. **Armazenamento:** Todos os dados são armazenados no `localStorage` do navegador. Para produção, recomenda-se migrar para um banco de dados real.

2. **Segurança:** As senhas são armazenadas em texto simples no `localStorage`. Para produção, implemente criptografia adequada.

3. **Imagens:** As imagens são convertidas para Base64 e armazenadas no `localStorage`. Para muitos produtos/serviços, isso pode causar lentidão. Considere usar um serviço de armazenamento de imagens.

4. **Backup:** Faça backup regular dos dados do `localStorage` exportando o JSON.

## Próximos Passos (Sugestões)

- Implementar sistema de backup/restore
- Adicionar mais filtros nos relatórios
- Implementar gráficos visuais
- Sistema de múltiplos usuários
- Histórico de alterações
- Exportação de relatórios em PDF/Excel

