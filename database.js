const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectedLink = await mongoose.connect(
      "mongodb+srv://tcp-student:Okita%401993@cluster0.0tyjygy.mongodb.net/"
    );
    console.log(`db is connected: ${connectedLink.connection.host}`);
  } catch (error) {
    console.log(`something went wrong while connecting to db: ${error}`);
  }
};

module.exports = connectDB;
