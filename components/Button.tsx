import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  icon?: React.ComponentType<any>;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'glass', 
  icon: Icon, 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-[#2D3436] text-white hover:bg-black border border-transparent shadow-lg",
    secondary: "bg-[#6C5CE7] text-white hover:bg-[#5a4bd1] border border-transparent shadow-lg",
    glass: "bg-white/40 hover:bg-white/60 text-gray-800 border border-white/50 backdrop-blur-sm shadow-sm hover:shadow-md"
  };

  return (
    <motion.button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.button>
  );
};

export default Button;