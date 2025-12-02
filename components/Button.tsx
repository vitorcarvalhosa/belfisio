import React from 'react';
import { MessageCircle, CalendarCheck } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'outlineBrand';
  icon?: 'whatsapp' | 'calendar' | 'none';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = 'none', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-500 text-white focus:ring-brand-500 border border-transparent",
    secondary: "bg-white text-brand-800 hover:bg-gray-50 focus:ring-white border border-transparent",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-900 focus:ring-white",
    outlineBrand: "bg-transparent border-2 border-brand-600 text-brand-700 hover:bg-brand-50 focus:ring-brand-500",
    // Uses darker teal (#128C7E) instead of bright green for better contrast with white text
    whatsapp: "bg-[#128C7E] hover:bg-[#075E54] text-white focus:ring-[#128C7E] border border-transparent"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  // Handle fallback for custom variants like 'outlineBrand' if they weren't in the original types but used in MainContent
  const variantClass = variants[variant] || variants.primary;

  return (
    <button 
      className={`${baseStyles} ${variantClass} ${widthStyle} ${className}`}
      onClick={() => window.open('https://wa.me/5512992186161?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20fisioterapia%20domiciliar.', '_blank')}
      {...props}
    >
      {icon === 'whatsapp' && <MessageCircle className="w-6 h-6 mr-2" />}
      {icon === 'calendar' && <CalendarCheck className="w-6 h-6 mr-2" />}
      {children}
    </button>
  );
};