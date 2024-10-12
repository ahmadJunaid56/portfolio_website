const Skills = () => {
  return (
    <section id="skills" className="pt-32 pb-20 bg-gray-900 px-6" data-aos="fade-up">
      <div className="container mx-auto">
        {/* Skills Heading */}
        <h2 className="text-white text-center text-4xl font-bold mb-10">
          My <span className="text-blue-500">Skills</span>
        </h2>

        {/* Progress Bars Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          {/* Left Column */}
          <div data-aos="flip-up">
            <div className="mb-6">
              <h5 className="text-lg font-semibold">HTML 5</h5>
              <div className="w-full bg-gray-700 h-4 rounded-lg overflow-hidden">
                <div
                  className="bg-blue-500 h-full text-right pr-2 text-sm text-black rounded-lg"
                  style={{ width: "95%" }}
                >
                  95%
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold">CSS 3</h5>
              <div className="w-full bg-gray-700 h-4 rounded-lg overflow-hidden">
                <div
                  className="bg-blue-500 h-full text-right pr-2 text-sm text-black rounded-lg"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold">Bootstrap</h5>
              <div className="w-full bg-gray-700 h-4 rounded-lg overflow-hidden">
                <div
                  className="bg-blue-500 h-full text-right pr-2 text-sm text-black rounded-lg"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div data-aos="flip-down">
            <div className="mb-6">
              <h5 className="text-lg font-semibold">JavaScript</h5>
              <div className="w-full bg-gray-700 h-4 rounded-lg overflow-hidden">
                <div
                  className="bg-blue-500 h-full text-right pr-2 text-sm text-black rounded-lg"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold">React</h5>
              <div className="w-full bg-gray-700 h-4 rounded-lg overflow-hidden">
                <div
                  className="bg-blue-500 h-full text-right pr-2 text-sm text-black rounded-lg"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold">Tailwind CSS</h5>
              <div className="w-full bg-gray-700 h-4 rounded-lg overflow-hidden">
                <div
                  className="bg-blue-500 h-full text-right pr-2 text-sm text-black rounded-lg"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
