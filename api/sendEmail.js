import nodemailer from 'nodemailer';
import connection from '../lib/mysql'; // Ensure MySQL connection is correctly imported

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Define email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New message from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);

      // Insert form data into the MySQL database
      const query = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
      connection.query(query, [name, email, message], (err, results) => {
        if (err) {
          console.error('Error saving message to DB:', err);
          return res.status(500).json({ message: 'Error saving message to database' });
        }
        console.log('Message saved to DB:', results);
      });

      // Respond with success
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
