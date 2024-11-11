// groupInfo.js

const express = require('express');
const app = express();
const PORT = 3000;

// Route for displaying group names on the home page
app.get('/', (req, res) => {
  res.send('<h1>Group Members</h1><p>Member 1: Amritpal Singh</p><p>Member 2: Harpreet Singh</p>');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server for groupInfo.js is running on http://localhost:${PORT}`);
});
