const mongoose = require('../../database');

const PaymentSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },

    name_card: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    number_card: {
        type: Number,
        require: true
        // select: false,
    },
    date_card: {
        type: Number,
        unique: true,
        required: true
        // select: false,

    },
    cvv_card: {
        type: Number,
        unique: true,
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
