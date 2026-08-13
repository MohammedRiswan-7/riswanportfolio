import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Brain,
  Code,
  Sparkles,
  User,
  MapPin,
  Target,
  ArrowUpRight,
} from 'lucide-react';

import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

const iconMap = {
  GraduationCap,
  Brain,
  Code,
  Sparkles,
};

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          badge="Background & Identity"
          title="About"
          highlightTitle="Me"
          subtitle="A summary of my academic focus, core technical interests, and professional aspirations."
        />

        {/* =========================================================
            TOP SECTION
            LEFT  = Professional Bio
            RIGHT = Profile Card
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">

          {/* =====================================================
              LEFT - PROFESSIONAL BIO
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <GlassCard className="h-full flex flex-col justify-between p-8 border-cyan-500/20">

              <div className="space-y-6">

                {/* Heading */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    <User className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-mono">
                    Professional Bio
                  </h3>
                </div>

                {/* First Paragraph */}
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  I am a{' '}
                  <strong className="text-cyan-400 font-semibold">
                    final-year B.Tech Artificial Intelligence & Data Science student
                  </strong>{' '}
                  at{' '}
                  <span className="text-white font-medium">
                    {personalInfo.college}
                  </span>
                  .
                </p>

                {/* Second Paragraph */}
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  My primary focus lies at the intersection of{' '}
                  <strong className="text-violet-400 font-semibold">
                    Artificial Intelligence, Data Analytics,Business intelligence,
                    and Modern Web Development
                  </strong>
                  . I enjoy turning complex data models and smart algorithms
                  into functional, user-centric digital products.
                </p>

                {/* Current Objective */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <Target className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />

                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong className="text-white">
                      Current Objective:
                    </strong>{' '}
                    {personalInfo.goal}
                  </p>
                </div>
              </div>

              {/* College Footer */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />

                  <span>
                    {personalInfo.college}
                  </span>
                </div>

                <span className="font-mono text-cyan-400">
                  Status: Final Year Student
                </span>

              </div>
            </GlassCard>
          </motion.div>


          {/* =====================================================
              RIGHT - PROFILE CARD
              
              10 PARTS TOTAL
              ├── 8 PARTS = IMAGE
              └── 2 PARTS = NAME + DEPARTMENT
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <GlassCard
              className="
                h-full
                overflow-hidden
                p-0
                border-violet-500/20
                bg-gradient-to-b
                from-slate-900/90
                to-slate-950/95
              "
            >

              {/* =================================================
                  IMAGE SECTION - 80%
              ================================================== */}
              <div
                className="
                  relative
                  h-[80%]
                  min-h-[420px]
                  overflow-hidden
                  border-b
                  border-cyan-500/40
                "
              >

                {/* Image */}
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Mohammed Riswan"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Dark Gradient Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/70
                    via-transparent
                    to-transparent
                  "
                />

                {/* Cyan Glow */}
                <div
                  className="
                    absolute
                    -bottom-20
                    left-1/2
                    -translate-x-1/2
                    w-48
                    h-48
                    bg-cyan-500/20
                    blur-3xl
                    rounded-full
                    pointer-events-none
                  "
                />

                {/* Top Small Label */}
                {/* <div
                  className="
                    absolute
                    top-4
                    left-4
                    px-3
                    py-1.5
                    rounded-full
                    bg-slate-950/70
                    backdrop-blur-md
                    border
                    border-cyan-400/30
                    text-[10px]
                    font-mono
                    uppercase
                    tracking-widest
                    text-cyan-400
                  "
                >
                  AI & Data Science
                </div> */}

              </div>


              {/* =================================================
                  NAME SECTION - 20%
              ================================================== */}
              <div
                className="
                  h-[20%]
                  min-h-[120px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-4
                  relative
                "
              >

                {/* Name */}
                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    text-white
                    font-mono
                    tracking-tight
                  "
                >
                  Mohammed Rizwan
                </h3>

                {/* Department */}
                <p
                  className="
                    mt-2
                    text-sm
                    md:text-base
                    font-mono
                    text-cyan-400
                  "
                >
                  AI & Data Science
                </p>

                {/* Small decorative line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    w-20
                    h-[2px]
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400
                    to-transparent
                  "
                />

              </div>

            </GlassCard>
          </motion.div>

        </div>


        {/* =========================================================
            FOUR ANIMATED MINI CARDS
        ========================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {aboutHighlights.map((item, idx) => {

            const IconComponent = iconMap[item.icon] || Code;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
              >

                <GlassCard
                  hoverTilt
                  glowColor={idx % 2 === 0 ? 'cyan' : 'violet'}
                  className="h-full"
                >

                  <div className="space-y-3">

                    {/* Icon */}
                    <div
                      className={`
                        w-12
                        h-12
                        rounded-xl
                        bg-gradient-to-tr
                        ${item.color}
                        p-[1px]
                        flex
                        items-center
                        justify-center
                      `}
                    >
                      <div
                        className="
                          w-full
                          h-full
                          rounded-xl
                          bg-slate-950
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Subtitle */}
                    <span
                      className="
                        text-xs
                        font-mono
                        text-cyan-400
                        uppercase
                        tracking-wider
                        block
                      "
                    >
                      {item.subtitle}
                    </span>

                    {/* Title */}
                    <h3
                      className="
                        text-lg
                        font-bold
                        text-white
                        font-mono
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        text-slate-400
                        text-xs
                        leading-relaxed
                      "
                    >
                      {item.description}
                    </p>

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