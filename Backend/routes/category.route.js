const express = require("express");
const product = require("../models/category.model.js");
const router = express.Router();
const {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category.controller.js");

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", createCategory);
router.put("/", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
