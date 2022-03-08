# UbistartFront


## Instalação

Caso vá rodar o projeto usando o [Back-end](https://github.com/LeandroLino/Ubistart-Challenge) você poderá optar por rodar o Front-End utilizando a api
que já está online, ou usando o rapositório de maneira local, então será necessário mudar algumas informações dentro dos arquivos `.env` e `.en.production`, de acordo com a maneira que você optou. 


Após baixar todo o arquivo de Front end e descidir qual `API_URL` usar, agora rode o primeiro comando 

```node
npm install ||  yarn 
```
Em seguinda basta iniciar a conexão
```node
npm start  ||  yarn start 
```
A resposta dada no terminal pode variar de acordo com o comando `yarn` ou `npm`, porem o comportamento será de abrir uma pagina com a url `https://localhost:3000`


Como a API está hospedada localmente, usaremos rotas de local host com a porta 3000
## Problmas possiveis

```bash
Error: listen EADDRINUSE: address already in use :3000
```

Tente verificar se existe alguma outra aplicação rodando na porta 3000, caso não consiga achar nenhuma
aplicação rodando utilize os seguintes comandos

```bash
fuser -k 3000/tcp
```

A resposta desse comando será:

```bash
3000/tcp:            <Sequencia Númerica>
```

Pronto, será finalizado a aplicação e agora você pode rodar o comando npm novamente

Se o problema persistir você pode trocar o valor `3000` para algum numero como `5000`/`8080`/`3001`/`3002`, para isso basta mudar no `index.js` na linha `15`



## Observações

Durante o processo de criação eu tive muitas ideias de como melhorar o projeto, pretendo continuar 
desenvolvendo algumas features, algo que considero válido seria que não só o admin tivesse acesso a todas as tarefas, mas que pessoas que trabalham juntas poderiam compartilhar entre si as tarefas, então um tarefa poderia ter vários usuários com permissões de finalizar e editar, também criar mais `roles` assim teria uma role especifica para monitorar as terafas atrasadas (Admin), uma que teria a permissão para excluir tarefas e assim em diante

Também seria interessante mudar o layout atual, acredito que seja um layout bem simples e funcional, mas gostaria de passar a ideia de uma ferramenta interna de uma empresa, onde os colegas de trabalho podem análisar suas tarefas, adicionar comentários e vizualizar outras tarefas (De outros colegas). 


