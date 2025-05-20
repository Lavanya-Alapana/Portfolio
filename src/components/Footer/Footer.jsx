import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
     
      <div className="max-w-3xl mx-auto text-center space-y-4">
      

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/Lavanya-Alapana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lavanya-alapana-37339a213/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:alapanalavanya@example.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Lavanya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
