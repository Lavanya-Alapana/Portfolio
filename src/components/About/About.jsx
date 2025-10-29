import React from 'react';

function About() {
  return (
    <section
       id="about"
  className="bg-black text-white py-16 px-6 "
      style={{
        clipPath: 'polygon(0 15%, 75% 0, 100% 10%, 100% 100%, 0 100%)',
      }}
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-transparent bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text">
          About Me
        </span>
      </h2>

      {/* Content */}
    <div className="mx-auto flex flex-col md:flex-row items-center md:items-start md:gap-8 lg:px-30">
  {/* LEFT: Image */}
  <div className="w-full md:w-1/3 flex justify-center md:justify-start">
    <div className="w-72 h-78 rounded-xl overflow-hidden border-4 border-pink-500 shadow-xl">
      <img
        src="/image2.jpg"
        alt="Lavanya Alapana"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* RIGHT: Text */}
  <div className="w-full md:w-2/3 text-center md:text-left mt-8 md:mt-0">
    <p className="text-gray-300 text-lg leading-relaxed mb-6">
      I'm a full-stack developer with over 1 year of experience crafting modern, responsive, and scalable web applications. I specialize in the MERN stack and love creating smooth user interfaces and robust backend systems.

My development journey is driven by a strong passion for solving real-world problems through code. I enjoy transforming complex requirements into clean, efficient solutions that prioritize performance and user experience. Whether it's building RESTful APIs, optimizing front-end performance, or integrating third-party services, I approach each challenge with a detail-oriented mindset.


    </p>

    <a
      href="#more-about"
      className="inline-block mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-medium hover:scale-105 transition"
    >
      Read More
    </a>
  </div>
</div>

    </section>
  );
}

export default About;
