import connection from '../lib/mysql';  // Ensure mysql connection is properly established

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch the current view count from the database
    connection.query('SELECT count FROM views WHERE id = 1', (err, results) => {
      if (err) {
        console.error(err);  // Log error for better debugging
        return res.status(500).json({ error: 'Failed to fetch view count' });
      }
      if (results.length > 0) {
        // Successfully fetched the count
        res.status(200).json({ count: results[0].count });
      } else {
        // Handle case where the record might not exist
        res.status(404).json({ error: 'View count not found' });
      }
    });
  } else if (req.method === 'POST') {
    // Increment the view count in the database
    connection.query('UPDATE views SET count = count + 1 WHERE id = 1', (err, results) => {
      if (err) {
        console.error(err);  // Log error for better debugging
        return res.status(500).json({ error: 'Failed to update view count' });
      }
      
      // Confirm that the update was successful (e.g., check `results.affectedRows`)
      if (results.affectedRows > 0) {
        res.status(200).json({ message: 'View count updated successfully' });
      } else {
        res.status(400).json({ error: 'Failed to update view count' });
      }
    });
  } else {
    // Handle invalid HTTP methods
    res.status(405).json({ error: 'Method not allowed' });
  }
}
