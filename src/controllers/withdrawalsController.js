const database = require("../data/database");

const makeWithdrawal = (req, res) => {
    const { number, withdrawalAmount } = req.body;
    const { accounts } = database;

    const accountByNumber = accounts.find(account => account.number === Number(number));

    if (accountByNumber.balance < withdrawalAmount) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente' });
    }

    accountByNumber.balance -= withdrawalAmount;

    return res.status(200).json({ mensagem: 'Saque realizado com sucesso' });

}

module.exports = {
    makeWithdrawal
};