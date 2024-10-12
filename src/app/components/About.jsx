import React from "react";
import About1 from '/public/developer.gif'
import Image from 'next/image'
export default function About() {
  return (
    <>
      <section id="about" className="py-16 px-10 bg-gray-900">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Image Section */}
            <div className="md:col-span-1" data-aos="zoom-in-right">
              <Image
                src={About1}
                className="img-fluid rounded-2xl w-full"
                alt="Developer GIF"
              />
            </div>

            {/* Middle Text Section */}
            <div className="md:col-span-2 md:pl-10" data-aos="zoom-in-left">
              <h1 className="text-white text-4xl font-semibold">About Me</h1>
              <h2 className="text-blue-400 text-2xl font-medium mt-2">
                <span className="text-blue-400">Frontend Web Developer</span>
              </h2>
              <p className="text-gray-300 mt-4 mb-8 leading-relaxed">
                As a Frontend Web Developer at Micrologicx Software House, I
                specialize in crafting responsive, user-friendly, and visually
                appealing websites that provide seamless user experiences. I am
                skilled in HTML, CSS, JavaScript, and modern frameworks. My goal
                is to deliver high-quality, scalable solutions that bring ideas
                to life and drive success.
              </p>

              <a
                href="https://github.com/ahmadJunaid56"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 cv text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
