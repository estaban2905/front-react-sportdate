import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function ConfettiEffect() {
  const [pieces, setPieces] = useState<number[]>([]);
  useEffect(() => {
    // Generate 30 confetti pieces
    setPieces(
      Array.from(
        {
          length: 30
        },
        (_, i) => i
      )
    );
  }, []);
  const colors = ['#FF6B6B', '#FF8E8E', '#0EA5E9', '#FCD34D', '#A78BFA'];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((i) =>
      <motion.div
        key={i}
        className="absolute w-3 h-3 rounded-sm"
        style={{
          backgroundColor: colors[i % colors.length],
          left: '50%',
          top: '50%'
        }}
        initial={{
          x: 0,
          y: 0,
          scale: 0,
          opacity: 1
        }}
        animate={{
          x: (Math.random() - 0.5) * 400,
          y: (Math.random() - 0.5) * 400,
          rotate: Math.random() * 360,
          scale: Math.random() * 1 + 0.5,
          opacity: 0
        }}
        transition={{
          duration: 1.5,
          ease: 'easeOut'
        }} />

      )}
    </div>);

}