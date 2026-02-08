import React from 'react';
import { motion } from 'framer-motion';
interface PlaceholderScreenProps {
  title: string;
  emoji: string;
  message: string;
}
export function PlaceholderScreen({
  title,
  emoji,
  message
}: PlaceholderScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] px-8 text-center">
      <motion.div
        className="text-8xl mb-6"
        initial={{
          scale: 0.5,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}>

        {emoji}
      </motion.div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 transition-colors">
        {message}
      </p>
      <div className="px-4 py-2 bg-gray-100 dark:bg-[#22223A] rounded-full text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest transition-colors">
        Próximamente
      </div>
    </div>);

}