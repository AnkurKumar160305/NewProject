// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true  // ensure unique
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true  // ✅ Adds createdAt and updatedAt
});

// ✅ Export function to receive connection
export default (connection) => connection.model('User', userSchema);
