import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from '../models/User.js';

dotenv.config();

const router = express.Router();

// User Registration Route
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // ✅ get model using app.locals.authDB
    const User = UserModel(req.app.locals.authDB);

    // ✅ check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("📥 Login attempt:", req.body);

    const User = UserModel(req.app.locals.authDB); // ⛔ could be the cause
    if (!User || typeof User.findOne !== 'function') {
      throw new Error("User model is not a valid Mongoose model");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: { email: user.email, username: user.username },
    });

  } catch (error) {
    console.error("🔥 Login failed:", error.stack || error.message);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});





export default router;
