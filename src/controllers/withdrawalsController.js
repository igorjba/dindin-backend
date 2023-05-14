const database = require("../data/database");

const makeWithdrawal = (req, res) => {
    const { numero_conta: accountNumber, valor: amount } = req.body;
    const { accounts } = database;

    const accountByNumber = accounts.find(account => Number(account.number) === Number(accountNumber));

    if (accountByNumber.balance < amount) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente' });
    }

    accountByNumber.balance -= amount;

    return res.status(200).json({ mensagem: 'Saque realizado com sucesso' });

}

module.exports = {
    makeWithdrawal
};