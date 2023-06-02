const express = require('express');
const mysql = require('mysql');
const app = express();

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'studmysql01.fhict.local',
  user: 'dbi507258',
  password: 'naakTMags',
  database: 'test'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define API routes
app.get('/api/data', (req, res) => {
  // Retrieve data from MySQL database
  connection.query('SELECT * FROM test', (err, rows) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(rows);
  });
});

// Start the server
const port = 5173; // or any other port you prefer
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
