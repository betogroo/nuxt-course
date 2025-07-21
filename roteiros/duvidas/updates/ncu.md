# Npm Check Updates - NCU

## 📦 O que o `ncu` faz?

Ele analisa o seu `package.json` e te mostra:

* As versões **atuais instaladas**
* As versões **declaradas no `package.json`**
* As versões **mais recentes disponíveis no repositório npm**
* E, se você quiser, **atualiza automaticamente o `package.json`**

> Ele **não executa o `npm install` automaticamente**, apenas atualiza o arquivo `package.json`.

---

## 🔧 Como instalar?

Você pode instalar globalmente:

```bash
npm install -g npm-check-updates
```

Ou apenas usar via `npx` (sem instalar globalmente):

```bash
npx npm-check-updates
```

---

## 🔍 Comandos mais úteis

### 1. Verificar atualizações disponíveis

```bash
ncu
```

Exemplo de saída:

```
 @nuxt/eslint    ^1.5.2  →  ^1.6.0
 nuxt            ^4.0.0  →  ^4.0.1
 vue             ^3.5.17 →  ^3.5.20
```

---

### 2. Atualizar as versões no `package.json`

```bash
ncu -u
```

> Isso **atualiza o `package.json`**, mas não instala as dependências.
> Depois disso, execute:

```bash
npm install
```

---

### 3. Verificar apenas `devDependencies`

```bash
ncu --dep dev
```

---

### 4. Verificar dependências com versão fixa (`4.0.0` em vez de `^4.0.0`)

```bash
ncu --removeRange
```

> Converte `"nuxt": "^4.0.0"` em `"nuxt": "4.0.1"` (sem `^`) após atualizar.

---

### 5. Ignorar determinados pacotes

```bash
ncu --reject vue,nuxt
```

---

### 6. Ver o changelog antes de atualizar

```bash
ncu --interactive
```

> Abre uma interface interativa no terminal para você escolher o que atualizar.

---
### 7 Interatividade e Grupos

```bash
ncu -i --format group
```

> Abre uma interface interativa no terminal para você escolher o que atualizar, divididos entre as categorias de atualizações (patch, minor, etc)

---

## 💡 Por que usar o `ncu`?

* 📌 Evita atualizações manuais linha por linha
* 🛡️ Útil para manter dependências atualizadas com segurança
* 🔍 Excelente para visualizar rapidamente o que está desatualizado
* 🧪 Ideal para usar com uma branch de atualização: `chore/update-dependencies`

---

## ⚠️ Cuidados

* Ele **não testa nada**, só atualiza os números no `package.json`.
* Atualizações **maiores** (ex: de `^3.0.0` para `^4.0.0`) **podem quebrar seu código** — verifique changelogs e use com cautela.
* Sempre faça isso **em uma branch separada** e com backup do projeto (Git).

---