// routes/projects.js
const express = require('express');
const router  = express.Router();
const Project = require('../models/Project');
const { protect } = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const { category, year, difficulty } = req.query;
    const filter = {};
    if (category)   filter.category   = category;
    if (year)       filter.year       = year;
    if (difficulty) filter.difficulty = difficulty;
    const projects = await Project.find(filter).populate('author', 'name').sort({ createdAt: -1 });
    res.json({ projects });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('author', 'name email');
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ project });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const project = await Project.create({ ...req.body, author: req.user._id });
    res.status(201).json({ project });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id/like', protect, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id, { $inc: { likes: 1 } }, { new: true }
    );
    res.json({ likes: project.likes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;