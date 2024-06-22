const carouselModel = require("../models/carousel.model.js");

const getCarousels = async (req, res) => {
  try {
    const carousels = await carouselModel.find({});
    res.status(200).json(carousels);
  } catch (errors) {
    res.status(500).json({ message: errors.message });
  }
};

const getCarousel = async (req, res) => {
  try {
    const { id } = req.params;
    const carousel = await carouselModel.findById(id);
    res.status(200).json(carousel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCarousel = async (req, res) => {
  try {
    const carousel = await carouselModel.create(req.body);
    res.status(200).json(carousel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCarousel = async (req, res) => {
  try {
    const { id } = req.params;
    const carousel = await carouselModel.findByIdAndDelete(id, req.body);
    if (!carousel) {
      return res.status(404).json({ message: "carousel not found" });
    }
    res.status(200).json({ message: "carousel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCarousel = async (req, res) => {
  try {
    const { id } = req.params;
    const carousel = await carouselModel.findByIdAndUpdate(id, req.body);
    if (!carousel) {
      return res.status(404).json({ message: "carousel not found" });
    }
    const updatedCarousel = await carouselModel.findById(id);
    res.status(200).json(updatedCarousel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCarousels,
  getCarousel,
  createCarousel,
  deleteCarousel,
  updateCarousel,
};
