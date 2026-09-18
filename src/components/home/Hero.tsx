"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import SparkBurst from "@/components/home/SparkBurst";

const easeOut = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TRAINING / CLASSROOM IMAGES
============================================================ */

const trainingImages = [
  {
    src: "/training/tra7.png",
    alt: "ACME SDC Practical Training",
    label: "Practical SDC Training",
  },
  {
    src: "/training/class.jpeg",
    alt: "ACME SDC Skill Development Training",
    label: "Skill Development Training",
  },
  {
    src: "/training/classroom.jpeg",
    alt: "ACME SDC Classroom Training",
    label: "Classroom Training",
  },
  {
    src: "/training/tra2.jpg",
    alt: "ACME SDC Technical Training",
    label: "Technical Training",
  },
  {
    src: "/training/tra1.jpg",
    alt: "ACME SDC Industry Skill Development",
    label: "Industry Skill Development",
  },
];

/* ============================================================
   TRAINING HIGHLIGHTS
============================================================ */

const trainingHighlights = [
  {
    number: "01",
    title: "Skill Training",
    description: "Industry-focused SDC technical training",
  },
  {
    number: "02",
    title: "Certification",
    description: "Build recognised technical credentials",
  },
  {
    number: "03",
    title: "Internship",
    description: "Mandatory one-year practical experience",
  },
  {
    number: "04",
    title: "Career",
    description: "Pathway towards professional opportunities",
  },
];

/* ============================================================
   HVAC TECHNICIAN ANIMATION
============================================================ */

