import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/916382100601?text=
         Hi Mithu Web Studio, I am interested in your services!"
    
      
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 left-8 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all z-40"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" />
    </motion.a>
  );
};
