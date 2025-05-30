import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  icon?: React.ReactNode;
  rippleEffect?: boolean;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant, loading, icon, rippleEffect, onClick, children }) => {
  return (
    <motion.button
      whileTap={rippleEffect ? { scale: 0.95 } : undefined}
      className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-500 text-white' : variant === 'secondary' ? 'bg-gray-300 text-black' : 'border border-gray-300 text-gray-700'} ${loading ? 'opacity-50 pointer-events-none' : ''}`}
      onClick={onClick}
    >
      {loading && <div className="spinner"></div>}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;