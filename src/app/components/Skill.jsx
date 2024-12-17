"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "HTML5", imageSrc: "/html-5.webp" },
  { name: "JavaScript", imageSrc: "/java-script.webp" },
  { name: "Tailwind", imageSrc: "/tailwind-css.webp" },
  { name: "Bootstrap", imageSrc: "/bootstrap.webp" },
  { name: "CSS", imageSrc: "/cascading-style-sheets.webp" },
  { name: "Sass", imageSrc: "/sass.webp" },
  { name: "React JS", imageSrc: "/science.webp" },
  { name: "Next JS", imageSrc: "/next-js.webp" },
];
const MySkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });
  }, []);
  return (
    <section className="py-12 bg-gray-50" id="skills">
      <div className="max-w-[100%] mx-4 px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-black text-center text-5xl font-semibold mb-12"
          data-aos="fade-down"
        >
          MY{" "}
          <span
            className="text-gradient text-4xl Capitalize lg:text-6xl font-semibold"
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const isSecondRow = index >= 4;
            const aosAnimation = isSecondRow ? "zoom-in-right" : "zoom-in-left";

            return (
              <div
                key={index}
                className="flex flex-col items-center"
                data-aos={aosAnimation}
                data-aos-delay={index * 100}
              >
                <div
                  className="p-4 border-2 rounded-lg flex items-center justify-center h-40 w-40"
                  style={{
                    borderImage: "linear-gradient(45deg, #1E90FF, #FF1493) 1",
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
