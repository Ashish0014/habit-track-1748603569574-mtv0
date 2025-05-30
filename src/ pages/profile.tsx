import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

type User = {
  id: number;
  name: string;
};

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    async function fetchUser() {
      const currentUser = supabase.auth.user();
      
      if (currentUser) {
        setUser({ id: currentUser.id, name: currentUser.email });
      }
    }

    fetchUser();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="user-info">
        {/* User info content */}
        {user && (
          <>
            <p>Name: {user.name}</p>
          </>
        )}
      </section>

      <section className="settings">
        {/* Settings content */}
      </section>

       <section className="preferences">
         {/* Preferences content */}
       </section>

       <section className="activity-history">
         {/* Activity history content */}
       </section>
     </motion.div>
   );
 };

 export default ProfilePage;