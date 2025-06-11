const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

let students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// GET all
app.get('/students', (req, res) => {
  res.json(students);
});

// POST create
app.post('/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).send('Student added');
});

// GET by ID
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student);
});

app.listen(3000, () => {
  console.log('REST API running on http://localhost:3000');
});
