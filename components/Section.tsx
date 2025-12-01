import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'light' | 'dark' | 'brand';
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '', bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
    brand: 'bg-brand-900 text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};