const express = require("express");
const mysql = require("mysql2");
const cors = require("cors"); // Move this to the top

const app = express(); // Define app here
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Use express to parse JSON bodies

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "ahmad", // Replace with your actual MySQL username
  password: "Master6648", // Replace with your actual MySQL password
  database: "contactform", // Use the correct database name 'contactform'
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// POST route to handle contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const query = "INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).send("Error submitting form");
    }
    res.status(200).send("Form submitted successfully");
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
