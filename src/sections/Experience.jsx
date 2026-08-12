import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin, Sparkles } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Career Journey"
          title="Practical"
          highlightTitle="Experience"
          subtitle="Industrial training and traineeship opportunities completed during my degree."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 hidden sm:flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center justify-center text-cyan-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content Container */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <GlassCard hoverTilt glowColor={isEven ? 'cyan' : 'violet'} className="p-6 border-slate-800">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                            {item.type}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-white font-mono">{item.role}</h3>
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 mt-1">
                            <Building2 className="w-4 h-4 text-violet-400" />
                            <span>{item.company}</span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
