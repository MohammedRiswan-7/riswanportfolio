import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, FolderGit2, Code, Eye, Compass, MessageSquare, Hand, GraduationCap } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';
import { projects } from '../data/portfolioData';

const projectVisualIcons = {
  ghatquest: Compass,
  askify: MessageSquare,
  'airtouch-ai': Hand,
  'ai-campus-assistant': GraduationCap
};

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filterCategories = ['All', 'AI', 'Web', 'Data', 'Computer Vision'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'AI') return p.category === 'AI' || p.technologies.includes('AI');
    if (filter === 'Web') return p.category === 'Web' || p.technologies.includes('React');
    if (filter === 'Data') return p.technologies.includes('Python') || p.technologies.includes('Supabase');
    if (filter === 'Computer Vision') return p.category === 'Computer Vision' || p.technologies.includes('OpenCV');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Selected Work"
          title="Featured"
          highlightTitle="Projects"
          subtitle="A showcase of AI platforms, computer vision applications, and web tools I have developed."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const VisualIcon = projectVisualIcons[project.id] || FolderGit2;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <GlassCard hoverTilt glowColor={idx % 2 === 0 ? 'cyan' : 'violet'} className="h-full flex flex-col justify-between p-7 border-slate-800">
                    <div className="space-y-4">
                      
                      {/* Top Bar: Icon + Status Badge */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <VisualIcon className="w-6 h-6" />
                        </div>

                        <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${project.badgeColor}`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-2xl font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-cyan-400 mt-1">{project.subtitle}</p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technology Chips */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Bottom Links */}
                    <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Go to site</span>
                      </a>

                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono hover:bg-cyan-500/30 transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-slate-500 italic">
                          In Active Development
                        </span>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
