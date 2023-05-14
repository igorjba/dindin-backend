const { allFieldsFilled, getAccount, accountExists, validPassword } = require('../utils/inputValidation');
const { allFieldsFilledMessage, accountExistsMessage, validPasswordMessage } = require('../utils/responseMessages');

const validateStatementFields = (req, res, next) => {
    const { numero_conta: accountNumber, senha: password } = req.query;

    if (!allFieldsFilled('statement', req)) return res.status(400).json(allFieldsFilledMessage);
    
    const account = getAccount(accountNumber);
    
    if (!accountExists(account)) return res.status(400).json(accountExistsMessage);

    if (!validPassword(account, password)) return res.status(400).json(validPasswordMessage);

    return next();
}

module.exports = validateStatementFields;