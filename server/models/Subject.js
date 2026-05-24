const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  code: { type: String, required: true, unique: true },
  year: { type: Number, required: true, enum: [1, 2, 3, 4] },
  semester: { type: Number, required: true, enum: [1, 2, 3, 4, 5, 6, 7, 8] },
  branch: {
    type: [String],
    default: ['CSE', 'IT']
  },
  category: {
    type: String,
    enum: ['Core', 'Programming', 'Web Dev', 'Data Science', 'AI/ML', 'CN', 'Cloud', 'Labs', 'Elective'],
    required: true
  },
  description: { type: String, default: '' },
  icon: { type: String, default: '📚' },
  topics: [{ title: String, description: String, isPractical: Boolean }],
  credits: { type: Number, default: 4 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subject', subjectSchema);