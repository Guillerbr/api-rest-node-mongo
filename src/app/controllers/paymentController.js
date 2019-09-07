const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router()

const authConfig = require('../../config/auth');

router.use(authMiddleware);

router.get('/payments', async (req, res) => {
    try {
        const projects = await Project.find().populate(['user', 'tasks']);

        return res.send({ projects });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading projects!' });

    }
});


module.exports = app => app.use('/auth', router);