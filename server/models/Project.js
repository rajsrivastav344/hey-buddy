const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  techStack: [String],
  category: {
    type: String,
    enum: ['Web Dev', 'AI/ML', 'Data Science', 'Android', 'IoT', 'Blockchain', 'CN', 'Cloud', 'Other'],
    required: true
  },
  year: { type: Number, enum: [1, 2, 3, 4], required: true },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Intermediate' },
  githubUrl: { type: String, default: '' },
  demoUrl:   { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  steps: [{ stepNo: Number, title: String, description: String, code: String }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);