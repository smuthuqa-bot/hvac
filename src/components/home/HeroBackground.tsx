"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "20%", size: 3, delay: 0 },
  { left: "18%", top: "65%", size: 2, delay: 1.2 },
  { left: "30%", top: "35%", size: 3, delay: 2 },
  { left: "42%", top: "75%", size: 2, delay: 0.8 },
  { left: "55%", top: "18%", size: 3, delay: 1.8 },
  { left: "68%", top: "58%", size: 2, delay: 0.4 },
  { left: "78%", top: "28%", size: 3, delay: 2.4 },
  { left: "90%", top: "72%", size: 2, delay: 1.5 },
];

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#65C943] blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-1/3 h-[550px] w-[550px] rounded-full bg-blue-500 blur-[140px]"
      />

      {/* Industrial grid */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Airflow streams */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: ["-20%", "120%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 1,
            ease: "linear",
          }}
          className="absolute left-0 top-[25%] h-px w-[45%] bg-gradient-to-r from-transparent via-[#65C943]/60 to-transparent"
        />

        <motion.div
          animate={{
            x: ["120%", "-20%"],
            opacity: [0, 0.35, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            delay: 2,
            ease: "linear",
          }}
          className="absolute right-0 top-[58%] h-px w-[50%] bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"
        />

        <motion.div
          animate={{
            x: ["-30%", "130%"],
            opacity: [0, 0.25, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            delay: 4,
            ease: "linear",
          }}
          className="absolute left-0 top-[78%] h-px w-[60%] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + index % 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-[#8BE66E]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}

      {/* Large atmospheric ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[8%] top-[12%] hidden h-[420px] w-[420px] rounded-full border border-white/[0.035] lg:block"
      >
        <div className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-[#65C943]/60 shadow-[0_0_20px_#65C943]" />
      </motion.div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061A33]/20 via-transparent to-[#061A33]/40" />
    </div>
  );
}