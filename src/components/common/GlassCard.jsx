import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hoverTilt = false, glowColor = 'cyan' }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!hoverTilt) return;
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateXVal = (y - centerY) / 12;
    const rotateYVal = (centerX - x) / 12;

    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    if (!hoverTilt) return;
    setRotateX(0);
    setRotateY(0);
  };

  const glowBorderClass = glowColor === 'violet' 
    ? 'hover:border-violet-500/40 hover:shadow-violet-glow' 
    : glowColor === 'emerald'
    ? 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.3)]'
    : 'hover:border-cyan-500/40 hover:shadow-cyan-glow';

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: hoverTilt ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : 'none',
        transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease'
      }}
      className={`glass-panel rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden ${glowBorderClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
