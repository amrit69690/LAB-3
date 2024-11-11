// dataDisplay.js

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001;

// Route for displaying JSON data
app.get('/cars', (req, res) => {
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading JSON data');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server for dataDisplay.js is running on http://localhost:${PORT}/cars`);
});
