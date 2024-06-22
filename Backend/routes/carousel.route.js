const express = require("express");
const product = require("../models/carousel.model.js");
const router = express.Router();
const {
  getCarousels,
  getCarousel,
  createCarousel,
  deleteCarousel,
  updateCarousel,
} = require("../controllers/Carousel.controller.js");

router.get("/", getCarousels);
router.get("/:id", getCarousel);
router.post("/", createCarousel);
router.put("/", updateCarousel);
router.delete("/:id", deleteCarousel);

module.exports = router;
