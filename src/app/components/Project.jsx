"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import project1 from "/public/project (5).webp";
import project2 from "/public/project (4).webp";
import project3 from "/public/project (3).webp";
import project4 from "/public/project (2).webp";
import project5 from "/public/project (1).webp";
import project6 from "/public/project.webp";

const ProjectCard = ({ image, title, link, animation }) => {
  return (
    <div data-aos={animation}>
      <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-transparent hover:border-blue-500 transition-all duration-500">
        <div className="p-[2px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              className="w-full h-64"
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
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });
  }, []);

  const projectData = [
    {
      image: project1,
      title: "E-Commerce Website",
      link: "https://ahmadjunaid56.github.io/e-commerce-website/",
      animation: "slide-left",
    },
    {
      image: project2,
      title: "Clinic Website",
      link: "https://ahmadjunaid56.github.io/clinic_website/",
      animation: "fade-up",
    },
    {
      image: project3,
      title: "Frenzzy Website",
      link: "https://ahmadjunaid56.github.io/Frenzzy-website/",
      animation: "slide-right",
    },
    {
      image: project4,
      title: "Old portfolio website",
      link: "https://ahmadjunaid-portfolio.netlify.app/",
      animation: "slide-right",
    },
    {
      image: project5,
      title: "Food Website",
      link: "https://ahmadjunaid56.github.io/Food-Order/",
      animation: "fade-up",
    },
    {
      image: project6,
      title: "Blog website",
      link: "https://ahmadjunaid56.github.io/Blog-website/",
      animation: "slide-left",
    },
  ];

  return (
    <section id="projects" className="py-20 overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-center text-black text-4xl lg:text-5xl font-semibold mb-10">
          MY{" "}
          <span
            className="text-gradient text-4xl capitalize lg:text-6xl font-semibold"
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Projects
          </span>
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
