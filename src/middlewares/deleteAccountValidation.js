const { getAccount, accountExists, zeroBalance, accountExistsMessage, zeroBalanceMessage } = require('../utils/inputValidation');

const validateAccountDeletionFields = (req, res, next) => {
    const { numeroConta: accountNumber } = req.params;

    const account = getAccount(accountNumber);

    if (!accountExists(account)) return res.status(400).json(accountExistsMessage);

    if (!zeroBalance(account)) return res.status(400).json(zeroBalanceMessage);

    return next();

}

module.exports = validateAccountDeletionFields;