import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faPlug,
  faSearch,
  faChartSimple,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6" data-aos="fade-down">
      <div className="container mx-auto">
        <h2 className="text-black text-center text-5xl font-semibold mb-10">
          MY{" "}
          <span
            className="text-gradient text-4xl capitalize lg:text-6xl font-semibold"
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Services
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2 lg:mx-12">
          {[
            {
              icon: faLaptopCode,
              title: "Web Development",
              description:
                "I offer professional web development services, creating responsive and visually appealing websites tailored to your business needs.",
              aos: "slide-right",
            },
            {
              icon: faPalette,
              title: "Web Design",
              description:
                "I create visually engaging and responsive web designs that align with your brand, providing a user-friendly experience.",
              aos: "fade-up",
            },
            {
              icon: faBlogger,
              title: "Blogging",
              description:
                "I create responsive blog layouts that enhance readability and user interaction, ensuring seamless performance across devices.",
              aos: "slide-left",
            },
            {
              icon: faPlug,
              title: "API Integration",
              description:
                "I specialize in integrating APIs to enhance website functionality and connect with external services using clean and efficient code.",
              aos: "slide-left",
            },
            {
              icon: faSearch,
              title: "SEO-Friendly Code",
              description:
                "I develop SEO-friendly code to improve your website's visibility on search engines, ensuring better indexing and higher rankings.",
              aos: "fade-up",
            },
            {
              icon: faChartSimple,
              title: "Performance Optimization",
              description:
                "I implement performance optimization techniques to enhance website speed and efficiency, creating fast and responsive sites.",
              aos: "slide-right",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-xl p-8 text-center overflow-hidden transition-transform duration-300 transform hover:scale-105"
              data-aos={service.aos}
            >
              <FontAwesomeIcon
                icon={service.icon}
                className="text-blue-400 text-5xl mb-4"
                aria-label={`${service.title} Icon`}
              />
              <h5 className="text-black text-2xl font-semibold mt-4">
                {service.title}
              </h5>
              <p className="text-black mt-4 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
