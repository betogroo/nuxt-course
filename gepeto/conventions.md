# ✅ Checklist de Boas Práticas de Nomenclatura no Vue 3 / Nuxt 3 / TypeScript

---

## 📌 **1. Props**

✅ Nome sempre em **camelCase** (no código)
✅ No template pai, o Vue converte automaticamente para **kebab-case**

| No script   | No uso                                      |
| ----------- | ------------------------------------------- |
| `menuItems` | `<app-nav-drawer :menu-items="navItems" />` |
| `isOpen`    | `<my-modal :is-open="modalOpen" />`         |

---

## 📌 **2. Emits (eventos personalizados)**

✅ Nome dos eventos SEMPRE em **kebab-case**, para seguir a convenção do Vue.
✅ Mesmo no TypeScript, os eventos devem ser definidos como **strings em kebab-case**.

| Exemplo               | Convenção                     |
| --------------------- | ----------------------------- |
| `'drawer'`            | ✅ OK                         |
| `'drawer-toggle'`     | ✅ OK                         |
| `'update:modelValue'` | ✅ OK                         |
| `'update:drawer'`     | ✅ OK (para `v-model:drawer`) |

---

## 📌 **3. v-model**

✅ Se for usar **v-model padrão**, use `modelValue` internamente.
✅ Se for usar **v-model com nome customizado**, o nome da prop deve ser igual ao sufixo.

| No Pai                            | No Filho                                       |
| --------------------------------- | ---------------------------------------------- |
| `<MyComp v-model="state" />`      | prop: `modelValue`, event: `update:modelValue` |
| `<MyComp v-model:drawer="nav" />` | prop: `drawer`, event: `update:drawer`         |

✅ Se usar `defineModel`, passe o nome:

```ts
const drawer = defineModel<boolean>('drawer')
```

---

## 📌 **4. Nomes de variáveis reativas (refs, states, etc)**

✅ Se for **booleano**, prefira nomes que comecem com:
**`is`**, **`has`**, **`can`**, **`should`**

Exemplos:

| Estado           | Nome recomendado |
| ---------------- | ---------------- |
| Drawer aberto?   | `isDrawerActive` |
| Pode editar?     | `canEdit`        |
| Está carregando? | `isLoading`      |

✅ Para arrays: nomes no plural
✅ Para objetos: nomes descritivos

---

## 📌 **5. Computeds**

✅ Nomes que descrevem o resultado **(ex: lista, valor calculado, etc)**

Exemplos:

| Computed                 | Nome            |
| ------------------------ | --------------- |
| Lista de itens filtrados | `filteredItems` |
| Rotas do menu            | `navItems`      |
| Nome completo            | `fullName`      |

---

## 📌 **6. Components**

✅ Nome dos arquivos em **PascalCase**
✅ Nome das tags no template também em **PascalCase** ou **kebab-case** (ambos são aceitos, mas escolha um e seja consistente).

Exemplos de nomes de arquivos:

| Nome de arquivo    | Import/uso         |
| ------------------ | ------------------ |
| `AppNavDrawer.vue` | `<AppNavDrawer />` |
| `AppNavbar.vue`    | `<AppNavbar />`    |
| `MyModal.vue`      | `<MyModal />`      |

---

## 📌 **7. Tipos TypeScript**

✅ Sempre em **PascalCase**

Exemplos:

```ts
interface MenuItem { ... }
type UserRole = 'admin' | 'editor' | 'viewer'
```

---

## 📌 **8. Pastas (Nuxt)**

✅ Por convenção Nuxt 3/4:

| Pasta       | Nome           |
| ----------- | -------------- |
| Pages       | `/pages`       |
| Components  | `/components`  |
| Composables | `/composables` |
| Types       | `/types`       |
| Layouts     | `/layouts`     |

---

## ✅ Bônus: Sobre `defineModel`

| Se você usar `defineModel`                                                     | Lembre-se |
| ------------------------------------------------------------------------------ | --------- |
| Se for `defineModel('drawer')`, o evento esperado é `update:drawer`            | ✅        |
| Dentro do template, sempre use `v-model="..."`, **nunca** `:model-value="..."` | ✅        |
| Quando usar nome customizado, o Pai usa `v-model:drawer`                       | ✅        |

---

## ✅ Conclusão

📌 Teu código atual está seguindo as convenções muito bem!
📌 Essa checklist pode te ajudar como um guia rápido para manter consistência nos próximos componentes.

---

Sua percepção faz total sentido, e na verdade você está bem alinhado com o que o **Nuxt** e o **Vue** recomendam.

---

## ✅ Convenção oficial de nomes de arquivos em `/pages` no Nuxt

