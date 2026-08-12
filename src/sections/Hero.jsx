import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Terminal,
  Cpu,
  Brain,
  Database,
  Code2,
  Sparkles,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";

const techNodes = [
  {
    name: "PYTHON",
    icon: Code2,
    position: "top-[8%] left-[4%]",
    color: "cyan",
    delay: 0,
  },
  {
    name: "MACHINE LEARNING",
    icon: Brain,
    position: "top-[2%] right-[2%]",
    color: "violet",
    delay: 0.6,
  },
  {
    name: "REACT",
    icon: Code2,
    position: "bottom-[18%] left-[0%]",
    color: "blue",
    delay: 1.1,
  },
  {
    name: "SQL",
    icon: Database,
    position: "bottom-[8%] right-[4%]",
    color: "cyan",
    delay: 1.7,
  },
];

const neuralNodes = [
  { x: 50, y: 15, size: 8 },
  { x: 28, y: 30, size: 6 },
  { x: 72, y: 30, size: 6 },
  { x: 18, y: 50, size: 7 },
  { x: 50, y: 43, size: 11 },
  { x: 82, y: 50, size: 7 },
  { x: 28, y: 70, size: 6 },
  { x: 72, y: 70, size: 6 },
  { x: 50, y: 87, size: 8 },
];

const connections = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 4],
  [3, 6],
  [4, 6],
  [4, 7],
  [5, 4],
  [5, 7],
  [6, 8],
  [7, 8],
  [4, 8],
];

