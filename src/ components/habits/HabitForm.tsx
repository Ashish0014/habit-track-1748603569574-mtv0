import { useState } from 'react';
import { motion } from 'framer-motion';

interface HabitFormProps {
  onSubmit: (formData: FormData) => void;
}

const HabitForm: React.FC<HabitFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    category: '',
    goal: '',
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation logic
    onSubmit(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-lg shadow p-4"
      onSubmit={handleSubmit}
    >
      {/* Form fields and inputs */}
    </motion.form>
  );
};

export default HabitForm;