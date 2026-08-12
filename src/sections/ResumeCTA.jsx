import React from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Sparkles, ArrowRight } from 'lucide-react';
import GlassCard from '../components/common/GlassCard';
import { personalInfo } from '../data/portfolioData';

export default function ResumeCTA() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard glowColor="violet" className="p-8 sm:p-12 border-violet-500/30 text-center relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Career Opportunities</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's build something <span className="gradient-text">meaningful.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I'm currently open to internship and entry-level opportunities in Artificial Intelligence, Data Science, Web Development, and Software Development.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/25"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm hover:bg-slate-800 hover:border-cyan-500/40 transition-all"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>
            </div>
          </div>

        </GlassCard>
      </div>
    </section>
  );
}
