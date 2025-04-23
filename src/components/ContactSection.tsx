import React from 'react';
import SectionHeading from './SectionHeading';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Get in touch for opportunities, collaborations, or just to say hello."
        />
        
        <div className="max-w-5xl mx-auto bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 bg-primary-500 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="mb-8">Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, opportunities, or partnerships.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-4 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="rehan1712ahmad@gmail.com" className="hover:underline">
                    rehan1712ahmad@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+916200816680" className="hover:underline">
                      +91-6200816680
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="mr-4 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/rehanahmad017/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/rehanahmad017
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="mr-4 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a 
                      href="https://github.com/Rehanahmad7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/Rehanahmad7
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5 p-8">
              <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-700 dark:text-white"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-700 dark:text-white"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-700 dark:text-white"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-700 dark:text-white"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors flex items-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;