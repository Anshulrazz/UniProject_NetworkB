const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  related_photo: String,
  caption: String,
  file: { type: String, required: true },
  category: { type: String, required: true },
  likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Document', DocumentSchema);
