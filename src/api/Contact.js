// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Create the transporter using Gmail service
    const transporter = nodemailer.createTransport({
      service: "gmail",  // You can change to another service like Outlook, etc.
      auth: {
        user: process.env.EMAIL,  // Sender's email (from .env)
        pass: process.env.EMAIL_PASSWORD,  // Sender's email password (from .env)
      },
    });

    // Set up email options
    const mailOptions = {
      from: process.env.EMAIL,  // Sender's email (same as recipient)
      to: process.env.EMAIL,  // Recipient's email (same as sender)
      subject: `New Contact Form Submission from ${name}`,  // Subject line
      text: `You have received a new message from the contact form.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,  // Plain text body
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error submitting form" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
