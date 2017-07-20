'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/articleController')

/* GET users listing. */
router.post('/',controller.createArticle);
router.get('/',controller.getAllArticle);
router.put('/:id',controller.updateArticle);
router.delete('/:id',controller.deleteArticle);
router.get('/:id',controller.getOneArticle);

module.exports = router;
