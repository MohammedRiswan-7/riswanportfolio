import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Cpu, Brain, CloudRain, ShieldCheck, Code, Sparkles, Award, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';
import { certifications } from '../data/portfolioData';

const certIconMap = {
  Cloud: Cloud,
  Database: Database,
  Cpu: Cpu,
  Brain: Brain,
  CloudRain: CloudRain,
  ShieldCheck: ShieldCheck,
  Code: Code,
  Sparkles: Sparkles,
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Competencies"
          title="Industry"
          highlightTitle="Certifications"
          subtitle="Professional certifications and credentials completed across AI, cloud computing, data science, and software engineering."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => {
            const IconComponent = certIconMap[cert.icon] || Award;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <GlassCard
                  hoverTilt
                  glowColor={idx % 2 === 0 ? 'cyan' : 'violet'}
                  className="h-full p-6 flex flex-col justify-between border-slate-800"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-950/40 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 mt-1">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Award className="w-3.5 h-3.5 text-violet-400" /> Certificate
                    </span>

                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                      >
                        <span>View Credential</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[10px] text-slate-500 italic">Verified</span>
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
