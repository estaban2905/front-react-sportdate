import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Heart,
  Calendar,
  Users,
  Trophy,
  MessageCircle,
  Flame,
  Sun,
  Moon } from
'lucide-react';
import { XPProgressBar } from './XPProgressBar';
import { USER_STATS } from '../data';
import { useTheme } from './ThemeContext';
interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}
export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard
  },
  {
    id: 'match',
    label: 'Descubrir',
    icon: Heart
  },
  {
    id: 'eventos',
    label: 'Eventos',
    icon: Calendar
  },
  {
    id: 'grupos',
    label: 'Comunidades',
    icon: Users
  },
  {
    id: 'ranking',
    label: 'Ranking',
    icon: Trophy
  },
  {
    id: 'chat',
    label: 'Mensajes',
    icon: MessageCircle
  }];

  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-[#1A1A2E] text-white fixed left-0 top-0 z-50 border-r border-gray-800 shadow-2xl">
      {/* Logo Area */}
      <div className="p-6 flex items-center justify-between border-b border-gray-800/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] rounded-xl flex items-center justify-center shadow-lg shadow-rose-900/20">
            <span className="text-2xl">⚡</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight">SPORTMATE</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Beta
            </p>
          </div>
        </div>

        <motion.button
          onClick={toggleTheme}
          whileTap={{
            scale: 0.9,
            rotate: 180
          }}
          className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle theme">

          {theme === 'dark' ?
          <Sun className="w-4 h-4" /> :

          <Moon className="w-4 h-4" />
          }
        </motion.button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group relative
                ${isActive ? 'bg-white/10 text-white font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}
              `}>

              {isActive &&
              <motion.div
                layoutId="activeSidebarIndicator"
                className="absolute left-0 w-1 h-8 bg-[#FF6B6B] rounded-r-full" />

              }
              <Icon
                className={`w-5 h-5 ${isActive ? 'text-[#FF6B6B]' : 'group-hover:text-gray-300'}`} />

              <span>{item.label}</span>
            </button>);

        })}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 bg-[#131322] border-t border-gray-800">
        <button
          onClick={() => onTabChange('perfil')}
          className="w-full bg-[#1A1A2E] rounded-2xl p-3 border border-gray-700/50 hover:border-gray-600 transition-colors group text-left">

          <div className="flex items-center space-x-3 mb-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border-2 border-gray-600 group-hover:border-gray-500 transition-colors">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  alt="User"
                  className="w-full h-full object-cover" />

              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#1A1A2E] rounded-full p-0.5">
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-[#1A1A2E]"></div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white truncate">Felix</h4>
              <div className="flex items-center text-xs text-orange-400 font-semibold">
                <Flame className="w-3 h-3 mr-1 fill-current" />
                <span>{USER_STATS.streak} días racha</span>
              </div>
            </div>
          </div>

          <XPProgressBar
            currentXP={USER_STATS.xp}
            maxXP={3000}
            level={USER_STATS.level}
            size="sm"
            showLabel={true} />

        </button>
      </div>
    </div>);

}