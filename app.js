const express = require("express");
const uuid4 = require("uuid4");

// Dummy data for Italian restaurant dishes
const italianDishes = require("./italianDishes");

// Create an app by calling express()
const app = express();

// Parsing the request.body into json format
app.use(express.json());

// Define a route for all /dishes
app.get("/dishes/italian", (req, res) => {
  try {
    res.status(200).json(italianDishes); // Return the Italian dishes as JSON
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Define a route for one /dishes
app.get("/dishes/italian/:id", (req, res) => {
  try {
    const { id } = req.params;
    const foundDish = italianDishes.find((dish) => dish.id === Number(id));
    res.status(200).json(foundDish); // Return the Italian dishes as JSON
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Create a middleware for creating a dish
app.post("/dishes/italian", (req, res) => {
  try {
    const newDishData = { ...req.body, id: uuid4() };

    // Add the new dish to your menu (e.g., an array of dishes)
    italianDishes.push(newDishData);

    // Send a response with the newly created dish
    res.status(201).json(newDish);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Create a middleware for deleting a dish
app.delete("/dishes/italian/:id", (req, res) => {
  try {
    const dishId = req.params.id;
    const dishIndex = italianDishes.findIndex((dish) => dish.id === +dishId);
    if (dishIndex !== -1) {
      italianDishes.splice(dishIndex, 1);
      res.status(204).end(); // Respond with a 204 No Content status code
    } else {
      res.status(404).json({ error: "Dish not found" }); // Respond with a 404 Not Found status code and an error message
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Create a middleware for updating a dish
app.put("/dishes/italian/:id", (req, res) => {
  try {
    const dishId = req.params.id;
    const updatedDishData = req.body;
    // Implement the code to update the dish in the array
    const index = italianDishes.findIndex((dish) => dish.id === Number(dishId));
    if (index !== -1) {
      // Update the dish with the new data
      italianDishes[index] = { ...italianDishes[index], ...updatedDishData };
      res.status(201).json(italianDishes[index]); // Respond with the updated dish
    } else {
      res.status(404).json({ error: "Dish not found" }); // Respond with a 404 Not Found status code and an error message
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Global 404 Middleware: This should be placed at the end of your middleware and route definitions.
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Start the Express server
const PORT = 8000; // Choose a port of your choice
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
