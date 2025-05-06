const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let messages = [];

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Message is required' });
  const newMessage = { id: Date.now(), text };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
