const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

// access config var
process.env.TOKEN_SECRET;

const userModel = require("../models/user.model.js");

const authenticate = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await userModel.findOne({
      phone: phone,
    });

    const phoneNumber = user.phone;
    const token = jwt.sign({ user: phoneNumber }, process.env.TOKEN_SECRET);
    console.log(token);

    if (await bcrypt.compare(password, user.password)) {
      res.json({ accessToken: token });
      res.status(200);
    } else {
      res.status(401).json("unauthorized");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create user--------------------------------
const createuser = async (req, res) => {
  try {
    const hashedPasword = await bcrypt.hash(req.body.password, 10);
    const userInfo = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: hashedPasword,
    };

    if ((await userModel.findOne({ phone: req.body.phone })) != null) {
      console.log("user already exist");
      res.status(409).json("User Already Registered");
    } else {
      await userModel.create(userInfo);
      console.log("user created");
      res.status(200).json("successfully registered");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//TO-D0: protected functions ------------------------
const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateuser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  authenticate,
  createuser,
  deleteuser,
  updateuser,
};
