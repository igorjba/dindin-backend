const database = require("../data/database");

const updateAccount = (req, res) => {
    const { number } = req.params;
    const { name, cpf, birthdate, phone, email, password } = req.body;
    const { accounts } = database;

    const account = accounts.find(account => account.number === Number(number));

    if (name) {
        account.user.name = name;
    }

    if (cpf) {
        account.user.cpf = cpf;
    }

    if (birthdate) {
        account.user.birthdate = birthdate;
    }

    if (phone) {
        account.user.phone = phone;
    }

    if (email) {
        account.user.email = email;
    }

    if (password) {
        account.user.password = password;
    }

    return res.json(account);
}

module.exports = { updateAccount };