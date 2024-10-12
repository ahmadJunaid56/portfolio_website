import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faCodeFork,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-800" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-white text-center text-5xl font-semibold mb-10">
          My <span className="text-blue-500">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development Service */}
          <div className="card bg-gray-700 rounded-xl p-8 text-center hover:border-4 hover:border-blue-500 hover:scale-105 transition duration-300">
            <FontAwesomeIcon
              icon={faCode}
              className="text-blue-500 text-5xl mb-4"
            />
            <h5 className="text-white text-2xl font-semibold mt-4">
              Web Development
            </h5>
            <p className="text-gray-300 mt-4">
              I offer professional web development services, creating responsive
              and visually appealing websites tailored to your business needs.
            </p>
          </div>

          {/* Web Design Service */}
          <div className="card bg-gray-700 rounded-xl p-8 text-center hover:border-4 hover:border-blue-500 hover:scale-105 transition duration-300">
            <FontAwesomeIcon
              icon={faPalette}
              className="text-blue-500 text-5xl mb-4"
            />
            <h5 className="text-white text-2xl font-semibold mt-4">
              Web Design
            </h5>
            <p className="text-gray-300 mt-4">
              I create visually engaging and responsive web designs that align
              with your brand. My designs are focused on providing a
              user-friendly experience.
            </p>
          </div>

          {/* Blogging Service */}
          <div className="card bg-gray-700 rounded-xl p-8 text-center hover:border-4 hover:border-blue-500 hover:scale-105 transition duration-300">
            <FontAwesomeIcon
              icon={faBlogger}
              className="text-blue-500 text-5xl mb-4"
            />
            <h5 className="text-white text-2xl font-semibold mt-4">Blogging</h5>
            <p className="text-gray-300 mt-4">
              I create responsive blog layouts that enhance readability and user
              interaction, ensuring seamless performance across devices.
            </p>
          </div>

          {/* API Integration Service */}
          <div className="card bg-gray-700 rounded-xl p-8 text-center hover:border-4 hover:border-blue-500 hover:scale-105 transition duration-300">
            <FontAwesomeIcon
              icon={faCode}
              className="text-blue-500 text-5xl mb-4"
            />
            <h5 className="text-white text-2xl font-semibold mt-4">
              API Integration
            </h5>
            <p className="text-gray-300 mt-4">
              I specialize in integrating APIs to enhance website functionality
              and connect with external services using clean and efficient code.
            </p>
          </div>

          {/* SEO-Friendly Code Service */}
          <div className="card bg-gray-700 rounded-xl p-8 text-center hover:border-4 hover:border-blue-500 hover:scale-105 transition duration-300">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="text-blue-500 text-5xl mb-4"
            />
            <h5 className="text-white text-2xl font-semibold mt-4">
              SEO-Friendly Code
            </h5>
            <p className="text-gray-300 mt-4">
              I develop SEO-friendly code to improve your website's visibility
              on search engines, ensuring better indexing and higher rankings.
            </p>
          </div>

          {/* Performance Optimization Service */}
          <div className="card bg-gray-700 rounded-xl p-8 text-center hover:border-4 hover:border-blue-500 hover:scale-105 transition duration-300">
            <FontAwesomeIcon
              icon={faChartSimple}
              className="text-blue-500 text-5xl mb-4"
            />
            <h5 className="text-white text-2xl font-semibold mt-4">
              Performance Optimization
            </h5>
            <p className="text-gray-300 mt-4">
              I implement performance optimization techniques to enhance website
              speed and efficiency, creating fast and responsive sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
