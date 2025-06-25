# defineModel

O `defineModel` no Vue é uma nova API (a partir do Vue 3.4) que facilita o uso do `v-model` em **componentes filhos**, de uma forma muito mais simples e direta.

---

## Explicação simples:

Antes, quando você queria que um componente filho usasse `v-model`, você tinha que fazer algo assim:

### Antes do `defineModel`:

```vue
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function updateValue(newValue) {
  emit('update:modelValue', newValue)
}
</script>

<template>
  <input :value="modelValue" @input="updateValue($event.target.value)" />
</template>
```

---

## Agora com `defineModel`:

### Código mais simples:

```vue
<script setup>
const model = defineModel<string>()
</script>

<template>
  <input v-model="model" />
</template>
```

✅ Ele **automaticamente** já faz o `defineProps` e o `defineEmits` pra lidar com o `v-model`.

✅ Ele **automaticamente** usa a prop `modelValue` e emite `update:modelValue` por trás dos panos.

---

## Resumindo:

| Antes                                                                | Agora                                                                |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Você precisava criar `props`, `emit`, e fazer o `update` manualmente | Agora só faz `defineModel()` e já pode usar como uma variável normal |

---

## Exemplo prático:

### Pai:

```vue
<MyInput v-model="username" />
```

### Filho (`MyInput.vue`):

```vue
<script setup>
const model = defineModel<string>()
</script>

<template>
  <input v-model="model" />
</template>
```

✅ O pai manda o valor
✅ O filho altera
✅ Tudo sincronizado automaticamente

---
