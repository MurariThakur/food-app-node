const express = require('express');
const {getUserController, updateUserController, updatePasswordController,deleteProfileController} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();    

router.get('/getuser',authMiddleware, getUserController);
router.put('/updateuser',authMiddleware, updateUserController);
router.post('/updatepassword',authMiddleware, updatePasswordController);
router.delete('/deleteprofile/:id',authMiddleware, deleteProfileController);


module.exports = router;
