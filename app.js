const express = require("express");
const app = express();

// Dummy data for Italian restaurant dishes
const italianDishes = require("./italianDishes");

// Define a route for /dishes
app.get("/dishes", (req, res) => {
  res.json(italianDishes); // Return the Italian dishes as JSON
});

// Start the Express server
const port = 8000; // Choose a port of your choice
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
