"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import SparkBurst from "@/components/home/SparkBurst";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white text-[#082B57]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-blue-50 blur-3xl" />

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
          className="absolute left-[8%] top-[25%] hidden h-2 w-2 rounded-full bg-green-500 sm:block"
        />

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
          className="absolute left-[45%] top-[18%] hidden h-2 w-2 rounded-full bg-green-500 sm:block"
        />
      </div>

      {/* =====================================================
          SPARK ANIMATION
      ===================================================== */}
      <SparkBurst />

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <Navbar />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-10
          px-4
          pb-16
          pt-8
          sm:px-6
          sm:pb-20
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-8
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
              className="h-2.5 w-2.5 rounded-full bg-green-500"
            />

            SKILL & PLACEMENT 2026
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          {/* First line */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: easeOut,
              }}
              className="
                text-[clamp(2.75rem,10vw,5rem)]
                font-black
                leading-[0.94]
                tracking-tight
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Build Your
            </motion.h1>
          </div>

          {/* Second line */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{
                opacity: 0,
                y: 110,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.42,
                ease: easeOut,
              }}
              className="
                text-[clamp(2.75rem,10vw,5rem)]
                font-black
                leading-[0.94]
                tracking-tight
                text-[#65C943]
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              HVAC Career.
            </motion.h1>
          </div>

          {/* Animated underline */}
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
            className="mt-5 h-1.5 rounded-full bg-green-500"
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
              100% JOB GUARANTEE
              COMES FROM RIGHT
          ================================================= */}
          <div className="overflow-hidden">
            <motion.div
              initial={{
                opacity: 0,
                x: 180,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.25,
                duration: 0.9,
                ease: easeOut,
              }}
              className="
                relative
                mt-7
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-2xl
                border
                border-green-200
                bg-white
                px-4
                py-3
                shadow-lg
                shadow-green-100
                sm:px-5
                sm:py-4
              "
            >
              {/* Light sweep */}
              <motion.div
                initial={{
                  x: "-120%",
                }}
                animate={{
                  x: "250%",
                }}
                transition={{
                  delay: 2,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  w-20
                  bg-gradient-to-r
                  from-transparent
                  via-green-100/80
                  to-transparent
                "
              />

              {/* Icon */}
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -45,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 1.7,
                  duration: 0.5,
                  ease: easeOut,
                }}
                className="
                  relative
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-green-500
                  text-xl
                  text-white
                  shadow-lg
                  shadow-green-500/30
                "
              >
                ✓
              </motion.div>

              {/* Text */}
              <div className="relative">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 1.55,
                    duration: 0.5,
                  }}
                  className="
                    text-lg
                    font-black
                    text-[#082B57]
                    sm:text-xl
                  "
                >
                  100% Job Guarantee*
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.8,
                    duration: 0.5,
                  }}
                  className="
                    mt-0.5
                    text-[11px]
                    text-slate-500
                    sm:text-xs
                  "
                >
                  Terms & conditions apply
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.8,
              duration: 0.7,
              ease: easeOut,
            }}
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
            "
          >
            <motion.a
              href="#register"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                rounded-full
                bg-green-600
                px-7
                py-3.5
                text-center
                text-sm
                font-bold
                text-white
                shadow-xl
                shadow-green-600/20
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

              <div className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                Eligible Age
              </div>
            </div>

            <div>
              <div className="text-xl font-black sm:text-2xl">
                ₹18K+
              </div>

              <div className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                Salary*
              </div>
            </div>

            <div>
              <div className="text-xl font-black sm:text-2xl">
                1 Year
              </div>

              <div className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                Internship
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            RIGHT CLIENT BANNER
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
            mx-auto
            w-full
            max-w-xl
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              -inset-5
              rounded-[2.5rem]
              bg-green-500/10
              blur-2xl
            "
          />

          {/* =================================================
              BANNER
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
            <div className="overflow-hidden rounded-[1.6rem]">
              <img
                src="/rightside.jpeg"
                alt="ACME HVAC Skill and Placement 2026"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* =================================================
              CAREER FOCUSED - LEFT CENTER
          ================================================= */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[20px]
              top-[40%]
              z-20
              -translate-y-1/2
              rounded-2xl
              border
              border-green-100
              bg-white
              px-4
              py-3
              shadow-xl
              sm:left-[-24px]
              sm:px-5
              sm:py-4
            "
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-green-600">
              Career Focused
            </div>

            <div className="mt-1 text-sm font-black text-[#082B57] sm:text-base">
              Skill → Experience → Career
            </div>
          </motion.div>

          {/* =================================================
              OPEN FOR - RIGHT CENTER
          ================================================= */}
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[-10px]
              top-[38%]
              z-20
              -translate-y-1/2
              rounded-2xl
              border
              border-green-100
              bg-white
              px-4
              py-3
              shadow-xl
              sm:right-[-24px]
              sm:px-5
              sm:py-4
            "
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Open For
            </div>

            <div className="mt-1 text-sm font-black text-[#082B57]">
              Women & Men
            </div>

            <div className="mt-0.5 text-[10px] font-semibold text-green-600">
              Age 18–35
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