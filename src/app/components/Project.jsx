"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import project1 from "/public/project (1).jpg";
import project2 from "/public/project (2).jpg";
import project3 from "/public/project (4).jpg";
import project4 from "/public/project (1).jpg";
import project5 from "/public/project (2).jpg";
import project6 from "/public/project (4).jpg";

const ProjectCard = ({ image, title, link, animation }) => {
  return (
    <div data-aos={animation}>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <Image
          className="w-full h-auto object-cover"
          src={image}
          alt={`Image of ${title}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition duration-400 ease-in-out">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
            <a
              className="text-white underline hover:no-underline"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projectData = [
    {
      image: project1,
      title: "E-Commerce Website",
      link: "https://ahmadjunaid56.github.io/e-commerce-website/",
      animation: "zoom-in-right",
    },
    {
      image: project2,
      title: "Portfolio Website",
      link: "https://ahmadjunaid56.github.io/portfolio-website/",
      animation: "zoom-in-right",
    },
    {
      image: project3,
      title: "Blog Website",
      link: "https://ahmadjunaid56.github.io/blog-website/",
      animation: "zoom-in-left",
    },
    {
      image: project4,
      title: "Personal Blog",
      link: "https://ahmadjunaid56.github.io/personal-blog/",
      animation: "zoom-in-left",
    },
    {
      image: project5,
      title: "Business Website",
      link: "https://ahmadjunaid56.github.io/business-website/",
      animation: "zoom-in-right",
    },
    {
      image: project6,
      title: "Startup Landing Page",
      link: "https://ahmadjunaid56.github.io/startup-landing/",
      animation: "zoom-in-right",
    },
    {
      image: project4,
      title: "Personal Blog",
      link: "https://ahmadjunaid56.github.io/personal-blog/",
      animation: "zoom-in-left",
    },
    {
      image: project5,
      title: "Business Website",
      link: "https://ahmadjunaid56.github.io/business-website/",
      animation: "zoom-in-right",
    },
    {
      image: project6,
      title: "Startup Landing Page",
      link: "https://ahmadjunaid56.github.io/startup-landing/",
      animation: "zoom-in-right",
    },
  ];

  return (
    <section id="projects" className="py-20 overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-center text-black text-4xl lg:text-5xl font-semibold mb-10">
          MY <span className="text-gradient text-4xl uppercase lg:text-6xl font-semibold"
                style={{
                  backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)", // Gradient from blue to pink
                  WebkitBackgroundClip: "text", // For Safari
                  color: "transparent",
                }}>Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              link={project.link}
              animation={project.animation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
