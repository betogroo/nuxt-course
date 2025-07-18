import withNuxt from './.nuxt/eslint.config.mjs'
import prettierPlugin from 'eslint-plugin-prettier'

export default withNuxt({
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    // roda o Prettier como regra do ESLint
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
        bracketSameLine: false,
        vueIndentScriptAndStyle: true,
      },
    ],

    // suas regras Vue / TS existentes
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'vue/block-order': ['error', { order: ['script[setup]', 'template', 'style'] }],
    'vue/define-macros-order': [
      'error',
      { order: ['defineOptions', 'defineProps', 'defineEmits'] },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
      },
    ],
    'vue/max-attributes-per-line': 'off',
    /*  'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1 },
        multiline: { max: 1 },
      },
    ], */
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
  },
})



Esse arquivo configura o ESLint para um projeto Nuxt com regras específicas para Vue, garantindo um estilo de código consistente e boas práticas. Aqui está uma explicação linha a linha de cada regra definida:

---

### ✅ `withNuxt(...)`

Importa e aplica as configurações padrão do Nuxt para o ESLint, e permite sobrescrever ou adicionar regras personalizadas.

---

### 📏 Regras Personalizadas

#### `'vue/valid-v-slot'`

```js
'vue/valid-v-slot': [
  'error',
  { allowModifiers: true },
]
```

Garante que a diretiva `v-slot` seja usada corretamente. `allowModifiers: true` permite o uso de modificadores como `v-slot:default.foo`.

---

#### `'vue/block-order'`

```js
'vue/block-order': [
  'error',
  { order: ['script[setup]', 'template', 'style'] },
]
```

Define a ordem dos blocos em um componente `.vue`. Neste caso:

1. `<script setup>`
2. `<template>`
3. `<style>`

---

#### `'vue/define-macros-order'`

```js
'vue/define-macros-order': [
  'error',
  { order: ['defineProps', 'defineEmits'] },
]
```

Garante que macros do Vue 3 (`defineProps`, `defineEmits`) sejam declaradas nessa ordem específica.

---

#### `'vue/attributes-order'`

```js
'vue/attributes-order': [
  'error',
  {
    order: [
      'DEFINITION',
      'LIST_RENDERING',
      'CONDITIONALS',
      'RENDER_MODIFIERS',
      'GLOBAL',
      ['UNIQUE', 'SLOT'],
      'TWO_WAY_BINDING',
      'OTHER_DIRECTIVES',
      'OTHER_ATTR',
      'EVENTS',
      'CONTENT',
    ],
    alphabetical: true,
  },
]
```

Define a ordem dos atributos nos elementos de template. Exemplo de ordenação:

* `v-if`, `v-for`, `v-model`, `@click`, etc.
* Dentro de cada grupo, os atributos são ordenados **alfabeticamente**.

---

#### `'vue/max-attributes-per-line'`

```js
'vue/max-attributes-per-line': [
  'error',
  {
    singleline: { max: 1 },
    multiline: { max: 1 },
  },
]
```

Permite **apenas 1 atributo por linha**, tanto para elementos em uma única linha quanto para os quebrados em várias linhas.

Exemplo permitido:

```vue
<MyComponent
  prop1="a"
  prop2="b"
/>
```

---

#### `'vue/no-multiple-template-root': 'off'`

Desativa a regra que exige **um único elemento raiz** no `<template>`. Útil para projetos Vue 3, onde múltiplos roots são permitidos.

---

#### `'vue/multi-word-component-names': 'off'`

Desativa a exigência de que nomes de componentes sejam compostos por **múltiplas palavras**. Por exemplo, `Home.vue` é aceito mesmo não sendo `HomePage.vue`.

---

Essas configurações são ideais para manter uma **padronização forte** no seu projeto Vue/Nuxt, especialmente útil em equipes ou quando se deseja seguir um estilo rigoroso de escrita de código.

Deseja que eu gere exemplos visuais de como essas regras funcionam na prática?
