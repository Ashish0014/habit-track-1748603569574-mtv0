import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

type Habit = {
  id: number;
  name: string;
  goal: string;
};

const IndexPage: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHabits() {
      const { data, error } = await supabase.from('habits').select('*');
      if (error) {
        console.error('Error fetching habits:', error.message);
      } else {
        setHabits(data);
        setLoading(false);
      }
    }

    fetchHabits();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="hero">
        {/* Hero section content */}
      </section>

      <section className="features-grid">
        {/* Features grid content */}
      </section>

      <section className="testimonials">
        {/* Testimonials content */}
      </section>

      <section className="cta">
        {/* Call to action content */}
      </section>
    </motion.div>
  );
};

export default IndexPage;