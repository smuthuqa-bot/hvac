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
        <div className="relative z-10">
          {/* =================================================
              TOP BADGE
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
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
              SMALLER HERO HEADING
          ================================================= */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{
                opacity: 0,
                y: 70,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: easeOut,
              }}
              className="
                text-[clamp(2.2rem,6vw,3.8rem)]
                font-black
                leading-[0.95]
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Build Your
            </motion.h1>
          </div>

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
                duration: 0.8,
                delay: 0.35,
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
              HVAC Career.
            </motion.h1>
          </div>

          {/* Heading underline */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: "90px",
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
              duration: 0.6,
              ease: easeOut,
            }}
            className="mt-4 h-1.5 rounded-full bg-green-500"
          />

          {/* =================================================
              SHORT DESCRIPTION
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
              delay: 0.85,
              duration: 0.7,
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
            Get industry-focused HVAC skill training,
            certification, internship opportunities and a
            pathway toward your professional career.
          </motion.p>

          {/* =================================================
              OWNER IMAGE + INFORMATION
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
              delay: 1,
              duration: 0.8,
              ease: easeOut,
            }}
            className="
              mt-7
              overflow-hidden
              rounded-[1.75rem]
              border
              border-slate-200
              bg-white
              shadow-xl
              shadow-slate-200/60
            "
          >
            {/* =================================================
                OWNER IMAGE
            ================================================= */}
            <div className="relative h-[280px] w-full overflow-hidden sm:h-[340px]">
              <motion.img
                initial={{
                  scale: 1.08,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 1,
                  ease: easeOut,
                }}
                src="training/owner.jpeg"
                alt="Mr. Nagaraj G - Managing Director"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              {/* Image bottom gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-28
                  bg-gradient-to-t
                  from-black/45
                  to-transparent
                "
              />

              {/* Experience badge */}
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
                  delay: 1.45,
                  duration: 0.6,
                  ease: easeOut,
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
                <p className="text-lg font-black leading-none">
                  30+
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-green-300">
                  Years Experience in HAVC Engineering
                </p>
              </motion.div>
            </div>

            {/* =================================================
                OWNER DETAILS
            ================================================= */}
            <div className="p-5 sm:p-6">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-green-600
                  sm:text-xs
                "
              >
                ACME HVAC Leadership
              </p>

              <h3
                className="
                  mt-1
                  text-xl
                  font-black
                  text-[#082B57]
                  sm:text-2xl
                "
              >
                MR. NAGARAJ.G
              </h3>

              <p className="mt-0.5 text-sm font-semibold text-slate-500">
                Managing Director
              </p>

              {/* =================================================
                  COMPANY CONTENT
              ================================================= */}
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="text-sm leading-6 text-slate-600">
                  <span className="font-bold text-[#082B57]">
                    ACME HVAC
                  </span>{" "}
                  (Previously known as ACME Services) was established
                  in December 2019 at its present base in{" "}
                  <span className="font-semibold text-[#082B57]">
                    Chennai, India
                  </span>
                  .
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We also have services in{" "}
                  <span className="font-semibold text-[#082B57]">
                    Andhra Pradesh, Karnataka and Telangana
                  </span>{" "}
                  with the sole motto of providing excellent HVAC
                  solutions to our clients with efficient planning,
                  while implementing industry best practices at
                  affordable prices.
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Mr. Nagaraj, a well-known personality in the HVAC
                  field, brings more than{" "}
                  <span className="font-bold text-[#082B57]">
                    30 years of experience
                  </span>
                  . As Managing Director of ACME HVAC, he provides
                  technical assistance and direction to achieve
                  sustainable growth for the organization.
                </p>
              </div>

              {/* =================================================
                  DIRECTOR
              ================================================= */}
              <div
                className="
                  mt-5
                  rounded-xl
                  bg-slate-50
                  p-4
                "
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-600">
                  Director
                </p>

                <p className="mt-1 text-sm font-black text-[#082B57]">
                  MR. THAYALAN NAGAMUTHU
                </p>

                <p className="mt-0.5 text-xs font-medium text-slate-500">
                  Director (Canada)
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              100% JOB GUARANTEE
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
                delay: 1.6,
                duration: 0.9,
                ease: easeOut,
              }}
              className="
                relative
                mt-6
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
                  delay: 2.1,
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
                  delay: 1.95,
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
                  font-black
                  text-white
                  shadow-lg
                  shadow-green-500/30
                "
              >
                ✓
              </motion.div>

              <div className="relative">
                <div className="text-lg font-black text-[#082B57] sm:text-xl">
                  100% Job Guarantee*
                </div>

                <div className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                  Terms & conditions apply
                </div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              CTA BUTTONS
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
              delay: 2,
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
              delay: 2.2,
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
            RIGHT SIDE BANNER
            EXISTING BANNER KEPT
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
            lg:sticky
            lg:top-28
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

          {/* Main Banner */}
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
                src="/rightside1.png"
                alt="ACME HVAC Skill and Placement 2026"
                className="
                  h-auto
                  w-full
                  object-cover
                "
              />
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