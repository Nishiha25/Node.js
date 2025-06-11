const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// MySQL connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nishi_13",
  database: "express"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});

// Create `members` table if not exists
const createTable = `
  CREATE TABLE IF NOT EXISTS members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255)
  )
`;

con.query(createTable, (err) => {
  if (err) throw err;
  console.log("Members table is ready.");
});


// ✅ CREATE - Add a new member
app.post('/members', (req, res) => {
  const { name, address } = req.body;
  const sql = "INSERT INTO members (name, address) VALUES (?, ?)";
  con.query(sql, [name, address], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Member added", id: result.insertId });
  });
});

// 📖 READ - Get all members
app.get('/members', (req, res) => {
  con.query("SELECT * FROM members", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// 📖 READ - Get member by ID
app.get('/members/:id', (req, res) => {
  const id = req.params.id;
  con.query("SELECT * FROM members WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send("Member not found");
    res.json(result[0]);
  });
});

// 📝 UPDATE - Update member by ID
app.put('/members/:id', (req, res) => {
  const id = req.params.id;
  const { name, address } = req.body;
  const sql = "UPDATE members SET name = ?, address = ? WHERE id = ?";
  con.query(sql, [name, address, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Member updated" });
  });
});

// ❌ DELETE - Delete member by ID
app.delete('/members/:id', (req, res) => {
  const id = req.params.id;
  con.query("DELETE FROM members WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Member deleted" });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
