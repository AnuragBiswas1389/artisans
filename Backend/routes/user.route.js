const express = require("express");
const product = require("../models/user.model.js");
const router = express.Router();
const {
  authenticate,
  createuser,
  deleteuser,
  updateuser,
} = require("../controllers/user.controller.js");

router.post("/authenticate", authenticate);
router.post("/", createuser);
router.put("/", updateuser);
router.delete("/:id", deleteuser);

module.exports = router;