function NeuralNetwork() {
  return (
    <div className="relative w-[330px] h-[390px] sm:w-[430px] sm:h-[480px]">

      {/* Main glow behind network */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [0.9, 1.05, 0.9],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[220px]
          h-[220px]
          rounded-full
          bg-cyan-500/10
          blur-[80px]
        "
      />

      {/* SVG neural connections */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="
          absolute
          inset-0
          w-full
          h-full
          overflow-visible
        "
      >
        <defs>
          <linearGradient
            id="neuralGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#22d3ee"
              stopOpacity="0.15"
            />

            <stop
              offset="50%"
              stopColor="#60a5fa"
              stopOpacity="0.7"
            />

            <stop
              offset="100%"
              stopColor="#8b5cf6"
              stopOpacity="0.2"
            />
          </linearGradient>
        </defs>

        {connections.map(([from, to], index) => {
          const a = neuralNodes[from];
          const b = neuralNodes[to];

          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#neuralGradient)"
              strokeWidth="0.45"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2.5 + index * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
          );
        })}
      </svg>

      {/* Neural nodes */}
      {neuralNodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* outer pulse */}
          <motion.div
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2.5 + index * 0.15,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            className="
              absolute
              inset-0
              rounded-full
              bg-cyan-400
            "
            style={{
              width: `${node.size * 3}px`,
              height: `${node.size * 3}px`,
              left: `-${node.size}px`,
              top: `-${node.size}px`,
            }}
          />

          {/* node */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 8px rgba(34,211,238,0.4)",
                "0 0 24px rgba(34,211,238,0.9)",
                "0 0 8px rgba(34,211,238,0.4)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            className="
              relative
              rounded-full
              bg-slate-950
              border
              border-cyan-400/70
            "
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
            }}
          />
        </motion.div>
      ))}

      {/* Central AI core */}

      <motion.div
        animate={{
          y: [0, -8, 0],
          rotateY: [-5, 5, -5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          z-20
        "
      >
        {/* outer glow */}
        <div
          className="
            absolute
            -inset-8
            rounded-3xl
            bg-cyan-400/10
            blur-2xl
          "
        />

        {/* 3D cube */}
        <div
          className="
            relative
            w-32
            h-32
            sm:w-40
            sm:h-40
          "
          style={{
            perspective: "800px",
          }}
        >
          <motion.div
            animate={{
              rotateX: [0, 8, 0, -8, 0],
              rotateY: [-8, 0, 8, 0, -8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              w-full
              h-full
              rounded-[30px]
              border
              border-cyan-400/50
              bg-gradient-to-br
              from-cyan-500/10
              via-slate-950
              to-violet-600/10
              backdrop-blur-xl
              shadow-[0_0_50px_rgba(34,211,238,0.2)]
              flex
              items-center
              justify-center
            "
          >

            {/* Inner square */}
            <div
              className="
                absolute
                inset-4
                rounded-2xl
                border
                border-cyan-400/20
              "
            />

            {/* corner lines */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-cyan-400" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-violet-400" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-violet-400" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-cyan-400" />

            <div className="relative z-10 flex flex-col items-center">

              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Cpu className="w-11 h-11 sm:w-14 sm:h-14 text-cyan-400" />
              </motion.div>

              <span
                className="
                  mt-2
                  text-sm
                  sm:text-base
                  font-mono
                  font-bold
                  tracking-[0.25em]
                  text-white
                "
              >
                AI
              </span>

              <span
                className="
                  text-[8px]
                  sm:text-[9px]
                  font-mono
                  tracking-[0.2em]
                  text-cyan-400
                "
              >
                CORE
              </span>

            </div>

          </motion.div>
        </div>
      </motion.div>

      {/* Floating technology labels */}

      {techNodes.map((tech) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.name}
            className={`
              absolute
              ${tech.position}
              z-30
            `}
            animate={{
              y: [0, -8, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tech.delay,
            }}
          >
            <div
              className={`
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-xl
                bg-slate-950/90
                backdrop-blur-xl
                border
                ${
                  tech.color === "cyan"
                    ? "border-cyan-500/30"
                    : tech.color === "violet"
                    ? "border-violet-500/30"
                    : "border-blue-500/30"
                }
                shadow-lg
              `}
            >
              <Icon
                className={`
                  w-3.5
                  h-3.5
                  ${
                    tech.color === "cyan"
                      ? "text-cyan-400"
                      : tech.color === "violet"
                      ? "text-violet-400"
                      : "text-blue-400"
                  }
                `}
              />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  font-bold
                  tracking-wider
                  text-slate-300
                  whitespace-nowrap
                "
              >
                {tech.name}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Floating DATA badge */}

      <motion.div
        animate={{
          x: [0, 6, 0],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[42%]
          right-[-2%]
          sm:right-[-5%]
          z-30
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            px-3
            py-2
            rounded-lg
            bg-slate-950/90
            border
            border-blue-500/20
            backdrop-blur-xl
          "
        >
          <Database className="w-3 h-3 text-blue-400" />

          <span
            className="
              text-[9px]
              font-mono
              text-blue-300
              tracking-wider
            "
          >
            DATA
          </span>
        </div>
      </motion.div>

      {/* Floating sparkle */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 20, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[22%]
          left-[25%]
          text-cyan-400
        "
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          absolute
          bottom-[27%]
          right-[25%]
          text-violet-400
        "
      >
        <Sparkles className="w-3 h-3" />
      </motion.div>

    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (
      !personalInfo?.heroRoles ||
      personalInfo.heroRoles.length === 0
    ) {
      return;
    }

    const interval = setInterval(() => {
      setRoleIndex((prev) => {
        return (prev + 1) % personalInfo.heroRoles.length;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const currentRole =
    personalInfo?.heroRoles?.[roleIndex] ||
    "AI & Data Science Student";

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        pt-28
        pb-16
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* cyan glow */}

        <div
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/[0.045]
            blur-[130px]
          "
        />

        {/* violet glow */}

        <div
          className="
            absolute
            top-1/3
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-violet-600/[0.045]
            blur-[130px]
          "
        />

      </div>


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          w-full
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            lg:gap-4
            items-center
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              lg:col-span-7
              space-y-6
              text-center
              lg:text-left
            "
          >

            {/* Availability */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3.5
                py-1.5
                rounded-full
                bg-slate-900/80
                border
                border-cyan-500/30
                backdrop-blur-md
              "
            >

              <span className="relative flex h-2 w-2">

                <span
                  className="
                    animate-ping
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-cyan-400
                    opacity-75
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    rounded-full
                    h-2
                    w-2
                    bg-cyan-500
                  "
                />

              </span>

              <span
                className="
                  text-xs
                  font-mono
                  text-cyan-300
                  font-medium
                  tracking-wide
                "
              >
                Available for Internships & Full-Time Roles
              </span>

            </div>


            {/* Hi */}

            <p
              className="
                text-slate-400
                text-lg
                font-mono
                font-medium
                tracking-wide
              "
            >
              Hi, I'm
            </p>


            {/* Name */}

            <h1
              className="
                text-4xl
                sm:text-6xl
                lg:text-7xl
                font-extrabold
                tracking-tight
                text-white
                leading-[0.95]
              "
            >

              MOHAMMED

              <br />

              <span className="gradient-text">
                RIZWAN
              </span>

            </h1>


            {/* Role */}

            <div
              className="
                h-10
                sm:h-12
                flex
                items-center
                justify-center
                lg:justify-start
              "
            >

              <motion.div
                key={roleIndex}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  text-lg
                  sm:text-2xl
                  font-semibold
                  font-mono
                  text-cyan-400
                  flex
                  items-center
                  gap-2
                "
              >

                <Terminal
                  className="
                    w-5
                    h-5
                    text-violet-400
                  "
                />

                <span>
                  {currentRole}
                </span>

              </motion.div>

            </div>


            {/* Description */}

            <p
              className="
                text-slate-300
                text-base
                sm:text-lg
                max-w-2xl
                mx-auto
                lg:mx-0
                leading-relaxed
              "
            >
             AI & Data Science undergraduate with experience in Python, Power BI, data analysis, and web development. Skilled in building AI-powered applications, dashboards through internships, certifications, and academic projects
            </p>


            {/* Buttons */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                lg:justify-start
                gap-4
                pt-2
              "
            >

              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-600
                  to-violet-600
                  text-white
                  font-semibold
                  text-sm
                  shadow-lg
                  shadow-cyan-500/20
                  hover:shadow-cyan-500/40
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-300
                "
              >

                View My Projects

                <ArrowRight
                  className="
                    w-4
                    h-4
                    group-hover:translate-x-1
                    transition-transform
                  "
                />

              </a>


              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-xl
                  bg-slate-900/90
                  border
                  border-slate-700/80
                  hover:border-cyan-500/50
                  text-slate-200
                  hover:text-white
                  font-semibold
                  text-sm
                  backdrop-blur-md
                  hover:bg-slate-800/90
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-300
                "
              >

                <Download
                  className="
                    w-4
                    h-4
                    text-cyan-400
                  "
                />

                Download Resume

              </a>

            </div>


            {/* Socials */}

            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-4
                pt-4
                text-slate-400
              "
            >

              <span
                className="
                  text-xs
                  font-mono
                  uppercase
                  tracking-widest
                  text-slate-500
                "
              >
                Connect:
              </span>


              <a
                href={personalInfo?.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="
                  p-2.5
                  rounded-xl
                  bg-slate-900/80
                  border
                  border-slate-800
                  hover:border-cyan-500/50
                  text-slate-300
                  hover:text-cyan-400
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <Github className="w-5 h-5" />
              </a>


              <a
                href={personalInfo?.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="
                  p-2.5
                  rounded-xl
                  bg-slate-900/80
                  border
                  border-slate-800
                  hover:border-cyan-500/50
                  text-slate-300
                  hover:text-cyan-400
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT SIDE — 3D NEURAL NETWORK
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              lg:col-span-5
              relative
              flex
              items-center
              justify-center
              min-h-[400px]
              sm:min-h-[500px]
              lg:min-h-[560px]
            "
          >

            <NeuralNetwork />

          </motion.div>

        </div>

      </div>

    </section>
  );
}