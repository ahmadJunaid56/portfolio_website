import Image from "next/image";
import React from "react";
import aboutImage from "/public/developer.gif"; // Replace with the correct path if necessary

export default function Border() {
  return (
    <section className="about1 mt-10" id="about">
      <div className="about-inner">
        <div className="aboutText" data-aos="zoom-in-right">
          <h1
            className="text-gradient text-4xl font-semibold"
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)", // Gradient from blue to pink
              WebkitBackgroundClip: "text", // For Safari
              color: "transparent",
            }}
          >
            About Me
          </h1>
          <p className="paragraph-text text-justify mt-4 leading-7 tracking-wide text-base">
            Hello, my name is Ahmad Junaid. I am a Front-End Web Developer with
            expertise in creating visually appealing, user-friendly, and
            responsive websites. Using technologies like HTML, CSS, JavaScript,
            React, and Tailwind CSS, I focus on delivering seamless digital
            experiences that leave a lasting impression. I specialize in
            designing intuitive interfaces, optimizing website performance, and
            ensuring compatibility across all browsers. My goal is to bring your
            ideas to life through clean code and innovative design solutions.
          </p>
          <a href="/about" className="bg-blue-400 hover:bg-blue-500">
            Explore More
          </a>
        </div>
        <Image
          src={aboutImage}
          alt="About Image"
          width={500}
          height={500}
          data-aos="zoom-in-left"
        />
      </div>
    </section>
  );
}
