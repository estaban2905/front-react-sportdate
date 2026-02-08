import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  TrendingUp,
  TrendingDown,
  Minus,
  Users,
  Award,
  Shield } from
'lucide-react';
import { LEADERBOARD } from '../data';
export function LeaderboardScreen() {
  const [activeTab, setActiveTab] = useState('Individual');
  const [activeFilter, setActiveFilter] = useState('General');
  const filters = ['General', 'Running', 'Fútbol', 'Padel', 'Yoga'];
  const tabs = ['Individual', 'Equipos', 'Campeonatos'];
  // Mock Data for Teams
  const teams = [
  {
    id: 't1',
    name: 'Los Halcones',
    sport: '⚽ Fútbol',
    wins: 12,
    losses: 3,
    draws: 2,
    points: 38,
    members: 11,
    avatar: 'from-red-500 to-orange-500'
  },
  {
    id: 't2',
    name: 'Padel Kings',
    sport: '🎾 Padel',
    wins: 8,
    losses: 2,
    draws: 0,
    points: 24,
    members: 4,
    avatar: 'from-blue-500 to-cyan-500'
  },
  {
    id: 't3',
    name: 'Sprint Club',
    sport: '🏃 Running',
    wins: 15,
    losses: 5,
    draws: 0,
    points: 45,
    members: 8,
    avatar: 'from-green-500 to-teal-500'
  },
  {
    id: 't4',
    name: 'Yoga Flow',
    sport: '🧘 Yoga',
    wins: 10,
    losses: 1,
    draws: 0,
    points: 30,
    members: 6,
    avatar: 'from-purple-500 to-pink-500'
  }];

  // Mock Data for Championships
  const championships = [
  {
    id: 'ch1',
    name: 'Liga Fútbol 5 Santiago',
    sport: '⚽',
    status: 'En curso',
    round: 'Semifinal',
    teams: 8,
    startDate: 'Mar 2024',
    prize: '500 XP + Trofeo',
    color: 'bg-emerald-500'
  },
  {
    id: 'ch2',
    name: 'Torneo Padel Primavera',
    sport: '🎾',
    status: 'Inscripciones',
    round: 'Fase de grupos',
    teams: 16,
    startDate: 'Abr 2024',
    prize: '1000 XP + Medalla',
    color: 'bg-blue-500'
  },
  {
    id: 'ch3',
    name: 'Maratón Running Challenge',
    sport: '🏃',
    status: 'Finalizado',
    round: 'Final',
    teams: 32,
    startDate: 'Feb 2024',
    prize: '800 XP',
    color: 'bg-orange-500'
  }];

  return (
    <div className="p-6 pb-24 md:p-8 max-w-5xl mx-auto">
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2 transition-colors">
          🏆 Ranking Semanal
        </h1>
        <p className="text-gray-500 dark:text-gray-400 transition-colors">
          Compite con otros deportistas y sube de nivel.
        </p>
      </header>

      {/* Main Tabs */}
      <div className="flex justify-center md:justify-start mb-6">
        <div className="bg-gray-100 dark:bg-[#22223A] p-1 rounded-xl inline-flex">
          {tabs.map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
                px-6 py-2 rounded-lg text-sm font-bold transition-all
                ${activeTab === tab ? 'bg-white dark:bg-[#1A1A2E] text-[#FF6B6B] shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}
              `}>

              {tab}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'Individual' &&
        <motion.div
          key="individual"
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          transition={{
            duration: 0.2
          }}>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-6 justify-center md:justify-start">
              {filters.map((filter) =>
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                    px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all
                    ${activeFilter === filter ? 'bg-gray-900 dark:bg-[#F0F0F5] text-white dark:text-gray-900 shadow-lg shadow-gray-200 dark:shadow-none scale-105' : 'bg-white dark:bg-[#1A1A2E] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#2D2D4A] hover:bg-gray-50 dark:hover:bg-[#22223A]'}
                  `}>

                  {filter}
                </button>
            )}
            </div>

            {/* Leaderboard Table */}
            <div className="bg-white dark:bg-[#1A1A2E] rounded-3xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] overflow-hidden transition-all duration-300">
              <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50/50 dark:bg-[#22223A] text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-[#2D2D4A] transition-colors">
                <div className="col-span-2 md:col-span-1 text-center">#</div>
                <div className="col-span-6 md:col-span-5">Deportista</div>
                <div className="col-span-2 md:col-span-3 text-center">
                  Nivel
                </div>
                <div className="col-span-2 md:col-span-3 text-right pr-4">
                  XP
                </div>
              </div>

              <div className="divide-y divide-gray-50 dark:divide-[#2D2D4A]">
                {LEADERBOARD.map((entry, index) =>
              <motion.div
                key={entry.id}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: index * 0.05
                }}
                className={`
                      grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 dark:hover:bg-[#22223A] transition-colors
                      ${entry.id === 'me' ? 'bg-orange-50/50 dark:bg-orange-900/10 hover:bg-orange-50 dark:hover:bg-orange-900/20' : ''}
                    `}>

                    {/* Rank */}
                    <div className="col-span-2 md:col-span-1 flex justify-center">
                      {entry.rank <= 3 ?
                  <div
                    className={`
                          w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-sm
                          ${entry.rank === 1 ? 'bg-yellow-400' : entry.rank === 2 ? 'bg-gray-300' : 'bg-orange-300'}
                        `}>

                          {entry.rank}
                        </div> :

                  <span className="font-bold text-gray-500 dark:text-gray-400 text-lg transition-colors">
                          {entry.rank}
                        </span>
                  }
                    </div>

                    {/* User Info */}
                    <div className="col-span-6 md:col-span-5 flex items-center space-x-3">
                      <div className="relative">
                        <img
                      src={entry.avatar}
                      alt={entry.name}
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#2D2D4A]" />

                        {entry.id === 'me' &&
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#1A1A2E]" />
                    }
                      </div>
                      <div>
                        <h3
                      className={`font-bold transition-colors ${entry.id === 'me' ? 'text-[#FF6B6B]' : 'text-gray-900 dark:text-white'}`}>

                          {entry.name} {entry.id === 'me' && '(Tú)'}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium transition-colors">
                          {entry.sport}
                        </span>
                      </div>
                    </div>

                    {/* Level & Trend */}
                    <div className="col-span-2 md:col-span-3 flex flex-col md:flex-row items-center justify-center md:space-x-2">
                      <span className="font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#22223A] px-2 py-0.5 rounded text-xs transition-colors">
                        Lvl {entry.level}
                      </span>
                      <div className="hidden md:flex items-center text-xs font-semibold mt-1 md:mt-0">
                        {entry.trend === 'up' &&
                    <span className="text-green-500 flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" /> Subiendo
                          </span>
                    }
                        {entry.trend === 'down' &&
                    <span className="text-red-500 flex items-center">
                            <TrendingDown className="w-3 h-3 mr-1" /> Bajando
                          </span>
                    }
                        {entry.trend === 'same' &&
                    <span className="text-gray-400 dark:text-gray-500 flex items-center">
                            <Minus className="w-3 h-3 mr-1" /> Igual
                          </span>
                    }
                      </div>
                    </div>

                    {/* XP */}
                    <div className="col-span-2 md:col-span-3 text-right pr-4 font-mono font-bold text-gray-900 dark:text-white transition-colors">
                      {entry.xp.toLocaleString()}
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </motion.div>
        }

        {activeTab === 'Equipos' &&
        <motion.div
          key="equipos"
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          transition={{
            duration: 0.2
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {teams.map((team, index) =>
          <div
            key={team.id}
            className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-[#2D2D4A] flex items-center gap-4 hover:shadow-md transition-all">

                <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${team.avatar} flex items-center justify-center text-2xl shadow-inner`}>

                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                        {team.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {team.sport}
                      </p>
                    </div>
                    <span className="text-2xl font-black text-gray-900 dark:text-white">
                      {team.points}{' '}
                      <span className="text-xs font-bold text-gray-400">
                        pts
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-xs font-bold text-gray-500 dark:text-gray-400">
                    <span className="text-green-500">{team.wins}W</span>
                    <span className="text-red-500">{team.losses}L</span>
                    <span className="text-gray-400">{team.draws}D</span>
                    <span className="ml-auto flex items-center">
                      <Users className="w-3 h-3 mr-1" /> {team.members}
                    </span>
                  </div>
                </div>
              </div>
          )}
          </motion.div>
        }

        {activeTab === 'Campeonatos' &&
        <motion.div
          key="campeonatos"
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          transition={{
            duration: 0.2
          }}
          className="space-y-4">

            {championships.map((champ) =>
          <div
            key={champ.id}
            className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A] relative overflow-hidden group">

                <div
              className={`absolute left-0 top-0 bottom-0 w-2 ${champ.color}`} />

                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-50 dark:bg-[#22223A] rounded-2xl flex items-center justify-center text-3xl">
                      {champ.sport}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase text-white ${champ.status === 'En curso' ? 'bg-green-500' : champ.status === 'Inscripciones' ? 'bg-blue-500' : 'bg-gray-500'}`}>

                          {champ.status}
                        </span>
                        <span className="text-xs text-gray-400 font-bold">
                          {champ.startDate}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#FF6B6B] transition-colors">
                        {champ.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                        <Award className="w-4 h-4 mr-1 text-yellow-500" />{' '}
                        Premio: {champ.prize}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 flex justify-between items-center md:justify-end md:gap-8 border-t md:border-t-0 border-gray-100 dark:border-[#2D2D4A] pt-4 md:pt-0">
                    <div className="text-center">
                      <div className="text-xs text-gray-400 font-bold uppercase">
                        Ronda
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {champ.round}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-400 font-bold uppercase">
                        Equipos
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {champ.teams}
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-gray-900 dark:bg-[#22223A] text-white rounded-lg font-bold text-sm hover:bg-[#FF6B6B] dark:hover:bg-[#FF6B6B] transition-colors">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
          )}
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}