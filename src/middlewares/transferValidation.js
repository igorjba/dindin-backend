const { allFieldsFilled, getAccount, accountExists, validAmount, validPassword, enoughBalance } = require('../utils/inputValidation');
const { allFieldsFilledMessage, accountExistsMessage, validAmountMessage, validPasswordMessage, enoughBalanceMessage } = require('../utils/responseMessages');

const validateTransferFields = (req, res, next) => {
    const { accountNumberFrom, password, accountNumberTo, amount } = req.body;

    if (!allFieldsFilled('transfer', req)) return res.status(400).json(allFieldsFilledMessage);
    
    if (!validAmount(amount)) return res.status(400).json(validAmountMessage);

    const accountFrom = getAccount(accountNumberFrom);
    
    if (!accountExists(accountFrom)) return res.status(400).json(accountExistsMessage);

    if (!enoughBalance(accountFrom, amount)) return res.status(400).json(enoughBalanceMessage);

    if (!validPassword(accountFrom, password)) return res.status(400).json(validPasswordMessage);

    const accountTo = getAccount(accountNumberTo);
    
    if (!accountExists(accountTo)) return res.status(400).json(accountExistsMessage);

    return next();
}

module.exports = validateTransferFields;