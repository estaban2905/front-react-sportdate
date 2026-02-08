import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  MessageCircle,
  Calendar,
  Plus,
  Trophy,
  Flame,
  Search,
  ArrowRight } from
'lucide-react';
export function ComunidadesScreen() {
  const [activeTab, setActiveTab] = useState('explorar');
  const communities = [
  {
    id: 'c1',
    name: 'Runners Santiago',
    emoji: '🏃',
    gradient: 'from-orange-400 to-rose-400',
    members: 142,
    events: 3,
    messages: 12,
    tags: ['Running', 'Vitacura'],
    level: 'Muy activo 🔥'
  },
  {
    id: 'c2',
    name: 'Fútbol 5 Provi',
    emoji: '⚽',
    gradient: 'from-teal-400 to-emerald-400',
    members: 48,
    events: 2,
    messages: 8,
    tags: ['Fútbol', 'Providencia'],
    level: 'Activo ⚡'
  },
  {
    id: 'c3',
    name: 'Yoga Ñuñoa',
    emoji: '🧘',
    gradient: 'from-purple-400 to-pink-400',
    members: 85,
    events: 5,
    messages: 24,
    tags: ['Yoga', 'Ñuñoa'],
    level: 'Muy activo 🔥'
  },
  {
    id: 'c4',
    name: 'Trekking Chile',
    emoji: '🏔️',
    gradient: 'from-green-400 to-teal-400',
    members: 320,
    events: 1,
    messages: 5,
    tags: ['Trekking', 'Nacional'],
    level: 'Activo ⚡'
  },
  {
    id: 'c5',
    name: 'Padel Masters',
    emoji: '🎾',
    gradient: 'from-blue-400 to-cyan-400',
    members: 67,
    events: 4,
    messages: 18,
    tags: ['Padel', 'Las Condes'],
    level: 'Muy activo 🔥'
  },
  {
    id: 'c6',
    name: 'CrossFit Warriors',
    emoji: '🏋️',
    gradient: 'from-red-400 to-orange-400',
    members: 93,
    events: 6,
    messages: 31,
    tags: ['CrossFit', 'Santiago Centro'],
    level: 'Muy activo 🔥'
  }];

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
  return (
    <div className="p-4 pt-6 pb-24 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2 transition-colors">
            🏟️ Comunidades
          </h1>
          <p className="text-gray-500 dark:text-gray-400 transition-colors">
            Conecta con grupos que comparten tu pasión.
          </p>
        </div>
        <button className="flex items-center px-5 py-2 bg-gray-900 dark:bg-[#22223A] text-white rounded-full font-bold hover:bg-gray-800 dark:hover:bg-[#2D2D4A] transition-colors shadow-lg shadow-gray-900/20 dark:shadow-black/30 border border-transparent dark:border-[#2D2D4A]">
          <Plus className="w-5 h-5 mr-2" />
          Crear Comunidad
        </button>
      </header>

      {/* Featured Banner */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-rose-500 text-white p-6 md:p-8 shadow-xl shadow-orange-500/20">

        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-inner">
              🏃
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
                  Destacado
                </span>
                <span className="flex items-center text-xs font-bold">
                  <Flame className="w-3 h-3 mr-1 fill-current" /> Muy activo
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-1">
                Runners Santiago
              </h2>
              <p className="text-orange-100 text-sm font-medium">
                La comunidad de running más grande de la ciudad.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) =>
              <img
                key={i}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`}
                alt="Member"
                className="w-10 h-10 rounded-full border-2 border-orange-500 bg-white" />

              )}
              <div className="w-10 h-10 rounded-full border-2 border-orange-500 bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold">
                +138
              </div>
            </div>
            <button className="px-6 py-3 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-lg">
              Unirse
            </button>
          </div>
        </div>
      </motion.div>

      {/* Navigation & Search */}
      <div className="flex flex-col md:flex-row justify-between gap-4 border-b border-gray-100 dark:border-[#2D2D4A] pb-4">
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {['Explorar', 'Mis Comunidades', 'Populares'].map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`
                pb-2 text-sm font-bold whitespace-nowrap transition-colors relative
                ${activeTab === tab.toLowerCase() ? 'text-[#FF6B6B]' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}
              `}>

              {tab}
              {activeTab === tab.toLowerCase() &&
            <motion.div
              layoutId="activeCommunityTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B6B] rounded-full" />

            }
            </button>
          )}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar comunidades..."
            className="w-full md:w-64 bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 focus:border-[#FF6B6B] text-gray-900 dark:text-white transition-colors" />

        </div>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {communities.map((community) =>
        <motion.div
          key={community.id}
          variants={item}
          className="bg-white dark:bg-[#1A1A2E] rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-[#2D2D4A] hover:shadow-md dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group">

            <div
            className={`h-24 bg-gradient-to-r ${community.gradient} p-4 flex justify-between items-start`}>

              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-inner">
                {community.emoji}
              </div>
              <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-white flex items-center">
                {community.level}
              </span>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#FF6B6B] transition-colors">
                    {community.name}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <Users className="w-3 h-3 mr-1" /> {community.members}{' '}
                    miembros
                  </div>
                </div>
                <button className="px-4 py-1.5 border border-gray-200 dark:border-[#2D2D4A] rounded-lg text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#22223A] transition-colors">
                  Unirse
                </button>
              </div>

              <div className="flex gap-2 mb-4">
                {community.tags.map((tag) =>
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 dark:bg-[#22223A] text-gray-600 dark:text-gray-400 rounded-md text-xs font-semibold">

                    {tag}
                  </span>
              )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-[#2D2D4A]">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) =>
                <img
                  key={i}
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${community.id + i}`}
                  alt="Member"
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-[#1A1A2E] bg-gray-100" />

                )}
                </div>
                <div className="flex gap-3 text-xs font-medium text-gray-400">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {community.events}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="w-3 h-3 mr-1" />{' '}
                    {community.messages}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Bottom Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-[#22223A] dark:to-[#1A1A2E] rounded-3xl p-6 text-white shadow-lg">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-yellow-400" /> Top Comunidades
          </h3>
          <div className="space-y-4">
            {communities.slice(0, 3).map((c, i) =>
            <div key={c.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                  className={`font-bold ${i === 0 ? 'text-yellow-400' : i === 1 ? 'text-gray-300' : 'text-orange-300'}`}>

                    #{i + 1}
                  </span>
                  <span className="text-sm font-medium">{c.name}</span>
                </div>
                <span className="text-xs opacity-70">{c.members} pts</span>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2 bg-white dark:bg-[#1A1A2E] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-[#FF6B6B]" /> Próximos
              Eventos Comunitarios
            </h3>
            <button className="text-xs font-bold text-[#FF6B6B] hover:underline">
              Ver todos
            </button>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) =>
            <div
              key={i}
              className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-[#22223A] rounded-xl transition-colors cursor-pointer group">

                <div className="w-12 h-12 bg-gray-100 dark:bg-[#22223A] rounded-lg flex flex-col items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400">
                  <span>MAR</span>
                  <span className="text-lg text-gray-900 dark:text-white">
                    1{i + 4}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-[#FF6B6B] transition-colors">
                    Torneo Relámpago {i === 1 ? 'Fútbol' : 'Padel'}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Organizado por {communities[i].name}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#FF6B6B] transition-colors" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}