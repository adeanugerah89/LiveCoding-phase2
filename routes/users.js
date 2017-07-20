'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/userController')

/* GET users listing. */
router.post('/', controller.createUser);

module.exports = router;
