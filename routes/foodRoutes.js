const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const { createFoodController, updateFoodController, allFoodController, getFoodByIdController, deleteFoodController } = require('../controllers/foodController');

// Create food
router.post('/createfoods', authMiddleware, createFoodController);

// Update food
router.put('/updatefoods/:id', authMiddleware, updateFoodController);

// Get food by id
router.get('/getfood/:id', authMiddleware, getFoodByIdController);

// Get all foods
router.get('/getallfoods', authMiddleware, allFoodController);

// Delete food
router.delete('/deletefoods/:id', authMiddleware,adminMiddleware, deleteFoodController);

module.exports = router;
