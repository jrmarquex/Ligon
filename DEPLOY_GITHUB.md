# 🚀 Guia de Deploy para GitHub Pages

## Passo a Passo para Publicar o Site

### 1. Verificar se o Git está instalado
```bash
git --version
```

### 2. Inicializar o repositório Git (se ainda não foi feito)
```bash
cd c:\xampp\htdocs\ligon_1
git init
```

### 3. Adicionar o repositório remoto do GitHub
```bash
git remote add origin https://github.com/jrmarquex/Ligon.git
```

### 4. Verificar arquivos que serão commitados
```bash
git status
```

### 5. Adicionar todos os arquivos ao staging
```bash
git add .
```

### 6. Fazer o primeiro commit
```bash
git commit -m "Initial commit: Site Ligon Resort Spa completo"
```

### 7. Renomear branch para main (se necessário)
```bash
git branch -M main
```

### 8. Fazer push para o GitHub
```bash
git push -u origin main
```

**Nota:** Se pedir credenciais, use um Personal Access Token do GitHub.

## 🔧 Configurar GitHub Pages

1. Acesse: https://github.com/jrmarquex/Ligon
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **Save**

## ✅ Verificar Deploy

Após alguns minutos, o site estará disponível em:
**https://jrmarquex.github.io/Ligon/**

## 📝 Comandos Úteis para Atualizações Futuras

```bash
# Verificar status
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push origin main
```

## ⚠️ Importante

- O arquivo `index.html` é a página principal do GitHub Pages
- Certifique-se de que todos os caminhos de imagens e arquivos estão relativos
- O sistema admin usa localStorage, então os dados são locais ao navegador
- Para produção, considere migrar para um banco de dados real

## 🔒 Segurança

**NÃO** faça commit de:
- Arquivos com senhas reais
- Tokens de API
- Dados sensíveis

Os arquivos `senhas.txt` e `rotas.txt` podem ser mantidos como referência, mas considere removê-los antes do deploy final.

