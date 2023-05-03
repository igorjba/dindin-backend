const database = require("../data/database");

const validateTransferFields = (req, res, next) => {
    const { accountNumberFrom, password, accountNumberTo, amount } = req.body;
    const accounts = database.accounts;

    if (!accountNumberFrom || !password || !accountNumberTo || !amount) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    if (amount <= 0) {
        return res.status(400).json({ mensagem: 'O valor para depósito deve ser superior a 0' });
    }

    const accountFrom = accounts.find(account => account.number === accountNumberFrom);
    
    if (!accountFrom) {
        return res.status(400).json({ mensagem: 'A conta de origem informada não existe' });
    }

    if (accountFrom.balance < amount) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente' });
    }

    if (accountFrom.user.password != password) {
        return res.status(400).json({ mensagem: 'Senha incorreta' })
    }

    const accountTo = accounts.find(account => account.number === accountNumberTo);

    if (!accountTo) {
        return res.status(400).json({ mensagem: 'A conta de destino informada não existe' });
    }

    return next();
}

module.exports = validateTransferFields;