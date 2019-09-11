const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const PaymentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,     //referencia user id, comando moogoose para chave primaria
        ref: 'User',                             //relacionamento de tabelas
        require: true
    },
    name_card: {
        type: String,
        required: true
        //lowercase: true
    },
    number_card: {
        type: Number,
        require: true
        // select: false,
    },
    date_card: {
        type: Number,
        required: true
        // select: false,

    },
    cvv_card: {
        type: Number,
        required: true
        //select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});



const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
