const validateFields = (req, res, next) => {
    const { user } = req.body;

    if (!user) {
        return res.status(400).json({ mensagem: 'O campo usuário é obrigatório' });
    }

    return next();
}

module.exports = validateFields;