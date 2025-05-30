import React from 'react';
import { motion } from 'framer-motion';

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  error?: string;
};

const Input: React.FC<InputProps> = ({ label, value, onChange, icon, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <label>{label}</label>
      <motion.input
        type="text"
        value={value}
        onChange={handleChange}
        className={`border rounded px-3 py-2 ${error ? 'border-red-500' : ''}`}
      />
      {icon && <span className="absolute right-3 top-1/2 transform -translate-y-1/2">{icon}</span>}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;