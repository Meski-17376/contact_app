const express = require('express');
const myController = require('../controller/myController');

const router = express.Router();

router.post('/', myController.create);
router.get('/', myController.getAll);
router.get('/:id', myController.getById);
router.put('/:id', myController.update);
router.delete('/:id', myController.delete);

module.exports = router;
