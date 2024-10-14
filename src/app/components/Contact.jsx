"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of animation
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <section
      id="contact"
      className="py-10 bg-gray-900 text-white pb-36"
      data-aos="fade-up"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 pt-10">
          <span className="text-blue-500">Contact me</span>
        </h2>
        <form
          id="contact-form"
          className="mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
          style={{ maxWidth: "600px", height: "450px" }}
          data-aos="zoom-in-right"
        >
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-left mb-2 text-gray-400"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left mb-2 text-gray-400"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-left mb-2 text-gray-400"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-gray-500"
              placeholder="Your Message"
              style={{ height: "150px" }}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
