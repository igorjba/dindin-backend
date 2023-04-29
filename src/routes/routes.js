const express = require('express');
const accountController = require('../controllers/accountsController');

const routes = express.Router()
routes.get('/', (req, res) => res.send('Página Inicial'))
routes.get('/contas', accountController.getAllAccounts)


module.exports = routes;