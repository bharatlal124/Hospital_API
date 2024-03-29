//Add module here
const express = require('express');
const router = express.Router();

//Router path
router.use('/api', require('./api'));

module.exports = router;