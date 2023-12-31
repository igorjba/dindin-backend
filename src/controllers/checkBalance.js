const database = require("../data/database");

const checkBalance = (req, res) => {
    const { numero_conta: accountNumber } = req.query;
    const { accounts } = database;

    const account = accounts.find( account => account.number === accountNumber);

    const balance = { saldo: account.balance };

    return res.status(200).json(balance);
}

module.exports = { checkBalance };