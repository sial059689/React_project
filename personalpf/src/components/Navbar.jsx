import React, { useState } from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">MyWebsite</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-xl"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <a
            href="#home"
            className="block px-4 py-2 hover:bg-gray-700 hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:bg-gray-700 hover:text-gray-400"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 hover:bg-gray-700 hover:text-gray-400"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:bg-gray-700 hover:text-gray-400"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
