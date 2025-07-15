#### ✅ Passo 1: Baixar o NVM para Windows
1.	Acesse o repositório oficial:
👉 https://github.com/coreybutler/nvm-windows/releases
2.	Baixe o instalador:
o	Procure pelo arquivo chamado nvm-setup.exe (última versão estável).
o	Clique para baixar.
________________________________________
#### ✅ Passo 2: Instalar o NVM
1.	Execute o arquivo nvm-setup.exe.
2.	Siga os passos da instalação:
o	Escolha o diretório onde o NVM será instalado (ex: C:\nvm).
o	Escolha o diretório onde o Node.js será instalado (ex: C:\Program Files\nodejs).
o	Importante: Não instale o Node.js separadamente (ele será instalado via o próprio NVM).
3.	Finalize a instalação.
________________________________________
#### ✅ Passo 3: Verificar se está funcionando
Abra o Prompt de Comando (ou PowerShell) e digite:
```bash
nvm version
```
Se mostrar a versão do NVM, está tudo certo!

#### ✅ Passo 4: Instalar uma versão do Node.js
```bash
nvm install 22.15.0
```
Isso instala a versão 22.15.0 do Node.js.

#### ✅ Passo 5: Usar uma versão instalada
```bash
nvm use 18.17.1
```
Após isso, você pode verificar se está usando a versão correta:

⚠️ Dicas importantes
•	Não use o instalador oficial do Node.js ao usar o NVM, pois pode haver conflitos.
•	Para projetos diferentes com versões diferentes do Node, você pode alternar entre elas com nvm use.
