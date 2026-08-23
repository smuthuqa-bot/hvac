"use client";

import { motion } from "framer-motion";

const colors = [
  "#65C943",
  "#22D3EE",
  "#FACC15",
  "#FB7185",
  "#A78BFA",
  "#F97316",
  "#38BDF8",
  "#FFFFFF",
];

const sparks = Array.from({ length: 70 }, (_, i) => {
  const angle = (360 / 70) * i;
  const distance = 90 + (i % 9) * 22;
  const radian = (angle * Math.PI) / 180;

  return {
    id: i,
    x: Math.cos(radian) * distance,
    y: Math.sin(radian) * distance,
    size: i % 5 === 0 ? 4 : i % 2 === 0 ? 3 : 2,
    color: colors[i % colors.length],
    delay: (i % 10) * 0.025,
  };
});

export default function SparkBurst() {
  return (
    <div
      className="
        pointer-events-none absolute
        left-[-12%] top-[38%]
        z-[1]
        h-80 w-80
        sm:left-[-2%] sm:top-[35%]
        sm:h-[420px] sm:w-[420px]
        lg:left-[4%] lg:top-[32%]
        lg:h-[480px] lg:w-[480px]
      "
    >
      {/* =========================================================
          LARGE ATMOSPHERE GLOW
      ========================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.2,
        }}
        animate={{
          opacity: [0, 0.7, 0.25, 0],
          scale: [0.2, 1, 1.8, 2.5],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="
          absolute left-1/2 top-1/2
          h-48 w-48
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-green-400/20
          blur-3xl
          sm:h-64 sm:w-64
        "
      />

      {/* Cyan secondary glow */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0.2, 1, 2],
        }}
        transition={{
          duration: 1.8,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="
          absolute left-[42%] top-[45%]
          h-40 w-40
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
      />

      {/* =========================================================
          MAIN EXPLOSION CENTER
      ========================================================== */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: [0, 1.8, 1, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          absolute left-1/2 top-1/2
          h-7 w-7
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-white
          shadow-[0_0_25px_8px_rgba(255,255,255,0.8)]
          sm:h-9 sm:w-9
        "
      />

      {/* =========================================================
          MAIN COLORFUL SPARKS
      ========================================================== */}
      {sparks.map((spark) => (
        <motion.span
          key={spark.id}
          initial={{
            opacity: 0,
            x: 0,
            y: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: spark.x,
            y: spark.y,
            scale: [0, 1.7, 0.5, 0],
          }}
          transition={{
            duration: 1.6,
            delay: 0.05 + spark.delay,
            ease: "easeOut",
          }}
          style={{
            width: spark.size,
            height: spark.size,
            backgroundColor: spark.color,
            boxShadow: `
              0 0 8px ${spark.color},
              0 0 16px ${spark.color}
            `,
          }}
          className="
            absolute
            left-1/2 top-1/2
            rounded-full
          "
        />
      ))}

      {/* =========================================================
          LONG FIREWORK STREAKS
      ========================================================== */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (360 / 24) * i;
        const radian = (angle * Math.PI) / 180;

        const distance = 155 + (i % 3) * 20;

        const x = Math.cos(radian) * distance;
        const y = Math.sin(radian) * distance;

        const color = colors[(i + 2) % colors.length];

        return (
          <motion.span
            key={`streak-${i}`}
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              x,
              y,
              scaleX: [0, 1, 0.25],
            }}
            transition={{
              duration: 1.35,
              delay: 0.08 + (i % 6) * 0.035,
              ease: "easeOut",
            }}
            style={{
              backgroundColor: color,
              transform: `rotate(${angle}deg)`,
              boxShadow: `
                0 0 8px ${color},
                0 0 15px ${color}
              `,
            }}
            className="
              absolute
              left-1/2 top-1/2
              h-1 w-16
              origin-left
              rounded-full
              sm:w-20
            "
          />
        );
      })}

      {/* =========================================================
          SECONDARY SMALL PARTICLES
      ========================================================== */}
      {Array.from({ length: 40 }).map((_, i) => {
        const angle = (360 / 40) * i;
        const radian = (angle * Math.PI) / 180;

        const distance = 145 + (i % 5) * 25;

        const color = colors[(i + 4) % colors.length];

        return (
          <motion.span
            key={`small-${i}`}
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              x: Math.cos(radian) * distance,
              y: Math.sin(radian) * distance,
              scale: [0, 1.4, 0.5, 0],
            }}
            transition={{
              duration: 1.9,
              delay: 0.2 + (i % 8) * 0.045,
              ease: "easeOut",
            }}
            style={{
              width: i % 4 === 0 ? 4 : 2,
              height: i % 4 === 0 ? 4 : 2,
              backgroundColor: color,
              boxShadow: `
                0 0 7px ${color},
                0 0 14px ${color}
              `,
            }}
            className="
              absolute
              left-1/2 top-1/2
              rounded-full
            "
          />
        );
      })}

      {/* =========================================================
          RANDOM FLOATING SPARKLES
      ========================================================== */}
      {Array.from({ length: 18 }).map((_, i) => {
        const left = 10 + ((i * 31) % 80);
        const top = 12 + ((i * 47) % 75);

        const color = colors[i % colors.length];

        return (
          <motion.span
            key={`float-${i}`}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [0, -20, -40],
            }}
            transition={{
              duration: 2.5 + (i % 3) * 0.5,
              delay: 1.1 + i * 0.08,
              ease: "easeOut",
            }}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              backgroundColor: color,
              boxShadow: `
                0 0 8px ${color},
                0 0 15px ${color}
              `,
            }}
            className="
              absolute
              h-1.5 w-1.5
              rounded-full
            "
          />
        );
      })}
    </div>
  );
}