'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/userController')

/* GET users listing. */
router.post('/',controller.createUser);
router.get('/',controller.getAllUser);
router.put('/:id',controller.updateUser);

module.exports = router;
