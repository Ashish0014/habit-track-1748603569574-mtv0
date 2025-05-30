import React from 'react';
import { motion } from 'framer-motion';

type CardProps = {
  hoverEffect?: boolean;
  loadingSkeleton?: boolean;
  layout?: 'vertical' | 'horizontal';
  imageSrc?: string;
};

const Card: React.FC<CardProps> = ({ hoverEffect, loadingSkeleton, layout, imageSrc, children }) => {
  return (
    <motion.div whileHover={hoverEffect ? { scale: 1.05 } : undefined} className="rounded shadow-lg p-4">
      {loadingSkeleton ? (
        <div className="skeleton"></div>
      ) : (
        <>
          {imageSrc && <img src={imageSrc} alt="Card" className="mb-4" />}
          <div className={`flex flex-${layout === 'horizontal' ? 'row' : 'col'} items-center justify-between`}>
            {children}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Card;