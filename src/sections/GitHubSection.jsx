import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, Star, Code2, Users, BookOpen } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';
import { personalInfo } from '../data/portfolioData';

export default function GitHubSection() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/MohammedRiswan-7')
      .then((res) => {
        if (!res.ok) throw new Error('API Rate Limited or User Unavailable');
        return res.json();
      })
      .then((data) => {
        setProfileData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('GitHub API fallback mode active:', err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Open Source & Version Control"
          title="GitHub"
          highlightTitle="Activity"
          subtitle="Explore my public codebase repositories, project commits, and ongoing open-source experiments."
        />

        <div className="max-w-4xl mx-auto">
          <GlassCard glowColor="cyan" className="p-8 border-cyan-500/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Profile Bio Side */}
              <div className="flex items-center gap-6 text-center md:text-left">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-[2px]">
                    <img
                      src={profileData?.avatar_url || "https://github.com/MohammedRiswan-7.png"}
                      alt="Mohammed Riswan GitHub Avatar"
                      className="w-full h-full rounded-[14px] object-cover bg-slate-900"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                    <Github className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white font-mono">
                    {profileData?.name || "Mohammed Riswan"}
                  </h3>
                  <p className="text-sm font-mono text-cyan-400">@MohammedRiswan-7</p>
                  <p className="text-xs text-slate-400 max-w-sm">
                    {profileData?.bio || "AI & Data Science Student | Web Developer | AI Enthusiast"}
                  </p>
                </div>
              </div>

              {/* GitHub Metrics (Dynamic or Clean Fallback) */}
              <div className="flex items-center gap-6">
                {profileData?.public_repos !== undefined && (
                  <div className="text-center p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-2xl font-bold text-white font-mono block">
                      {profileData.public_repos}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Public Repos</span>
                  </div>
                )}

                {profileData?.followers !== undefined && (
                  <div className="text-center p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-2xl font-bold text-white font-mono block">
                      {profileData.followers}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Followers</span>
                  </div>
                )}

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
