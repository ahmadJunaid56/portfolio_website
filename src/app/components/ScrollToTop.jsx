"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [scrollActive, setScrollActive] = useState(false);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="scrollUp"
      title="Scroll To Top"
      className={`fixed scroll right-8 bottom-12 h-14 w-14 rounded-full text-center cursor-pointer z-50 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transform transition-all duration-300 ease-in-out ${
        scrollActive ? "block" : "hidden"
      } hover:scale-110`}
    >
      <a href="#home" className="flex items-center justify-center h-full">
        {/* Updated Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
    </div>
  );
};

export default ScrollToTop;
