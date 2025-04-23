import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-lg md:text-xl text-primary-500">
            <a href="#home" className="flex items-center">
              <span>Rehan Ahmad</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 px-3 rounded-md text-dark-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-2 ml-4">
              <a 
                href="https://github.com/Rehanahmad7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-dark-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-800 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rehanahmad017/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-dark-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-800 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden h-screen bg-white dark:bg-dark-900 py-2">
          <nav className="flex flex-col space-y-1 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded-md text-dark-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-2 py-3 px-4">
              <a 
                href="https://github.com/nitinpadal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-dark-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nitinpadal07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-dark-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;