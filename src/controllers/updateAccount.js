const database = require("../data/database");

const updateAccount = (req, res) => {
    const { numeroConta } = req.params;
    const { nome: name, cpf, data_nascimento: birthdate, telefone: phone, email, senha: password } = req.body;
    const { accounts } = database;

    const accountById = accounts.find(account => Number(account.number) === Number(numeroConta));

    if (name) {
        accountById.user.name = name;
    }

    if (cpf) {
        accountById.user.cpf = cpf;
    }

    if (birthdate) {
        accountById.user.birthdate = birthdate;
    }

    if (phone) {
        accountById.user.phone = phone;
    }

    if (email) {
        accountById.user.email = email;
    }

    if (password) {
        accountById.user.password = password;
    }

    return res.json(accountById);
}

module.exports = { updateAccount };