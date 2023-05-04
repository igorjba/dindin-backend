const database = require("../data/database");

const validateAccountDeletionFields = (req, res, next) => {
    const { numeroConta } = req.params;
    const { accounts } = database;

    const accountByNumber = accounts.find(account => Number(account.number) === Number(numeroConta));

    if (!accountByNumber) {
        return res.status(404).json({ mensagem: 'Conta não encontrada' });
    }

    //saldo não pode ser maior que zero

    return next();

}

module.exports = validateAccountDeletionFields;