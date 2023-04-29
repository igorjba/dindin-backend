const database = require("../data/database");

const getAllAccounts = (req, res) => {
    const { accounts } = database;
    return res.json(accounts);
}

const createAccount = (req, res) => {
}

const updateAccount = (req, res) => {
}

const deleteAccount = (req, res) => {
}

module.exports = {
    getAllAccounts,
    createAccount,
    updateAccount,
    deleteAccount
};