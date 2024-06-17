const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please Enter name"],
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
      imageUrl: [String],
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("Product", ProductSchema);

module.exports = product;
