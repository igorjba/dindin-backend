const database = require("../data/database");

const deleteAccount = (req, res) => {
    const { numeroConta } = req.params;
    const { accounts } = database;

    const accountByNumber = accounts.find(account => account.number === Number(numeroConta));

    const index = accounts.indexOf(accountByNumber);
    accounts.splice(index, 1);

    return res.status(200).json({ mensagem: 'Conta excluída com sucesso' });

}

module.exports = { deleteAccount };