import React from 'react';
import SectionHeading from './SectionHeading';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

const EducationSection: React.FC = () => {
  const educationList: Education[] = [
    {
      institution: 'Lovely Professional University',
      degree: 'BTech in Computer Science and Engineering',
      period: '2022 - Present',
      score: 'CGPA: 7.81',
    },
    {
      institution: 'R.P.S Public School',
      degree: 'Intermediate',
      period: '2020 - 2022',
      score: 'Percentage: 81.8%',
    },
    {
      institution: 'D.A.V Public School',
      degree: 'Matriculation',
      period: '2019 - 2020',
      score: 'Percentage: 85%',
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey and qualifications."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-dark-700 z-0 hidden md:block"></div>
            
            {/* Education items */}
            <div className="space-y-12">
              {educationList.map((education, index) => (
                <div key={index} className="relative z-10">
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                      <GraduationCap size={20} className="text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="w-full md:w-1/2 p-0 md:p-6">
                      <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ml-0 md:ml-6">
                        <h3 className="text-xl font-semibold mb-2 text-dark-900 dark:text-white">{education.institution}</h3>
                        <p className="text-dark-700 dark:text-gray-300 mb-2">{education.degree}</p>
                        <div className="flex items-center text-dark-600 dark:text-gray-400 text-sm mb-2">
                          <Calendar size={16} className="mr-2" />
                          <span>{education.period}</span>
                        </div>
                        <p className="text-primary-500 dark:text-primary-400 font-medium">{education.score}</p>
                      </div>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;