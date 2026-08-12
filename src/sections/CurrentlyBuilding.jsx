import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Sparkles, Compass, MessageSquare, Flame } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';
import { currentlyBuilding } from '../data/portfolioData';

export default function CurrentlyBuilding() {
  return (
    <section className="py-20 relative z-10 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="In Active Lab Development"
          title="Currently"
          highlightTitle="Building"
          subtitle="An inside look at the flagship AI platforms actively under development on my machine."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentlyBuilding.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <GlassCard
                glowColor={idx === 0 ? 'cyan' : 'violet'}
                className="h-full p-8 border-cyan-500/30 relative overflow-hidden"
              >
                {/* Background Accent Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl`} />

                <div className="relative z-10 space-y-6">
                  
                  {/* Status Indicator Bar */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>{item.status}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-violet-400">
                      <Flame className="w-4 h-4 text-orange-400" />
                      <span>{item.progressStage}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-white font-mono">{item.title}</h3>
                    <p className="text-sm font-mono text-cyan-400">{item.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech stack */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Animated Loader Bar Effect */}
                  <div className="pt-2">
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <motion.div
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className={`h-full w-1/3 bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </div>

                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
