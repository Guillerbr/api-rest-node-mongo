const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

const Account = require('../models/account');


router.use(authMiddleware);


router.post('/account', async (req, res) => {


    try {
        const { id_account, balance, deposits, shopping } = req.body;

        const account = await Account.create({ id_account, balance, deposits, shopping, user: req.userId });
        await account.save();

        return res.send({ account });


    } catch (err) {
        return res.status(400).send({
            error: 'Error create account!'
        });

    }
});