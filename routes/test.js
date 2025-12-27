const express = require('express');
const router = express.Router();
const {testUserController} = require('../controllers/testcontroller.js');   

router.get('/test',testUserController);

module.exports = router;