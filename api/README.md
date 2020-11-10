SEQUENCIA PARA CRIAR O PROJETO

Criar o arquivo package
### npm init

Instalar biblioteca que gerencia as requisições, rotas e URLs, entre outras funcionalidades
### npm install express

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente.
### npm install -g nodemon (na verdade, instalei -D, atualizei o script no pagkage.json, e rodei no prompt: npm run dev)

Instalar o banco de dados MongoDB
### npm install --save mongodb (--save para que ele registre no package.jason)

Instalar o Mongoose - Mongoose traduz do banco de dados para objetos JavaScript para que possam ser utilizados pela aplicação
### npm install --save mongoose