const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

const Payment = require('../models/payment');

router.use(authMiddleware);



router.post('/payments', async (req, res) => {


    try {
        const { name_card, number_card, date_card, cvv_card } = req.body;

        const payment = await Payment.create({ name_card, number_card, date_card, cvv_card });
        await payment.save();

        return res.send({ payment });


    } catch (err) {
        return res.status(400).send({
            error: 'Error making payment!'
        });

    }
});


router.get('/payments', async (req, res) => {

    try {
        const payment = await Payment.find().populate(['payment']);
        return res.send({ payment });


    } catch (err) {
        return res.status(400).send({
            error: 'Error get payments!'
        });

    }
});




module.exports = app => app.use('/auth', router);