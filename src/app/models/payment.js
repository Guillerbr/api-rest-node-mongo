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
    Number_card: {
        type: Number,
        require: true
       // select: false,
    },
    Data_card: {
        type: Number,
        unique: true,
        required: true
       // select: false,

    },
    Cvv_card:  {
        type: Number,
        unique: true,
        required: true
        //select: false,

    },
    completed: {
        type: Boolean,
        require: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

UserSchema.pre('save', async function(next) {

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();

});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
