const database = require("../data/database");

const generateStatement = (req, res) => {
    const { accountNumber } = req.query;

    const deposits = database.deposits.filter( transaction => transaction.accountNumber === accountNumber );
    const withdrawals = database.withdrawals.filter( transaction => transaction.accountNumber === accountNumber );
    const sentTransfers = database.transfers.filter( transaction => transaction.accountNumberFrom === accountNumber );
    const receivedTransfers = database.transfers.filter( transaction => transaction.accountNumberTo === accountNumber );

    const bankStatement = { deposits, withdrawals, sentTransfers, receivedTransfers };

    return res.status(200).json(bankStatement);
}

module.exports = {
    generateStatement
}