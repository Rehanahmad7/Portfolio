import React from 'react';
import SectionHeading from './SectionHeading';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'C', 'C++', 'Python', 'SQL', 'PL/SQL', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['AWS (EC2, S3, Lambda, RDS, CloudWatch)', 'Microsoft Azure ', 'Google Cloud Platform '],
    },
    // {
    //   title: 'Testing & Automation',
    //   skills: ['Selenium WebDriver', 'Appium', 'JMeter', 'Postman', 'Katalon Studio'],
    // },
    {
      title: 'CI/CD & DevOps',
      skills: ['Jenkins', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Database',
      skills: ['MySQL', 'PL/SQL'],
    },
    {
      title: 'Version Control & Tools',
      skills: ['Git', 'GitHub'],
    },
    {
      title: 'Soft Skills',
      skills: ['Teamwork', 'Leadership', 'Strategic Thinking', 'Communication'],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Skills" 
          subtitle="A comprehensive list of my technical and soft skills."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-dark-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;