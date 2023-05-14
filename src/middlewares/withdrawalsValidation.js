const database = require("../data/database");

const validateWithdrawalFields = (req, res, next) => {
    const { numero_conta: accountNumber, valor: amount, senha: password } = req.body;
    const { accounts } = database;

    if (!accountNumber || !amount || !password) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos' });
    }

    const accountByNumber = accounts.find(account => account.number === Number(accountNumber));

    if (!accountByNumber) {
        return res.status(404).json({ mensagem: 'Conta não encontrada' });
    }

    if (accountByNumber.user.password !== password) {
        return res.status(400).json({ mensagem: 'Senha incorreta' });
    }

    return next();
}

module.exports = validateWithdrawalFields;