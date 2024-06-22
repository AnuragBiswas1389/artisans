const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cart: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: String,
        },
      },
    ],
    address: [
      {
        adressId: {
          type: String,
        },
        name: {
          type: String,
        },
        address: {
          type: String,
        },
        city: {
          type: String,
        },
        pincode: {
          type: Number,
        },
        State: {
          type: String,
        },
        Street: {
          type: String,
        },
        isDefault: {
          type: Boolean,
        },
        phone: {
          type: Number,
        },
        secPhone: {
          type: Number,
        },
      },
    ],
    orders: [
      {
        orderId: {
          type: String,
        },
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);
module.exports = user;
