const database = require("../data/database");

const validateAccountUpdateFields = (req, res, next) => {
    const { numeroConta, usuario } = req.params;
    const { nome: name, cpf, data_nascimento: birthdate, telefone: phone, email, senha: password } = req.body;
    const { accounts } = database;

    const accountById = accounts.find(account => Number(account.number) === Number(numeroConta));

    if (!accountById) {
        return res.status(404).json({ mensagem: 'Conta não encontrada' });
    }

    if (!name && !cpf && !birthdate && !phone && !email && !password) {
        return res.status(400).json({ mensagem: 'É necessário informar ao menos um campo para atualização' });
    }

    if (cpf) {
        const cpfExists = accounts.find(account => account.user.cpf === cpf);
        if (cpfExists) {
            return res.status(400).json({ mensagem: 'Já existe uma conta com esse CPF' });
        }
    }

    if (email) {
        const emailExists = accounts.find(account => account.user.email === email);
        if (emailExists) {
            return res.status(400).json({ mensagem: 'Já existe uma conta com esse e-mail' });
        }
    }

    return next();

}


module.exports = validateAccountUpdateFields;