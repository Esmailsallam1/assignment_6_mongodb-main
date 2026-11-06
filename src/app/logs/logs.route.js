const express = require('express');
const router = express.Router();
const logsController = require('./logs.controller');

router.post('/', logsController.insertLog);

module.exports = router;
