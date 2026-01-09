# 🧪 Guia de Testes - Sistema de Agenda

## 🚀 Como Testar o Sistema

### 1️⃣ Acessar o Sistema

**Opção 1: Via Admin Dashboard**
1. Abra `admin-login.html` no navegador
2. Digite a senha: `ligon@@2025`
3. Faça login com: `admin` / `admin123`
4. No dashboard, clique em "Acessar Agenda"

**Opção 2: Acesso Direto**
1. Abra diretamente: `agenda-login.html`
2. Selecione o perfil desejado
3. Use as credenciais abaixo

---

## 📋 Credenciais de Teste

### Time Comercial
- **Perfil:** Time Comercial
- **Usuário:** `comercial`
- **Senha:** `123456`

### Recepção
- **Perfil:** Recepção
- **Recepcionista:** Recepcionista 1
- **Usuário:** `recepcionista1`
- **Senha:** `123456`

- **Perfil:** Recepção
- **Recepcionista:** Recepcionista 2
- **Usuário:** `recepcionista2`
- **Senha:** `123456`

### Profissional
- **Perfil:** Profissional
- **Profissional:** Profissional 1
- **Usuário:** `prof1`
- **Senha:** `123456`

- **Perfil:** Profissional
- **Profissional:** Profissional 2
- **Usuário:** `prof2`
- **Senha:** `123456`

- **Perfil:** Profissional
- **Profissional:** Profissional 3
- **Usuário:** `prof3`
- **Senha:** `123456`

### Gerencial
- **Perfil:** Gerencial
- **Usuário:** `gerente`
- **Senha:** `123456`

---

## ✅ Checklist de Testes

### 🔵 TESTE 1: Time Comercial - Criar Agendamento

1. **Acesse:** `agenda-login.html`
2. **Selecione:** Perfil "Time Comercial"
3. **Login:** `comercial` / `123456`
4. **Preencha o formulário:**
   - Nome da Cliente: `Maria Silva`
   - Telefone: `(11) 99999-9999`
   - Profissional: Selecione qualquer um
   - Data: Escolha uma data futura (ex: amanhã)
   - Horário: Selecione qualquer horário (ex: 14:30)
   - Procedimento: Selecione um serviço cadastrado
   - Forma de Pagamento: PIX
   - Marque "Já foi pago" (opcional)
   - Observações: `Cliente preferencial`
5. **Clique em:** "Salvar Agendamento"
6. **✅ Resultado esperado:** Mensagem de sucesso e formulário limpo

**Criar mais 2-3 agendamentos** para diferentes profissionais e horários para testar a visualização.

---

### 🟢 TESTE 2: Recepção - Visualizar Agenda

1. **Acesse:** `agenda-login.html`
2. **Selecione:** Perfil "Recepção" → Recepcionista 1
3. **Login:** `recepcionista1` / `123456`
4. **Verifique:**
   - ✅ Agenda aparece em formato de tabela
   - ✅ Colunas = Nomes dos profissionais
   - ✅ Linhas = Horários (10h às 20h)
   - ✅ Agendamentos criados aparecem nas células corretas
   - ✅ Cores diferentes para status

**Teste de Navegação:**
- ✅ Clique em "←" para voltar um dia
- ✅ Clique em "→" para avançar um dia
- ✅ Clique em "Hoje" para voltar ao dia atual

---

### 🟡 TESTE 3: Recepção - Dar Baixa (Compareceu)

1. **Na agenda da recepção, clique em um agendamento**
2. **Modal abre com informações:**
   - ✅ Nome da cliente
   - ✅ Profissional
   - ✅ Procedimento
   - ✅ Horário
   - ✅ Status de pagamento
3. **Clique em:** "Dar Baixa (Compareceu)"
4. **✅ Resultado esperado:**
   - Mensagem de sucesso
   - Modal fecha
   - Agendamento muda de cor (azul escuro = concluído)
   - Badge "Compareceu" aparece

---

### 💰 TESTE 4: Recepção - Marcar como Pago

1. **Crie um agendamento SEM marcar "já foi pago"** (pelo comercial)
2. **Na recepção, clique no agendamento**
3. **Clique em:** "Marcar como Pago"
4. **✅ Resultado esperado:**
   - Mensagem de sucesso
   - Status muda para "Pago" (verde)
   - Badge "Pago" aparece

---

### 🔄 TESTE 5: Recepção - Reagendar

1. **Na recepção, clique em um agendamento**
2. **Clique em:** "Reagendar"
3. **Digite:** Nova data (ex: amanhã)
4. **Digite:** Novo horário (ex: 16:00)
5. **✅ Resultado esperado:**
   - Mensagem de sucesso
   - No dia original: agendamento fica AMARELO (reagendado)
   - No novo dia: agendamento aparece VERDE (novo agendamento)
   - Ambos mantêm as informações da cliente

---

### 👩‍⚕️ TESTE 6: Recepção - Alterar Profissional

1. **Na recepção, clique em um agendamento**
2. **Clique em:** "Alterar Profissional"
3. **Escolha:** Um número (1, 2 ou 3)
4. **✅ Resultado esperado:**
   - Mensagem de sucesso
   - Agendamento move para a coluna do novo profissional
   - Mantém mesmo horário e data

---

### ❌ TESTE 7: Recepção - Cancelar Agendamento

1. **Na recepção, clique em um agendamento**
2. **Clique em:** "Cancelar Agendamento"
3. **Confirme:** "OK" no alert
4. **✅ Resultado esperado:**
   - Mensagem de sucesso
   - Agendamento fica VERMELHO
   - Opacidade reduzida (cancelado)

