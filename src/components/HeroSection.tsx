import React from 'react';
import { Download, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-20 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 min-h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary-500 dark:text-primary-400 font-medium mb-4 animate-fade-in">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in text-dark-900 dark:text-white">
              Rehan Ahmad
            </h1>
            <h2 className="text-xl md:text-2xl text-dark-700 dark:text-gray-300 mb-8 animate-slide-in">
              Aspiring SDE | Cloud Computing 
            </h2>

            <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md mb-8 animate-fade-in">
              <p className="text-dark-700 dark:text-gray-300 leading-relaxed">
                {/* I'm a passionate software engineer with expertise in backend development and test automation.
                My focus is on creating reliable, efficient solutions while ensuring quality through comprehensive testing. */}
                I'm a passionate software engineer with expertise in cloud computing. My focus is on building scalable, secure, and efficient cloud-based solutions while ensuring reliability and pecific cloud platforms like AWS, Azure, GCP or tools for Docker, Kubernetes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-fade-in">
              <a
                href="/rehancv.pdf"
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full flex items-center gap-2 transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
                download
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 text-dark-800 dark:text-white font-medium rounded-full border border-gray-300 dark:border-dark-700 flex items-center gap-2 transition-all shadow-sm hover:shadow w-full sm:w-auto justify-center"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="flex gap-4 animate-fade-in">
              <a 
                href="https://github.com/Rehanahmad7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-dark-800 rounded-full text-dark-700 dark:text-gray-300 hover:shadow-md hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="GitHub"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/rehanahmad017/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-dark-800 rounded-full text-dark-700 dark:text-gray-300 hover:shadow-md hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center items-center">
  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
    <img 
      src="/rehan2.jpg" 
      alt="Rehan Ahmad"
      className="w-full h-full object-cover"
      style={{ objectPosition: 'center 10%' }} // Adjust the image position downward
    />
  </div>
</div>



          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;