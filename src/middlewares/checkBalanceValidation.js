const { allFieldsFilled, getAccount, accountExists, validPassword } = require('../utils/inputValidation');
const { allFieldsFilledMessage, accountExistsMessage, validPasswordMessage } = require('../utils/responseMessages');

const database = require("../data/database");

const validateBalanceFields = (req, res, next) => {
    const { accountNumber, password } = req.query;

    if (!allFieldsFilled('balance', req)) return res.status(400).json(allFieldsFilledMessage);
    
    const account = getAccount(accountNumber);
    
    if (!accountExists(account)) return res.status(400).json(accountExistsMessage);

    if (!validPassword(account, password)) return res.status(400).json(validPasswordMessage);

    return next();
}

module.exports = validateBalanceFields;