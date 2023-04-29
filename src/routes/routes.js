const express = require('express');
const {
    getAllAccounts,
    createAccount,
    updateAccount,
    deleteAccount
} = require('../controllers/accountsController');
const { makeWithdrawal } = require('../controllers/withdrawalsController');
const { makeDeposit } = require('../controllers/depositController');
const { makeTransfer } = require('../controllers/transfersController');
const { generateStatement } = require('../controllers/statementController');
const checkBankPassword = require('../middlewares/checkBankPassword');
const validateFields = require('../middlewares/validateFields');


const routes = express.Router()
routes.get('/', (req, res) => res.send('Página Inicial'))
routes.get('/contas', checkBankPassword, getAllAccounts)
routes.post('/contas', createAccount)
routes.put('/contas/:numeroConta/usuario', updateAccount)
routes.delete('/contas/:numeroConta', deleteAccount)
routes.post('/contas/:numeroConta/saque', makeWithdrawal)
routes.post('/contas/:numeroConta/deposito', makeDeposit)
routes.post('/contas/:numeroConta/transferencia', makeTransfer)
routes.get('/contas/:numeroConta/extrato', generateStatement)


module.exports = routes;