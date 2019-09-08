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

router.get('/:paymentId', async (req, res) => {

    try {
         const payment = await Payment.findById(req.params.paymentId).populate('user');
         return res.send({ payment });
    
        }catch (err){

            return res.status(400).send({ error: 'Error loading payment' });
    }

});


/*
router.delete()('/:paymentsId', async (req, res) => {

    try {
        await Payment.findByIdAndRemove(req.params.paymenttId);
        return res.send();

    } catch (err) {
        return res.status(400).send({
            error: 'Error Deleting Payment!'
        });

    }
});






*/


module.exports = app => app.use('/auth', router);