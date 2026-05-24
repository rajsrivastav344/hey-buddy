const express  = require('express');
const router   = express.Router();
const Subject  = require('../models/Subject');
const { protect, adminOnly } = require('../middleware/auth');

// GET all subjects (with optional filters)
router.get('/', async (req, res) => {
  try {
    const { year, semester, category, branch } = req.query;
    const filter = {};
    if (year)      filter.year      = year;
    if (semester)  filter.semester  = semester;
    if (category)  filter.category  = category;
    if (branch)    filter.branch    = { $in: [branch] };

    const subjects = await Subject.find(filter).sort({ year: 1, semester: 1 });
    res.json({ subjects, count: subjects.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single subject
router.get('/:id', async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) return res.status(404).json({ message: 'Subject not found' });
    res.json({ subject });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create subject (admin only)
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).json({ subject });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update subject (admin only)
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ subject });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE subject (admin only)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    res.json({ message: 'Subject deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;