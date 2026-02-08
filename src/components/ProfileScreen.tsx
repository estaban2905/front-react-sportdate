import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Settings, Edit2, Share2, Award } from 'lucide-react';
import { USER_STATS, ACHIEVEMENTS } from '../data';
import { AchievementBadge } from './AchievementBadge';
export function ProfileScreen() {
  return (
    <div className="pb-24 md:pb-8 max-w-4xl mx-auto">
      {/* Cover & Header */}
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] md:rounded-b-3xl">
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-6 md:px-8 -mt-16 md:-mt-20 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-[#1A1A2E] shadow-lg overflow-hidden bg-gray-100 dark:bg-[#2D2D4A] transition-colors">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Profile"
                className="w-full h-full object-cover" />

            </div>
            <div className="absolute bottom-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-1 rounded-md shadow-sm border border-white dark:border-[#1A1A2E] transform rotate-3">
              LVL {USER_STATS.level}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 pt-2 md:pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-black text-gray-900 dark:text-white transition-colors">
                  Felix, 28
                </h1>
                <div className="flex items-center text-gray-500 dark:text-gray-400 font-medium mt-1 transition-colors">
                  <MapPin className="w-4 h-4 mr-1" />
                  Santiago, Chile
                </div>
              </div>
              <button className="hidden md:flex items-center px-4 py-2 bg-gray-900 dark:bg-[#22223A] text-white rounded-full text-sm font-bold hover:bg-gray-800 dark:hover:bg-[#2D2D4A] transition-colors border border-transparent dark:border-[#2D2D4A]">
                <Edit2 className="w-4 h-4 mr-2" />
                Editar Perfil
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl transition-colors">
              Entusiasta del deporte y la vida sana. Siempre buscando nuevos
              retos y gente con quien entrenar. Fanático del fútbol y empezando
              en el mundo del running. 🏃‍♂️⚽️
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
          {
            label: 'Partidos',
            value: USER_STATS.matchesPlayed,
            emoji: '⚽'
          },
          {
            label: 'Eventos',
            value: USER_STATS.eventsAttended,
            emoji: '📅'
          },
          {
            label: 'Rating',
            value: USER_STATS.rating,
            emoji: '⭐'
          },
          {
            label: 'Racha',
            value: `${USER_STATS.streak} días`,
            emoji: '🔥'
          }].
          map((stat, i) =>
          <div
            key={i}
            className="bg-white dark:bg-[#1A1A2E] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] text-center transition-all duration-300">

              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div className="font-black text-gray-900 dark:text-white text-lg transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase transition-colors">
                {stat.label}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Sports Interests */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Mis Deportes
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                {
                  name: 'Fútbol',
                  level: 'Avanzado',
                  color: 'bg-teal-100 text-teal-700'
                },
                {
                  name: 'Running',
                  level: 'Intermedio',
                  color: 'bg-orange-100 text-orange-700'
                },
                {
                  name: 'Padel',
                  level: 'Principiante',
                  color: 'bg-blue-100 text-blue-700'
                },
                {
                  name: 'Trekking',
                  level: 'Amateur',
                  color: 'bg-green-100 text-green-700'
                }].
                map((sport) =>
                <div
                  key={sport.name}
                  className={`${sport.color} dark:bg-opacity-20 dark:border dark:border-opacity-20 px-4 py-2 rounded-xl flex items-center space-x-2 transition-colors`}>

                    <span className="font-bold">{sport.name}</span>
                    <span className="w-1 h-1 bg-current rounded-full opacity-50" />
                    <span className="text-xs font-semibold opacity-75">
                      {sport.level}
                    </span>
                  </div>
                )}
                <button className="px-4 py-2 rounded-xl border-2 border-dashed border-gray-200 dark:border-[#2D2D4A] text-gray-400 dark:text-gray-500 font-bold hover:border-gray-300 dark:hover:border-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
                  + Agregar
                </button>
              </div>
            </section>

            {/* Achievements Showcase */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center transition-colors">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Medallas y Logros
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors">
                  {ACHIEVEMENTS.filter((a) => a.unlockedAt).length} /{' '}
                  {ACHIEVEMENTS.length} desbloqueados
                </span>
              </div>
              <div className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-all duration-300">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
                  {ACHIEVEMENTS.map((achievement) =>
                  <AchievementBadge
                    key={achievement.id}
                    achievement={achievement} />

                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Activity) */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
              Actividad Reciente
            </h2>
            <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100 dark:before:bg-[#2D2D4A]">
              {[
              {
                title: 'Partido de Fútbol',
                date: 'Ayer',
                type: 'match'
              },
              {
                title: 'Running 5k',
                date: 'Hace 3 días',
                type: 'challenge'
              },
              {
                title: 'Nuevo Nivel 12',
                date: 'Hace 5 días',
                type: 'level'
              },
              {
                title: 'Clase de Yoga',
                date: 'Hace 1 semana',
                type: 'event'
              }].
              map((activity, i) =>
              <div key={i} className="relative pl-10">
                  <div className="absolute left-2 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#1A1A2E] border-2 border-[#FF6B6B] transition-colors" />
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm transition-colors">
                    {activity.title}
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors">
                    {activity.date}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

}