// app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const Question = require('./models/question'); // Assuming your model file is named Question.js

const app = express();
const PORT = 5000;
app.use(express.json()); // Add this line to parse JSON requests


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ColabCafe', {
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

app.post('/api/postQues', async (req, res) => {
  const { question, description } = req.body;
  try {
      const newQuestion = new Question({ question, description });
      await newQuestion.save();
      res.status(201).json(newQuestion);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
