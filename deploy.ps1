# Script de Deploy para GitHub Pages
# Execute este script no PowerShell

Write-Host "🚀 Iniciando deploy para GitHub Pages..." -ForegroundColor Green

# Verificar se o Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✅ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git não encontrado. Por favor, instale o Git primeiro." -ForegroundColor Red
    exit 1
}

# Verificar se já é um repositório Git
if (-not (Test-Path ".git")) {
    Write-Host "📦 Inicializando repositório Git..." -ForegroundColor Yellow
    git init
}

# Verificar se o remote já existe
$remoteExists = git remote | Select-String -Pattern "origin"
if (-not $remoteExists) {
    Write-Host "🔗 Adicionando repositório remoto..." -ForegroundColor Yellow
    git remote add origin https://github.com/jrmarquex/Ligon.git
} else {
    Write-Host "✅ Remote 'origin' já configurado" -ForegroundColor Green
}

# Adicionar todos os arquivos
Write-Host "📝 Adicionando arquivos ao staging..." -ForegroundColor Yellow
git add .

# Verificar se há mudanças para commitar
$status = git status --porcelain
if ($status) {
    Write-Host "💾 Fazendo commit..." -ForegroundColor Yellow
    git commit -m "Deploy: Site Ligon Resort Spa - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    
    # Renomear branch para main se necessário
    $currentBranch = git branch --show-current
    if ($currentBranch -ne "main") {
        Write-Host "🔄 Renomeando branch para 'main'..." -ForegroundColor Yellow
        git branch -M main
    }
    
    Write-Host "⬆️  Enviando para GitHub..." -ForegroundColor Yellow
    git push -u origin main
    
    Write-Host "✅ Deploy concluído com sucesso!" -ForegroundColor Green
    Write-Host "🌐 O site estará disponível em: https://jrmarquex.github.io/Ligon/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "⚠️  Não esqueça de configurar o GitHub Pages:" -ForegroundColor Yellow
    Write-Host "   1. Acesse: https://github.com/jrmarquex/Ligon/settings/pages" -ForegroundColor White
    Write-Host "   2. Selecione Branch: main, Folder: / (root)" -ForegroundColor White
    Write-Host "   3. Clique em Save" -ForegroundColor White
} else {
    Write-Host "ℹ️  Nenhuma mudança para commitar." -ForegroundColor Blue
}

Write-Host ""
Write-Host "✨ Pronto!" -ForegroundColor Green

