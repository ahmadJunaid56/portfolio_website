"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import portfolio from "/public/portfolio.png";

export default function MainPage() {
  const [currentRole, setCurrentRole] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(
    () => ["Frontend Developer", "React Developer", "Blogger"],
    []
  );

  useEffect(() => {
    let typingTimeout;

    const typeRole = () => {
      if (!isDeleting && charIndex < roles[index].length) {
        setCurrentRole((prev) => prev + roles[index][charIndex]);
        setCharIndex((prev) => prev + 1);
        typingTimeout = setTimeout(typeRole, 100); // Typing speed
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(roles[index].substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        typingTimeout = setTimeout(typeRole, 50); // Deleting speed
      } else if (!isDeleting && charIndex === roles[index].length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    typingTimeout = setTimeout(typeRole, 100); // Start typing

    return () => clearTimeout(typingTimeout); // Cleanup on unmount
  }, [charIndex, isDeleting, index, roles]);

  return (
    <section className="main_page py-16 bg-gray-50 relative overflow-hidden">
      {/* Animated Squares */}
      <div className="animated-squares absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`square square-${i + 1}`}></div>
        ))}
      </div>

      <div className="container mx-auto px-2 lg:px-8 py-5 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left Side (Text and Social Links) */}
          <div className="mt-5 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-medium">Hello, I'm</h3>
            <h1 className="text-4xl text-black lg:text-6xl">Ahmad Junaid</h1>
            <h3 className="text-xl text-black lg:text-2xl mt-3">
              I'm a{" "}
              <span
                className="text-gradient text-3xl font-semibold"
                style={{
                  backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)", // Gradient from blue to pink
                  WebkitBackgroundClip: "text", // For Safari
                  color: "transparent",
                }}
              >
                {currentRole}
              </span>
            </h3>
            <p className="mt-5 text-lg text-justify mx-2 lg:mx-0">
              Passionate about creating intuitive, user-centric digital
              experiences. Let’s collaborate to build something amazing.
            </p>

            {/* Social Links */}
            <div className="social_links flex justify-center md:justify-start mt-8 space-x-6">
              {[
                { icon: faFacebookF, link: "#" },
                { icon: faTwitter, link: "#" },
                { icon: faInstagram, link: "#" },
                { icon: faLinkedinIn, link: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  aria-label={social.icon.iconName}
                  className="border-1 rounded-full p-3 text-black transition-transform transform hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-500 hover:text-white"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side (Profile Image) */}
          <div className="flex justify-center relative mt-10 mx-4 md:mt-0">
            <Image
              src={portfolio}
              alt="Ahmad Junaid Profile Picture"
              width={360}
              height={360}
              className="rounded-full border-2 border-black profile z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
