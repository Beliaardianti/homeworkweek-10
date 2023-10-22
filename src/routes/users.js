const express = require('express');
const router = express.Router();
const db = require('../config/db')
const model = require('../../src/models/users')
const controller = require('../../src/controler/users');


router.get('/', controller.getAll)
router.get('/', authMiddleware.auth,  controller.read);
router.get('/:id', authMiddleware.auth, controller.readById);
router.post('/', authMiddleware.auth, controller.signup);
router.patch('/:id', authMiddleware.auth, controller.update);
router.delete('/:id', authMiddleware.auth, controller.destroy);

router.post('/signin', controller.signin);


module.exports = router;