const express = require("express");
const router = express.Router();
const {
  createCategoryController,
  updateCategoryController,
  getAllCategoriesController,
  getCategoryByIdController,
  deleteCategoryController,
} = require("../controllers/categoryController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.post("/createcategory", authMiddleware, createCategoryController);
router.put("/updatecategory/:id", authMiddleware, updateCategoryController);
router.get("/getallcategories", authMiddleware, getAllCategoriesController);
router.get("/getcategory/:id", authMiddleware, getCategoryByIdController);
router.delete("/deletecategory/:id", authMiddleware, deleteCategoryController);

module.exports = router;
