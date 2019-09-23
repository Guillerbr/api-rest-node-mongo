const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

const Account = require('../models/account');


router.use(authMiddleware);
