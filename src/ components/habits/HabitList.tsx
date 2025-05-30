import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Habit } from '../../types';

interface HabitListProps {
  habits: Habit[];
}

const HabitList: React.FC<HabitListProps> = ({ habits }) => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    // Fetch habits data
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-3 gap-4"
    >
      {/* Render habits based on viewType */}
    </motion.div>
  );
};

export default HabitList;