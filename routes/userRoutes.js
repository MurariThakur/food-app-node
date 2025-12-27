const express = require('express');
const {getUserController} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();    

router.get('/getuser',authMiddleware, getUserController);

module.exports = router;
