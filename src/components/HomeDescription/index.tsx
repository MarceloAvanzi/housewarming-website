import React from 'react';
import { motion } from 'framer-motion';

interface TextSectionProps {
  title: string;
  content: string;
  direction: 'left' | 'right';
}

const TextSection: React.FC<TextSectionProps> = ({ title, content, direction }) => {
  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg p-8 mb-8 max-w-md mx-auto"
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-700 text-justify">{content}</p>
    </motion.div>
  );
}

export default TextSection;
