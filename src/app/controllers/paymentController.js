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
        const payment = await Payment.find().populate(['user', 'payment']);
        return res.send({ payment });


    } catch (err) {
        return res.status(400).send({
            error: 'Error get payments!'
        });

    }
});

router.get('/:paymentId', async (req, res) => {

    try {
        const payment = await Payment.findById(req.params.paymentId).populate('user');
        return res.send({ payment });

    } catch (err) {

        return res.status(400).send({ error: 'Error loading payment' });
    }

});

router.put('/:paymentId', async (req, res) => {
    try {
        const { name_card, number_card, date_card, cvv_card } = req.body;

        const payment = await Payment.findByIdAndUpdate(req.params.paymentId, {
            name_card,
            number_card,
            date_card,
            cvv_card,


        }, { new: true });

        await payment.save();

        return res.send({ payment });

    } catch (err) {
        return res.status(400).send({ error: "Error updating project!" });
    }

});



router.delete('/:paymentId', async (req, res) => {

    try {
        await Payment.findByIdAndRemove(req.params.paymentId);
        // return res.send();
        return res.status(200).send({ Ok: "Payment deleted sucessfull!" });

    } catch (err) {
        return res.status(400).send({
            error: 'Error Deleting Payment!'
        });

    }
});







module.exports = app => app.use('/auth', router);