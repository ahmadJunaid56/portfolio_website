import Image from 'next/image';
import React from 'react';
import aboutImage from '/public/developer.gif'; // Replace with the correct path if necessary

export default function Border() {
  return (
    <section className="about1" id='about'>
      <div className="about-inner">
        <div className="aboutText" data-aos="zoom-in-right">
          <h1 className="text-gradient text-5xl font-semibold"
                style={{
                  backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)", // Gradient from blue to pink
                  WebkitBackgroundClip: "text", // For Safari
                  color: "transparent",
                }}>
            About Me
          </h1>
          <p className="paragraph-text text-justify leading-8 text-xl">
            At KMI Group, we're passionate about building materials.
            We supply high-quality chipboard and tiles to professionals and homeowners.
            Our mission is to deliver exceptional products and service.
            With years of experience, we understand industry needs.
            We prioritize durability, design, and customer satisfaction.
            Our chipboard and tiles cater to diverse tastes and projects.
            From furniture to construction, we've got you covered.
            We believe in long-term relationships and mutual growth.
            Our team ensures timely delivery and dedicated support.
            Your dream space, our top priority.
          </p>
          <a href="/about" className="bg-blue-400 text-white">
            Explore More
          </a>
        </div>
        <Image src={aboutImage} alt="About Image" width={500} height={500} data-aos="zoom-in-left" />
      </div>
    </section>
  );
}
