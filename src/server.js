// app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const Question = require('./models/question'); // Assuming your model file is named Question.js

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/colab-cafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Use the cors middleware
app.use(cors());

app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
