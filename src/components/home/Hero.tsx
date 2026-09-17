"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import SparkBurst from "@/components/home/SparkBurst";

const easeOut = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TRAINING / CLASSROOM IMAGES
   ALL 5 IMAGES WILL ROTATE
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
   COMPACT HVAC ANIMATION
   CTA stays attached to this animation without overflow.
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
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.28, 0.12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="110" y="18" width="92" height="58" rx="8" fill="#e2e8f0" />
            <rect x="116" y="25" width="80" height="44" rx="5" fill="#cbd5e1" />
            <rect x="122" y="31" width="68" height="31" rx="4" fill="#94a3b8" />

            {/* Fan */}
            <circle cx="156" cy="46" r="14" fill="#475569" />
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "156px 46px" }}
            >
              <ellipse cx="156" cy="38" rx="4" ry="10" fill="#e2e8f0" />
              <ellipse cx="164" cy="46" rx="10" ry="4" fill="#e2e8f0" />
              <ellipse cx="156" cy="54" rx="4" ry="10" fill="#e2e8f0" />
              <ellipse cx="148" cy="46" rx="10" ry="4" fill="#e2e8f0" />
            </motion.g>
            <circle cx="156" cy="46" r="3" fill="#0f172a" />

            {/* AC pipe */}
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

          {/* Technician body */}
          <circle cx="60" cy="50" r="15" fill="#d6a47c" />
          <path
            d="M47 48 Q60 28 74 48 Q67 42 61 44 Q54 43 47 48"
            fill="#1e293b"
          />
          <rect x="43" y="67" width="39" height="46" rx="12" fill="#2563eb" />
          <path
            d="M49 69 L39 99 L51 103 L61 77"
            fill="#1d4ed8"
          />
          <path
            d="M75 69 L89 94 L80 100 L66 78"
            fill="#1d4ed8"
          />

          {/* Tool belt */}
          <rect x="46" y="91" width="34" height="7" rx="3" fill="#f59e0b" />
          <circle cx="57" cy="95" r="3" fill="#0f172a" />
          <rect x="68" y="94" width="7" height="9" rx="2" fill="#64748b" />

          {/* Arms reaching the AC */}
          <motion.path
            animate={{ rotate: [0, 2, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
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

      {/* Floating repair indicators */}
      <motion.div
        animate={{ y: [0, -7, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-3 top-[62px] flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-base shadow-lg backdrop-blur"
      >
        🔧
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-14 top-[82px] flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-400/10 text-sm shadow-lg backdrop-blur"
      >
        ❄️
      </motion.div>

      {/* Tools panel */}
      <motion.div
        initial={{ x: 18, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
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

     4500 = 4.5 seconds
     ALL 5 IMAGES WILL ROTATE
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

        {/* Green glow */}

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

        {/* Blue glow */}

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

        {/* Floating dots */}

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

          {/* =================================================
              TOP BADGE
          ================================================= */}

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

          {/* =================================================
              TN SKILL LOGO - IMPROVED SIZE
          ================================================= */}

         {/* =================================================
          {/* =================================================
    TN SKILL LOGO
================================================= */}

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
  {/* Animated light sweep */}

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

  {/* =================================================
      TN SKILL LOGO
  ================================================= */}

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
    {/* Logo glow */}

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

    {/* Actual TN Skill Logo */}

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

  {/* =================================================
      SKILL • TRAINING • CAREER
  ================================================= */}

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

    <span className="text-green-500">
      •
    </span>

    <span>Training</span>

    <span className="text-green-500">
      •
    </span>

    <span>Career</span>
  </motion.div>
</motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

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

          {/* =================================================
              UNDERLINE
          ================================================= */}

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

          {/* =================================================
              DESCRIPTION
          ================================================= */}

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
            Get industry-focused SDC skill training,
            certification, internship opportunities and a
            pathway toward your professional career.
          </motion.p>

          {/* =================================================
              TRAINING PHOTO SLIDER
              ALL 5 IMAGES
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

            {/* Outer glow */}

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

            {/* Main card */}

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

              {/* =================================================
                  IMAGE
              ================================================= */}

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

                {/* Image overlay */}

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

                {/* =================================================
                    MOVING LIGHT
                ================================================= */}

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

                {/* =================================================
                    TOP LABEL
                ================================================= */}

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

                {/* =================================================
                    IMAGE COUNTER
                ================================================= */}

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

                {/* =================================================
                    BOTTOM CONTENT
                ================================================= */}

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

                {/* =================================================
                    DOT INDICATORS - ALL 5
                ================================================= */}

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

              {/* =================================================
                  PROGRESS BAR
              ================================================= */}

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

          {/* =================================================
              JOB GUARANTEE
          ================================================= */}

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

          {/* =================================================
              CTA
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

          {/* =================================================
              STATS
          ================================================= */}

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
            ANIMATION + CORPORATE CTA = ONE SECTION
            FULL-WIDTH BANNER BELOW
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* =================================================
              ONE COMBINED ANIMATION + CTA SECTION
          ================================================= */}
          <div
            className="
              relative overflow-hidden rounded-[1.5rem]
              border border-slate-200 bg-white
              p-3 shadow-xl shadow-slate-200/50
              sm:p-4
            "
          >
            {/* subtle section glow */}
            <motion.div
              animate={{
                opacity: [0.18, 0.32, 0.18],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none absolute
                -right-16 -top-16 h-40 w-40
                rounded-full bg-green-400/20 blur-3xl
              "
            />

            {/* animation + CTA in the SAME ROW on desktop */}
            <div className="relative z-10 grid items-center gap-3 sm:grid-cols-[0.9fr_1.1fr]">
              {/* compact animation */}
              <HVACTechnician />

              {/* corporate CTA */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: easeOut }}
                className="
                  relative overflow-hidden rounded-2xl
                  border border-green-200
                  bg-gradient-to-br from-green-50 to-white
                  p-3.5 sm:p-4
                "
              >
                <motion.div
                  animate={{ x: ["-120%", "180%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none absolute inset-y-0
                    w-16 skew-x-[-20deg]
                    bg-gradient-to-r from-transparent via-white/80 to-transparent
                  "
                />

                <div className="relative">
                  <div className="mb-2 flex items-center gap-2">
                    <motion.span
                      animate={{
                        scale: [1, 1.12, 1],
                        boxShadow: [
                          "0 0 0 rgba(101,201,67,0)",
                          "0 0 16px rgba(101,201,67,.25)",
                          "0 0 0 rgba(101,201,67,0)",
                        ],
                      }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                      className="
                        flex h-7 w-7 shrink-0
                        items-center justify-center rounded-lg
                        bg-green-500 text-xs font-black text-white
                      "
                    >
                      ✓
                    </motion.span>

                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-green-600">
                      Corporate Partnership
                    </p>
                  </div>

                  <h3 className="text-sm font-black leading-tight text-[#082B57] sm:text-base">
                    Need Skilled HVAC Professionals?
                  </h3>

                  <p className="mt-1.5 text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                    Partner with ACME SDC for trained, industry-ready HVAC talent.
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="rounded-full bg-white px-2 py-1 text-[7px] font-bold text-green-700 shadow-sm">
                      Skilled Talent
                    </span>
                    <span className="rounded-full bg-white px-2 py-1 text-[7px] font-bold text-[#082B57] shadow-sm">
                      Industry Ready
                    </span>
                  </div>

                  <motion.a
                    href="#corporate-inquiry"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      mt-2.5 inline-flex w-full items-center
                      justify-center rounded-lg
                      bg-[#082B57] px-3 py-2
                      text-[9px] font-bold text-white
                      shadow-md shadow-blue-900/10
                      transition hover:bg-[#0B376A]
                    "
                  >
                    Submit Corporate Enquiry →
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* =================================================
              FULL RIGHT-SIDE BANNER
              NO max-height — show the complete image.
          ================================================= */}
          <div className="relative mt-4 w-full">
            <motion.div
              animate={{
                opacity: [0.25, 0.45, 0.25],
                scale: [0.99, 1.01, 0.99],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none absolute -inset-2
                rounded-[1.5rem] bg-green-500/10 blur-xl
              "
            />

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative w-full overflow-hidden
                rounded-[1.5rem]
                border border-slate-200 bg-white p-1.5
                shadow-2xl shadow-slate-300/40
              "
            >
              <div className="overflow-hidden rounded-[1.2rem]">
                <img
                  src="/rightside1.png"
                  alt="ACME SDC Skill and Placement 2026"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* compact career badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -bottom-3 -left-2 z-20
              rounded-xl border border-green-100
              bg-white px-3 py-2 shadow-lg
              sm:-left-4
            "
          >
            <div className="text-[8px] font-bold uppercase tracking-wider text-green-600">
              Career Focused
            </div>
            <div className="mt-0.5 text-[10px] font-black text-[#082B57] sm:text-xs">
              Skill → Experience → Career
            </div>
          </motion.div>
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