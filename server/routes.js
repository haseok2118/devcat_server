const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/cards', controllers.getCardController);
router.post('/cards', controllers.postCardController);

module.exports = router;
