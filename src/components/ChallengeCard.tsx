import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Trophy, Star } from 'lucide-react';
import { Challenge } from '../types';
interface ChallengeCardProps {
  challenge: Challenge;
}
export function ChallengeCard({ challenge }: ChallengeCardProps) {
  const percentage = Math.min(100, challenge.progress / challenge.total * 100);
  return (
    <motion.div
      whileHover={{
        y: -4
      }}
      className="min-w-[280px] bg-white dark:bg-[#1A1A2E] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-[#2D2D4A] relative overflow-hidden group transition-all duration-300">

      <div
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#22223A] dark:to-[#1A1A2E] rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500`} />


      <div className="flex justify-between items-start mb-3 relative z-10">
        <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-xl transition-colors">
          {challenge.sportEmoji}
        </div>
        <div className="flex items-center space-x-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg border border-yellow-100 dark:border-yellow-900/30 transition-colors">
          <Trophy className="w-3 h-3 text-yellow-600 dark:text-yellow-400" />
          <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400">
            +{challenge.xpReward} XP
          </span>
        </div>
      </div>

      <h3 className="font-bold text-gray-900 dark:text-white mb-1 relative z-10 transition-colors">
        {challenge.title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 relative z-10 line-clamp-2 transition-colors">
        {challenge.description}
      </p>

      <div className="space-y-2 relative z-10">
        <div className="flex justify-between text-xs font-semibold text-gray-600 dark:text-gray-400 transition-colors">
          <span>Progreso</span>
          <span>
            {challenge.progress} / {challenge.total}
          </span>
        </div>
        <div className="h-2 w-full bg-gray-100 dark:bg-[#2D2D4A] rounded-full overflow-hidden transition-colors">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]"
            initial={{
              width: 0
            }}
            animate={{
              width: `${percentage}%`
            }}
            transition={{
              duration: 1,
              delay: 0.2
            }} />

        </div>
      </div>

      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-50 dark:border-[#2D2D4A] relative z-10 transition-colors">
        <div className="flex items-center text-xs text-gray-400 dark:text-gray-500 transition-colors">
          <Clock className="w-3 h-3 mr-1" />
          {challenge.deadline}
        </div>
        <div className="flex space-x-0.5">
          {[1, 2, 3].map((i) =>
          <Star
            key={i}
            className={`w-3 h-3 ${i <= challenge.difficulty ? 'fill-yellow-400 text-yellow-400 dark:fill-yellow-500 dark:text-yellow-500' : 'text-gray-200 dark:text-[#2D2D4A]'}`} />

          )}
        </div>
      </div>
    </motion.div>);

}