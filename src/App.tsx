import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MatchScreen } from './components/MatchScreen';
import { EventosScreen } from './components/EventosScreen';
import { BottomNav } from './components/BottomNav';
import { Sidebar } from './components/Sidebar';
import { PlaceholderScreen } from './components/PlaceholderScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { ChatScreen } from './components/ChatScreen';
import { ComunidadesScreen } from './components/ComunidadesScreen';
import { ThemeProvider } from './components/ThemeContext';
function AppContent() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const renderScreen = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'match':
        return <MatchScreen />;
      case 'eventos':
        return <EventosScreen />;
      case 'ranking':
        return <LeaderboardScreen />;
      case 'grupos':
        return <ComunidadesScreen />;
      case 'chat':
        return <ChatScreen />;
      case 'perfil':
        return <ProfileScreen />;
      default:
        return <DashboardScreen />;
    }
  };
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0F0F1A] flex text-[#1A1A2E] dark:text-[#F0F0F5] font-sans transition-colors duration-300">
      {/* Desktop Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 w-full min-h-screen relative overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
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
            className="min-h-full">

            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Mobile Bottom Nav (Hidden on desktop) */}
      <div className="md:hidden">
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>);

}
export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>);

}