- A **convenção oficial** do Nuxt (tanto na [documentação do Nuxt 3](https://nuxt.com/docs/guide/directory-structure/pages) quanto na do Nuxt 4) é:
  👉 **Nomes de arquivos em kebab-case nas pastas `pages`, `components`, `layouts`, etc.**

Exemplo direto da doc:

```
pages/
 ┣ about.vue
 ┣ blog/
 ┃ ┣ index.vue
 ┃ ┗ [slug].vue
 ┣ index.vue
 ┗ contact-us.vue
```

---

## ✅ Por que kebab-case é preferível nas páginas?

| Ponto                               | Motivo                                                                                             |
| ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| ✅ Legibilidade visual no projeto   | Facilita leitura rápida (ex: `user-profile.vue` fica visualmente mais fácil que `UserProfile.vue`) |
| ✅ URL-friendly                     | Reflete bem nas rotas (ex: `/about`, `/user-profile`)                                              |
| ✅ Alinhado com o Nuxt File Routing | O Nuxt converte automaticamente kebab-case em URLs padrão                                          |
| ✅ Consistência                     | Segue o que a maioria dos projetos Nuxt/Vue fazem                                                  |

---

## ✅ Padrão usado na prática:

| Pasta                 | Convenção                                             |
| --------------------- | ----------------------------------------------------- |
| `/pages`              | ✅ kebab-case (recomendado)                           |
| `/components`         | ✅ kebab-case (muitos projetos preferem assim também) |
| `/composables`        | ✅ kebab-case                                         |
| `/types`              | ✅ PascalCase (porque são tipos TypeScript)           |
| Exports / Named Types | ✅ PascalCase (ex: `interface MenuItem {}`)           |

---

## ✅ Minha recomendação objetiva:

👉 **Continue exatamente como você está fazendo com as Pages:**
✅ **kebab-case**

Exemplo ideal:

```
pages/
 ┣ about.vue
 ┣ counter.vue
 ┣ index.vue
 ┗ todo.vue
```

👉 Se quiser, pode adotar **o mesmo para components**:

```
components/
 ┣ app-navbar.vue
 ┣ app-nav-drawer.vue
 ┗ todo-item.vue
```

**(ou deixar components em PascalCase, que também é aceito. Aqui é mais gosto pessoal.)**

---

## ✅ Conclusão curta:

✅ Seu instinto está certo.
✅ Para Pages, **kebab-case é o mais legível e o mais padrão na comunidade Nuxt/Vue**.
✅ Pode continuar assim sem medo.

---

## 📌 Estrutura de Pastas - Projeto Nuxt 4 com TypeScript

### ✅ Visão Geral da Estrutura:

```
app/
 ┣ components/
 ┃ ┣ app/
 ┃ ┃ ┣ nav-drawer.vue
 ┃ ┃ ┗ navbar.vue
 ┃ ┣ delete-button.vue
 ┃ ┗ todo-list.vue
 ┣ composables/
 ┃ ┣ use-counter.ts
 ┃ ┣ use-nav-drawer.ts
 ┃ ┗ use-todo.ts
 ┣ layouts/
 ┃ ┗ default.vue
 ┣ pages/
 ┃ ┣ about.vue
 ┃ ┣ counter.vue
 ┃ ┣ index.vue
 ┃ ┗ todo.vue
 ┣ types/
 ┃ ┣ app.ts
 ┃ ┣ index.ts
 ┃ ┗ todo.ts
 ┗ app.vue
```

---

### ✅ Detalhes de cada pasta:

#### `/components/`

- Contém os **componentes Vue reutilizáveis**.
- Nome dos arquivos em **kebab-case**.
- Subpasta `/app/` para **componentes específicos da aplicação**, como **Navbar** e **Drawer**.

Exemplo de componentes:

- `/components/app/nav-drawer.vue`
- `/components/delete-button.vue`

---

#### `/composables/`

- Contém **funções de Composition API reutilizáveis**.
- Nome dos arquivos: **kebab-case**, sempre começando com `use-`.
- Nome das funções exportadas: **camelCase**, com prefixo `use`.

Exemplos:

- `/composables/use-counter.ts` → `useCounter()`
- `/composables/use-todo.ts` → `useTodo()`

---

#### `/layouts/`

- Layouts de página do Nuxt.
- O Nuxt reconhece automaticamente layouts como **`default.vue`**, que é o layout base.

Exemplo:

- `/layouts/default.vue`

---

#### `/pages/`

- Arquivos que representam rotas.
- Nome dos arquivos em **kebab-case**, refletindo as URLs.

Exemplos:

- `/pages/index.vue` → Rota `/`
- `/pages/about.vue` → Rota `/about`
- `/pages/todo.vue` → Rota `/todo`

---

#### `/types/`

- Definições de **tipos TypeScript**.
- Nome dos arquivos em **kebab-case**, usando `.ts`.
- Tipos internos em **PascalCase** (ex: `interface MenuItem`).

Sugestão: use o `/types/index.ts` para reexportar os demais:

```ts
export * from './todo'
export * from './app'
```

---

#### `app.vue`

- Componente raiz da aplicação Nuxt.
- Fica na raiz do projeto.

---

### ✅ Convenções Gerais adotadas:

| Categoria                        | Convenção                   |
| -------------------------------- | --------------------------- |
| Nomes de arquivos de página      | kebab-case                  |
| Nomes de arquivos de composables | kebab-case + prefixo `use-` |
| Nomes de componentes             | kebab-case                  |
| Tipos TypeScript                 | PascalCase                  |
| Funções em composables           | camelCase + prefixo `use`   |
| Eventos customizados             | kebab-case                  |
| Props                            | camelCase                   |

---

### ✅ Exemplo de boas práticas em um Composable:

```ts
// composables/use-counter.ts
export const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++

  return { count, increment }
}
```

---

### ✅ Exemplo de componente com v-model customizado:

```vue
<script setup lang="ts">
const isDrawerActive = defineModel<boolean>('drawer')
</script>

<template>
  <v-navigation-drawer v-model="isDrawerActive">
    <!-- conteúdo -->
  </v-navigation-drawer>
</template>
```

---

## ✅ Conclusão:

Este projeto segue as principais **boas práticas de organização de um projeto Nuxt moderno com TypeScript**, priorizando:

- Escalabilidade
- Manutenção futura
- Legibilidade para outros desenvolvedores

---
