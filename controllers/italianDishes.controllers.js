// let italianDishes = require("../italianDishes");
let Dish = require("../models/Dish");

exports.getAllItalianDishes = async (req, res) => {
  try {
    const italianDishes = await Dish.find();
    res.status(200).json(italianDishes);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

exports.getOneDish = async (req, res) => {
  try {
    const { id } = req.params;
    const foundDish = await Dish.findById(id);
    if (!foundDish) {
      return res.status(404).json({ error: "Dish not found" });
    }
    res.status(200).json(foundDish);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

exports.createDish = async (req, res) => {
  try {
    const newDish = await Dish.create(req.body);
    res.status(201).json(newDish);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
//
exports.deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDish = await Dish.findByIdAndDelete(id);
    if (!deletedDish) {
      return res.status(404).json({ error: "Dish not found" });
    }
    res.status(204).end();
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

exports.updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDish = await Dish.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedDish) {
      return res.status(404).json({ error: "Dish not found" });
    }
    res.status(200).json(updatedDish);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
