const mongoose = require('../../database');

const AccountSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,     //referencia user id, comando moogoose para chave primaria
        ref: 'User',                             //relacionamento de tabelas
        require: true,

    },
    id_account: {
        type: Number,
        required: true
        //select: false,
    },
    balance: {
        type: Number,
        required: true
        //select: false,
    },
    deposits: {
        type: Number,
        required: true
        //select: false,
    },
    shopping: {
        type: Number,
        required: true
        //select: false,
    },



    createdAt: {
        type: Date,
        default: Date.now,
    },






});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;