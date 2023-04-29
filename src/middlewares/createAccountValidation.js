const database = require("../data/database");

const validateAccountCreationFields = (req, res, next) => {
    const { name, cpf, birthdate, phone, email, password } = req.body;
    const { accounts } = database;

    if (!name || !cpf || !birthdate || !phone || !email || !password) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    const cpfExists = accounts.find(account => account.user.cpf === cpf);
    const emailExists = accounts.find(account => account.user.email === email);

    if (cpfExists) {
        return res.status(400).json({ mensagem: 'Já existe uma conta com esse CPF' });
    }

    if (emailExists) {
        return res.status(400).json({ mensagem: 'Já existe uma conta com esse e-mail' });
    }

    return next();
}

module.exports = validateAccountCreationFields;