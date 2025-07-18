# Capitulo 1
## Configurando ambiente e construindo app base

**Requisitos:**

✅ Conhecimentos básicos em Javascript, Typescript, Vue 3
✅ VSCode com a extensão oficial do Vue
✅ NuxtR - Testar
✅ Recomendado Node: '22.17.0' (Mínimo 20.x)
✅ NPM: 11.4.2

#### ✅ Instalação do `nuxt 4`

**Cena 1:**  
📺 Instalar o nuxt através do `npm create`

🗣️ Vamos iniciar a criação do nosso projeto com o Nuxt. Para isso, abra o terminal (se está usando o VSCode você pode utilizar o terminal integrado) e digite o seguinte comando, para iniciar um novo projeto:

```bash
npm create nuxt@latest curso-nuxt
```

 🗣️ Este comando executa a ferramenta create-nuxt, que gera toda a estrutura inicial do projeto.

📺 O Terminal pode exibir

```bash
Need to install the following packages:
create-nuxt@3.26.1
Ok to proceed? (y)
```

✅ Digite `y` e pressione Enter.

Em seguida, escolha o gerenciador de pacotes. Para este curso, utilizaremos o npm:

``` bash
Which package manager would you like to use?
● npm (current)
○ pnpm
○ yarn
○ bun
○ deno
```

🗣️ Aguarde enquanto as dependências são instaladas. Ao perguntar se deseja iniciar um repositório git, escolha sim (recomendado)
```bash
❯ Initialize git repository?
● Yes / ○ No
```

🗣️ Agora escolha sim para instalar alguns dos módulos oficiais:

```bash
❯ Would you like to install any of the official modules?
● Yes / ○ No
```

🗣️ Por enquanto escolha apenas o módulo `@nuxt/eslint`

```bash
❯ Pick the modules to install:
◻ @nuxt/content – The file-based CMS with support for Markdown, YAML, JSON
◼ @nuxt/eslint – Project-aware, easy-to-use, extensible and future-proof ESLint integration
◻ @nuxt/fonts – Add custom web fonts with performance in mind
◻ @nuxt/icon – Icon module for Nuxt with 200,000+ ready to use icons from Iconify
◻ @nuxt/image – Add images with progressive processing, lazy-loading, resizing and providers support
◻ @nuxt/scripts – Add 3rd-party scripts without sacrificing performance
◻ @nuxt/test-utils – Test utilities for Nuxt
◻ @nuxt/ui – The Intuitive UI Library powered by Reka UI and Tailwind CSS
```


🗣️Será exibida uma mensagem parecida com essa. Significa que o projeto está pronto para uso.

```bash
✨ Nuxt project has been created with the v4 template. Next steps:
 › cd nuxt-4-base
 › Start development server with npm run dev
```

🗣️ Pronto, o nuxt já está instalado e pronto para uso. Entre na pasta do projeto
```bash
cd curso-nuxt
```
 🗣️ e rode o projeto

```bash
npm run dev  
```




