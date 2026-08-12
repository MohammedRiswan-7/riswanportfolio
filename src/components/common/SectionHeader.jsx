import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, highlightTitle, subtitle, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : ''}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}{' '}
        {highlightTitle && (
          <span className="gradient-text-cyan">{highlightTitle}</span>
        )}
      </h2>

      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
