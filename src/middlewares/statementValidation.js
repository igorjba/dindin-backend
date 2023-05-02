const database = require("../data/database");

const validateStatementFields = (req, res, next) => {
    const { accountNumber, password } = req.query;
    const { accounts } = database;

    if (!accountNumber || !password) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    const account = accounts.find(account => account.number === accountNumber);
    
    if (!account) {
        return res.status(400).json({ mensagem: 'A conta informada não existe' });
    }

    if (account.user.password != password) {
        return res.status(400).json({ mensagem: 'Senha incorreta' })
    }

    return next();
}

module.exports = validateStatementFields;