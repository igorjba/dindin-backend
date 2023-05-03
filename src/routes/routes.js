const express = require('express');
const { getAllAccounts } = require('../controllers/listAccounts');
const { createAccount } = require('../controllers/createAccount');
const { updateAccount } = require('../controllers/updateAccount');
const { deleteAccount } = require('../controllers/deleteAccount');
const { makeWithdrawal } = require('../controllers/withdrawalsController');
const { makeDeposit } = require('../controllers/depositController');
const { makeTransfer } = require('../controllers/transfersController');
const { generateStatement } = require('../controllers/statementController');
const { checkBalance } = require('../controllers/checkBalance');
const checkBankPassword = require('../middlewares/checkBankPassword');
const validateAccountCreationFields = require('../middlewares/createAccountValidation');
const validateAccountUpdateFields = require('../middlewares/updateAccountValidation');
const validateDepositFields = require('../middlewares/depositValidation');
const validateTransferFields = require('../middlewares/transferValidation');
const validateStatementFields = require('../middlewares/statementValidation');
const validateBalanceFields = require('../middlewares/checkBalanceValidation');

const routes = express.Router();

routes.get('/', (req, res) => res.send('Página Inicial'));
routes.get('/contas', checkBankPassword, getAllAccounts);
routes.post('/contas', validateAccountCreationFields, createAccount);
routes.put('/contas/:numeroConta/usuario', validateAccountUpdateFields, updateAccount);
routes.delete('/contas/:numeroConta', deleteAccount);
routes.post('/transacoes/sacar', makeWithdrawal);
routes.post('/transacoes/depositar', validateDepositFields, makeDeposit);
routes.post('/transacoes/transferir', validateTransferFields, makeTransfer);
routes.get('/contas/extrato', validateStatementFields, generateStatement);
routes.get('/contas/saldo', validateBalanceFields, checkBalance);

module.exports = routes;