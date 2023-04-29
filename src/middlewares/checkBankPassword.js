const checkBankPassword = (req, res, next) => {
    const { bankPassword } = req.headers;

    if (bankPassword !== '123') {
        return res.status(401).json({ mensagem: 'Senha do banco inválida' });
    }

    return next();
}

module.exports = checkBankPassword;