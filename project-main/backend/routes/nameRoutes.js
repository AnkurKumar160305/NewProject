import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Route to save a name
router.post('/add', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    // Get the name DB connection from middleware
    const Name = req.nameDB.model('Name', nameSchema);

    const newName = new Name({ name });
    await newName.save();

    res.status(201).json({ message: "Name saved successfully" });
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
