// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  description: String,
  continent: String, // Assuming you want to store continent information
  tags: [String] // Optional: Array of tags for each question
});

module.exports = mongoose.model('Question', questionSchema);
