const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS for frontend access
app.use(cors());

// Connect to MongoDB
const uri = "mongodb://localhost:27017/Clg"; // 'Clg' is your database name
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Feedback Schema & Model (this will connect to 'Feedback' collection)
const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
}, { collection: 'Feedback' });

const Feedback = mongoose.model('Feedback', feedbackSchema);

// API route to receive form submission
app.post('/submit-feedback', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Log incoming feedback data for debugging
    console.log('Received feedback:', { name, email, message });

    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    
    res.json({ message: "Thank you for your feedback!" });
  } catch (error) {
    console.error("Error saving feedback:", error);  // Log the full error
    res.status(500).json({ message: "Error saving feedback." });
  }
});

// Serve the index.html for frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
