"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1500,
      mirror: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="pb-32 mt-20 px-4 lg:px-16 bg-gray-50"
      data-aos="fade-up"
    >
      <div className="container mx-auto max-w-screen-lg">
        <h2 className=" pt-10 text-center text-5xl font-semibold pb-20">
          LETS{" "}
          <span
            className="text-gradient Capitalize text-4xl lg:text-6xl font-semibold"
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Connect
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Lets Chat!
            </h3>
            <p className="text-gray-600 text-base text-justify mb-6">
              Whether you want to collaborate on an exciting project, need some
              advice, or just want to say hello, I would love to hear from you.
              Here how you can reach me:
            </p>
            <ul className="space-y-4 text-gray-800">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100084148153799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebook} className="mr-2 text-xl" />{" "}
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/a.junaid10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="mr-2 text-xl"
                  />{" "}
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="www.linkedin.com/in/ahmad-junaid-071884251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-xl" />{" "}
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ahmadJunaid56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2 text-xl" />{" "}
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:stackmaster6648@gmail.com"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-xl" />{" "}
                  Email: stackmaster6648@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923036648666"
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2 text-xl" />
                  Phone: +92 (303) 6648-666
                </a>
              </li>
            </ul>
          </div>
          <div
            className="p-8 bg-white rounded-lg shadow-lg"
            data-aos="zoom-in-left"
          >
            <form
              id="contact-form"
              action={`mailto:stackmaster6648@gmail.com?subject=New%20Contact%20Form%20Submission&body=Name:%20${formData.name}%0D%0AEmail:%20${formData.email}%0D%0AMessage:%20${formData.message}`}
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <p className="text-gray-600 mb-4 text-center">
                Fill out the form below, and I will get back to you as soon as
                possible!
              </p>
              <div className="space-y-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Whats your name?
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Your email address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    How can I help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-3 rounded-lg text-lg hover:bg-blue-500 transition-all duration-300"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
