import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Cpu, Wrench, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  Programming: Code2,
  Frontend: Layout,
  'AI & Data': Cpu,
  Tools: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoriesList = ['All', ...skillCategories.map(c => c.name)];

  const filteredCategories = activeCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.name === activeCategory);

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tech Stack & Capabilities"
          title="Skills &"
          highlightTitle="Technologies"
          subtitle="A comprehensive overview of programming languages, framework libraries, AI tools, and development workflows I work with."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-12">
          {filteredCategories.map((categoryGroup, groupIdx) => {
            const CategoryIcon = categoryIcons[categoryGroup.name] || Code2;

            return (
              <motion.div
                key={categoryGroup.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                  <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono">{categoryGroup.name}</h3>
                  <span className="text-xs font-mono text-slate-500">({categoryGroup.skills.length} Techs)</span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -4, rotate: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <GlassCard
                        glowColor={sIdx % 2 === 0 ? 'cyan' : 'violet'}
                        className="h-full p-4 flex flex-col items-center justify-center text-center group cursor-pointer border-slate-800/80 hover:border-cyan-500/40"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-3 group-hover:border-cyan-400 group-hover:bg-cyan-950/40 transition-colors">
                          <Sparkles className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-400 leading-tight">
                          {skill.level}
                        </span>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
