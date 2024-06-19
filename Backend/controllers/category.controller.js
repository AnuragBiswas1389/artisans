const categoryModel = require("../models/category.model");

const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.status(200).json(categories);
  } catch (errors) {
    res.status(500).json({ message: errors.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = await categoryModel.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id, req.body);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(id, req.body);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
