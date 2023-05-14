const database = require("../data/database");

const deleteAccount = (req, res) => {
    const { numeroConta: accountNumber } = req.params;
    const { accounts } = database;

    const accountByNumber = accounts.find(account => Number(account.number) === Number(accountNumber));

    const index = accounts.indexOf(accountByNumber);
    accounts.splice(index, 1);

    return res.status(200).json({ mensagem: 'Conta excluída com sucesso' });

}

module.exports = { deleteAccount };