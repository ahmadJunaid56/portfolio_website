"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <section id="home" className="header_wrapper px-10 pb-4 bg-gray-50">
      <nav className="w-full py-4 text-black">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-2xl lg:text-3xl font-bold">
            Portfolio
          </a>

          {/* Toggle button for small screens */}
          <button
            className="text-black lg:hidden"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>

          {/* Links - Visible on larger screens */}
          <div className="hidden lg:flex flex-grow justify-center">
            <ul className="flex flex-row space-x-6">
              {["#home", "#about", "#services", "#skills", "#projects", "#contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      className={`text-xl pb-2 ${
                        activeLink === link
                          ? "gradient-underline"
                          : ""
                      } text-black hover:gradient-underline`}
                      onClick={() => handleSetActiveLink(link)}
                    >
                      {link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Download CV Button */}
          <div className="hidden lg:block">
            <a
              href="/path/to/your/cv.pdf"
              className="text-lg font-semibold py-2 px-4 rounded-lg border-2 bg-transparent border-gradient bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:text-white transition-all duration-300 ease-in-out"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Popup for small screens */}
        {isOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-gray-50 w-full h-full text-center p-8 rounded-lg flex flex-col justify-center">
              <button
                className="absolute top-5 right-5 text-black"
                onClick={toggleNavbar}
                aria-label="Close navigation"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>

              <ul className="flex flex-col space-y-6">
                {["#home", "#about", "#services", "#skills", "#projects", "#contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href={link}
                        className={`text-base font-normal ${
                          activeLink === link
                            ? "gradient-underline"
                            : ""
                        } text-black hover:gradient-underline`}
                        onClick={() => handleSetActiveLink(link)}
                      >
                        {link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                      </a>
                    </li>
                  )
                )}
                <li>
                  <a
                    href="/path/to/your/cv.pdf"
                    className="text-sm font-semibold py-2 px-4 rounded-lg border-2 bg-transparent border-gradient bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 text-black transition-all duration-300 ease-in-out"
                    download
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
}
