const express = require("express");

const router = express.Router();

const {
  getAllItalianDishes,
  getOneDish,
  deleteDish,
  updateDish,
} = require("../controllers/italianDishes.controllers");

// Define a route for all /dishes
router.get("/", getAllItalianDishes);

// Define a route for one /dishes
router.get("/:id", getOneDish);

// Create a middleware for creating a dish
router.post("/");

// Create a middleware for deleting a dish
router.delete("/:id", deleteDish);

// Create a middleware for updating a dish
router.put("/:id", updateDish);

module.exports = router;
