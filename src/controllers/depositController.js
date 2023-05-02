const database = require("../data/database");
const { format } = require('date-fns');

const makeDeposit = (req, res) => {
    const { accountNumber, amount } = req.body;
    const {accounts, deposits} = database;
    const date = format(new Date(), "uuuu-MM-dd HH:mm:ss" )
    const depositInfo = {date, accountNumber, amount};

    const account = accounts.find(account => account.number === accountNumber);
    
    account.balance = (account.balance + +amount);

    deposits.push(depositInfo);

    return res.status(200).json(depositInfo);
}

module.exports = {
    makeDeposit
};