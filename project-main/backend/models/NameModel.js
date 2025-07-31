// nameModel.js
import mongoose from 'mongoose';

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

// Check if the model already exists to prevent overwrite issues in dev
const NameModel = mongoose.models.Name || mongoose.model('Name', nameSchema);

export default NameModel;
