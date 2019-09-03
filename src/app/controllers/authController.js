const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authConfig = require('../../config/auth');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');


function generateToken(params = {}) {

    return jwt.sign(params, authConfig.secret,
        {
            expiresIn: 86400,
        });
}


router.post('/register', async (req, res) => {

    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User already registered' });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({
            user,
            token: generateToken({ id: user.id }),
        });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }


});

router.post('/authuser', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400)
            .send({ error: 'User not found' });
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' });

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {

        expiresIn: 86400,  //one day expires
    });

    res.send({
        user,
        token: generateToken({ id: user.id }),
    });
});

router.post('/forgot_password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });               //procura user com email no db

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        const token = crypto.randomBytes(20).toString('hex');     //funcao que gera o token

        const now = new Date();                                   //tempo de expiracao do token 1hr
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        });

        mailer.sendMail({
            to: email,
            from: 'aloimed2009adv@gmail.com',
            template: 'auth/forgot_password',
            context: { token },
        }, (err) => {
            if (err)
                return res.status(400).send({ error: 'Cannot send forgot password email' });
            return res.send();

        })
    } catch (err) {

        res.status(400).send({ error: 'Erro on forgot password, try again' });
    }

});




module.exports = app => app.use('/auth', router);