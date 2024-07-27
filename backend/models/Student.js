// Import Mongoose for MongoDB interactions
const mongoose = require('mongoose');

// Define the structure of a student document
const studentSchema = new mongoose.Schema({
  // Student's name, required field
  name: { type: String, required: true },
  // Student's age, required field
  age: { type: Number, required: true },
  // Student's course, required field
  course: { type: String, required: true },
  // Student's hobby, not required field
  hobby: {type: String, required: false}
});

// Create a Mongoose model based on the schema
const Student = mongoose.model('Student', studentSchema);

// Export the Student model for use in other parts of the application
module.exports = Student;
