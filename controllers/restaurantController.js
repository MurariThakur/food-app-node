const Restaurant = require("../models/resturant.js");

const createRestaurantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      food,
      time,
      logo,
      ratingCount,
      code,
      coods,
      phone,
      rating,
    } = req.body;

    if (!title || !food) {
      return res
        .status(400)
        .send({ success: false, message: "All fields are required" });
    }

    const newRestaurant = new Restaurant({
      title,
      imageUrl,
      food,
      time,
      logo,
      ratingCount,
      code,
      phone,
      coods,
      rating,
    });

    await newRestaurant.save();

    return res
      .status(201)
      .send({
        success: true,
        message: "Restaurant created successfully",
        newRestaurant,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateRestaurantController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(404).send({
        success: false,
        message: "No restaurant found or provided",
      });
    }
    const {
      title,
      imageUrl,
      food,
      time,
      logo,
      ratingCount,
      code,
      coods,
      phone,
      rating,
    } = req.body;
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      {
        title,
        imageUrl,
        food,
        time,
        logo,
        ratingCount,
        code,
        coods,
        phone,
        rating,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Restaurant updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update restaurant api",
      error,
    });
  }
};

const getAllRestaurantController = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    if (!restaurants) {
      return res.status(404).send({
        success: false,
        message: "No restaurant available",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: restaurants.length,
      restaurants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get all restaurants api",
      error,
    });
  }
};

const getRestaurantByIdController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(404).send({
        success: false,
        message: "Please provide id",
      });
    }
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).send({
        success: false,
        message: "No restaurant found",
      });
    }
    res.status(200).send({
      success: true,
      restaurant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get restaurant by id api",
      error,
    });
  }
};

const deleteRestaurantController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(404).send({
        success: false,
        message: "Please provide id",
      });
    }
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).send({
        success: false,
        message: "No restaurant found",
      });
    }
    await Restaurant.findByIdAndDelete(restaurantId);
    res.status(200).send({
      success: true,
      message: "Restaurant deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete restaurant api",
      error,
    });
  }
};


module.exports = {
  createRestaurantController,
  updateRestaurantController,
  getAllRestaurantController,
    getRestaurantByIdController,
    deleteRestaurantController
};
