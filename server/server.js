const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// --------------------
// CORS CONFIG (FIXED)
// --------------------
const allowedOrigins = [
  'http://localhost:3000',
  'https://hey-buddy-brown.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow server-to-server or Postman (no origin)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS blocked: ' + origin));
    }
  },
  credentials: true
}));

// --------------------
// BODY PARSERS
// --------------------
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// --------------------
// ROUTES
// --------------------
app.use('/api/auth', require('./routes/auth'));
app.use('/api/subjects', require('./routes/subjects'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/pyq', require('./routes/pyq'));
app.use('/api/projects', require('./routes/project'));
app.use('/api/labs', require('./routes/lab'));
app.use('/api/chatbot', require('./routes/chatbot'));

// --------------------
// HEALTH CHECK
// --------------------
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Hey-Buddy server is running 🚀',
    time: new Date()
  });
});

// --------------------
// MONGODB CONNECTION
// --------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

module.exports = app;