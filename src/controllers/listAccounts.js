const database = require("../data/database");

const getAllAccounts = (req, res) => {
    const { accounts } = database;
    return res.json(accounts);
}

module.exports = { getAllAccounts };