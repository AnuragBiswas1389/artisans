const BannerModel = require("../models/banner.model.js");

const getBanners = async (req, res) => {
  try {
    const banner = await BannerModel.find({});
    res.status(200).json(banner);
  } catch (errors) {
    res.status(500).json({ message: errors.message });
  }
};

const getBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await BannerModel.findById(id);
    res.status(200).json(carousel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBanner = async (req, res) => {
  try {
    const banner = await BannerModel.create(req.body);
    res.status(200).json(banner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await BannerModel.findByIdAndDelete(id, req.body);
    if (!banner) {
      return res.status(404).json({ message: "banner not found" });
    }
    res.status(200).json({ message: "banner deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const Banner = await BannerModel.findByIdAndUpdate(id, req.body);
    if (!Banner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    const updatedBanner = await BannerModel.findById(id);
    res.status(200).json(updatedBanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBanners,
  getBanner,
  createBanner,
  deleteBanner,
  updateBanner,
};
