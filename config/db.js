const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Function to connect to MongoDB database
const connectDB = async () => {
  try {
    // Establish a connection to the MongoDB database using the provided URI
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    // Handle connection errors by logging the error message and exiting the process
    console.error(err.message);
    process.exit(1);
  }
};

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;
