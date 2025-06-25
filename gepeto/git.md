# Git

## Submódulos

Os submódulos do Git permitem que você inclua um repositório Git dentro de outro. Eles são úteis para compartilhar componentes comuns entre vários projetos (como a pasta `.settings` no seu caso). Aqui está um resumo de como eles funcionam, incluindo as operações de `pull` e `push`:

### 1. **Adicionando um Submódulo:**

Quando você adiciona um submódulo em um projeto:

```bash
git submodule add <URL-DO-SUBMODULO> <CAMINHO/NO/PROJETO>
```

Isso cria um diretório com o conteúdo do submódulo e adiciona um arquivo `.gitmodules`, que contém a URL do submódulo e seu caminho.

### 2. **Como o Git Armazena o Submódulo:**

O submódulo é tratado como um "commit fixo" dentro do repositório principal. Quando você clona o projeto principal, ele conhece a versão específica do submódulo que deve ser utilizada.

### 3. **Atualizando um Submódulo:**

Para atualizar o submódulo para a última versão do repositório associado, você usa:

```bash
git submodule update --remote --merge
```

Isso busca as últimas alterações no submódulo.

### 4. **Operações de `pull` e `push`:**

- **No Repositório Principal:** As operações de `pull` e `push` funcionam normalmente. Entretanto, se você fizer `pull` no repositório principal e o submódulo tiver mudanças, será necessário atualizar o submódulo manualmente:

  ```bash
  git submodule update --init --recursive
  ```

- **No Submódulo:**

  - **Pull:** Navegue até o diretório do submódulo e faça o `pull`:

    ```bash
    cd <CAMINHO/DO/SUBMODULO>
    git pull origin <branch>
    ```

  - **Push:** Se você fizer mudanças no submódulo, é necessário fazer o `push` dentro do diretório do submódulo:

    ```bash
    cd <CAMINHO/DO/SUBMODULO>
    git add .
    git commit -m "Atualização no submódulo"
    git push origin <branch>
    ```

### 5. **Atualizando o Submódulo no Repositório Principal:**

Depois de atualizar ou alterar o submódulo, você deve fazer commit no repositório principal para registrar a nova referência do submódulo:

```bash
git add <CAMINHO/DO/SUBMODULO>
git commit -m "Atualizando referência do submódulo"
git push origin <branch>
```

### 6. **Clonando um Repositório com Submódulos:**

Quando você clona um repositório que possui submódulos, use:

```bash
git clone --recurse-submodules <URL-DO-REPOSITORIO>
```

Isso garante que todos os submódulos sejam clonados e inicializados corretamente.

### Resumo:

- **Push e Pull do Submódulo** são feitos dentro do diretório do submódulo.
- **Atualizações do Submódulo** no repositório principal precisam ser comitadas e enviadas para refletir as mudanças na referência do submódulo.
- **Clonagem e Inicialização** devem incluir o parâmetro `--recurse-submodules` para garantir que todos os submódulos sejam corretamente baixados.

Esse gerenciamento centralizado ajuda a garantir que as versões certas dos submódulos estejam sempre em uso.

---

## Renomear Módulo

Para renomear um branch no Git, você pode seguir os passos abaixo, dependendo se você quer renomear um branch local ou remoto (ou ambos).

### 1. **Renomear um Branch Local:**

Se você está atualmente no branch que deseja renomear, use o comando:

```bash
git branch -m novo-nome
```

Caso você queira renomear um branch que **não** está ativo, use:

```bash
git branch -m nome-antigo novo-nome
```

### 2. **Renomear o Branch no Repositório Remoto:**

Depois de renomear o branch local, você precisa atualizar o branch remoto. Os passos são os seguintes:

- **Excluir o branch antigo no repositório remoto:**

  ```bash
  git push origin --delete nome-antigo
  ```

- **Enviar o branch renomeado para o repositório remoto:**

  ```bash
  git push origin novo-nome
  ```

- **Definir o branch local para rastrear o novo branch remoto:**
  Se você deseja que o branch renomeado rastreie o remoto com o mesmo nome:

  ```bash
  git branch --set-upstream-to=origin/novo-nome
  ```

### 3. **Verificar se o Branch Foi Renomeado Corretamente:**

Após renomear e enviar o novo branch, você pode verificar se ele foi renomeado corretamente com os comandos:

```bash
git branch -a  # Para ver todos os branches, locais e remotos
```

### Resumo dos Passos:

1. **Renomear o branch localmente**:

   ```bash
   git branch -m nome-antigo novo-nome
   ```

2. **Excluir o branch remoto antigo**:

   ```bash
   git push origin --delete nome-antigo
   ```

3. **Enviar o branch renomeado para o remoto**:

   ```bash
   git push origin novo-nome
   ```

4. **Configurar o novo branch para rastrear o branch remoto**:

   ```bash
   git branch --set-upstream-to=origin/novo-nome
   ```

Seguindo esses passos, seu branch será renomeado local e remotamente, mantendo a sincronização com o repositório remoto.

---

## Adicionar Submódulo

Se você **clonou um projeto com submódulos**, mas **esqueceu de usar `--recurse-submodules`**, não tem problema — você pode inicializar e clonar os submódulos manualmente depois.

---

### ✅ Passos para corrigir isso:

1. **Inicializar os submódulos:**

   ```bash
   git submodule init
   ```

2. **Atualizar os submódulos (clonar o conteúdo):**

   ```bash
   git submodule update
   ```

---

### 💡 Ou faça tudo de uma vez:

Se preferir um comando direto:

```bash
git submodule update --init --recursive
```

> O `--recursive` garante que submódulos **dentro de submódulos** (caso existam) também sejam inicializados.

---

### 🔄 Para manter os submódulos atualizados:

Quando o repositório principal é atualizado e o submódulo aponta para um novo commit:

```bash
git submodule update --remote --merge
```

---

### 📦 Resumo rápido:

| Ação                           | Comando                                   |
| ------------------------------ | ----------------------------------------- |
| Inicializar submódulos         | `git submodule init`                      |
| Clonar conteúdo dos submódulos | `git submodule update`                    |
| Tudo de uma vez                | `git submodule update --init --recursive` |
| Atualizar para última versão   | `git submodule update --remote --merge`   |

Vamos criar um **alias Git** para que você possa rodar um comando curto como `git setup-submodules` e ele execute todo o processo de inicialização e atualização dos submódulos de forma automática.

### ✅ Como criar um alias para configurar submódulos

Execute no terminal:

```bash
git config --global alias.setup-submodules '!git submodule update --init --recursive'
```

---

### 🧪 Agora, você pode simplesmente rodar:

```bash
git setup-submodules
```

E ele fará o mesmo que:

```bash
git submodule update --init --recursive
```

---

### 💡 Extra: Alias para atualizar os submódulos remotos

Se quiser um alias para buscar as **últimas versões dos submódulos** (como `git submodule update --remote --merge`):

```bash
git config --global alias.update-submodules '!git submodule update --remote --merge'
```

Agora você pode usar:

```bash
git update-submodules
```

---

Se quiser ver todos os aliases que você criou:

```bash
git config --global --get-regexp alias
```

Quer que eu te ajude a colocar isso no `.gitconfig` diretamente também?
