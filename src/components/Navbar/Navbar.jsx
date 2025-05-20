import React, { useState, useEffect } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY < 50);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out
      ${showNavbar ? 'translate-y-0' : '-translate-y-full'}  
      backdrop-blur-md  text-white shadow-md border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto flex items-center  justify-between px-6 py-4 md:px-24 lg:px-26">
        <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          &lt;Lavanya/Alapana&gt;
        </div> 

        {/* Hamburger Icon */}
        <div className="md:hidden ml-auto" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-md font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-pink-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center gap-6 bg-black/80 transition-all duration-300 ease-in-out overflow-hidden px-4 ${
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-300 hover:text-pink-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
        
      </div>
    </nav>
  );
}

export default Navbar;
