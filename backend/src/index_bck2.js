const express = require('express');
const app = express();

app.use(express.json());

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
   * Query Params: Parâmetros nomeados enviados na rota após  "?" (Filtro, paginação)
   * Routers Params: Parâmetros utilizados para identificar recursos
   * Request Body: 
   */

 
app.post('/users', (request,response) => {
   const body= request.body;
   console.log(body);

   return response.json ({
      evento: 'Semana OmniStacl 11.0',
      aluno: 'Olavo BILAU' 
    });
 });



app.listen(3333);
