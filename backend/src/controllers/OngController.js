const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        // routes.get('/ongs', async (request,response) => {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
        //  //return response.json({ user: null});
        //  //return  response.status(503).json('oh noes!');
    },


    async create(request, response) {
        // const data = request.body;
        //console.log(data);
        const { name, email, whatsapp, city, uf } = request.body;

        // Criando ID Aleatorio  
        const id = crypto.randomBytes(4).toString('Hex');

        // utilizando o connection para inserir dados
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        console.log(name, email, whatsapp, city, uf);

        return response.json({
            id
        });





    }
};