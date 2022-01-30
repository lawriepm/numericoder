const express = require('express');
const { validateNumericode } = require('../middleware');
const { get } = require('../controllers/decode');

const router = express.Router();

router.get('/', validateNumericode, get);

module.exports = router;