---

### 👨‍⚕️ TESTE 8: Profissional - Visualizar Própria Agenda

1. **Acesse:** `agenda-login.html`
2. **Selecione:** Perfil "Profissional" → Profissional 1
3. **Login:** `prof1` / `123456`
4. **Verifique:**
   - ✅ Apenas agendamentos do Profissional 1 aparecem
   - ✅ Tabela simples com: Horário, Cliente, Procedimento, Status, Ações
   - ✅ Navegação entre dias funciona

---

### 🔄 TESTE 9: Profissional - Reagendar

1. **Na agenda do profissional, clique em "Ações" em um agendamento**
2. **Clique em:** "Reagendar"
3. **Digite:** Nova data e horário
4. **✅ Resultado esperado:**
   - Mesmo comportamento da recepção
   - Agendamento original fica amarelo
   - Novo agendamento aparece verde

---

### 🚫 TESTE 10: Profissional - Desmarcar

1. **Na agenda do profissional, clique em "Ações"**
2. **Clique em:** "Desmarcar"
3. **Confirme:** Cancelamento
4. **✅ Resultado esperado:**
   - Agendamento fica vermelho (cancelado)
   - Não aparece mais na lista do profissional

---

### 👔 TESTE 11: Gerencial - Visão Geral

1. **Acesse:** `agenda-login.html`
2. **Selecione:** Perfil "Gerencial"
3. **Login:** `gerente` / `123456`
4. **Verifique:**
   - ✅ Estatísticas no topo:
     - Total de Agendamentos
     - Concluídos
     - Pendentes
     - Cancelados
   - ✅ Agenda completa (todas as profissionais)
   - ✅ Cores corretas para cada status
   - ✅ Navegação entre dias funciona

---

### 📱 TESTE 12: Responsividade Mobile

1. **Abra qualquer página da agenda no navegador**
2. **Pressione F12** (DevTools)
3. **Ative o modo mobile** (Ctrl+Shift+M)
4. **Teste em diferentes tamanhos:**
   - ✅ Tabela tem scroll horizontal
   - ✅ Botões são clicáveis
   - ✅ Modal abre corretamente
   - ✅ Navegação funciona
   - ✅ Texto legível

---

## 🐛 Testes de Validação

### Validação de Formulário (Comercial)
- ✅ Tentar salvar sem preencher campos obrigatórios
- ✅ Resultado: Campos destacados em vermelho, não salva

### Validação de Data
- ✅ Tentar criar agendamento com data passada
- ✅ Resultado: Campo de data não aceita datas passadas

### Validação de Horário
- ✅ Verificar se horários são apenas 10h-20h
- ✅ Resultado: Apenas horários válidos disponíveis

### Validação de Login
- ✅ Tentar login com credenciais erradas
- ✅ Resultado: Mensagem de erro

---

## 📊 Cenário Completo de Teste

### Fluxo End-to-End:

1. **Comercial cria 3 agendamentos:**
   - Cliente A → Profissional 1 → 14:00 (hoje)
   - Cliente B → Profissional 2 → 15:30 (hoje)
   - Cliente C → Profissional 1 → 16:00 (amanhã)

2. **Recepção visualiza agenda de hoje:**
   - ✅ Vê Cliente A e Cliente B
   - ✅ Não vê Cliente C (é amanhã)

3. **Recepção dá baixa em Cliente A:**
   - ✅ Fica verde/azul escuro

4. **Recepção marca Cliente B como pago:**
   - ✅ Badge "Pago" aparece

5. **Recepção reagenda Cliente B:**
   - ✅ Original fica amarelo
   - ✅ Novo aparece verde no novo horário

6. **Profissional 1 visualiza sua agenda:**
   - ✅ Vê Cliente A (concluído)
   - ✅ Vê Cliente C (amanhã)
   - ✅ Não vê Cliente B (é do Profissional 2)

7. **Gerencial visualiza:**
   - ✅ Vê todos os agendamentos
   - ✅ Estatísticas atualizadas

---

## 🔍 Dicas de Teste

1. **Use o Console do Navegador (F12):**
   - Verifique se há erros JavaScript
   - Veja os dados no localStorage

2. **Teste em diferentes navegadores:**
   - Chrome
   - Firefox
   - Edge
   - Mobile (Chrome Mobile)

3. **Teste com dados reais:**
   - Crie serviços no admin primeiro
   - Crie vários agendamentos
   - Teste diferentes cenários

4. **Limpar dados (se necessário):**
   ```javascript
   // No console do navegador:
   localStorage.removeItem('ligon_agendamentos');
   // Recarregue a página
   ```

---

## ✅ Checklist Final

- [ ] Login funciona para todos os perfis
- [ ] Comercial consegue criar agendamentos
- [ ] Recepção visualiza agenda corretamente
- [ ] Recepção consegue dar baixa
- [ ] Recepção consegue marcar como pago
- [ ] Reagendamento funciona (amarelo/verde)
- [ ] Cancelamento funciona (vermelho)
- [ ] Alterar profissional funciona
- [ ] Profissional vê apenas sua agenda
- [ ] Profissional consegue reagendar/desmarcar
- [ ] Gerencial vê tudo e estatísticas
- [ ] Cores estão corretas
- [ ] Mobile funciona
- [ ] Navegação entre dias funciona
- [ ] Validações funcionam

---

**Boa sorte com os testes! 🚀**

Se encontrar algum problema, anote e me avise para corrigirmos.

