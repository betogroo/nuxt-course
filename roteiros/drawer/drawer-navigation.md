
# 🧭 Drawer Navigation (Navegação lateral)

## 🎬 Cena 1 – Introdução
**Objetivo:** Explicar que vamos implementar uma navegação lateral (drawer) e organizar os links do app de forma clara, elegante e funcional.

> 💬 “Até agora temos vários botões no App Bar, mas eles estão confusos. Vamos movê-los para um drawer lateral.”

---

## 🧱 Cena 2 – Estrutura inicial

### 1. Adicionar `<v-app-bar-nav-icon />` no `app-bar`
- Só visual, ainda sem funcionalidade.

### 2. Criar um `<v-navigation-drawer />` vazio no layout

```vue
<v-navigation-drawer />
```

> 🧪 Mostre que no mobile ele aparece com gesto de arrastar e no desktop é fixo por padrão.

---

## 🔁 Cena 3 – Controlar o Drawer

### 1. Criar `ref` e `toggleDrawer`:

```ts
const nav = ref(false)
const toggleDrawer = () => {
  nav.value = !nav.value
}
```

> Mostre como conectar o `v-app-bar-nav-icon` a essa função com `@click="toggleDrawer"`.

---

## 🧑‍🎤 Cena 4 – Adicionar Profile

### 1. Mostrar como criar um profile fake usando a API `randomuser.me`:

```vue
<v-list-item
  lines="three"
  prepend-avatar="https://randomuser.me/api/portraits/women/33.jpg"
  subtitle="mcgarcia@gmail.com"
  title="Maria Costa Garcia"
/>
```

---

## 📜 Cena 5 – Criar os Itens de Navegação Manualmente

### 1. Criar interface `NavItem` com PascalCase:

```ts
interface NavItem {
  title: string
  path: string
}
```

> 💡 Explique a importância das interfaces e convenções em TypeScript.

### 2. Criar array com rotas:

```ts
const navItems: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'Limitador de Acessos', path: '/counter' },
  { title: 'Todo', path: '/todo' },
  { title: 'About', path: '/about' },
]
```

> 🔁 Mostre como o `v-for` funciona e o porquê da vírgula final (edições futuras).

### 3. Exibir com `<v-btn>`:

```vue
<v-btn
  v-for="item in navItems"
  :key="item.title"
  text
  :to="item.path"
>
  {{ item.title }}
</v-btn>
```

> Explique `{{ js }}` vs `${js}` no contexto do Vue.

---

## 📥 Cena 6 – Migrar botões para o Drawer

### 1. Usar `<v-list-item>`:

```vue
<v-list-item
  v-for="item in navItems"
  :key="item.title"
  :title="item.title"
  :to="item.path"
/>
```

### 2. Adicionar ícones:

Atualize a interface:

```ts
interface NavItem {
  title: string
  path: string
  icon: string
}
```

E o array:

```ts
const navItems: NavItem[] = [
  { title: 'Home', path: '/', icon: 'mdi-home-account' },
  { title: 'Limitador de Acessos', path: '/counter', icon: 'mdi-counter' },
  { title: 'Todo', path: '/todo', icon: 'mdi-format-list-checks' },
  { title: 'About', path: '/about', icon: 'mdi-information' },
]
```

E exiba assim:

```vue
<v-list-item
  v-for="item in navItems"
  :key="item.title"
  :prepend-icon="item.icon"
  :title="item.title"
  :to="item.path"
/>
```

---

## 📐 Cena 7 – Navegação Dinâmica com `router.getRoutes()`

### 1. Garantir que cada página tem:

- `definePageMeta({ title: '...' })`
- E opcionalmente `icon` e `order`

### 2. Criar navItems dinamicamente:

```ts
const navItems = computed(() =>
  router
    .getRoutes()
    .filter(route => route.meta.title)
    .map(route => ({
      title: route.meta.title,
      icon: route.meta.icon,
      path: route.path,
    }))
    .sort((a, b) => (a.meta.order || 0) - (b.meta.order || 0))
)
```

### 3. Exibir como antes, com `v-for`

> 💬 Explique a necessidade de usar `path` como `key` (único), e por que `meta.title` pode gerar erro sem verificação.

---

## 🔧 Cena 8 – Organização em Componentes

### 1. Separar `AppBar.vue` e `NavDrawer.vue`
- Mostrar como usar `defineOptions({ name: 'AppBar' })` para facilitar o debug no Vue Dev Tools.

### 2. Explicar e aplicar `defineModel()` ao comunicar drawer entre os componentes.
- Mostrar antes e depois, com erros comuns.

---

## 💡 Cena 9 – Criar um Composable (opcional)
- Exemplo: `useNavigation.ts` com lógica de rotas.

---

## 🧠 Desafio Final
> “Crie um filtro dinâmico que exiba rotas específicas no menu, dependendo de alguma condição (usuário logado, tipo de perfil, etc.)”

---

## 🎯 Conclusão

- Menu agora está limpo, acessível e organizado.
- Itens são exibidos dinamicamente a partir do router.
- Componentes separados aumentam a legibilidade.
- Próximo passo: lidar com permissões e filtros.
