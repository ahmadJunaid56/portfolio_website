import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use other services like Outlook, etc.
      auth: {
        user: process.env.EMAIL, // Your email address (sender)
        pass: process.env.EMAIL_PASSWORD, // Your email password (or app-specific password)
      },
    });

    const mailOptions = {
      from: email, // The sender's email (the visitor's email)
      to: process.env.RECIPIENT_EMAIL, // Your email address (recipient)
      subject: `New Contact Form Submission from ${name}`, // Subject line
      text: `You have received a new message from the contact form.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // Plain text body
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error submitting form" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
