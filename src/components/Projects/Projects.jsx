import React from 'react';
import projects from '../Data/ProjectData';

const Projects = () => {
  return (
    <section
    id="projects"
      className="py-16 px-9  text-white relative lg:px-32 "
      
    >
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0d0d1a] border border-[#2a2a40] rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-45 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-purple-300">{project.name}</h3>
              <p className="text-gray-300 my-2">{project.description}</p>
              <div className="mt-3">
                <span className="font-medium text-purple-200">Tools:</span>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.tools.map((tool, idx) => (
                    <li
                      key={idx}
                      className="bg-purple-900 text-purple-200 px-2 py-1 text-sm rounded-md"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
