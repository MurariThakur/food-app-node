const foodModel = require('../models/food');

const createFoodController = async (req, res) => {
  try {
    const { name, description, price ,imageUrl,category,restaurant,code,foodTags,rating,ratingCount,isAvailable} = req.body; 

    if (!name || !description || !price ) {
      return res.status(400).send({
        success: false,
        message: 'Name and Description are required',
      });
    }
    const food = new foodModel({ name, description, price, imageUrl, category, restaurant, code, foodTags, rating, ratingCount, isAvailable });
    await food.save();
    res.status(201).send({  
        success: true,  
        message: 'Food created successfully',
        food,
    });
  } catch (error) { 
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in creating category',
      error,
    });
  }
};

const updateFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({
        success: false,
        message: 'No food found or provided',
      });
    }
    const updateData = req.body;

    const updatedFood = await foodModel.findByIdAndUpdate(foodId, updateData, { new: true });
    if (!updatedFood) {
      return res.status(404).send({
        success: false,
        message: 'Food not found',
      });
    }

    res.status(200).send({
      success: true,
      message: 'Food updated successfully',
      food: updatedFood,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in updating food',
      error,
    });
  }
};

const allFoodController = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    if (!foods) {
      return res.status(404).send({
        success: false,
        message: "No food found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Foods fetched successfully",
      foods,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching foods",
      error,
    });
  }
};      

const getFoodByIdController = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "Food not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Food fetched successfully",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching food",
      error,
    });
  }
};

const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await foodModel.findByIdAndDelete(foodId);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "Food not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Food deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting food",
      error,
    });
  }
};

module.exports = { createFoodController, updateFoodController, allFoodController, getFoodByIdController, deleteFoodController };