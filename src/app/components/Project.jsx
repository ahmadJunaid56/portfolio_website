import Image from "next/image";
import project1 from "/public/project (1).jpg";
import project2 from "/public/project (2).jpg";
import project3 from "/public/project (4).jpg";
const Projects = () => {
  return (
    <section id="project" className="py-20" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-10">
          My Latest <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Project #1 */}
          <div data-aos="zoom-in-right">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image className="w-full h-auto" src={project1} alt="Project 1" />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition duration-400 ease-in-out">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    Project #1
                  </h3>
                  <a
                    className="text-white underline hover:no-underline"
                    href="https://ahmadjunaid56.github.io/e-commerce-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-right">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image className="w-full h-auto" src={project1} alt="Project 1" />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition duration-400 ease-in-out">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    Project #1
                  </h3>
                  <a
                    className="text-white underline hover:no-underline"
                    href="https://ahmadjunaid56.github.io/e-commerce-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-right">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image className="w-full h-auto" src={project1} alt="Project 1" />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition duration-400 ease-in-out">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    Project #1
                  </h3>
                  <a
                    className="text-white underline hover:no-underline"
                    href="https://ahmadjunaid56.github.io/e-commerce-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other projects */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 px-4">
          {/* Project #1 */}
          <div data-aos="zoom-in-right">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image className="w-full h-auto" src={project1} alt="Project 1" />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition duration-400 ease-in-out">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    Project #1
                  </h3>
                  <a
                    className="text-white underline hover:no-underline"
                    href="https://ahmadjunaid56.github.io/e-commerce-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-right">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image className="w-full h-auto" src={project2} alt="Project 1" />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition duration-400 ease-in-out">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    Project #1
                  </h3>
                  <a
                    className="text-white underline hover:no-underline"
                    href="https://ahmadjunaid56.github.io/e-commerce-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-right">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image className="w-full h-auto" src={project3} alt="Project 1" />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition duration-400 ease-in-out">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    Project #1
                  </h3>
                  <a
                    className="text-white underline hover:no-underline"
                    href="https://ahmadjunaid56.github.io/e-commerce-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
