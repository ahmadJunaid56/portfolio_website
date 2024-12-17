"use client";
import { useState, useEffect } from "react";
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
  useEffect(() => {
    const sections = document.querySelectorAll("section"); 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
    if (window.location.hash === "" || window.location.hash === "#") {
      setActiveLink("#home");
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="header_wrapper px-10 sticky top-0 z-50 bg-slate-100">
      <nav className="w-full text-black">
        <div className="container mx-auto flex justify-between items-center">
          <div
            className="h-16 w-64 bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/ahmad.webp')",
            }}
          >
          </div>

          <button
            className="text-black lg:hidden"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>

          <div className="hidden lg:flex flex-grow justify-center">
            <ul className="flex flex-row space-x-6">
              {[
                "#home",
                "#about",
                "#services",
                "#skills",
                "#projects",
                "#blogs",
                "#contact",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link}
                    className={`text-lg pb-2 ${
                      activeLink === link
                        ? "border-b-2 border-blue-500 text-blue-700"
                        : "border-b-2 border-transparent"
                    } text-black hover:border-blue-700 hover:text-blue-700 transition duration-300`}
                    onClick={() => handleSetActiveLink(link)}
                  >
                    {link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <a
              href="/Profile.pdf"
              className="text-base font-semibold py-1 px-3 border-2 bg-transparent border-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-pink-600 transition-all duration-300 ease-in-out"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-gray-100 w-full h-full text-center p-8 rounded-lg flex flex-col justify-center">
              <button
                className="absolute top-5 right-5 text-black"
                onClick={toggleNavbar}
                aria-label="Close navigation"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>

              <ul className="flex flex-col space-y-6">
                {[
                  "#home",
                  "#about",
                  "#services",
                  "#skills",
                  "#projects",
                  "#blogs",
                  "#contact",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      className={`text-base font-normal ${
                        activeLink === link
                          ? "border-b-2 border-blue-700 text-blue-700"
                          : "border-b-2 border-transparent"
                      } text-black hover:border-blue-700 hover:text-blue-700 transition duration-300`}
                      onClick={() => handleSetActiveLink(link)}
                    >
                      {link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/Profile.pdf"
                    className="text-sm font-semibold py-2 px-4 rounded-lg border-2 bg-transparent border-gradient bg-gradient-to-r from-blue-700 to-pink-700 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:to-pink-700 hover:text-white transition-all duration-300 ease-in-out"
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
