// controllers/nameController.js
import Name from '../models/NameModel.js';

export const addName = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email are required" });
    }

    const newName = new Name({ name, email });
    await newName.save();

    res.status(201).json({ message: 'Name saved successfully', name: newName });
  } catch (error) {
    console.error("Error adding name:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
