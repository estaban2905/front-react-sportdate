import React from 'react';
import { motion } from 'framer-motion';
import { X, Heart, MapPin } from 'lucide-react';
import { Profile } from '../types';
import { CompatibilityRing } from './CompatibilityRing';
interface ProfileCardProps {
  profile: Profile;
  onAccept: () => void;
  onSkip: () => void;
}
export function ProfileCard({ profile, onAccept, onSkip }: ProfileCardProps) {
  return (
    <motion.div
      className="w-full bg-white dark:bg-[#1A1A2E] rounded-3xl shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-100 dark:border-[#2D2D4A] relative transition-colors duration-300"
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      exit={{
        opacity: 0,
        x: -100,
        rotate: -10
      }}
      transition={{
        duration: 0.4
      }}>

      {/* Photo Area */}
      <div
        className={`h-64 w-full bg-gradient-to-br ${profile.imageGradient} relative flex items-center justify-center`}>

        <div className="text-8xl filter drop-shadow-lg transform hover:scale-110 transition-transform duration-300 cursor-default">
          {profile.emoji}
        </div>

        {/* Location Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm transition-colors">
          <MapPin className="w-3 h-3 text-gray-500 dark:text-gray-300 mr-1" />
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
            {profile.location}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 pb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center transition-colors">
              {profile.name}, {profile.age}
            </h2>
            <div className="mt-1 inline-block px-2 py-0.5 bg-gray-100 dark:bg-[#22223A] rounded-md text-xs font-semibold text-gray-600 dark:text-gray-400 transition-colors">
              {profile.level}
            </div>
          </div>
          <CompatibilityRing percentage={profile.compatibility} size={64} />
        </div>

        {/* Sports Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {profile.sports.map((sport, idx) =>
          <span
            key={idx}
            className={`px-3 py-1 rounded-full text-sm font-bold ${sport.color} dark:bg-opacity-20 dark:border dark:border-opacity-20`}>

              {sport.name}
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 transition-colors">
          {profile.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6">
          <motion.button
            whileTap={{
              scale: 0.9
            }}
            onClick={onSkip}
            className="w-16 h-16 rounded-full border-2 border-gray-200 dark:border-[#2D2D4A] flex items-center justify-center text-gray-400 dark:text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#22223A] transition-all shadow-sm"
            aria-label="Skip">

            <X className="w-8 h-8" />
          </motion.button>

          <motion.button
            whileTap={{
              scale: 0.9
            }}
            onClick={onAccept}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] flex items-center justify-center text-white shadow-lg shadow-rose-200 dark:shadow-rose-900/30 hover:shadow-rose-300 dark:hover:shadow-rose-900/50 transition-shadow"
            aria-label="Accept">

            <Heart className="w-8 h-8 fill-current" />
          </motion.button>
        </div>
      </div>
    </motion.div>);

}