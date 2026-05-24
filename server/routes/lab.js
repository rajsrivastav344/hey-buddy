// routes/labs.js
const express = require('express');
const router  = express.Router();
const Note    = require('../models/Note');

router.get('/', async (req, res) => {
  try {
    const { year, semester, subject } = req.query;
    const filter = { type: 'Lab Manual' };
    if (year)    filter.year    = year;
    if (semester) filter.semester = semester;
    if (subject) filter.subject = subject;
    const labs = await Note.find(filter).populate('subject', 'name code').sort({ createdAt: -1 });
    res.json({ labs });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;