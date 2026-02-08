import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Calendar,
  Users,
  MessageCircle,
  User,
  LayoutDashboard,
  Sun,
  Moon } from
'lucide-react';
import { useTheme } from './ThemeContext';
interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}
export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const { theme, toggleTheme } = useTheme();
  const tabs = [
  {
    id: 'dashboard',
    label: 'Inicio',
    icon: LayoutDashboard
  },
  {
    id: 'match',
    label: 'Match',
    icon: Heart
  },
  {
    id: 'eventos',
    label: 'Eventos',
    icon: Calendar
  },
  {
    id: 'chat',
    label: 'Chat',
    icon: MessageCircle
  },
  {
    id: 'perfil',
    label: 'Perfil',
    icon: User
  }];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1A1A2E] border-t border-gray-100 dark:border-[#2D2D4A] pb-safe pt-2 px-2 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.2)] transition-colors duration-300">
      <div className="flex justify-around items-end pb-2 relative">
        {/* Theme Toggle for Mobile */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{
            scale: 0.9,
            rotate: 180
          }}
          className="absolute -top-12 right-4 p-2 rounded-full bg-white dark:bg-[#22223A] shadow-md border border-gray-100 dark:border-[#2D2D4A] text-gray-400 dark:text-gray-300">

          {theme === 'dark' ?
          <Sun className="w-5 h-5" /> :

          <Moon className="w-5 h-5" />
          }
        </motion.button>

        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="relative flex flex-col items-center justify-center w-14 py-1">

              {isActive &&
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute -top-2 w-8 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }} />

              }

              <div
                className={`transition-colors duration-200 ${isActive ? 'text-[#FF6B6B]' : 'text-gray-400 dark:text-gray-500'}`}>

                <Icon
                  className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`}
                  strokeWidth={isActive ? 2.5 : 2} />

              </div>

              <span
                className={`text-[10px] font-bold mt-1 transition-colors duration-200 ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>

                {tab.label}
              </span>
            </button>);

        })}
      </div>
    </div>);

}