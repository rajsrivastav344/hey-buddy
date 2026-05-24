// routes/chatbot.js — Claude AI Chatbot
const express = require('express');
const router  = express.Router();
const https   = require('https');
const { protect } = require('../middleware/auth');

const SYSTEM_PROMPT = `You are Hey-Buddy, an expert AI tutor for B.Tech students in India. 
You help students with:
- All B.Tech subjects: Programming (C, C++, Java, Python), Data Structures, Algorithms, DBMS, OS, CN, Web Development, Data Science, AI/ML, Cloud Computing
- Previous year question papers and exam preparation
- Project ideas and implementation guidance
- Lab manuals and practical experiments
- Interview preparation and placement tips

Be friendly, encouraging, and explain concepts clearly with examples and code snippets when relevant.
Always respond in a helpful, student-friendly tone. Use simple language but be technically accurate.`;

router.post('/message', protect, async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    if (!message) return res.status(400).json({ message: 'Message is required' });

    const messages = [
      ...history.map(h => ({ role: h.role, content: h.content })),
      { role: 'user', content: message }
    ];

    const payload = JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages
    });

    const options = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const apiReq = https.request(options, (apiRes) => {
      let data = '';
      apiRes.on('data', chunk => { data += chunk; });
      apiRes.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) return res.status(400).json({ message: parsed.error.message });
          const reply = parsed.content?.[0]?.text || 'Sorry, I could not understand that.';
          res.json({ reply, role: 'assistant' });
        } catch (e) {
          res.status(500).json({ message: 'Failed to parse AI response' });
        }
      });
    });

    apiReq.on('error', (e) => res.status(500).json({ message: e.message }));
    apiReq.write(payload);
    apiReq.end();

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;