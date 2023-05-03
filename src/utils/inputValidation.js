const database = require("../data/database");

function allFieldsFilled(operation, req, res) {
    // commented code is refactored code for controllers -- need to replace on due files
    switch(operation) {
        case 'create':
            if (!name || !cpf || !birthdate || !phone || !email || !password) {
                return res.status(400).json({ mensagem: 'Preencha todos os campos' });
            }
            return true;

        case 'delete':
            if (!accountNumber) {
                return res.status(400).json({ mensagem: 'Preencha todos os campos' });
            }
            return true;

        case 'transfer':
            if (!accountNumberFrom || !password || !accountNumberTo || !amount) {
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
            }
            return true;
        
            /* if (!validAmount(amount)) {
                return res.status(400).json({ mensagem: 'O valor para depósito deve ser superior a 0' });
            }
        
            const accountFrom = getAccount(accountNumberFrom);
            
            if (!accountExists(accountFrom)) {
                return res.status(400).json({ mensagem: 'A conta de origem informada não existe' });
            }
        
            if (!enoughBalance(accountFrom, amount)) {
                return res.status(400).json({ mensagem: 'Saldo insuficiente' });
            }
        
            if (!validPassword(account, password)) {
                return res.status(400).json({ mensagem: 'Senha incorreta' });
            }
        
            const accountTo = getAccount(accountNumberTo);
        
            if (!accountExists(accountTo)) {
                return res.status(400).json({ mensagem: 'A conta de destino informada não existe' });
            } */

            break;

        case 'deposit':
            if (!accountNumber || !amount) {
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
            }
            return true;

            /* if (!validAmount(amount)) {
                return res.status(400).json({ mensagem: 'O valor para depósito deve ser superior a 0' });
            }
            
            const account = getAccount(accountNumber);
        
            if (!accountExists(account)) {
                return res.status(400).json({ mensagem: 'A conta informada não existe' });
            } */
            break;

        case 'withdraw':
            if (!accountNumber || !amount || !password) {
                return res.status(400).json({ mensagem: 'Preencha todos os campos' });
            }
            return true;
        
/*             const account = getAccount(number);
        
            if (!accountExists(account)) {
                return res.status(400).json({ mensagem: 'Conta não encontrada' });
            }
        
            if (!validPassword(account, password)) {
                return res.status(400).json({ mensagem: 'Senha incorreta' });
            } */
            break;

        case 'statement':
            if (!accountNumber || !password) {
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
            }
            return true;
        
/*             const account = getAccount(accountNumber);
            
            if (!accountExists(account)) {
                return res.status(400).json({ mensagem: 'A conta informada não existe' });
            }
        
            if (!validPassword(account, password)) {
                return res.status(400).json({ mensagem: 'Senha incorreta' });
            } */
            break;

        case 'balance':
            const { accountNumber, password } = req.query;
            if (!accountNumber || !password) {
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
            }
            return true;
            break;

        default:
            break;
    }
}

function getAccount(accountNumber) {
    const { accounts } = database;
    const account = accounts.find(account => account.number === accountNumber);
    return account;
}

function accountExists(account, res) {
    if (account) return true;
    return res.status(400).json({ mensagem: 'A conta informada não existe' });
}

function validPassword(account, password, res) {
    if (account.user.password === password) return true;
    return res.status(400).json({ mensagem: 'Senha incorreta' });
}

function zeroBalance(account, res) {
    if (account.balance === 0) return true;
    return res.status(400).json({ mensagem: 'O saldo deve ser zero para continuar esta operação' });
}

function enoughBalance(account, amount, res) {
    if (account.balance >= amount) return true;
    return res.status(400).json({ mensagem: 'Saldo insuficiente' });
}

function validAmount(amount, res) {
    if (amount > 0) return true;
    return res.status(400).json({ mensagem: 'O valor deve ser superior a 0' });
}

module.exports = {
    allFieldsFilled,
    getAccount,
    accountExists,
    validPassword,
    zeroBalance,
    enoughBalance,
    validAmount
};