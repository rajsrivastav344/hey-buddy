// routes/notes.js
const express = require('express');
const router  = express.Router();
const Note    = require('../models/Note');
const { protect } = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const { year, semester, type, subject } = req.query;
    const filter = {};
    if (year)    filter.year    = year;
    if (semester) filter.semester = semester;
    if (type)    filter.type    = type;
    if (subject) filter.subject = subject;

    const notes = await Note.find(filter).populate('subject', 'name code').sort({ createdAt: -1 });
    res.json({ notes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id, { $inc: { downloads: 1 } }, { new: true }
    ).populate('subject uploadedBy', 'name code');
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json({ note });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const note = await Note.create({ ...req.body, uploadedBy: req.user._id });
    res.status(201).json({ note });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;