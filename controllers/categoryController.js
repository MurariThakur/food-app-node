const CategoryModel = require("../models/category");

const createCategoryController = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    if (!name) {
      return res
        .status(400)
        .send({ success: false, message: "Category name is required" });
    }
    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(400).send({
        success: false,
        message: "Category already exists",
      });
    }
    const category = await new CategoryModel({
      name,
      imageUrl,
    }).save();
    res.status(201).send({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating category",
      error,
    });
  }
};

const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    res.status(200).send({
      success: true,
      message: "Categories fetched successfully",
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching categories",
      error,
    });
  }
};

const updateCategoryController = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { name, imageUrl } = req.body;
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      categoryId,
      {
        name,
        imageUrl,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updating category",
      error,
    });
  }
};

const deleteCategoryController = async (req, res) => {
  try {
    const categoryId = req.params.id;
    await CategoryModel.findByIdAndDelete(categoryId);
    res.status(200).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting category",
      error,
    });
  }
};

const getCategoryByIdController = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Category fetched successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching category by id",
      error,
    });
  }
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
  updateCategoryController,
  deleteCategoryController,
  getCategoryByIdController,
};
