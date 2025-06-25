
# 🎬 Roteiro de Aulas com Cenas - Todo App com Vue 3 + TypeScript + Nuxt 4

## ✅ Parte 1 - Todo Básico

### 1. Criar Página e Link

**Cena 1:**  
📺 Criar arquivo `pages/todo.vue`  
🗣️ "Vamos começar criando uma nova página chamada `todo.vue`, onde ficará nosso app de tarefas."

**Cena 2:**  
📺 Adicionar link no menu para `/todo`  
🗣️ "Adicionamos agora um link para essa página no menu lateral."

---

### 2. Criar Composable com Lista

**Cena 3:**  
📺 Criar `composables/useTodo.ts` com `const list = ref([])`  
🗣️ "Criamos um composable para centralizar a lógica da lista de tarefas."

**Cena 4:**  
🔍 Mostrar que o autocomplete não funciona corretamente  
🗣️ "Sem o tipo definido, o VSCode não consegue sugerir os campos automaticamente."

---

### 3. Criar Interface TypeScript

**Cena 5:**  
📺 Criar `interface List { id: string; name: string; checked: boolean }`  
🗣️ "Vamos definir a estrutura de uma tarefa usando uma interface chamada `List`."

**Cena 6:**  
📺 Usar `const list = ref<List>()` e mostrar erro  
🗣️ "Esse erro acontece porque o Vue espera um valor único, não uma lista."

**Cena 7:**  
📺 Corrigir para `const list = ref<List[]>([])`  
🗣️ "Agora estamos dizendo que `list` é um array de tarefas (`List[]`)."

**Cena 8:**  
📺 Adicionar um item e mostrar o autocomplete funcionando  
🗣️ "Veja que agora temos sugestões automáticas para os campos."  
⌨️ Mostrar `Ctrl + Shift + ↓` para duplicar a linha

---

### 4. Criar v-list com Vuetify

**Cena 9:**  
📺 Criar `<v-list>` com `v-for="item in list"`  
🗣️ "Vamos agora exibir os itens da lista usando o Vuetify."

**Cena 10:**  
📺 Mostrar `title="item.name"` e `prepend-icon`  
🗣️ "Adicionamos o nome da tarefa e um ícone de checkbox."

**Cena 11:**  
📺 Criar `toggleCheck(item.id)` no composable  
🗣️ "Criamos a função `toggleCheck` para alternar o estado da tarefa."

**Cena 12:**  
📺 Condicionar o ícone com base em `item.checked`  
🗣️ "Se estiver marcada, mostramos um check. Caso contrário, um checkbox vazio."

**Cena 13:**  
📺 Adicionar classe `text-decoration-line-through` se `item.checked`  
🗣️ "Estilo visual de tarefa concluída: texto riscado e cor de erro."

---

### 5. Criar Computed Properties

**Cena 14:**  
📺 Criar `checkedList` e `uncheckedList` com `computed()`  
🗣️ "Vamos separar as listas de tarefas completas e incompletas."

**Cena 15:**  
📺 Usar `uncheckedList` para renderizar, adicionar `checkedList` depois  
🗣️ "Isso nos permite controlar melhor o que aparece em cada lugar."

**Cena 16:**  
📺 Mostrar versão com `return`, e depois sem (`=>`)  
🗣️ "Refatoramos para uma versão mais limpa e direta."

**Cena 17:**  
📺 Mostrar que o código está grande e repetitivo  
🗣️ "Vamos resolver isso criando um componente reutilizável."

---

## ✅ Parte 2 - Componentização

### 6. Criar Componente `<TodoList>`

**Cena 18:**  
📺 Criar `components/TodoList.vue` e importar na página  
🗣️ "Na versão 4 do Nuxt, usamos a pasta `components` para dividir nossa aplicação."

**Cena 19:**  
📺 Copiar `v-list` para o componente, mostrar erros de props ausentes  
🗣️ "Ao mover o código, precisamos passar as variáveis como props."

