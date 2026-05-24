const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  year: { type: Number, required: true, enum: [1, 2, 3, 4] },
  semester: { type: Number, required: true },
  type: {
    type: String,
    enum: ['Notes', 'PYQ', 'Lab Manual', 'Assignment', 'Reference'],
    default: 'Notes'
  },
  fileUrl: { type: String, default: '' },
  content: { type: String, default: '' },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  downloads: { type: Number, default: 0 },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', noteSchema);