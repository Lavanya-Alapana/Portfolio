import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center  text-white px-8 md:px-24 lg:px-35 pt-16"

    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-[1200px]">
        {/* LEFT: Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-xl font-medium text-transparent bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text">
            Hello, I am
          </h2>

          <h1 className="text-5xl font-bold">
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text">
              Lavanya Alapana
            </span>
          </h1>

          <h3 className="text-2xl text-purple-500 font-semibold">
            And I'm a{' '}
            <span>
              <Typewriter
                words={['Full-Stack Developer', 'Frontend Engineer', 'MERN Stack Expert']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            I’m a full-stack developer with 2+ years of experience building scalable apps using MERN & modern technologies.
          </p>

          {/* Social Links Row */}
          <div className="flex justify-center md:justify-start gap-6 mt-2">
            <a
              href="https://github.com/Lavanya-Alapana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/lavanya-alapana-37339a213/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg mt-4 hover:scale-105 transition"
          >
            📄 Download Resume
          </a>
        </div>

        {/* RIGHT: Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/image.jpeg"
            alt="Lavanya Alapana"
            className="w-64 h-64 md:w-85 md:h-85 rounded-full object-cover border-4 border-pink-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