function HVACTechnician() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-[225px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 shadow-lg"
    >
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"
      />

      {/* Heading */}
      <div className="absolute left-3 top-3 z-20">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
          ACME HVAC SDC
        </p>

        <h3 className="mt-0.5 text-sm font-bold text-white">
          AC Machine Repair
        </h3>

        <p className="mt-0.5 text-[9px] text-slate-300">
          Practical service &amp; maintenance training
        </p>
      </div>

      {/* Technician + AC unit */}
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-2 h-[125px] w-[155px]"
      >
        <svg
          viewBox="0 0 220 150"
          className="h-full w-full"
          role="img"
          aria-label="HVAC technician repairing an air conditioner"
        >
          {/* AC outdoor unit */}
          <motion.g
            animate={{ x: [0, 1.5, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <rect
              x="110"
              y="18"
              width="92"
              height="58"
              rx="8"
              fill="#e2e8f0"
            />

            <rect
              x="116"
              y="25"
              width="80"
              height="44"
              rx="5"
              fill="#cbd5e1"
            />

            <rect
              x="122"
              y="31"
              width="68"
              height="31"
              rx="4"
              fill="#94a3b8"
            />

            {/* Fan */}
            <circle cx="156" cy="46" r="14" fill="#475569" />

            <motion.g
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformOrigin: "156px 46px" }}
            >
              <ellipse
                cx="156"
                cy="38"
                rx="4"
                ry="10"
                fill="#e2e8f0"
              />

              <ellipse
                cx="164"
                cy="46"
                rx="10"
                ry="4"
                fill="#e2e8f0"
              />

              <ellipse
                cx="156"
                cy="54"
                rx="4"
                ry="10"
                fill="#e2e8f0"
              />

              <ellipse
                cx="148"
                cy="46"
                rx="10"
                ry="4"
                fill="#e2e8f0"
              />
            </motion.g>

            <circle cx="156" cy="46" r="3" fill="#0f172a" />

            {/* AC pipes */}
            <path
              d="M110 68 C92 70 88 87 76 91"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="4"
              strokeLinecap="round"
            />

            <path
              d="M115 72 C100 76 97 93 83 97"
              fill="none"
              stroke="#f8fafc"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Technician */}
          <circle cx="60" cy="50" r="15" fill="#d6a47c" />

          <path
            d="M47 48 Q60 28 74 48 Q67 42 61 44 Q54 43 47 48"
            fill="#1e293b"
          />

          <rect
            x="43"
            y="67"
            width="39"
            height="46"
            rx="12"
            fill="#2563eb"
          />

          <path
            d="M49 69 L39 99 L51 103 L61 77"
            fill="#1d4ed8"
          />

          <path
            d="M75 69 L89 94 L80 100 L66 78"
            fill="#1d4ed8"
          />

          {/* Tool belt */}
          <rect
            x="46"
            y="91"
            width="34"
            height="7"
            rx="3"
            fill="#f59e0b"
          />

          <circle cx="57" cy="95" r="3" fill="#0f172a" />

          <rect
            x="68"
            y="94"
            width="7"
            height="9"
            rx="2"
            fill="#64748b"
          />

          {/* Arm */}
          <motion.path
            animate={{ rotate: [0, 2, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            d="M77 74 L101 62 L111 68"
            fill="none"
            stroke="#d6a47c"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transformOrigin: "77px 74px" }}
          />

          <circle cx="111" cy="68" r="5" fill="#d6a47c" />

          {/* Legs */}
          <path
            d="M54 111 L48 139"
            stroke="#0f172a"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            d="M71 111 L79 139"
            stroke="#0f172a"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            d="M42 141 L55 141"
            stroke="#111827"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <path
            d="M74 141 L88 141"
            stroke="#111827"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Floating tools */}
      <motion.div
        animate={{
          y: [0, -7, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-3 top-[62px] flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-base shadow-lg backdrop-blur"
      >
        🔧
      </motion.div>

      <motion.div
        animate={{
          y: [0, 6, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-14 top-[82px] flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-400/10 text-sm shadow-lg backdrop-blur"
      >
        ❄️
      </motion.div>

      {/* Tools panel */}
      <motion.div
        initial={{
          x: 18,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.35,
          duration: 0.5,
        }}
        className="absolute bottom-2 right-2 w-[92px] rounded-xl border border-white/10 bg-white/10 p-2 backdrop-blur-md"
      >
        <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.16em] text-cyan-200">
          Tools
        </p>

        <div className="grid grid-cols-3 gap-1.5 text-center text-sm">
          <span title="Wrench">🔧</span>
          <span title="Screwdriver">🪛</span>
          <span title="Multimeter">📟</span>
          <span title="Gauge">⏱️</span>
          <span title="Drill">🔩</span>
          <span title="Safety">🦺</span>
        </div>
      </motion.div>

      {/* Bottom label */}
      <div className="absolute bottom-2 left-3 z-20">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-200">
            Live Practical Training
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  /* ==========================================================
     AUTOMATIC IMAGE ROTATION
  ========================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => {
        const next = current + 1;

        if (next >= trainingImages.length) {
          return 0;
        }

        return next;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-white
        text-[#082B57]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-10
            h-96
            w-96
            rounded-full
            bg-green-100/50
            blur-3xl
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-100/40
            blur-3xl
          "
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[8%]
            top-[25%]
            hidden
            h-2
            w-2
            rounded-full
            bg-green-500
            sm:block
          "
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[43%]
            top-[15%]
            hidden
            h-2
            w-2
            rounded-full
            bg-green-500
            sm:block
          "
        />
      </div>

      {/* =====================================================
          SPARK ANIMATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <SparkBurst />
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div className="relative z-[100]">
        <Navbar />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-start
          gap-10
          px-4
          pb-16
          pt-8
          sm:px-6
          sm:pb-20
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-10
          lg:px-8
          lg:pb-20
          lg:pt-10
        "
      >
        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: easeOut,
          }}
          className="relative z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: -25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: easeOut,
            }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-200
              bg-green-50
              px-4
              py-2
              text-xs
              font-bold
              text-green-700
              shadow-sm
              sm:text-sm
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-green-500
                shadow-lg
                shadow-green-500/40
              "
            />

            SKILL DEVELOPMENT & TRAINING
          </motion.div>

          {/* TN Skill Logo */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: easeOut,
            }}
            whileHover={{
              y: -3,
              scale: 1.01,
            }}
            className="
              relative
              mb-7
              flex
              min-h-[145px]
              w-full
              flex-col
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-6
              py-4
              shadow-lg
              shadow-slate-200/50
              transition-shadow
              duration-300
              hover:shadow-xl
              sm:min-h-[165px]
              sm:px-8
              sm:py-5
            "
          >
            <motion.div
              animate={{
                x: ["-120%", "180%"],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-20
                w-28
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-green-100/70
                to-transparent
              "
            />

            <motion.div
              animate={{
                y: [0, -2, 0],
                rotate: [0, 0.3, 0, -0.3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                flex
                h-[95px]
                w-[240px]
                items-center
                justify-center
                sm:h-[110px]
                sm:w-[290px]
                lg:h-[120px]
                lg:w-[320px]
              "
            >
              <motion.div
                animate={{
                  opacity: [0.12, 0.35, 0.12],
                  scale: [0.9, 1.05, 0.9],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-5
                  rounded-full
                  bg-green-400/20
                  blur-2xl
                "
              />

              <img
                src="/tnskill-logo.png"
                alt="Tamil Nadu Skill Development Corporation"
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  object-contain
                "
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
              className="
                relative
                z-10
                mt-1
                flex
                items-center
                justify-center
                gap-2
                text-sm
                font-bold
                tracking-wide
                text-[#082B57]
                sm:text-base
              "
            >
              <span>Skill</span>
              <span className="text-green-500">•</span>
              <span>Training</span>
              <span className="text-green-500">•</span>
              <span>Career</span>
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.45,
                ease: easeOut,
              }}
              className="
                text-[clamp(2.2rem,6vw,3.8rem)]
                font-black
                leading-[0.95]
                tracking-tight
                text-[#082B57]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Build Skills.
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                opacity: 0,
                y: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.58,
                ease: easeOut,
              }}
              className="
                text-[clamp(2.2rem,6vw,3.8rem)]
                font-black
                leading-[0.95]
                tracking-tight
                text-[#65C943]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Build Your Future.
            </motion.h1>
          </div>

          {/* Underline */}
          <div
            className="
              relative
              mt-5
              h-1.5
              w-28
              overflow-hidden
              rounded-full
              bg-green-100
            "
          >
            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={{
                x: "0%",
              }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: easeOut,
              }}
              className="
                h-full
                w-full
                rounded-full
                bg-gradient-to-r
                from-green-500
                to-green-400
              "
            />

            <motion.div
              animate={{
                x: ["-100%", "220%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-y-0
                w-8
                skew-x-[-20deg]
                bg-white/70
              "
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.85,
              ease: easeOut,
            }}
            className="
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-slate-600
              sm:text-base
              sm:leading-7
            "
          >
            Get industry-focused SDC skill training, certification, internship
            opportunities and a pathway toward your professional career.
          </motion.p>

          {/* =================================================
              TRAINING PHOTO SLIDER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 1.05,
              ease: easeOut,
            }}
            className="relative mt-7 overflow-visible"
          >
            <motion.div
              animate={{
                opacity: [0.25, 0.5, 0.25],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -inset-2
                rounded-[2rem]
                bg-gradient-to-r
                from-green-300/20
                via-blue-300/20
                to-green-300/20
                blur-xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-slate-200
                bg-slate-100
                shadow-xl
                shadow-slate-200/60
              "
            >
              <div
                className="
                  relative
                  h-[260px]
                  w-full
                  overflow-hidden
                  sm:h-[330px]
                "
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${trainingImages[activeImage].src}-${activeImage}`}
                    src={trainingImages[activeImage].src}
                    alt={trainingImages[activeImage].alt}
                    initial={{
                      opacity: 0,
                      scale: 1.12,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.05,
                      x: -25,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: easeOut,
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </AnimatePresence>

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#061A33]/85
                    via-[#061A33]/10
                    to-transparent
                  "
                />

                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    w-20
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    blur-sm
                  "
                />

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    border
                    border-white/20
                    bg-black/25
                    px-4
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    backdrop-blur-md
                    sm:left-5
                    sm:top-5
                  "
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  ACME SDC TRAINING
                </div>

                <div
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    text-white
                    backdrop-blur-md
                    sm:right-5
                    sm:top-5
                  "
                >
                  {String(activeImage + 1).padStart(2, "0")}
                  {" / "}
                  {String(trainingImages.length).padStart(2, "0")}
                </div>

                <motion.div
                  key={`label-${activeImage}`}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    absolute
                    bottom-5
                    left-5
                    max-w-[70%]
                    sm:bottom-7
                    sm:left-7
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-green-400
                    "
                  >
                    ACME SDC
                  </p>

                  <h3
                    className="
                      mt-1
                      text-lg
                      font-black
                      text-white
                      sm:text-2xl
                    "
                  >
                    {trainingImages[activeImage].label}
                  </h3>
                </motion.div>

                <div
                  className="
                    absolute
                    bottom-6
                    right-5
                    flex
                    items-center
                    gap-1.5
                    sm:bottom-7
                    sm:right-7
                  "
                >
                  {trainingImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Show ${image.label}`}
                      className="
                        flex
                        h-5
                        items-center
                        justify-center
                      "
                    >
                      <span
                        className={`
                          block
                          h-1.5
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            activeImage === index
                              ? "w-8 bg-green-400"
                              : "w-1.5 bg-white/70"
                          }
                        `}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-1 bg-slate-200">
                <motion.div
                  key={`progress-${activeImage}`}
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 4.5,
                    ease: "linear",
                  }}
                  className="h-full bg-green-500"
                />
              </div>
            </div>
          </motion.div>

          {/* =================================================
              TRAINING HIGHLIGHTS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.25,
              duration: 0.7,
              ease: easeOut,
            }}
            className="
              mt-5
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-4
            "
          >
            {trainingHighlights.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.25 + index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-3
                  shadow-sm
                  transition-shadow
                  duration-300
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-green-500
                      text-[10px]
                      font-black
                      text-white
                    "
                  >
                    ✓
                  </div>

                  <span
                    className="
                      text-[9px]
                      font-black
                      text-slate-300
                    "
                  >
                    {item.number}
                  </span>
                </div>

                <p
                  className="
                    text-[10px]
                    font-black
                    leading-4
                    text-[#082B57]
                    sm:text-xs
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    leading-4
                    text-slate-500
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Job guarantee */}
          <motion.div
            initial={{
              opacity: 0,
              x: 120,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1.55,
              duration: 0.8,
              ease: easeOut,
            }}
            className="
              relative
              mt-6
              overflow-hidden
              rounded-2xl
              border
              border-green-200
              bg-gradient-to-r
              from-green-50
              to-white
              px-4
              py-3.5
              shadow-sm
              sm:px-5
              sm:py-4
            "
          >
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-y-0
                w-24
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-green-200/50
                to-transparent
              "
            />

            <div className="relative flex items-center gap-3">
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0 0 rgba(101,201,67,0)",
                    "0 0 25px rgba(101,201,67,.35)",
                    "0 0 0 rgba(101,201,67,0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-green-500
                  text-lg
                  font-black
                  text-white
                "
              >
                ✓
              </motion.div>

              <div>
                <p
                  className="
                    text-sm
                    font-black
                    text-[#082B57]
                    sm:text-base
                  "
                >
                  100% Job Guarantee*
                </p>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    text-slate-500
                    sm:text-xs
                  "
                >
                  Terms & conditions apply
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.75,
              duration: 0.7,
            }}
            className="
              mt-6
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <motion.a
              href="#register"
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                rounded-full
                bg-[#65C943]
                px-7
                py-3.5
                text-center
                text-sm
                font-bold
                text-white
                shadow-xl
                shadow-green-500/20
                transition
                duration-300
                hover:bg-green-500
                sm:px-8
                sm:py-4
                sm:text-base
              "
            >
              Start Your Journey →
            </motion.a>

            <motion.a
              href="#program"
              whileHover={{
                y: -2,
              }}
              className="
                rounded-full
                border
                border-[#082B57]/20
                px-7
                py-3.5
                text-center
                text-sm
                font-semibold
                text-[#082B57]
                transition
                hover:border-green-500
                hover:bg-green-50
                sm:px-8
                sm:py-4
                sm:text-base
              "
            >
              Explore Program
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.9,
              duration: 0.7,
            }}
            className="
              mt-8
              grid
              max-w-lg
              grid-cols-3
              gap-4
              border-t
              border-slate-200
              pt-6
              sm:gap-8
            "
          >
            <div>
              <div className="text-xl font-black sm:text-2xl">
                18–35
              </div>

              <div
                className="
                  mt-1
                  text-[10px]
                  text-slate-500
                  sm:text-xs
                "
              >
                Eligible Age
              </div>
            </div>

            <div>
              <div className="text-xl font-black sm:text-2xl">
                ₹18K+
              </div>

              <div
                className="
                  mt-1
                  text-[10px]
                  text-slate-500
                  sm:text-xs
                "
              >
                Salary*
              </div>
            </div>

            <div>
              <div className="text-xl font-black sm:text-2xl">
                1 Year
              </div>

              <div
                className="
                  mt-1
                  text-[10px]
                  text-slate-500
                  sm:text-xs
                "
              >
                Internship
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =================================================
            RIGHT SIDE
            ANIMATION + CORPORATE CTA + BANNER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: easeOut,
          }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* =================================================
              COMBINED DARK NAVY ANIMATION + CORPORATE CTA
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-[#061A33]
              p-4
              shadow-2xl
              shadow-slate-900/30
              sm:p-5
            "
          >
            {/* Animated glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.18, 0.35, 0.18],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-56
                w-56
                rounded-full
                bg-green-400/20
                blur-3xl
              "
            />

            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.1, 0.24, 0.1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-20
                h-64
                w-64
                rounded-full
                bg-cyan-400/10
                blur-3xl
              "
            />

            {/* Moving light */}
            <motion.div
              animate={{
                x: ["-120%", "180%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                w-24
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
              "
            />

            <div className="relative z-10">
              {/* Section heading */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                  ease: easeOut,
                }}
                className="mb-4 flex items-center justify-between gap-3"
              >
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-green-400">
                    ACME HVAC SDC
                  </p>

                  <h2 className="mt-1 text-base font-black text-white sm:text-lg">
                    Industry-Ready HVAC Professionals
                  </h2>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.75, 1, 0.75],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-green-400/20
                    bg-green-400/10
                    text-sm
                    text-green-300
                  "
                >
                  ✓
                </motion.div>
              </motion.div>

              {/* =================================================
                  ANIMATION + CORPORATE CTA
              ================================================= */}

              <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_0.92fr]">
                {/* HVAC animation */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.45,
                    ease: easeOut,
                  }}
                >
                  <HVACTechnician />
                </motion.div>

                {/* Corporate CTA */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 18,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6,
                    ease: easeOut,
                  }}
                  className="
                    relative
                    flex
                    flex-col
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.06]
                    p-5
                    backdrop-blur-md
                  "
                >
                  {/* CTA light sweep */}
                  <motion.div
                    animate={{
                      x: ["-120%", "180%"],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      left-0
                      w-20
                      skew-x-[-20deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                    "
                  />

                  <div className="relative">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5">
                      <motion.span
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-green-400"
                      />

                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-green-300">
                        Corporate Partnership
                      </span>
                    </div>

                    <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                      Need Skilled HVAC Professionals?
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-300">
                      Partner with ACME SDC for trained, industry-ready HVAC
                      talent for your organisation.
                    </p>

                    {/* Benefits */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2">
                        <p className="text-[9px] font-bold text-green-400">
                          ✓ Skilled Talent
                        </p>

                        <p className="mt-0.5 text-[8px] text-slate-400">
                          Industry focused
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2">
                        <p className="text-[9px] font-bold text-green-400">
                          ✓ Job Ready
                        </p>

                        <p className="mt-0.5 text-[8px] text-slate-400">
                          Practical trained
                        </p>
                      </div>
                    </div>

                    {/* GREEN CTA */}
                    <motion.a
                      href="#corporate-inquiry"
                      whileHover={{
                        scale: 1.025,
                        y: -2,
                        boxShadow:
                          "0 14px 30px rgba(34,197,94,.30)",
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="
                        mt-5
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#65C943]
                        px-4
                        py-3.5
                        text-xs
                        font-black
                        text-[#061A33]
                        shadow-lg
                        shadow-green-500/20
                        transition-colors
                        duration-300
                        hover:bg-[#78D957]
                      "
                    >
                      Submit Corporate Enquiry

                      <motion.span
                        animate={{
                          x: [0, 4, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </motion.a>

                    <p className="mt-2 text-center text-[8px] text-slate-500">
                      Connect with ACME SDC for your manpower requirements
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Trust strip */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
                className="
                  mt-4
                  grid
                  grid-cols-3
                  gap-2
                  border-t
                  border-white/10
                  pt-4
                "
              >
                <div className="text-center">
                  <div className="text-sm font-black text-white">
                    Skill
                  </div>

                  <div className="mt-0.5 text-[8px] uppercase tracking-wider text-slate-500">
                    Training
                  </div>
                </div>

                <div className="border-x border-white/10 text-center">
                  <div className="text-sm font-black text-white">
                    Experience
                  </div>

                  <div className="mt-0.5 text-[8px] uppercase tracking-wider text-slate-500">
                    Practical
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-sm font-black text-white">
                    Career
                  </div>

                  <div className="mt-0.5 text-[8px] uppercase tracking-wider text-slate-500">
                    Opportunities
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* =================================================
              RIGHT-SIDE BANNER
              /public/rightside1.png
              FULL IMAGE — BELOW DARK SECTION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: easeOut,
            }}
            className="relative mt-5 w-full"
          >
            {/* Banner glow */}
            <motion.div
              animate={{
                opacity: [0.2, 0.45, 0.2],
                scale: [0.99, 1.015, 0.99],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -inset-2
                rounded-[1.75rem]
                bg-green-500/15
                blur-xl
              "
            />

            {/* Banner card */}
            <motion.div
              whileHover={{
                y: -3,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                w-full
                overflow-hidden
                rounded-[1.5rem]
                border
                border-slate-200
                bg-white
                p-1.5
                shadow-2xl
                shadow-slate-300/40
              "
            >
              <div className="relative overflow-hidden rounded-[1.2rem]">
                {/* Banner image */}
                <img
                  src="/rightside1.png"
                  alt="ACME SDC Skill and Placement 2026"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                  "
                />

                {/* Animated banner shine */}
                <motion.div
                  animate={{
                    x: ["-130%", "130%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    w-20
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                  "
                />
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              CAREER BADGE
          ================================================= */}

          
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-6
          rounded-t-[50%]
          bg-slate-50
          sm:h-10
        "
      />

      {/* =====================================================
          MOBILE STICKY CTA
      ===================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-40
          border-t
          border-slate-200
          bg-white/95
          p-3
          shadow-2xl
          backdrop-blur-xl
          md:hidden
        "
      >
        <a
          href="#register"
          className="
            flex
            w-full
            items-center
            justify-center
            rounded-xl
            bg-green-600
            px-5
            py-3.5
            text-sm
            font-bold
            text-white
            shadow-lg
            shadow-green-600/20
          "
        >
          Register Now →
        </a>
      </div>
    </section>
  );
}