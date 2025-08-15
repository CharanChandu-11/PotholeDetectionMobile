const exp = require('express');
const cors = require('cors');
require('dotenv').config();
const connect= require('./config/db');

const app = exp();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(exp.json());

// Routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Connect DB, then start server
connect().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
