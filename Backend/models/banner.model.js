const mongoose = require("mongoose");

const BannerSchema = mongoose.Schema({
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

const Banner = mongoose.model("Banner", BannerSchema);
module.exports = Banner;
