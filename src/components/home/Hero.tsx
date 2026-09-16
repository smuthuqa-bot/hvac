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

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  /* ==========================================================
     AUTOMATIC IMAGE ROTATION

     4500 = 4.5 seconds
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

  /* ==========================================================
     CORPORATE ENQUIRY SCROLL

     This directly finds the existing CorporateInquiry
     component on the SAME HOME PAGE and scrolls to it.
  ========================================================== */

  const scrollToCorporateInquiry = () => {
    const section = document.getElementById("corporate-inquiry");

    if (!section) {
      console.warn(
        "Corporate Inquiry section not found. Make sure CorporateInquiry has id='corporate-inquiry'."
      );
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
            right-[-180px]
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-50
            blur-3xl
          "
        />

        {/* Floating dot */}

        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.7, 0.3],
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

        {/* Floating dot */}

        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[45%]
            top-[18%]
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

      <SparkBurst />

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
            LEFT CONTENT
        ================================================= */}

        <div className="relative z-10">
          {/* =================================================
              TOP BADGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: -35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
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
              sm:text-sm
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.35, 1],
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
              "
            />

            SKILL & PLACEMENT 2026
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <div className="overflow-hidden">
            <motion.h1
              initial="hidden"
              animate="visible"
              className="
                max-w-3xl
                overflow-hidden
                text-[clamp(2.75rem,10vw,5rem)]
                font-black
                leading-[0.94]
                tracking-tight
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: easeOut,
                    },
                  },
                }}
                className="block"
              >
                Build Your
              </motion.span>

              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 70,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.18,
                      duration: 0.8,
                      ease: easeOut,
                    },
                  },
                }}
                className="
                  block
                  text-[#65C943]
                "
              >
                HVAC Career.
              </motion.span>
            </motion.h1>
          </div>

          {/* =================================================
              ANIMATED UNDERLINE
          ================================================= */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: "110px",
              opacity: 1,
            }}
            transition={{
              delay: 1.05,
              duration: 0.7,
              ease: easeOut,
            }}
            className="
              mt-5
              h-1.5
              rounded-full
              bg-green-500
            "
          />

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.05,
              duration: 0.7,
              ease: easeOut,
            }}
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            Get industry-focused HVAC skill training,
            certification, internship opportunities and
            a pathway toward your professional career.
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
              delay: 1.15,
              ease: easeOut,
            }}
            className="
              relative
              mt-7
              overflow-visible
            "
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
              {/* Image */}

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
                    from-black/65
                    via-black/10
                    to-transparent
                  "
                />

                {/* Training label */}

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
                    delay: 0.15,
                  }}
                  className="
                    absolute
                    bottom-4
                    left-4
                    rounded-xl
                    border
                    border-white/20
                    bg-[#082B57]/90
                    px-4
                    py-2.5
                    text-white
                    shadow-xl
                    backdrop-blur-md
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-green-300
                    "
                  >
                    ACME HVAC
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-black
                      sm:text-base
                    "
                  >
                    {trainingImages[activeImage].label}
                  </p>
                </motion.div>

                {/* Image counter */}

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
                  "
                >
                  {String(activeImage + 1).padStart(2, "0")} /{" "}
                  {String(trainingImages.length).padStart(2, "0")}
                </div>

                {/* Image dots */}

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    z-10
                    flex
                    items-center
                    gap-1.5
                  "
                >
                  {trainingImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Show training image ${index + 1}`}
                      className="
                        flex
                        h-4
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

              {/* Progress bar */}

              <div className="h-1 bg-slate-200">
                <motion.div
                  key={activeImage}
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
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.3 + index * 0.08,
                  duration: 0.5,
                  ease: easeOut,
                }}
                whileHover={{
                  y: -3,
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
                  hover:shadow-md
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
                      text-xs
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
              CTA BUTTONS
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
              ease: easeOut,
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
              delay: 2,
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
        </div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            z-20
            mx-auto
            w-full
            max-w-xl
          "
        >
          <div
            className="
              relative
              mx-auto
              w-[88%]
              sm:w-[82%]
              lg:w-full
            "
          >
            {/* =================================================
                CORPORATE PARTNERSHIP CTA
                IMPORTANT:
                z-50 + pointer-events-auto
                makes the button clickable.
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
                duration: 0.8,
                delay: 0.45,
                ease: easeOut,
              }}
              className="
                relative
                z-50
                mb-7
                overflow-hidden
                rounded-[2rem]
                border
                border-[#082B57]/10
                bg-gradient-to-br
                from-[#082B57]
                via-[#0A376D]
                to-[#0D4B7D]
                px-6
                py-6
                shadow-2xl
                shadow-[#082B57]/20
                sm:px-8
                sm:py-7
              "
            >
              {/* Green glow */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.12, 0.25, 0.12],
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
                  h-52
                  w-52
                  rounded-full
                  bg-green-400
                  blur-3xl
                "
              />

              {/* Light sweep */}

              <motion.div
                animate={{
                  x: ["-120%", "150%"],
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
                  -left-20
                  w-20
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                "
              />

              <div className="relative z-10">
                {/* Label */}

                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{
                      scale: [1, 1.35, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-green-400
                      shadow-lg
                      shadow-green-400/50
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-green-300
                      sm:text-[10px]
                    "
                  >
                    Corporate Partnership
                  </span>
                </div>

                {/* Heading */}

                <h2
                  className="
                    mt-3
                    max-w-md
                    text-2xl
                    font-black
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Need Skilled HVAC
                  <span className="text-green-400">
                    {" "}
                    Professionals?
                  </span>
                </h2>

                {/* Description */}

                <p
                  className="
                    mt-3
                    max-w-lg
                    text-xs
                    leading-6
                    text-slate-300
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  Share your company workforce requirement
                  with ACME SDC. Tell us how many skilled
                  professionals you need and whether your
                  requirement is permanent or temporary.
                </p>

                {/* Tags */}

                <div className="mt-4 flex flex-wrap gap-2">
                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/10
                      px-3
                      py-1.5
                      text-[9px]
                      font-semibold
                      text-white/90
                      backdrop-blur-sm
                      sm:text-[10px]
                    "
                  >
                    Skilled Workforce
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/10
                      px-3
                      py-1.5
                      text-[9px]
                      font-semibold
                      text-white/90
                      backdrop-blur-sm
                      sm:text-[10px]
                    "
                  >
                    Permanent
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/10
                      px-3
                      py-1.5
                      text-[9px]
                      font-semibold
                      text-white/90
                      backdrop-blur-sm
                      sm:text-[10px]
                    "
                  >
                    Temporary
                  </span>
                </div>

                {/* =================================================
                    CORPORATE ENQUIRY BUTTON

                    This is a real button with onClick.
                    It does NOT depend on href/hash.
                ================================================= */}

                <div className="relative z-[100] mt-5">
                  <motion.button
                    type="button"
                    onClick={scrollToCorporateInquiry}
                    whileHover={{
                      scale: 1.03,
                      x: 3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      group
                      relative
                      z-[100]
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-green-500
                      px-5
                      py-3.5
                      text-sm
                      font-black
                      text-white
                      shadow-xl
                      shadow-green-900/30
                      transition-all
                      duration-300
                      hover:bg-green-400
                      sm:w-auto
                      sm:px-7
                    "
                  >
                    <span>
                      Submit Corporate Enquiry
                    </span>

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-white/15
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                EXISTING BANNER
                KEPT BELOW CORPORATE CTA
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-1.5
                shadow-2xl
                shadow-slate-300/40
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[1.6rem]
                "
              >
                <img
                  src="/rightside1.png"
                  alt="ACME SDC Skill and Placement 2026"
                  className="
                    h-auto
                    w-full
                    object-cover
                  "
                />
              </div>
            </motion.div>

            {/* =================================================
                CAREER BADGE
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                z-30
                -bottom-4
                -left-3
                rounded-2xl
                border
                border-green-100
                bg-white
                px-4
                py-3
                shadow-xl
                sm:-left-6
                sm:px-5
                sm:py-4
              "
            >
              <div
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-green-600
                "
              >
                Career Focused
              </div>

              <div
                className="
                  mt-1
                  text-sm
                  font-black
                  text-[#082B57]
                  sm:text-base
                "
              >
                Skill → Experience → Career
              </div>
            </motion.div>

            {/* =================================================
                ELIGIBILITY BADGE
            ================================================= */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                z-30
                right-[-5px]
                top-[calc(50%+40px)]
                rounded-2xl
                border
                border-green-100
                bg-white
                px-4
                py-3
                shadow-xl
                sm:-right-5
                sm:top-[calc(50%+50px)]
                sm:px-5
                sm:py-4
              "
            >
              <div
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                Open For
              </div>

              <div
                className="
                  mt-1
                  text-sm
                  font-black
                  text-[#082B57]
                "
              >
                Women & Men
              </div>

              <div
                className="
                  mt-0.5
                  text-[10px]
                  font-semibold
                  text-green-600
                "
              >
                Age 18–35
              </div>
            </motion.div>
          </div>
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
          z-[200]
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