# DRAWER NAVIGATION

Adicionar `<v-app-bar-nav-icon />` ao `<app-bar>` sem funções.
Criar `v-navigation-drawer` vazio:

```vue
<v-navigation-drawer />
```

✅ Mostrar que na versão mobile a barra aparece ao simular o deslizar para a direita/esquerda e na web o drawer é fixo

✅ Criar função `toggleDrawer()` e o ref `nav`:

```vue
const nav = ref(false) const toggleDrawer = () => { nav.value = !nav.value }
```

Criar profile
✅ Falar sobre a api de profiles, que no caso utilizará um avatar aleatório

```vue
<v-list-item
  lines="three"
  prepend-avatar="https://randomuser.me/api/portraits/women/33.jpg"
  subtitle="mcgarcia@gmail.com"
  title="Maria Costa Garcia"
/>
```

criar um array com todas as rotas até agora
[mostrar quais são os atributos comuns dos links, e criar o array. falar que o lugar correto não seria ali, mas que vamso colocar no lugar certo futuramente. # Criar a Interface NavItem
[frisar sobre interfaces e a convenção Pascal Case]
interface NavItem {
title: string
path: string
} # Criar o array, de acordo com os botões das rotas ja definidos
[aqui é uma boa hora para mostrar um dos motivos do item do array sempre terminar com a virgula]
const navItems: NavItem[] = [
{
title: 'Home',
path: '/',
},
{
title: 'Limitador de Acessos',
path: '/counter',
},
{
title: 'Todo',
path: '/todo',
},
{
title: 'About',
path: '/about',
},
] # utilizar o array nos menus
<v-btn
				v-for="item in navItems"
				:key="item.title"
				text
				:to="item.path"
				>{{ item.title }}</v-btn
			  >
[explicar sobre o javascript: {{ js }} e `${js}` ]
[Testar o menu]

# passar o menu para o drawer

[utilizar o v-list-item]
[se der um warning por conta de value repetido. mostrar maneira de sanar]
atualizar a interface e o array com icon
interface NavItem {
title: string
path: string
icon: string
}
const navItems: NavItem[] = [
{
title: 'Home',
path: '/',
icon: 'mdi-home-account',
},
{
title: 'Limitador de Acessos',
path: '/counter',
icon: 'mdi-counter',
},
{
title: 'Todo',
path: '/todo',
icon: 'mdi-format-list-checks',
},
{
title: 'About',
path: '/about',
icon: 'mdi-information',
},
]
atualizar v-list-item
<v-list-item
				  v-for="item in navItems"
				  :key="item.title"
				  :prepend-icon="item.icon"
				  :title="item.title"
				  :to="item.path"
				/> # Após o menu ter icone, mostrar a opção rail # Explicar definePageMeta e defineOptions [Ver gepeto: https://chatgpt.com/share/6852a59e-6084-8007-a2fb-2da1f363e7fa]
VERIFICAR SE O NUXT ESTA LENDO OS TIPOS EXTENDIDOS
types/page-meta.d.ts com compilerOptions
Criar itens de menu automatico
definePageMeta em todos as pages, apenas com o title
defineOptions com o name em todos os components. [mostrar no vue de v tools]
mostrar no console.log o router.getRouter
fazer o v-for com o getRoutes()
const router = useRouter()
const navItems = router.getRoutes()
<v-list-item
					  v-for="item in navItems"
					  :key="item.path"
					  :title="item.meta.title"
					  :to="item.path"
					/>
[explicar o motivo de trocar o :key de title para path]
[mostrar que o ts reclama do title como também, por isso filtrar com o map]
adicionar icone em pages
criar o nav item serializado
const navItems = computed(() =>
router
.getRoutes()
.filter((route) => route.meta.title)
.map((route) => ({
title: route.meta.title,
icon: route.meta.icon,
path: route.path,
})),
)
[Falar que desta maneira perdeu a ordem que era definida. Mostrar a primeira maneira de orndenar]
.sort((a, b) => (a.meta.order || 0) - (b.meta.order || 0))
Separar o nav bar (compnent)
criar type - explicar extrutura de pastas
Separar o drawer (componet) - explicar o defineModel, fazendo antes sem ele) gepeto: https://chatgpt.com/share/68593fe7-cee4-8007-8c7a-9b200846f3bc
[mostrar os erros e diferençãs utilizando o vue dev tools]
Criar composable

    	Desafio
    		Criar um filtro dinâmico para definir quais rotas utilizar em derterminado menu

## IDEIA

    drawer navigation, pois está muito confuso os linls no app bar
    	utilizar rotas, useRouter, useRoute, e meta nas pages
    separar app bar
