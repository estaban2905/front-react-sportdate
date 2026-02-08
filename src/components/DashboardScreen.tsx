import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  Flame,
  Trophy,
  Calendar,
  MapPin,
  ArrowRight,
  TrendingUp,
  Zap,
  Target,
  Activity,
  Heart,
  Clock,
  ChevronRight,
  Search,
  Plus } from
'lucide-react';
import { USER_STATS, CHALLENGES, EVENTS, PROFILES, LEADERBOARD } from '../data';
import { XPProgressBar } from './XPProgressBar';
import { CompatibilityRing } from './CompatibilityRing';
export function DashboardScreen() {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  // Mock data for weekly activity
  const weeklyActivity = [3, 5, 2, 7, 4, 8, 1];
  const maxActivity = Math.max(...weeklyActivity);
  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  const todayIndex = 4; // Friday
  // Mock data for recent activity feed
  const recentActivity = [
  {
    id: 1,
    title: 'Completaste Running 5k',
    time: 'Hace 2h',
    icon: Activity,
    color: 'text-green-500',
    bg: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    id: 2,
    title: 'Nuevo match con Camila',
    time: 'Hace 5h',
    icon: Heart,
    color: 'text-rose-500',
    bg: 'bg-rose-100 dark:bg-rose-900/20'
  },
  {
    id: 3,
    title: 'Asististe a Yoga al Atardecer',
    time: 'Ayer',
    icon: Calendar,
    color: 'text-purple-500',
    bg: 'bg-purple-100 dark:bg-purple-900/20'
  },
  {
    id: 4,
    title: 'Subiste al Nivel 12',
    time: 'Hace 2 días',
    icon: Trophy,
    color: 'text-yellow-500',
    bg: 'bg-yellow-100 dark:bg-yellow-900/20'
  }];

  return (
    <motion.div
      className="p-4 pb-24 md:p-8 md:pb-8 max-w-7xl mx-auto space-y-8"
      variants={container}
      initial="hidden"
      animate="show">

      {/* Hero Section */}
      <motion.div
        variants={item}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] shadow-xl shadow-rose-200 dark:shadow-none text-white p-6 md:p-8">

        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300 opacity-20 rounded-full -ml-10 -mb-10 blur-2xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* User Info */}
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white/30 shadow-lg overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  alt="Profile"
                  className="w-full h-full object-cover" />

              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-1 rounded-lg shadow-sm border-2 border-white/50 transform rotate-6">
                LVL {USER_STATS.level}
              </div>
            </div>
            <div>
              <p className="text-rose-100 font-medium mb-1">Buenas tardes,</p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                Felix
              </h1>
              <div className="flex items-center mt-2 text-sm font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                <Flame className="w-4 h-4 mr-1.5 text-yellow-300 fill-yellow-300 animate-pulse" />
                {USER_STATS.streak} días en racha
              </div>
            </div>
          </div>

          {/* Level Progress Ring */}
          <div className="flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 w-full md:w-auto justify-between md:justify-start">
            <div className="text-center">
              <div className="text-xs text-rose-100 font-bold uppercase tracking-wider mb-1">
                Nivel Actual
              </div>
              <div className="text-3xl font-black">{USER_STATS.level}</div>
            </div>

            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-white/20" />

                <motion.circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-white"
                  strokeDasharray={2 * Math.PI * 36}
                  initial={{
                    strokeDashoffset: 2 * Math.PI * 36
                  }}
                  animate={{
                    strokeDashoffset:
                    2 * Math.PI * 36 * (1 - USER_STATS.xp / 3000)
                  }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeOut'
                  }}
                  strokeLinecap="round" />

              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-sm">
                {Math.round(USER_STATS.xp / 3000 * 100)}%
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-rose-100 font-bold uppercase tracking-wider mb-1">
                Siguiente
              </div>
              <div className="text-xl font-bold">{3000 - USER_STATS.xp} XP</div>
              <div className="text-xs text-rose-200">para subir</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions & Weekly Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Weekly Activity Chart */}
        <motion.div
          variants={item}
          className="md:col-span-2 bg-white dark:bg-[#1A1A2E] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300">

          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-teal-500" />
                Tu Semana
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Promedio: 4.3 actividades/semana
              </p>
            </div>
            <div className="text-2xl font-black text-gray-900 dark:text-white">
              {weeklyActivity.reduce((a, b) => a + b, 0)}{' '}
              <span className="text-sm font-medium text-gray-400">total</span>
            </div>
          </div>

          <div className="flex justify-between items-end h-32 gap-2">
            {weeklyActivity.map((count, index) => {
              const isToday = index === todayIndex;
              const heightPercentage = count / maxActivity * 100;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">

                  <div className="relative w-full flex justify-center h-full items-end">
                    <motion.div
                      className={`w-full max-w-[24px] rounded-t-lg transition-colors duration-300 ${isToday ? 'bg-[#FF6B6B]' : 'bg-gray-100 dark:bg-[#2D2D4A] group-hover:bg-gray-200 dark:group-hover:bg-[#3F3F5F]'}`}
                      initial={{
                        height: 0
                      }}
                      animate={{
                        height: `${heightPercentage}%`
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                        type: 'spring'
                      }} />

                    {/* Tooltip */}
                    <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded pointer-events-none">
                      {count}
                    </div>
                  </div>
                  <span
                    className={`text-xs font-bold ${isToday ? 'text-[#FF6B6B]' : 'text-gray-400'}`}>

                    {days[index]}
                  </span>
                </div>);

            })}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={item}
          className="flex flex-col justify-between gap-4">

          {[
          {
            label: 'Buscar Match',
            icon: Search,
            color:
            'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white shadow-lg shadow-rose-200 dark:shadow-none border-transparent'
          },
          {
            label: 'Crear Evento',
            icon: Plus,
            color:
            'bg-white dark:bg-[#1A1A2E] text-gray-900 dark:text-white border-gray-200 dark:border-[#2D2D4A] hover:border-[#FF6B6B] dark:hover:border-[#FF6B6B]'
          },
          {
            label: 'Ver Retos',
            icon: Target,
            color:
            'bg-white dark:bg-[#1A1A2E] text-gray-900 dark:text-white border-gray-200 dark:border-[#2D2D4A] hover:border-yellow-500 dark:hover:border-yellow-500'
          }].
          map((action, i) =>
          <motion.button
            key={action.label}
            whileHover={{
              scale: 1.02
            }}
            whileTap={{
              scale: 0.98
            }}
            className={`flex-1 flex items-center justify-between px-6 py-4 rounded-2xl border font-bold transition-all duration-300 ${action.color}`}>

              <span className="flex items-center gap-3">
                <action.icon className="w-5 h-5" />
                {action.label}
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Challenges List */}
          <motion.section variants={item}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-yellow-500" />
                Retos en Progreso
              </h2>
            </div>
            <div className="bg-white dark:bg-[#1A1A2E] rounded-3xl p-2 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300">
              {CHALLENGES.map((challenge, i) =>
              <div
                key={challenge.id}
                className={`p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-[#22223A] rounded-2xl transition-colors ${i !== CHALLENGES.length - 1 ? 'border-b border-gray-50 dark:border-[#2D2D4A]' : ''}`}>

                  <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-2xl flex-shrink-0">
                    {challenge.sportEmoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white truncate">
                        {challenge.title}
                      </h3>
                      <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-0.5 rounded-md">
                        +{challenge.xpReward} XP
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-gray-100 dark:bg-[#2D2D4A] rounded-full overflow-hidden">
                        <motion.div
                        className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]"
                        initial={{
                          width: 0
                        }}
                        animate={{
                          width: `${challenge.progress / challenge.total * 100}%`
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.5
                        }} />

                      </div>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {challenge.progress} / {challenge.total}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.section>

          {/* Recent Activity Feed */}
          <motion.section variants={item}>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              Actividad Reciente
            </h2>
            <div className="bg-white dark:bg-[#1A1A2E] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300">
              <div className="relative pl-2">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-100 dark:bg-[#2D2D4A]" />

                <div className="space-y-6">
                  {recentActivity.map((act) =>
                  <div
                    key={act.id}
                    className="relative flex items-center gap-4">

                      <div
                      className={`relative z-10 w-10 h-10 rounded-full ${act.bg} flex items-center justify-center border-4 border-white dark:border-[#1A1A2E] transition-colors duration-300`}>

                        <act.icon className={`w-4 h-4 ${act.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                          {act.title}
                        </h4>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {act.time}
                        </span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Upcoming Events Timeline */}
          <motion.section variants={item}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                Próximos Eventos
              </h2>
              <button className="text-xs font-bold text-[#FF6B6B] hover:underline">
                Ver todos
              </button>
            </div>
            <div className="bg-white dark:bg-[#1A1A2E] rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300 space-y-4">
              {EVENTS.slice(0, 3).map((event, i) =>
              <div key={event.id} className="flex gap-4 group cursor-pointer">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-gray-50 dark:bg-[#22223A] border border-gray-100 dark:border-[#2D2D4A] group-hover:border-[#FF6B6B] dark:group-hover:border-[#FF6B6B] transition-colors">
                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase">
                      {event.date.split(' ')[0]}
                    </span>
                    <span className="text-lg font-black text-gray-900 dark:text-white">
                      {event.date.split(' ')[1]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 py-0.5">
                    <h4 className="font-bold text-gray-900 dark:text-white truncate group-hover:text-[#FF6B6B] transition-colors">
                      {event.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-400 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5" />
                      {event.participants} confirmados
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.section>

          {/* Top Ranking Preview */}
          <motion.section variants={item}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                Top Ranking
              </h2>
            </div>
            <div className="bg-white dark:bg-[#1A1A2E] rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300">
              <div className="space-y-4 mb-4">
                {LEADERBOARD.slice(0, 3).map((user, i) =>
                <div
                  key={user.id}
                  className="flex items-center justify-between">

                    <div className="flex items-center gap-3">
                      <div
                      className={`
                        w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white
                        ${i === 0 ? 'bg-yellow-400' : i === 1 ? 'bg-gray-300' : 'bg-orange-300'}
                      `}>

                        {user.rank}
                      </div>
                      <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-[#2D2D4A]" />

                      <span className="font-bold text-sm text-gray-900 dark:text-white">
                        {user.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                      {user.xp} XP
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-gray-50 dark:border-[#2D2D4A] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-400">#5</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-[#2D2D4A] p-0.5">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                      alt="Me"
                      className="w-full h-full rounded-full" />

                  </div>
                  <span className="font-bold text-sm text-[#FF6B6B]">Tú</span>
                </div>
                <span className="text-xs font-mono font-bold text-gray-900 dark:text-white">
                  {USER_STATS.xp} XP
                </span>
              </div>
            </div>
          </motion.section>

          {/* Recent Matches */}
          <motion.section variants={item}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500" />
              Matches Recientes
            </h2>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {PROFILES.map((profile) =>
              <div
                key={profile.id}
                className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer">

                  <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.imageGradient} p-0.5 transition-transform group-hover:scale-105`}>

                    <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-[14px] flex items-center justify-center text-2xl">
                      {profile.emoji}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                    {profile.name}
                  </span>
                  <span className="text-[10px] font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded">
                    {profile.compatibility}%
                  </span>
                </div>
              )}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl border-2 border-dashed border-gray-200 dark:border-[#2D2D4A] flex items-center justify-center text-gray-400 hover:border-[#FF6B6B] hover:text-[#FF6B6B] transition-colors cursor-pointer">
                <Search className="w-6 h-6" />
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>);

}