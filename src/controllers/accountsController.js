const database = require("../data/database");

const getAllAccounts = (req, res) => {
    const { accounts } = database;
    return res.json(accounts);
}

const createAccount = (req, res) => {
    const { name, cpf, birthdate, phone, email, password } = req.body;
    const { accounts } = database;

    if (!name || !cpf || !birthdate || !phone || !email || !password) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    const newAccount = {
        id: accounts.length + 1,
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

const updateAccount = (req, res) => {

}

const deleteAccount = (req, res) => {

}

module.exports = {
    getAllAccounts,
    createAccount,
    updateAccount,
    deleteAccount
};