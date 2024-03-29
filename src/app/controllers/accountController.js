const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

const Account = require('../models/account');


router.use(authMiddleware);


router.post('/account', async (req, res) => {


    try {
        const { balance, deposits, shopping } = req.body;

        const account = await Account.create({ balance, deposits, shopping, user_id: req.userId });
        await account.save();

        return res.send({ account });


    } catch (err) {
        return res.status(400).send({
            error: 'Error create account!'
        });

    }
});


module.exports = app => app.use('/', router);