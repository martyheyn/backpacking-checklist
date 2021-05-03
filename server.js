const express = require('express');
const app = express();
const path = require('path');

// Initialize Middleware for body parser (to get data from api requests)
app.use(express.json({ extended: false }));

// Test on home
app.get('/', (req, res) => res.send('API Running'));

// Define Routes for api calls
app.use('/api/sack', require('./routes/api/sack'));

const port = process.env.PORT || 5000;

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server started on PORT ${port}`));
