import React from 'react';
import { motion } from 'framer-motion';
interface XPProgressBarProps {
  currentXP: number;
  maxXP: number;
  level: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}
export function XPProgressBar({
  currentXP,
  maxXP,
  level,
  size = 'md',
  showLabel = true
}: XPProgressBarProps) {
  const percentage = Math.min(100, currentXP / maxXP * 100);
  const heightClass = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  }[size];
  return (
    <div className="w-full">
      {showLabel &&
      <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-bold text-gray-700 dark:text-gray-300 transition-colors">
            Nivel {level}
          </span>
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 transition-colors">
            {currentXP} / {maxXP} XP
          </span>
        </div>
      }
      <div
        className={`w-full bg-gray-100 dark:bg-[#2D2D4A] rounded-full overflow-hidden ${heightClass} transition-colors`}>

        <motion.div
          className="h-full bg-gradient-to-r from-orange-400 to-rose-500 rounded-full"
          initial={{
            width: 0
          }}
          animate={{
            width: `${percentage}%`
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }} />

      </div>
    </div>);

}