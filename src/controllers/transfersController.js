const database = require("../data/database");
const { format } = require('date-fns');

const makeTransfer = (req, res) => {
    const { accountNumberFrom, accountNumberTo, amount } = req.body;
    const { accounts, transfers } = database;
    const date = format(new Date(), "uuuu-MM-dd HH:mm:ss" );
    const transferInfo = { date, accountNumberFrom, accountNumberTo, amount };

    const accountFrom = accounts.find( account => account.number === accountNumberFrom );
    const accountTo = accounts.find( account => account.number === accountNumberTo );
    
    accountFrom.balance = (accountFrom.balance - +amount);
    accountTo.balance = (accountTo.balance + +amount);

    transfers.push(transferInfo);

    return res.status(200).json({ mensagem: "Transferência realizada com sucesso!" });
}

module.exports = {
    makeTransfer
};