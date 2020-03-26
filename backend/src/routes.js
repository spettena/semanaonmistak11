const express = require('express');
//const crypto = require('crypto');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
// routes.get('/ongs', async (request,response) => {
//    const ongs = await connection('ongs').select('*');
//    return response.json(ongs);
//  //return response.json({ user: null});
//  //return  response.status(503).json('oh noes!');
//});

routes.post('/ongs', OngController.create);
// see file  OngController.js

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;