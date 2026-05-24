const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth',     require('./routes/auth'));
app.use('/api/subjects', require('./routes/subjects'));
app.use('/api/notes',    require('./routes/notes'));
app.use('/api/pyq',      require('./routes/pyq'));
app.use('/api/projects', require('./routes/project'));
app.use('/api/labs',     require('./routes/lab'));
app.use('/api/chatbot',  require('./routes/chatbot'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Hey-Buddy server is running 🚀', time: new Date() });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/heybuddy')
  .then(() => {
    console.log('✅ MongoDB Connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

module.exports = app;