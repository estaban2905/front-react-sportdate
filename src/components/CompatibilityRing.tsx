import React from 'react';
import { motion } from 'framer-motion';
interface CompatibilityRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}
export function CompatibilityRing({
  percentage,
  size = 80,
  strokeWidth = 6
}: CompatibilityRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - percentage / 100 * circumference;
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size
      }}>

      {/* Background Circle */}
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          className="text-gray-200 dark:text-[#2D2D4A] transition-colors"
          strokeWidth={strokeWidth}
          fill="transparent" />

        {/* Animated Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference
          }}
          animate={{
            strokeDashoffset: offset
          }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
            delay: 0.2
          }}
          strokeLinecap="round" />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#FF8E8E" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text Content */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-xl font-bold text-gray-800 dark:text-white leading-none transition-colors">
          {percentage}%
        </span>
        <span className="text-[8px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-0.5 transition-colors">
          Match
        </span>
      </div>
    </div>);

}