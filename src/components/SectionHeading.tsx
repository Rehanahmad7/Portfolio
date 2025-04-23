import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-dark-700 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-primary-500 mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;