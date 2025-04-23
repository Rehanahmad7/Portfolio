import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Rehan Ahmad</h2>
            <p className="text-gray-400">Aspiring SDE | Cloud Computing </p>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://github.com/Rehanahmad7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-dark-800 rounded-full hover:bg-dark-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rehanahmad017/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-dark-800 rounded-full hover:bg-dark-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:rehan1712ahmad@gmail.com" 
              className="p-2 bg-dark-800 rounded-full hover:bg-dark-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="mb-6">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a>
              <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</a>
              <a href="#education" className="text-gray-400 hover:text-primary-400 transition-colors">Education</a>
              <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p className="flex items-center justify-center flex-wrap gap-1">
              <span>&copy; {currentYear} Rehan Ahmad. All rights reserved.</span>
              <span className="flex items-center">
                Made with <Heart size={14} className="mx-1 text-primary-500" fill="currentColor" /> in React
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;