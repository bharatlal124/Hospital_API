//Add module here
const express = require('express');
const router = express.Router();

//Router path
router.use('/v1', require('./v1'));

module.exports = router;