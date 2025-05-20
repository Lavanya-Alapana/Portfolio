import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // success/fail message

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS IDs here:
    const serviceID = 'service_es86gub';
    const templateID = 'template_2ghqqfe';
    const publicKey = 'sCKnGa-PoaF_lmkyz';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // clear form
        },
        () => {
          setStatus('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <section  id="contact" className="bg-black text-white py-16 px-6 relative lg:px-32">
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-1">Write your message here</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your message"
              required
              className="w-full bg-gray-800 text-white p-3 rounded-md outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
          {status && (
        <p className={`mt-3 text-center ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
          {status}
        </p>
      )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
