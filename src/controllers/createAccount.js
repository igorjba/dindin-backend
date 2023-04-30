const database = require("../data/database");

const createAccount = (req, res) => {
    const { name, cpf, birthdate, phone, email, password } = req.body;
    const { accounts } = database;

    const newAccount = {
        number: accounts.length + 1,
        balance: 0,
        user: {
            name: name,
            cpf: cpf,
            birthdate: birthdate,
            phone: phone,
            email: email,
            password: password
        }
    }

    accounts.push(newAccount);

    return res.status(201).json(newAccount);
}

module.exports = { createAccount };