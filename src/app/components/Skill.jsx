"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "HTML5", imageSrc: "/html-5.png" },
  { name: "JavaScript", imageSrc: "/java-script.png" },
  { name: "Tailwind", imageSrc: "/tailwind-css.png" },
  { name: "Bootstrap", imageSrc: "/bootstrap.png" },
  { name: "CSS", imageSrc: "/cascading-style-sheets.png" },
  { name: "Sass", imageSrc: "/sass.png" },
  { name: "React JS", imageSrc: "/science.png" },
  { name: "Next JS", imageSrc: "/next-js.png" },
];

const MySkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-4" id="skills">
      <div className="max-w-7xl mx-4 px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-black text-center text-5xl font-semibold mb-12"
          data-aos="fade-down"
        >
          MY{" "}
          <span
            className="text-gradient text-3xl uppercase lg:text-6xl font-semibold"
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)", // Gradient from blue to pink
              WebkitBackgroundClip: "text", // For Safari
              color: "transparent",
            }}
          >
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16">
          {skills.map((skill, index) => {
            // Decide animation based on row
            const isSecondRow = index >= 4; // Check if the skill is in the second row
            const aosAnimation = isSecondRow ? "zoom-in-right" : "zoom-in-left"; // Assign animation

            return (
              <div
                key={index}
                className="flex flex-col items-center"
                data-aos={aosAnimation}
                data-aos-delay={index * 100} // Adds a delay for each item
              >
                <div
                  className="p-4 border-2 rounded-lg flex items-center justify-center h-40 w-40"
                  style={{
                    borderImage: "linear-gradient(45deg, #1E90FF, #FF1493) 1", // Gradient border
                  }}
                >
                  <Image
                    src={skill.imageSrc}
                    alt={skill.name}
                    width={200}
                    height={200}
                    className="object-contain h-20"
                  />
                </div>
                <p className="mt-2 uppercase text-2xl">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
