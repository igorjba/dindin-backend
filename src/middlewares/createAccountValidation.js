const database = require("../data/database");

const validateAccountCreationFields = (req, res, next) => {
    const { name, cpf, birthdate, phone, email, password } = req.body;

    if (!name || !cpf || !birthdate || !phone || !email || !password) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    return next();
}

module.exports = validateAccountCreationFields;