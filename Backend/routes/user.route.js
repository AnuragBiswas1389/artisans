const express = require("express");
const product = require("../models/user.model.js");
const router = express.Router();
const {
  getusers,
  getuser,
  createuser,
  deleteuser,
  updateuser,
} = require("../controllers/user.controller.js");

router.get("/", getusers);
router.get("/:id", getuser);
router.post("/", createuser);
router.put("/", updateuser);
router.delete("/:id", deleteuser);

module.exports = router;
