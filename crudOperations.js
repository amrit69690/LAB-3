// crudOperations.js

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3002;

// Middleware for parsing JSON requests
app.use(express.json());

// READ: Get all car data
app.get('/cars', (req, res) => {
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) res.status(500).send('Error reading JSON data');
    else res.json(JSON.parse(data));
  });
});

// CREATE: Add a new car
app.post('/cars', (req, res) => {
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    const cars = JSON.parse(data);
    const newCar = req.body;
    cars.push(newCar);
    fs.writeFile('./data/data.json', JSON.stringify(cars), (err) => {
      if (err) res.status(500).send('Error adding new car');
      else res.status(201).send(newCar);
    });
  });
});

// UPDATE: Update a car by ID
app.put('/cars/:id', (req, res) => {
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    let cars = JSON.parse(data);
    const carId = parseInt(req.params.id);
    cars = cars.map((car) => (car.id === carId ? { ...car, ...req.body } : car));
    fs.writeFile('./data/data.json', JSON.stringify(cars), (err) => {
      if (err) res.status(500).send('Error updating car');
      else res.send(`Car with ID ${carId} updated successfully`);
    });
  });
});

// DELETE: Delete a car by ID
app.delete('/cars/:id', (req, res) => {
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    let cars = JSON.parse(data);
    const carId = parseInt(req.params.id);
    cars = cars.filter((car) => car.id !== carId);
    fs.writeFile('./data/data.json', JSON.stringify(cars), (err) => {
      if (err) res.status(500).send('Error deleting car');
      else res.send(`Car with ID ${carId} deleted successfully`);
    });
  });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server for crudOperations.js is running on http://localhost:${PORT}`);
});
