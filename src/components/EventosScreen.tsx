import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Plus,
  Search,
  Filter,
  X,
  Clock,
  Users,
  AlignLeft } from
'lucide-react';
import { EVENTS } from '../data';
export function EventosScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState('');
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
    <div className="p-4 pt-6 pb-24 md:p-8 max-w-7xl mx-auto relative">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2 transition-colors">
            📅 Eventos Deportivos
          </h1>
          <p className="text-gray-500 dark:text-gray-400 transition-colors">
            Únete a actividades cerca de ti o crea la tuya.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar eventos..."
              className="bg-white dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 focus:border-[#FF6B6B] w-64 text-gray-900 dark:text-white transition-colors" />

          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-5 py-2 bg-gray-900 dark:bg-[#22223A] text-white rounded-full font-bold hover:bg-gray-800 dark:hover:bg-[#2D2D4A] transition-colors shadow-lg shadow-gray-900/20 dark:shadow-black/30 border border-transparent dark:border-[#2D2D4A]">

            <Plus className="w-5 h-5 mr-2" />
            Crear Evento
          </button>
        </div>
      </header>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-6 mb-2">
        {[
        'Todos',
        'Running',
        'Fútbol',
        'Yoga',
        'Padel',
        'Trekking',
        'Crossfit'].
        map((filter, i) =>
        <button
          key={filter}
          className={`
              px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all
              ${i === 0 ? 'bg-[#FF6B6B] text-white shadow-md shadow-rose-200 dark:shadow-rose-900/20' : 'bg-white dark:bg-[#1A1A2E] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#2D2D4A] hover:bg-gray-50 dark:hover:bg-[#22223A]'}
            `}>

            {filter}
          </button>
        )}
        <button className="px-3 py-2 rounded-full border border-gray-200 dark:border-[#2D2D4A] text-gray-500 hover:bg-gray-50 dark:hover:bg-[#22223A] md:hidden transition-colors">
          <Filter className="w-4 h-4" />
        </button>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show">

        {EVENTS.map((event) =>
        <motion.div key={event.id} variants={item} className="group">
            <div className="bg-white dark:bg-[#1A1A2E] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-[#2D2D4A] hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-[#22223A] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {event.sportEmoji}
                </div>
                <span className="text-xs font-bold text-[#FF6B6B] bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg whitespace-nowrap border border-red-100 dark:border-red-900/30 transition-colors">
                  {event.time}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-[#FF6B6B] transition-colors">
                {event.title}
              </h3>

              <div className="space-y-2 mb-6 flex-1">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-50 dark:border-[#2D2D4A] flex items-center justify-between transition-colors">
                <div className="flex items-center">
                  <div className="flex -space-x-3 mr-3">
                    {event.avatars.map((color, i) =>
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-white dark:border-[#1A1A2E] ${color}`} />

                  )}
                  </div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#22223A] px-2 py-1 rounded-md transition-colors">
                    {event.participants}/{event.maxParticipants}
                  </span>
                </div>

                <button className="px-5 py-2.5 bg-gray-900 dark:bg-[#22223A] text-white text-sm font-bold rounded-xl shadow-sm hover:bg-[#FF6B6B] dark:hover:bg-[#FF6B6B] transition-colors border border-transparent dark:border-[#2D2D4A]">
                  Unirse
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Add New Card Placeholder */}
        <motion.div
          variants={item}
          onClick={() => setIsModalOpen(true)}
          className="border-2 border-dashed border-gray-200 dark:border-[#2D2D4A] rounded-3xl p-6 flex flex-col items-center justify-center text-center min-h-[200px] hover:border-[#FF6B6B] dark:hover:border-[#FF6B6B] hover:bg-red-50/30 dark:hover:bg-red-900/10 transition-colors cursor-pointer group">

          <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-[#22223A] flex items-center justify-center mb-4 group-hover:bg-white dark:group-hover:bg-[#2D2D4A] group-hover:shadow-md transition-all">
            <Plus className="w-8 h-8 text-gray-400 dark:text-gray-500 group-hover:text-[#FF6B6B]" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">
            Proponer Evento
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
            Organiza tu propia actividad
          </p>
        </motion.div>
      </motion.div>

      {/* Create Event Modal */}
      <AnimatePresence>
        {isModalOpen &&
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
              y: 20
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
              y: 20
            }}
            className="bg-white dark:bg-[#1A1A2E] rounded-3xl p-6 w-full max-w-lg relative z-10 shadow-2xl border border-gray-100 dark:border-[#2D2D4A]">

              <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-[#22223A] rounded-full transition-colors">

                <X className="w-5 h-5 text-gray-500" />
              </button>

              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">
                Crear Nuevo Evento
              </h2>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Título del Evento
                  </label>
                  <input
                  type="text"
                  placeholder="Ej: Partido Amistoso"
                  className="w-full bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] dark:text-white" />

                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Deporte
                    </label>
                    <select
                    className="w-full bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] dark:text-white appearance-none"
                    onChange={(e) => setSelectedSport(e.target.value)}>

                      <option value="">Seleccionar...</option>
                      <option value="futbol">⚽ Fútbol</option>
                      <option value="padel">🎾 Padel</option>
                      <option value="running">🏃 Running</option>
                      <option value="yoga">🧘 Yoga</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Participantes
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                      type="number"
                      placeholder="Max"
                      className="w-full bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] dark:text-white" />

                    </div>
                  </div>
                </div>

                {/* Dynamic Fields based on Sport */}
                {selectedSport === 'futbol' &&
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900/30">
                    <label className="block text-xs font-bold text-green-800 dark:text-green-400 mb-1">
                      Tipo de Cancha
                    </label>
                    <div className="flex gap-2">
                      {['Pasto Sintético', 'Cemento', 'Pasto Natural'].map(
                    (type) =>
                    <button
                      key={type}
                      className="px-3 py-1 bg-white dark:bg-[#1A1A2E] rounded-lg text-xs font-semibold shadow-sm hover:text-green-600">

                            {type}
                          </button>

                  )}
                    </div>
                  </div>
              }
                {selectedSport === 'padel' &&
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
                    <label className="block text-xs font-bold text-blue-800 dark:text-blue-400 mb-1">
                      Nivel Requerido
                    </label>
                    <div className="flex gap-2">
                      {['Principiante', 'Intermedio', 'Avanzado'].map((lvl) =>
                  <button
                    key={lvl}
                    className="px-3 py-1 bg-white dark:bg-[#1A1A2E] rounded-lg text-xs font-semibold shadow-sm hover:text-blue-600">

                          {lvl}
                        </button>
                  )}
                    </div>
                  </div>
              }

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Fecha
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                      type="date"
                      className="w-full bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] dark:text-white text-sm" />

                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Hora
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                      type="time"
                      className="w-full bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] dark:text-white text-sm" />

                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Ubicación
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                    type="text"
                    placeholder="Dirección o lugar"
                    className="w-full bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] dark:text-white" />

                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Descripción
                  </label>
                  <div className="relative">
                    <AlignLeft className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                    rows={3}
                    placeholder="Detalles adicionales..."
                    className="w-full bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] dark:text-white resize-none">
                  </textarea>
                  </div>
                </div>

                <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-4 rounded-xl hover:bg-[#FF6B6B] dark:hover:bg-[#FF6B6B] dark:hover:text-white transition-colors shadow-lg mt-2">
                  Publicar Evento
                </button>
              </form>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </div>);

}