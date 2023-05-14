const { allFieldsFilled, getAccount, accountExists, validAmount } = require('../utils/inputValidation');
const { allFieldsFilledMessage, accountExistsMessage, validAmountMessage } = require('../utils/responseMessages');

const validateDepositFields = (req, res, next) => {
    const { numero_conta: accountNumber, valor: amount } = req.body;

    if (!allFieldsFilled('deposit', req)) return res.status(400).json(allFieldsFilledMessage);
    
    const account = getAccount(accountNumber);
    
    if (!accountExists(account)) return res.status(400).json(accountExistsMessage);

    if (!validAmount(amount)) return res.status(400).json(validAmountMessage);

    return next();
}

module.exports = validateDepositFields;