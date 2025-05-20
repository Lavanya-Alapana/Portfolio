import React from 'react';
import {
  FaLaptopCode,
  FaServer,
  FaCodeBranch,
  FaPlug,
  FaTachometerAlt,
  FaMobileAlt,
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      text: 'Crafting responsive and interactive user interfaces using React, Vue, and Tailwind CSS for seamless web experiences.',
      icon: <FaLaptopCode className="text-4xl text-gray-300 mb-3 drop-shadow" />,
    },
    {
      title: 'Backend Development',
      text: 'Building secure and scalable RESTful APIs and server-side logic with Node.js, Express, and database integrations.',
      icon: <FaServer className="text-4xl text-gray-300 mb-3 drop-shadow" />,
    },
    {
      title: 'Full-Stack Web Development',
      text: 'Developing complete web applications using the MERN stack, handling both frontend and backend seamlessly.',
      icon: <FaCodeBranch className="text-4xl text-gray-300 mb-3 drop-shadow" />,
    },
    {
      title: 'API Integration & Development',
      text: 'Creating and integrating robust custom or third-party APIs including authentication, payment, and data services.',
      icon: <FaPlug className="text-4xl text-gray-300 mb-3 drop-shadow" />,
    },
    {
      title: 'Performance Optimization',
      text: 'Enhancing speed and responsiveness using code splitting, lazy loading, caching strategies, and SEO improvements.',
      icon: <FaTachometerAlt className="text-4xl text-gray-300 mb-3 drop-shadow" />,
    },
    {
      title: 'Mobile-Responsive Web Apps',
      text: 'Designing Progressive Web Apps and mobile-first responsive designs that adapt seamlessly across all devices.',
      icon: <FaMobileAlt className="text-4xl text-purple-300 mb-3 drop-shadow" />,
    },
  ];

  return (
    <section id="services" className=" text-white py-16 px-4 lg:px-35">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10">
          <span className="text-transparent bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text">
            My Services
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, text, icon }, index) => (
            <div
              key={index}
              className="bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-700 text-center h-auto"
            >
              <div className="flex flex-col items-center">
                {icon}
                <h2 className="text-2xl font-semibold text-purple-500
mb-2">{title}</h2>
                <p className="text-gray-300 text-md">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
