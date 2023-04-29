const database = require("../data/database");

const getAllAccounts = (req, res) => {
    const accounts = database.contas;
    return res.json(accounts);
}

















module.exports = {
    getAllAccounts
};