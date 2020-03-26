const express = require('express');

/**
 * Rota /Recurso
 */

 /**
  * Métodos HTTP:
  * GET: Busca/listar Informações
  * POST: Insere uma informação no backend
  * PUT: Altera uma informação no backend
  * DELETE: Deletar uma informação no backend
  */

  /**
   * Tipos de parametros
   * 
   * Query: Params: Parametros nomeados enviados na rota após  "?"
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body
   */
const app = express();
 app.get('/', (request,response) => {
return response.send ('Hello World');
});

app.get('/usersssss', (request,response) => {
    return response.send ('Users');
 });

 app.get('/json', (request,response) => {
    return response.send ('Json');
 });

app.get('/rota', (request,response) => {
    return response.send ('Aqui é rotaaa!!!!');
 });


app.get('/users', (request,response) => {
    return response.json ({
        evento: 'Semana OmniStacl 11.0',
        aluno: 'Olavo Bilac',
        idade:  '24'
    });



 });



app.listen(3333);
