const database = require("../data/database");

const validateDepositFields = (req, res, next) => {
    const { accountNumber, amount } = req.body;
    const accounts = database.accounts;

    if (!accountNumber || !amount) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    if (amount <= 0) {
        return res.status(400).json({ mensagem: 'O valor para depósito deve ser superior a 0' });
    }
    
    const account = accounts.find(account => account.number === accountNumber);

    if (!account) {
        return res.status(400).json({ mensagem: 'A conta informada não existe' });
    }

    return next();
}

module.exports = validateDepositFields;