**Cena 20:**  
📺 Criar props `list` e `title`  
🗣️ "As tarefas e o título agora são passados do pai para o filho."

**Cena 21:**  
📺 Tentar chamar `toggleCheck`, erro por mutação de prop  
🗣️ "Como não podemos alterar diretamente uma prop, usamos `emit`."

**Cena 22:**  
📺 Criar `@emit('toggle', id)` e emitir ao clicar  
🗣️ "Agora a função de alternar o estado volta para o componente pai."

**Cena 23:**  
📺 Adicionar `v-if="list.length"` para render condicional  
🗣️ "Mostramos a lista somente se houver itens nela."

---

### 7. Adicionar Nova Tarefa

**Cena 24:**  
📺 Criar formulário com `v-text-field` e botão  
🗣️ "Vamos permitir adicionar novas tarefas diretamente da interface."

**Cena 25:**  
📺 Mostrar `console.log` do conteúdo digitado  
🗣️ "Verificamos se a digitação está funcionando corretamente."

**Cena 26:**  
📺 Adicionar com `.unshift()`  
🗣️ "Adicionamos no topo da lista com `.unshift()`."

**Cena 27:**  
📺 Explicar que os dados somem ao recarregar  
🗣️ "Isso acontece porque ainda não estamos salvando em nenhum lugar persistente."

---

### 8. Persistência com `useStorage`

**Cena 28:**  
📺 Instalar `@vueuse/core`  
🗣️ "Vamos usar o `useStorage` da VueUse para salvar localmente."

**Cena 29:**  
📺 Usar `useStorage('todo-list', [])` no lugar do `ref`  
🗣️ "Agora a lista persiste no navegador mesmo após recarregar."

**Cena 30:**  
📺 Adicionar `initOnMounted: true` para evitar erro de hydration  
🗣️ "No Nuxt, precisamos atrasar o carregamento para evitar erros no SSR."

---

### 9. Apagar Todos os Itens

**Cena 31:**  
📺 Adicionar botão "Apagar tudo" com confirmação  
🗣️ "Vamos adicionar a opção de apagar todas as tarefas, com segurança."

---

### 10. Refatorações

**Cena 32:**  
📺 Exibir mensagem de "Sem tarefas" dentro do componente  
🗣️ "Melhor experiência ao informar que não há tarefas cadastradas."

**Cena 33:**  
📺 Encapsular botão de exclusão  
🗣️ "Facilitamos a manutenção ao mover esse botão para um componente próprio."

**Cena 34:**  
📺 Refatorar função de adicionar tarefa para ser mais reutilizável  
🗣️ "Mantemos a lógica centralizada no composable."

---

## 🧪 Desafios

### Counter (Contador)

**Cena 35:**  
📺 Criar contador com `useStorage`  
🗣️ "Desafio extra: um contador que salva seu valor mesmo após atualizar."

**Cena 36:**  
📺 Permitir mudar `maxEntries` dinamicamente  
🗣️ "Dificuldade: mover a lógica do contador da página para um composable."

---

### Todo Avançado

**Cena 37:**  
📺 Criar botão "Selecionar Todos/Nenhum"  
🗣️ "Permite alternar rapidamente o estado de todas as tarefas."

**Cena 38:**  
📺 Criar botão de apagar tarefa individual  
🗣️ "Adicionar no `append-icon` e explicar problema com propagação de clique."

**Cena 39:**  
📺 Mostrar `@click.stop` para evitar conflito  
🗣️ "Usamos `.stop` para isolar o clique do botão do restante da linha."

**Cena 40:**  
📺 Criar `emit` e função no composable para apagar tarefa  
🗣️ "A exclusão agora é controlada pelo componente pai."

---

## ✅ Status Final

> **Conteúdo pronto para gravação**  
> Provavelmente distribuído em **duas aulas completas**
