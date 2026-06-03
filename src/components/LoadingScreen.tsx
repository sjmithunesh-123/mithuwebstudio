import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 bg-white dark:bg-secondary z-50 flex items-center justify-center ${
        !isLoading && 'pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-primary-200 dark:border-accent border-t-primary-600 dark:border-t-accent rounded-full"
        />
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary-600 dark:text-accent font-semibold"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};
