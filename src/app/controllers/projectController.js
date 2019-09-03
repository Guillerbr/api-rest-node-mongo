const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

const Project = require('../models/Project');
const Task = require('../models/Task');

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId });
});

router.get('/:projectId', async (req, res) => {
    res.send({ user: req.userId });

});

router.post('/', async (req, res) => {
    res.send({ user: req.userId });

});

router.put('/:projectId', async (req, res) => {
    res.send({ user: req.userId });

});

router.delete('/:projectId', async (req, res) => {
    res.send({ user: req.userId });

});


module.exports = app => app.use('/projects', router);