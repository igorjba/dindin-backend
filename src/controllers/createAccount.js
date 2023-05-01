const database = require("../data/database");

const createAccount = (req, res) => {
    const { name, cpf, birthdate, phone, email, password } = req.body;
    const { accounts } = database;

    const cpfExists = accounts.find(account => account.user.cpf === cpf);
    const emailExists = accounts.find(account => account.user.email === email);

    if (cpfExists) {
        return res.status(400).json({ mensagem: 'Já existe uma conta com esse CPF' });
    }

    if (emailExists) {
        return res.status(400).json({ mensagem: 'Já existe uma conta com esse e-mail' });
    }

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