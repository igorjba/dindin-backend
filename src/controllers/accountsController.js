const database = require("../data/database");

const getAllAccounts = (req, res) => {
    const { accounts } = database;
    return res.json(accounts);
}

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

const deleteAccount = (req, res) => {

}

module.exports = {
    getAllAccounts,
    createAccount,
    updateAccount,
    deleteAccount
};