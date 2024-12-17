"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Custom Image component using div as a background
const Image = ({ src, alt, className }) => (
  <div
    className={`${className} bg-cover bg-center`}
    style={{ backgroundImage: `url(${src})` }}
    alt={alt}
  ></div>
);

const CardSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cards = [
    {
      title: "Responsive Design",
      description:
        "Learn to use modern CSS frameworks and techniques to make your site look perfect on desktops, tablets, and mobile phones.",
      image: "/design.webp",
      aos: "slide-left",
      link: "https://micrologicx.net/web-development/introduction-to-css",
    },
    {
      title: "JavaScript Fundamentals",
      description:
        "Explore core concepts, syntax, and create interactive, dynamic user experiences that bring your websites to life.",
      image: "/masterjs.webp",
      aos: "fade-up",
      link: "https://micrologicx.net/web-development/mastering-javascript-basics-a-beginner-s-guide-to-core-concepts",
    },
    {
      title: "Next.js Framework",
      description:
        "Dive into server-side rendering, static site generation, and advanced React concepts to elevate your development skills.",
      image: "/nextjs.webp",
      aos: "slide-right",
      link: "https://nextjs.org/docs",
    },
  ];

  return (
    <section id="blogs">
      <div className="pt-4 container mx-auto px-6 md:px-12">
        <h2 className="text-center text-5xl font-semibold pb-10">
          MY{" "}
          <span
            className="text-gradient Capitalize text-4xl lg:text-6xl font-semibold"
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Blogs
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} card={card} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ card, delay }) => (
  <div
    className="card-container bg-white rounded-lg shadow-xl overflow-hidden"
    data-aos={card.aos}
    data-aos-delay={delay}
  >
    <Image src={card.image} alt={card.title} className="w-full h-48" />
    <div className="p-4 text-justify bg-gray-100">
      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
      <p className="text-gray-600">{card.description}</p>
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block bg-blue-500 text-white font-semibold px-4 py-2 text-sm rounded-lg hover:bg-blue-600 transition-all duration-200 focus:outline-none"
      >
        Learn More
      </a>
    </div>
  </div>
);

export default CardSection;
