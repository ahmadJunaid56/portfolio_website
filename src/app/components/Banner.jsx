"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import portfolio from "/public/portfolio.png";
export default function MainPage() {
  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "Entrepreneur",
    "Blogger",
  ];
  const [currentRole, setCurrentRole] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;

    const typeRole = () => {
      if (charIndex < roles[index].length && !isDeleting) {
        setCurrentRole((prev) => prev + roles[index].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
        typingTimeout = setTimeout(typeRole, 500); // Typing speed
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(roles[index].substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        typingTimeout = setTimeout(typeRole, 200); // Deleting speed
      } else if (!isDeleting && charIndex === roles[index].length) {
        typingTimeout = setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
        typingTimeout = setTimeout(typeRole, 100); // Pause before typing the next role
      }
    };

    typingTimeout = setTimeout(typeRole, 100); // Start typing after initial delay

    return () => clearTimeout(typingTimeout); // Clear timeout on component unmount
  }, [charIndex, index, isDeleting]);

  return (
    <section className="main_page py-20">
      <div className="container mx-auto px-5 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side (Text and Social Links) */}
          <div className="mt-5">
            <h3 className="text-2xl">Hi, Myself</h3>
            <h1 className="text-5xl font-bold cursor-pointer font-poppins">
              Ahmad Junaid
            </h1>
            <h3 className="text-2xl">
              I'm a <span className="text-blue-400">{currentRole}</span>
            </h3>

            {/* Social Links */}
            <div className="social_links flex mt-10 space-x-4">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="border-2 border-white rounded-full p-3 cursor-pointer hover:bg-blue-500 transition-transform transform hover:-translate-y-1"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="border-2 border-white rounded-full p-3 cursor-pointer hover:bg-blue-500 transition-transform transform hover:-translate-y-1"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="border-2 border-white rounded-full p-3 cursor-pointer hover:bg-blue-500 transition-transform transform hover:-translate-y-1"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="border-2 border-white rounded-full p-3 cursor-pointer hover:bg-blue-500 transition-transform transform hover:-translate-y-1"
              />
            </div>

            {/* Download CV Button */}
            <button className="cv mt-6 mb-10 bg-blue-500 text-white px-8 py-3 rounded-lg border-2 border-white cursor-pointer hover:shadow-lg transition-all">
              Download CV
            </button>
          </div>

          {/* Right Side (Profile Image) */}
          <div>
            <Image
              src={portfolio}
              className="rounded-full profile mx-auto animate-bounce"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
