import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, MapPin, Calendar, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          title="Education"
          highlightTitle="History"
          subtitle="Formal academic degrees and secondary education foundation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item, idx) => {
            const IconComp = item.current ? GraduationCap : School;

            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <GlassCard
                  hoverTilt
                  glowColor={item.current ? 'cyan' : 'violet'}
                  className="h-full p-8 border-slate-800 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                        item.current
                          ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-300'
                          : 'bg-slate-900 border border-slate-800 text-slate-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white font-mono leading-snug">{item.degree}</h3>
                      <p className="text-sm font-semibold text-slate-300 mt-2">{item.institution}</p>
                    </div>

                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>{item.location}</span>
                    </div>
                    {item.current && (
                      <span className="font-mono text-cyan-400 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Final Year
                      </span>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
