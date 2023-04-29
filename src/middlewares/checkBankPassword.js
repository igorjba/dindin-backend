const checkBankPassword = (req, res, next) => {
    const { senha_banco } = req.query;


    if (!senha_banco) {
        return res.status(400).json({ mensagem: 'O campo senha é obrigatório' });
    }

    if (senha_banco !== "123") {
        return res.status(401).json({ mensagem: 'Senha do banco inválida' });
    }

    return next();
}

module.exports = checkBankPassword;