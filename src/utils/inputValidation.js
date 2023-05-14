const database = require("../data/database");

function allFieldsFilled(operation, req) {

    if (operation ==='create') {
        const { name, cpf, birthdate, phone, email, password } = req.body;
        if (!name || !cpf || !birthdate || !phone || !email || !password) return false;
        return true;
    }

    if (operation ==='transfer') {
        const { numero_conta_origem: accountNumberFrom, senha: password, numero_conta_destino: accountNumberTo, valor: amount } = req.body;
        if (!accountNumberFrom || !password || !accountNumberTo || !amount) return false;
        return true;
    }

    if (operation ==='deposit') {
        const { numero_conta: accountNumber, valor: amount } = req.body;
        if (!accountNumber || !amount) return false;
        return true;
    }

    if (operation ==='withdraw') {
        const { numero_conta: accountNumber, valor: amount, senha: password } = req.body;
        if (!accountNumber || !amount || !password) return false;
        return true;
    }

    if (operation ==='statement') {
        const { numero_conta: accountNumber, senha: password } = req.query;
        if (!accountNumber || !password) return false;
        return true;
    }

    if (operation ==='balance') {
        const { numero_conta: accountNumber, senha: password } = req.query;
        if (!accountNumber || !password) return false;
        return true;
    }
    return;
}

function translateRequest(req) { // problem with this logic is that it accepts input anywhere as valid
    const { body, query, params } = req;
    const requestInfo = { ...body, ...query, ...params };

    const translatedInfo = {
        name: nome,
        cpf,
        birthdate: data_nascimento,
        phone: telefone,
        email,
        password: senha,
        accountNumber: numero,
        accountNumberFrom: numero_conta_origem,
        accountNumberTo: numero_conta_destino,
        amount: valor,
    };
    return translatedInfo;
}

function getAccount(accountNumber) {
    const { accounts } = database;
    const account = accounts.find(account => account.number === accountNumber);
    return account;
}

function accountExists(account) {
    if (!account) return false;
    return true;
}

function validPassword(account, password) {
    if (account.user.password === password) return true;
    return false;
}

function zeroBalance(account) {
    if (account.balance === 0) return true;
    return false;
}

function enoughBalance(account, amount) {
    if (account.balance >= amount) return true;
    return false;
}

function validAmount(amount) {
    if (amount > 0) return true;
    return false;
}

module.exports = {
    allFieldsFilled,
    getAccount,
    accountExists,
    validPassword,
    zeroBalance,
    enoughBalance,
    validAmount,
};