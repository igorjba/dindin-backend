const validateFields = (req, res, next) => {
    const { usuario } = req.body;

    if (!usuario) {
        return res.status(400).json({ mensagem: 'O campo usuário é obrigatório' });
    }

    return next();
}

module.exports = validateFields;