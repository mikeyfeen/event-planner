const express = require('express'); 
const {authenticate} = require('../middlewares/auth');
const {createEvent} = require('../controllers/event');

const router = express.Router();

router = express.Router();

router.post('/', authenticate, createEvent);

module.exports = router;