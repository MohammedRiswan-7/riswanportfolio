import React from 'react';
import MouseSpotlight from './components/common/MouseSpotlight';
import BackgroundGrid from './components/common/BackgroundGrid';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import CurrentlyBuilding from './sections/CurrentlyBuilding';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import GitHubSection from './sections/GitHubSection';
import ResumeCTA from './sections/ResumeCTA';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#040508] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Interactive Lighting & Grid */}
      <MouseSpotlight />
      <BackgroundGrid />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10 space-y-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CurrentlyBuilding />
        <Experience />
        <Education />
        <Certifications />
        <GitHubSection />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
