import mysql from 'mysql2';

// Create a connection pool to handle multiple requests efficiently
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',     // Use environment variable or default to localhost
  user: process.env.MYSQL_USER || 'root',          // Use environment variable or default to 'root'
  password: process.env.MYSQL_PASSWORD || '',      // Use environment variable or default to empty
  database: process.env.MYSQL_DATABASE || 'viewersDB', // Use environment variable or default to 'viewersDB'
  waitForConnections: true, // Ensures the pool waits for a connection if the limit is reached
  connectionLimit: 10,     // Limit the number of simultaneous connections to avoid hitting the MySQL max connections
  queueLimit: 0            // No limit for connection queuing
});

pool.query('SELECT * FROM table_name', (err, results) => {
  if (err) {
    console.error('Database error:', err);
  } else {
    console.log('Query results:', results);
  }
});

export default pool;
