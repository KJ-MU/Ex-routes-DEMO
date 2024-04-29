const express = require("express");
const connectDB = require("./database");
connectDB();
const italianDishesRoutes = require("./routes/italianDishes.routes");

// Create an app by calling express()
const app = express();

// Parsing the request.body into json format
app.use(express.json());
app.use("/dishes/italian", italianDishesRoutes);

// Global 404 Middleware: This should be placed at the end of your middleware and route definitions.
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Start the Express server
const PORT = 8000; // Choose a port of your choice
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
