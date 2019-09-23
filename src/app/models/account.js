const mongoose = require('../../database');

const AccountSchema = new mongoose.Schema({






});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;