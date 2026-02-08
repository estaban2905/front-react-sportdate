import React from 'react';
import { Search, MoreVertical, Phone, Video } from 'lucide-react';
export function ChatScreen() {
  const chats = [
  {
    id: 1,
    name: 'Camila',
    message: '¡Nos vemos en el parque a las 10!',
    time: '10:30 AM',
    unread: 2,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camila',
    online: true
  },
  {
    id: 2,
    name: 'Grupo Running',
    message: 'Diego: ¿Quién lleva agua?',
    time: '9:15 AM',
    unread: 0,
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Running',
    online: false
  },
  {
    id: 3,
    name: 'Javier',
    message: 'Buen partido el de ayer 🤙',
    time: 'Ayer',
    unread: 0,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Javier',
    online: true
  },
  {
    id: 4,
    name: 'Ana P.',
    message: '¿Te sumas al padel el jueves?',
    time: 'Ayer',
    unread: 0,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
    online: false
  },
  {
    id: 5,
    name: 'Carlos D.',
    message: 'Te envié la solicitud del evento',
    time: 'Lun',
    unread: 0,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    online: false
  }];

  return (
    <div className="h-full flex flex-col md:flex-row max-w-6xl mx-auto md:h-[calc(100vh-2rem)] md:py-4 gap-6">
      {/* Chat List */}
      <div className="flex-1 md:max-w-sm bg-white dark:bg-[#1A1A2E] md:rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] flex flex-col h-full overflow-hidden transition-all duration-300">
        <div className="p-4 border-b border-gray-100 dark:border-[#2D2D4A]">
          <h1 className="text-2xl font-black text-gray-900 dark:text-white mb-4 transition-colors">
            Mensajes
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar chats..."
              className="w-full bg-gray-50 dark:bg-[#22223A] border border-gray-200 dark:border-[#2D2D4A] rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 focus:border-[#FF6B6B] text-gray-900 dark:text-white transition-colors" />

          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) =>
          <div
            key={chat.id}
            className="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-[#22223A] cursor-pointer transition-colors border-b border-gray-50 dark:border-[#2D2D4A] last:border-0">

              <div className="relative mr-4">
                <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full bg-gray-200 dark:bg-[#2D2D4A] object-cover" />

                {chat.online &&
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#1A1A2E]"></div>
              }
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900 dark:text-white truncate transition-colors">
                    {chat.name}
                  </h3>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                    {chat.time}
                  </span>
                </div>
                <p
                className={`text-sm truncate transition-colors ${chat.unread > 0 ? 'font-bold text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>

                  {chat.message}
                </p>
              </div>
              {chat.unread > 0 &&
            <div className="ml-3 w-5 h-5 bg-[#FF6B6B] rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                  {chat.unread}
                </div>
            }
            </div>
          )}
        </div>
      </div>

      {/* Chat Window (Desktop Placeholder) */}
      <div className="hidden md:flex flex-1 bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D2D4A] flex-col overflow-hidden transition-all duration-300">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-100 dark:border-[#2D2D4A] flex justify-between items-center bg-gray-50/30 dark:bg-[#22223A]/30">
          <div className="flex items-center">
            <div className="relative mr-3">
              <img
                src={chats[0].avatar}
                alt="User"
                className="w-10 h-10 rounded-full" />

              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-[#1A1A2E]"></div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white transition-colors">
                {chats[0].name}
              </h3>
              <span className="text-xs text-green-600 dark:text-green-400 font-medium transition-colors">
                En línea
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#22223A] rounded-full transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#22223A] rounded-full transition-colors">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#22223A] rounded-full transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto bg-[#FAFAFA] dark:bg-[#0F0F1A] space-y-4 transition-colors">
          <div className="flex justify-center mb-6">
            <span className="text-xs font-bold text-gray-400 bg-gray-100 dark:bg-[#22223A] px-3 py-1 rounded-full transition-colors">
              Hoy, 10:30 AM
            </span>
          </div>

          <div className="flex justify-end">
            <div className="bg-[#FF6B6B] text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-xs shadow-sm">
              <p className="text-sm">
                ¡Hola Camila! ¿Vas a ir al evento de running hoy?
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <img
              src={chats[0].avatar}
              alt="User"
              className="w-8 h-8 rounded-full mr-2 self-end mb-1" />

            <div className="bg-white dark:bg-[#22223A] text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-[#2D2D4A] px-4 py-2 rounded-2xl rounded-tl-none max-w-xs shadow-sm transition-colors">
              <p className="text-sm">
                ¡Sii! Justo iba saliendo. ¿Nos juntamos allá?
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-[#FF6B6B] text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-xs shadow-sm">
              <p className="text-sm">
                ¡Dale! Nos vemos en la entrada del parque a las 10.
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <img
              src={chats[0].avatar}
              alt="User"
              className="w-8 h-8 rounded-full mr-2 self-end mb-1" />

            <div className="bg-white dark:bg-[#22223A] text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-[#2D2D4A] px-4 py-2 rounded-2xl rounded-tl-none max-w-xs shadow-sm transition-colors">
              <p className="text-sm">¡Nos vemos en el parque a las 10! 🏃‍♀️</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100 dark:border-[#2D2D4A] bg-white dark:bg-[#1A1A2E] transition-colors">
          <div className="flex items-center bg-gray-50 dark:bg-[#22223A] rounded-xl px-4 py-2 border border-gray-200 dark:border-[#2D2D4A] focus-within:ring-2 focus-within:ring-[#FF6B6B]/20 focus-within:border-[#FF6B6B] transition-all">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />

            <button className="ml-2 p-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF8E8E] transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">

                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>);

}