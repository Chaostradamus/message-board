const express = require('express');
const router = express.Router();

// In-memory message storage
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!!", user: "Charles", added: new Date() }
];

// Homepage - show all messages
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

// New message form
router.get('/new', (req, res) => {
  res.render('form');
});

// Handle form submission
router.post('/new', (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  });
  res.redirect('/');
});

// Show single message
router.get('/:id', (req, res) => {
  const message = messages[req.params.id];
  res.render('show', { message });
});

module.exports = router;