import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { Achievement } from '../types';
interface AchievementBadgeProps {
  achievement: Achievement;
  size?: 'sm' | 'md' | 'lg';
}
export function AchievementBadge({
  achievement,
  size = 'md'
}: AchievementBadgeProps) {
  const isLocked = !achievement.unlockedAt;
  const sizeClasses = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-24 h-24 text-5xl'
  }[size];
  const rarityColors = {
    common: 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800',
    rare: 'border-blue-200 bg-blue-50 shadow-blue-100 dark:border-blue-800 dark:bg-blue-900/30 dark:shadow-none',
    epic: 'border-purple-200 bg-purple-50 shadow-purple-100 dark:border-purple-800 dark:bg-purple-900/30 dark:shadow-none',
    legendary:
    'border-yellow-300 bg-yellow-50 shadow-yellow-100 dark:border-yellow-700 dark:bg-yellow-900/30 dark:shadow-none'
  }[achievement.rarity];
  return (
    <div className="group relative flex flex-col items-center">
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: isLocked ? 0 : 5
        }}
        className={`
          ${sizeClasses} rounded-full flex items-center justify-center border-2 
          ${isLocked ? 'bg-gray-100 border-gray-200 grayscale opacity-70 dark:bg-[#22223A] dark:border-[#2D2D4A]' : `${rarityColors} shadow-lg`}
          transition-all duration-300 relative z-10
        `}>

        {isLocked ?
        <Lock className="w-1/3 h-1/3 text-gray-400 dark:text-gray-600" /> :

        <span>{achievement.icon}</span>
        }
      </motion.div>

      {size !== 'sm' &&
      <span
        className={`mt-2 text-xs font-bold text-center leading-tight max-w-[80px] transition-colors ${isLocked ? 'text-gray-400 dark:text-gray-600' : 'text-gray-700 dark:text-gray-300'}`}>

          {achievement.name}
        </span>
      }

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 w-40">
        <div className="bg-gray-900 dark:bg-black text-white text-xs rounded-lg p-2 shadow-xl text-center border border-transparent dark:border-[#2D2D4A]">
          <p className="font-bold mb-1">{achievement.name}</p>
          <p className="text-gray-300">{achievement.description}</p>
          {achievement.unlockedAt &&
          <p className="text-gray-500 mt-1 text-[10px]">
              Desbloqueado: {achievement.unlockedAt}
            </p>
          }
        </div>
        <div className="w-2 h-2 bg-gray-900 dark:bg-black rotate-45 mx-auto -mt-1 border-r border-b border-transparent dark:border-[#2D2D4A]"></div>
      </div>
    </div>);

}