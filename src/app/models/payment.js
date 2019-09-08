const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const PaymentSchema = new mongoose.Schema({

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
