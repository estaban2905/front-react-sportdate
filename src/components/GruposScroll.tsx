import React from 'react';
import { motion } from 'framer-motion';
import { Users, Flame } from 'lucide-react';
import { Group } from '../types';
interface GruposScrollProps {
  groups: Group[];
}
export function GruposScroll({ groups }: GruposScrollProps) {
  return (
    <div className="mt-8 mb-24">
      <div className="flex items-center justify-between px-1 mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center transition-colors">
          <span className="mr-2">🏟️</span> Grupos Abiertos
        </h3>
        <button className="text-sm font-semibold text-[#FF6B6B] hover:text-[#FF8E8E] transition-colors">
          Ver todos
        </button>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar">
        {groups.map((group, index) =>
        <motion.div
          key={group.id}
          className="min-w-[240px] bg-white dark:bg-[#1A1A2E] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-[#2D2D4A] snap-center flex-shrink-0 cursor-pointer hover:shadow-md dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300"
          initial={{
            opacity: 0,
            x: 20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: index * 0.1
          }}
          whileTap={{
            scale: 0.98
          }}>

            <div
            className={`h-24 rounded-xl bg-gradient-to-br ${group.imageGradient} mb-3 flex items-center justify-center text-4xl`}>

              {group.sportEmoji}
            </div>

            <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">
              {group.name}
            </h4>

            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2 transition-colors">
              <Users className="w-3 h-3 mr-1" />
              {group.members} miembros
            </div>

            <div className="inline-flex items-center px-2 py-1 rounded-md bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-bold transition-colors">
              {group.activityLevel.includes('Muy') &&
            <Flame className="w-3 h-3 mr-1 fill-current" />
            }
              {group.activityLevel}
            </div>
          </motion.div>
        )}
      </div>
    </div>);

}