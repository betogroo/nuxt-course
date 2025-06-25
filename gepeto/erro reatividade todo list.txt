Excelente observação. Isso pode estar acontecendo por um detalhe **muito específico da reatividade no Vue com arrays**, especialmente quando o array é esvaziado ou reatribuído *sem mudar a referência de seus elementos* — e isso interfere nos `computed`.

---

### 🧠 Provável causa

Você provavelmente está fazendo algo como:

```ts
list.value = defaultList
```

Mas `defaultList` é **definido fora do `useTodo`** e é **imutável/reutilizado**, o que significa que os objetos dentro do `list` após o `clearList()` ainda têm as mesmas referências (memória) — e o Vue pode não rastrear adequadamente as mudanças reativas.

---

### ✅ Solução garantida: use `JSON.parse(JSON.stringify(...))` ou `.map`

Você já estava próximo da solução com o `.map(...)`. Aqui está a maneira **reativa e segura**:

```ts
const addDefaultList = () => {
  clearList() // garante limpeza real

  // recria o array com novos objetos (nova referência reativa)
  list.value = defaultList.map(item => ({
    id: crypto.randomUUID(), // novo ID
    name: item.name,
    checked: false,
  }))
}
```

> 🔁 Isso garante que os objetos dentro de `list.value` são **novos na memória**, ativando reatividade corretamente.

---

### 🧪 Teste para confirmar

1. Marque alguns itens como `checked`.
2. Chame `clearList()` — a lista deve desaparecer.
3. Chame `addDefaultList()` — a lista deve voltar limpa.
4. `checkedList.value` deve retornar `[]`, e `uncheckedList.value.length` deve bater com `defaultList.length`.

---

### 🚫 Evite isso:

Não use `list.value = defaultList` diretamente, nem reutilize o mesmo array que está fora da função. Sempre gere novas instâncias dos objetos, como:

```ts
list.value = JSON.parse(JSON.stringify(defaultList)) // alternativa
```

Mas prefira `.map(...)` se quiser controlar os UUIDs e valores.

---

Se quiser, posso te mostrar como ver se os `computed` estão realmente atualizando ou como debugar com logs reativos. Deseja isso também?
