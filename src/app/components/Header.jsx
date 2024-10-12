"use client"
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="home" className="header_wrapper px-5">
      <nav className="w-full py-2 transition-all duration-300 bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white">
            AHMAD
          </a>
          <button
            className="text-white focus:outline-none"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars-staggered text-black"></i>
          </button>
          <div className={`lg:flex justify-end ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6 text-center">
              <li>
                <a
                  href="#home"
                  className="nav-link text-lg text-white font-normal pb-1 active"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="nav-link text-lg text-white font-normal pb-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="nav-link text-lg text-white font-normal pb-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="nav-link text-lg text-white font-normal pb-1"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="nav-link text-lg text-white font-normal pb-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="nav-link text-lg text-white font-normal pb-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
