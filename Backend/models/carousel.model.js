const mongoose = require("mongoose");

const CarouselSchema = mongoose.Schema({
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  imageLg: {
    type: String,
    required: true,
  },
  imageMd: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
});

const Carousel = mongoose.model("Carousel", CarouselSchema);
module.exports = Carousel;
