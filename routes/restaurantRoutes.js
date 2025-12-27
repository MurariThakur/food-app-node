const express = require('express');
const router = express.Router();
const {createRestaurantController,updateRestaurantController,getAllRestaurantController,getRestaurantByIdController,deleteRestaurantController} = require('../controllers/restaurantController.js');
const authMiddleware = require('../middleware/authMiddleware.js');

router.post('/createrestaurant', authMiddleware, createRestaurantController);
router.put('/updaterestaurant/:id',authMiddleware, updateRestaurantController);
router.get('/getallrestaurant',authMiddleware, getAllRestaurantController);
router.get('/getrestaurant/:id',authMiddleware, getRestaurantByIdController);
router.delete('/deleterestaurant/:id',authMiddleware, deleteRestaurantController);

module.exports = router;