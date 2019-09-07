const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router()

const User = require('../models/User');
const Payment = require('../models/Payment');

//const authConfig = require('../../config/auth');

router.use(authMiddleware);

router.post('/payments', async (req, res) => {
    try {
        const Payment = await Payment.find().populate(['user', 'name_card','date_card']);

        return res.send({ projects });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading projects!' });

    }
});


module.exports = app => app.use('/auth', router);