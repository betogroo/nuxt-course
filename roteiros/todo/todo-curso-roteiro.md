# 📚 Roteiro de Aulas - Todo App com Vue 3 + TypeScript + Nuxt 4

## ✅ Parte 1 - Todo Básico

### 1. Criar Página e Link

- Criar nova página `pages/todo.vue`
- Adicionar link no menu de navegação

### 2. Criar Composable com Lista

- `use-todo.ts`: Criar array reativo de tarefas
- Demonstrar ausência de autocomplete no VSCode

### 3. Criar Type

- Criar interface `List`
- Definir `const list = ref<List>()` → **Erro:** ref não aceita array diretamente
- Corrigir: `const list = ref<List[]>([])`
- Adicionar um item à lista
  - Mostrar o autocomplete do TypeScript
  - Mostrar erros de tipagem (ex: `name` faltando)
  - Atalho: `Ctrl + Shift + Seta para baixo`

### 4. Criar `<v-list>`

- Passar o mouse sobre `list` para mostrar o tipo
- Explicar como `v-for` percorre os itens
- Renderizar apenas `item.name`

#### Estrutura do `<v-list>`

- Iniciar com `v-for`
- Adicionar `title`, `prepend-icon` e ação `@click`
- Adicionar índice e retorno
- Criar função `toggleCheck` no composable
- Condicionar ícone ao `item.checked`
- Condicionar cor e estilo (riscar texto)
- Adicionar `ripple`
- Refatorar para usar `item.id` como `:key`

### 5. Computed Properties

- Criar `checkedList` e `uncheckedList`
- Substituir `list` por `uncheckedList` na renderização
- Mostrar:
  - Uso de `return`
  - Refatorar para arrow sem `return`
- Justificar criação de componente pela repetição

## ✅ Parte 2 - Componentização

### 6. Criar Componente `<TodoList>`

- Explicar organização `components/`
- Criar componente vazio e importar na página
- Mover `v-list` para o componente
- Mostrar erros de variáveis não encontradas

#### Corrigir o Componente

- Criar `prop: list` do tipo `List[]`
- Passar função `toggleCheck` como `prop`
  - Mostrar erro: componente não pode alterar prop diretamente
- Criar `emit('toggle')` com `id`
- Criar `prop: title` (obrigatória)
  - Mostrar erro se não for fornecida
- Adicionar `v-if="list.length"` para render condicional

### 7. Adicionar Nova Tarefa

- Alterar tipo de `id` para `crypto.randomUUID()`
- Criar formulário com `v-text-field` e botão
- Envolver com `v-container`

#### Função para Adicionar Tarefa

- Mostrar `console.log` ao submeter
- Finalizar com `.push()` ou `.unshift()`
- Explicar: os dados somem ao recarregar

### 8. Persistência com `useStorage`

- Instalar `@vueuse/core`
- Aplicar `useStorage` no lugar do `ref`
- Adicionar valor default manual
- Explicar reatividade

### 9. Apagar Todos os Itens

- Criar botão com confirmação
- Pode ser um componente separado

## 🛠️ Bug Fix - Hydration

- Mostrar erro de hydration
- Explicar o motivo: `useStorage` acessando localStorage no SSR
- Solução: `initOnMounted: true`

## 🧼 Refatoração Final

### 10. Melhorias no Componente `<TodoList>`

- Exibir mensagem “Sem itens” se lista estiver vazia
- Encapsular botão de exclusão
- Refatorar formulário de adicionar tarefa

## 🧪 Desafios

### 11. Counter

- Usar `useStorage`
- Alterar `maxEntries`
  - Criar lógica na própria página
  - Separar depois em composable
  - Mostrar "animação visual" da separação entre lógica e UI

### 12. Todo Avançado

- Adicionar botão "Selecionar Todos / Nenhum"
- Apagar tarefa específica
  - Botão no `append-icon`
  - Mostrar problema de `@click` duplo
  - Solução: `@click.stop`
  - Criar `emit` para remover
  - Implementar função no composable

## ✅ Status

> **Tópicos finalizados**  
> Provavelmente distribuído em **duas aulas**
