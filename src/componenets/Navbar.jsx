import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full glass z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-400">Kelvin's Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-dark-200 font-medium">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-primary-400 transition-colors duration-200"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-primary-400 transition-colors duration-200"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-primary-400 transition-colors duration-200"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-primary-400 transition-colors duration-200"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary-400 transition-colors duration-200"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-dark-200 hover:text-primary-400 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-dark-700/50">
          <ul className="px-4 py-4 space-y-4 text-dark-200 font-medium">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left hover:text-primary-400 transition-colors duration-200"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left hover:text-primary-400 transition-colors duration-200"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left hover:text-primary-400 transition-colors duration-200"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left hover:text-primary-400 transition-colors duration-200"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left hover:text-primary-400 transition-colors duration-200"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
