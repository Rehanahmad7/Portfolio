import React from 'react';
import SectionHeading from './SectionHeading';
import { Calendar, Users, Code, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience & Training" 
          subtitle="My professional journey and learning experiences."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <Code size={30} className="text-primary-500 dark:text-primary-400" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white">Cloud Computing with AWS & DevOps Tools</h3>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    Training
                  </span>
                </div>
                
                <div className="flex items-center text-dark-700 dark:text-gray-300 mb-4">
                  <span className="flex items-center mr-4">
                    <Users size={16} className="mr-1" />
                    Programming Pathshala
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    Apr 29, 2024 – Jul 20, 2024
                  </span>
                </div>
                
                <h4 className="font-medium text-dark-800 dark:text-gray-200 mb-2">Key Achievements:</h4>
                <ul className="space-y-2 text-dark-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <span>Deployed scalable applications using AWS services like EC2, S3, Lambda, and RDS</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <span>Set up CI/CD pipelines using Jenkins and GitHub Actions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <span>Monitored system performance with CloudWatch and integrated alerting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <span>Practiced containerization with Docker and orchestration with Kubernetes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;