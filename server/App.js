// server.js (Backend)
const express = require("express");
const app = express();
const mysql = require("mysql"); // or any other DB connection package

// Create connection to your MySQL Database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "your_database",
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database.");
});

// API endpoint to fetch iPhone data
app.get("/iphones", (req, res) => {
  let sql = "SELECT * FROM products WHERE category = 'iPhone'";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Serve the frontend HTML
app.use(express.static("public"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
