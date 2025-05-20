import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      className="bg-black text-white py-16 px-6 relative"
      style={{
        clipPath: 'polygon(0 15%, 75% 0, 100% 10%, 100% 100%, 0 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text">Let's talk</span>
          </h2>
          <p className="text-gray-300 mb-6">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-xl text-white" />
            <span className="text-gray-200">alapanalavanya@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FaPhoneAlt className="text-xl text-white" />
            <span className="text-gray-200">+91 9704942845</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-white" />
            <span className="text-gray-200">Srikakulam, Ap</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-1">Write your message here</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message"
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
