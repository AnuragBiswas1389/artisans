const express = require("express");
const router = express.Router();
const {
  getBanners,
  getBanner,
  createBanner,
  deleteBanner,
  updateBanner,
} = require("../controllers/banner.controller.js");

router.get("/", getBanners);
router.get("/:id", getBanner);
router.post("/", createBanner);
router.put("/", updateBanner);
router.delete("/:id", deleteBanner);

module.exports = router;
