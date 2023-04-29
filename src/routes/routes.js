const express = require('express');
const accountController = require('../controllers/accountsController');
const checkBankPassword = require('../middlewares/checkBankPassword');

const routes = express.Router()
routes.get('/', (req, res) => res.send('Página Inicial'))
routes.get('/contas', checkBankPassword, accountController.getAllAccounts)


module.exports = routes;