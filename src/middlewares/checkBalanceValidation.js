const { allFieldsFilled, getAccount, accountExists, validPassword } = require('../utils/inputValidation');

const database = require("../data/database");

const validateBalanceFields = (req, res, next) => {
    const { accountNumber, password } = req.query;

    allFieldsFilled('balance', req, res);

    const account = getAccount(accountNumber);
    
    accountExists(account, res);

    validPassword(account, password, res);

    return next();
}

module.exports = validateBalanceFields;