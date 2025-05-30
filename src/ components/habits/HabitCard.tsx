import { Habit } from '../../types';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface HabitCardProps {
  habit: Habit;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
    // Update completion status in database
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-lg shadow p-4"
    >
      <h3>{habit.title}</h3>
      <p>{habit.description}</p>
      <button onClick={toggleCompletion}>
        {isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <div>Streak: {habit.streak}</div>
      <div>Status: {isCompleted ? 'Completed' : 'Incomplete'}</div>
    </motion.div>
  );
};

export default HabitCard;