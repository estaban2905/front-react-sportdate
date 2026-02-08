import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProfileCard } from './ProfileCard';
import { GruposScroll } from './GruposScroll';
import { ConfettiEffect } from './ConfettiEffect';
import { PROFILES, GROUPS } from '../data';
import { Info, Shield, MapPin, Clock, Activity, Star } from 'lucide-react';
export function MatchScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMatchOverlay, setShowMatchOverlay] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const currentProfile = PROFILES[currentIndex % PROFILES.length];
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const handleAccept = () => {
    setShowConfetti(true);
    setShowMatchOverlay(true);
    // Reset confetti and move to next profile after delay
    setTimeout(() => {
      setShowMatchOverlay(false);
      handleNext();
      setTimeout(() => setShowConfetti(false), 500);
    }, 1500);
  };
  const filters = [
  'Todos',
  '⚽ Fútbol',
  '🏃 Running',
  '🎾 Padel',
  '🧘 Yoga',
  '🏔️ Trekking'];

  return (
    <div className="h-full flex flex-col md:flex-row max-w-6xl mx-auto md:py-8 gap-8 px-4 md:px-0">
      {/* Confetti Layer */}
      {showConfetti && <ConfettiEffect />}

      {/* Match Overlay */}
      <AnimatePresence>
        {showMatchOverlay &&
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-3xl"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}>

            <motion.div
            initial={{
              scale: 0.5,
              rotate: -10
            }}
            animate={{
              scale: 1.2,
              rotate: 0
            }}
            className="bg-white dark:bg-[#1A1A2E] px-12 py-6 rounded-3xl shadow-2xl transform -translate-y-20 border-4 border-[#FF6B6B]">

              <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]">
                ¡MATCH! 🎉
              </span>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      {/* Left Column: Card Stack */}
      <div className="flex-1 flex flex-col max-w-md mx-auto w-full">
        <header className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white transition-colors">
                Descubrir
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                Encuentra tu partner deportivo ideal
              </p>
            </div>
            <div className="md:hidden w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white dark:border-[#2D2D4A] shadow-sm">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`}
                alt="User"
                className="w-full h-full object-cover" />

            </div>
          </div>

          {/* Sport Filters */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {filters.map((filter) =>
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                  px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border
                  ${activeFilter === filter ? 'bg-[#FF6B6B] text-white border-[#FF6B6B] shadow-md shadow-rose-200 dark:shadow-none' : 'bg-white dark:bg-[#1A1A2E] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-[#2D2D4A] hover:bg-gray-50 dark:hover:bg-[#22223A]'}
                `}>

                {filter}
              </button>
            )}
          </div>
        </header>

        <div className="relative z-10 flex-1 min-h-[500px]">
          <AnimatePresence mode="wait">
            <div className="space-y-4">
              <ProfileCard
                key={currentProfile.id}
                profile={currentProfile}
                onAccept={handleAccept}
                onSkip={handleNext} />


              {/* Enhanced Profile Info */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300">

                <div className="flex items-center gap-2 mb-3 text-sm font-bold text-gray-900 dark:text-white">
                  <Clock className="w-4 h-4 text-[#FF6B6B]" />
                  Disponibilidad
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold rounded-md">
                    Mañanas
                  </span>
                  <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-md">
                    Fines de Semana
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center ml-auto">
                    Pref: 18:00 - 20:00
                  </span>
                </div>

                <div className="border-t border-gray-50 dark:border-[#2D2D4A] pt-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                      Deportistas cerca de ti
                    </span>
                    <span className="text-xs text-[#FF6B6B] font-bold cursor-pointer">
                      Ver mapa
                    </span>
                  </div>
                  <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
                    {[1, 2, 3, 4, 5].map((i) =>
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 min-w-[50px]">

                        <div className="relative">
                          <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 55}`}
                          className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#2D2D4A]"
                          alt="Nearby" />

                          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#1A1A2E] text-[8px] font-bold px-1 rounded-full border border-gray-100 dark:border-[#2D2D4A] shadow-sm">
                            {i * 200}m
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Column: Extra Info (Desktop only) */}
      <div className="hidden md:flex flex-1 flex-col space-y-6 max-w-sm lg:max-w-md">
        {/* Match Stats */}
        <div className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#FF6B6B]" />
            Estadísticas de Match
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 dark:bg-[#22223A] rounded-xl text-center">
              <div className="text-2xl font-black text-gray-900 dark:text-white">
                12
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Matches esta semana
              </div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-[#22223A] rounded-xl text-center">
              <div className="text-2xl font-black text-gray-900 dark:text-white">
                85%
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Tasa de aceptación
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs text-center text-gray-400">
            Tu deporte más compatible:{' '}
            <span className="font-bold text-[#FF6B6B]">Running</span>
          </div>
        </div>

        {/* Featured Profiles */}
        <div className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A] transition-colors duration-300">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Deportistas Destacados
          </h3>
          <div className="space-y-4">
            {PROFILES.map((p) =>
            <div
              key={p.id}
              className="flex items-center justify-between group cursor-pointer">

                <div className="flex items-center gap-3">
                  <div className="text-2xl bg-gray-50 dark:bg-[#22223A] w-10 h-10 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                    {p.emoji}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-[#FF6B6B] transition-colors">
                      {p.name}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {p.level}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                  {p.compatibility}%
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30 transition-colors">
          <div className="flex items-start mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3 transition-colors">
              <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900 dark:text-blue-300 text-lg transition-colors">
                Consejo Pro
              </h3>
              <p className="text-blue-700 dark:text-blue-400 text-sm mt-1 transition-colors">
                Los usuarios con intereses similares en deportes tienen un 40%
                más de probabilidad de mantener una rutina de entrenamiento.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-xs text-gray-400 dark:text-gray-500 space-x-2 transition-colors">
          <Shield className="w-4 h-4" />
          <span>Perfiles verificados y seguros</span>
        </div>
      </div>

      {/* Mobile Groups (shown below card on mobile) */}
      <div className="md:hidden pb-24">
        <GruposScroll groups={GROUPS} />
      </div>
    </div>);

}