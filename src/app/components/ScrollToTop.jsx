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
      className={`fixed scroll right-8 bottom-12 h-11 w-10 rounded text-center cursor-pointer z-50 bg-blue-500 transition-all duration-400 ease-in-out ${
        scrollActive ? "block" : "hidden"
      }`}
    >
      <a href="#home">
        <span className="text-2xl text-white">&#x21e7;</span>
      </a>
    </div>
  );
};

export default ScrollToTop;
