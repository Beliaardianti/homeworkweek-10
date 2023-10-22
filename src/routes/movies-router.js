const express = require('express');
const router = express.Router();
const db = require('../config/db')
const model = require('../../src/models/movies')
const controller = require('../../src/controler/movies');



router.get('/', controller.getAll)
router.post('/', controller.post)
router.put ('/', controller.put)
router.delete('/', controller.delete)

module.exports = router;