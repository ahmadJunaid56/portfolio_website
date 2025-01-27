import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import 'dotenv/config'; // Make sure environment variables are loaded

const prisma = new PrismaClient();

// Create a Nodemailer transporter for email sending
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like SendGrid or Mailgun
  auth: {
    user: process.env.EMAIL, // Access the email address from environment variables
    pass: process.env.EMAIL_PASSWORD,  // Access the email password or app password from environment variables
  },
});

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Validate form fields
    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    // Save contact data to the database
    const newContact = await prisma.contact.create({
      data: { name, email, phone, message },
    });

    // Send email notification to your email address with the visitor's email as the sender
    const mailOptions = {
      from: email, // Set the visitor's email as the sender
      to: process.env.EMAIL, // Your email address as the recipient
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }

    // Disconnect Prisma client
    await prisma.$disconnect();

    // Return successful response
    return new Response(JSON.stringify({ message: "Form submitted successfully", contact: newContact }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to submit the form" }), { status: 500 });
  }
}