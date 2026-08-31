"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const management = [
  {
    role: "Managing Director",
    name: "Mr. Nagaraj G.",
    location: "",
    initials: "NG",
  },
  {
    role: "Director",
    name: "Mr. Thayalan Nagamuthu",
    location: "Canada",
    initials: "TN",
  },
];

const capabilities = [
  {
    title: "Project Management",
    description:
      "Experienced project managers for efficient planning and execution.",
  },
  {
    title: "Project Engineering",
    description:
      "Technical engineering support for HVAC project requirements.",
  },
  {
    title: "Installation",
    description:
      "Professional supply and installation of HVAC systems.",
  },
  {
    title: "Testing & Commissioning",
    description:
      "System testing, commissioning and timely project completion.",
  },
  {
    title: "Low Side Contracts",
    description:
      "Complete support for low side HVAC contracts.",
  },
  {
    title: "Customer Support",
    description:
      "Dedicated support throughout project execution.",
  },
];

const serviceLocations = [
  "Chennai",
  "Andhra Pradesh",
  "Karnataka",
  "Telangana",
];

export default function FounderChairman() {
  return (
    <section
      id="founder"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-green-100/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-100/40
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: easeOut,
          }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-12
          "
        >
          <div
            className="
              mb-4
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
              uppercase
              tracking-[0.2em]
              text-green-700
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Leadership
          </div>

          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              text-[#082B57]
              sm:text-4xl
              lg:text-5xl
            "
          >
            The Vision Behind
            <span className="block text-green-600">
              ACME HVAC
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            Experience, technical expertise and professional
            leadership driving ACME HVAC towards sustainable growth.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN 50 / 50 CARD
        ===================================================== */}

        <div
          className="
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-200
            bg-white
            shadow-xl
            shadow-slate-200/50
          "
        >
          <div className="grid lg:grid-cols-2">

            {/* =================================================
                LEFT SIDE
                PHOTO + NAMES + HIGHLIGHTS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: easeOut,
              }}
              className="
                relative
                overflow-hidden
                bg-[#082B57]
                p-5
                sm:p-7
                lg:p-8
              "
            >

              {/* =================================================
                  BACKGROUND GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-green-500/20
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-32
                  -right-32
                  h-80
                  w-80
                  rounded-full
                  bg-blue-400/20
                  blur-3xl
                "
              />

              {/* =================================================
                  PHOTO
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-slate-900
                  shadow-2xl
                "
              >

                <motion.div
                  initial={{
                    scale: 1.04,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: easeOut,
                  }}
                >
                  <Image
                    src="/founder.jpeg"
                    alt="ACME HVAC Management Team"
                    width={1600}
                    height={900}
                    priority={false}
                    className="
                      block
                      h-auto
                      w-full
                      object-contain
                    "
                  />
                </motion.div>

                {/* Bottom overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-24
                    bg-gradient-to-t
                    from-[#041A33]/70
                    to-transparent
                  "
                />

                {/* Photo label */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    rounded-xl
                    border
                    border-white/20
                    bg-black/30
                    px-4
                    py-2.5
                    backdrop-blur-md
                    sm:bottom-5
                    sm:left-5
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
                    ACME HVAC
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-sm
                      font-bold
                      text-white
                      sm:text-base
                    "
                  >
                    Leadership Team
                  </p>
                </div>

                {/* 30+ badge */}

                {/* <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-xl
                    bg-white
                    px-3
                    py-2
                    shadow-xl
                    sm:right-5
                    sm:top-5
                    sm:px-4
                    sm:py-3
                  "
                >
                  <p
                    className="
                      text-xl
                      font-black
                      leading-none
                      text-[#082B57]
                      sm:text-2xl
                    "
                  >
                    30+
                  </p>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-green-600
                    "
                  >
                    Years Experience
                  </p>
                </motion.div> */}

              </div>

              {/* =================================================
                  DIRECTOR NAMES
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  mt-5
                  grid
                  grid-cols-2
                  gap-3
                "
              >

                {/* Managing Director */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
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
                    delay: 0.2,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    px-3
                    py-3
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-green-400/30
                    hover:bg-white/15
                    sm:px-4
                    sm:py-4
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-green-400
                      sm:text-[9px]
                    "
                  >
                    Managing Director
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-black
                      leading-5
                      text-white
                      sm:text-sm
                    "
                  >
                    Mr. Nagaraj G.
                  </p>
                </motion.div>

                {/* Director */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
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
                    delay: 0.3,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    px-3
                    py-3
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-green-400/30
                    hover:bg-white/15
                    sm:px-4
                    sm:py-4
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-green-400
                      sm:text-[9px]
                    "
                  >
                    Director
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-black
                      leading-5
                      text-white
                      sm:text-sm
                    "
                  >
                    Mr. Thayalan Nagamuthu
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      font-semibold
                      text-slate-300
                    "
                  >
                    Canada
                  </p>
                </motion.div>

              </div>

              {/* =================================================
                  LEADERSHIP HIGHLIGHTS
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                className="
                  relative
                  z-10
                  mt-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.07]
                  p-5
                  backdrop-blur-sm
                "
              >

                {/* Heading */}

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-green-500
                      text-sm
                      font-black
                      text-white
                    "
                  >
                    ✦
                  </div>

                  <div>

                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-green-400
                      "
                    >
                      Leadership Highlights
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        font-semibold
                        text-white
                      "
                    >
                      Experience that drives excellence
                    </p>

                  </div>

                </div>

                {/* Stats */}

                <div
                  className="
                    mt-5
                    grid
                    grid-cols-3
                    gap-2
                  "
                >

                  <div
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-2
                      py-3
                      text-center
                    "
                  >
                    <p
                      className="
                        text-lg
                        font-black
                        text-green-400
                      "
                    >
                      30+
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-slate-400
                      "
                    >
                      Years
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-2
                      py-3
                      text-center
                    "
                  >
                    <p
                      className="
                        text-lg
                        font-black
                        text-green-400
                      "
                    >
                      4
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-slate-400
                      "
                    >
                      Regions
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-2
                      py-3
                      text-center
                    "
                  >
                    <p
                      className="
                        text-lg
                        font-black
                        text-green-400
                      "
                    >
                      2019
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-slate-400
                      "
                    >
                      Established
                    </p>
                  </div>

                </div>

                {/* Statement */}

                <div
                  className="
                    mt-4
                    border-l-2
                    border-green-500/60
                    pl-3
                  "
                >
                  <p
                    className="
                      text-[11px]
                      italic
                      leading-5
                      text-slate-300
                    "
                  >
                    “Technical expertise, professional execution
                    and customer satisfaction remain at the heart
                    of our journey.”
                  </p>
                </div>

              </motion.div>

              {/* =================================================
                  SERVICE LOCATIONS
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  mt-5
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
                  Service Presence
                </p>

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {serviceLocations.map((location) => (
                    <span
                      key={location}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-3
                        py-1.5
                        text-[9px]
                        font-semibold
                        text-slate-300
                      "
                    >
                      {location}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>

            {/* =================================================
                RIGHT SIDE
                COMPANY STORY
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: easeOut,
              }}
              className="
                flex
                flex-col
                justify-center
                p-6
                sm:p-8
                lg:p-10
                xl:p-12
              "
            >

              {/* =================================================
                  STORY LABEL
              ================================================= */}

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-10 bg-green-500" />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-green-600
                  "
                >
                  Our Story
                </span>

              </div>

              {/* =================================================
                  TITLE
              ================================================= */}

              <h3
                className="
                  mt-5
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-[#082B57]
                  sm:text-4xl
                "
              >
                ACME HVAC
                <span className="block text-green-600">
                  – The Story So Far
                </span>
              </h3>

              {/* =================================================
                  STORY CONTENT
              ================================================= */}

              <div
                className="
                  mt-6
                  space-y-4
                  text-sm
                  leading-7
                  text-slate-600
                  sm:text-base
                "
              >

                <p>
                  <strong className="text-[#082B57]">
                    ACME HVAC
                  </strong>{" "}
                  (previously known as ACME Services) was established
                  in December 2019 at its present base in
                  <strong className="text-[#082B57]">
                    {" "}Chennai, India.
                  </strong>
                </p>

                <p>
                  We also have services in
                  <strong className="text-[#082B57]">
                    {" "}Andhra Pradesh, Karnataka and Telangana,
                  </strong>{" "}
                  with the sole motto of providing excellent HVAC
                  solutions to our clients with efficient planning
                  whilst implementing industry best practices at
                  affordable prices.
                </p>

                <p>
                  With a strong focus on technical excellence and
                  customer satisfaction, ACME HVAC continues to
                  build long-term value through reliable HVAC
                  solutions and professional project execution.
                </p>

              </div>

              {/* =================================================
                  TECHNICAL LEADERSHIP
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="
                  mt-7
                  rounded-2xl
                  border
                  border-green-100
                  bg-gradient-to-r
                  from-green-50
                  to-white
                  p-5
                  sm:p-6
                "
              >

                <div className="flex gap-4">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-green-500
                      text-lg
                      font-black
                      text-white
                      shadow-lg
                      shadow-green-500/20
                    "
                  >
                    ✓
                  </div>

                  <div>

                    <p
                      className="
                        text-sm
                        font-black
                        text-[#082B57]
                        sm:text-base
                      "
                    >
                      30+ Years of HVAC Experience
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-6
                        text-slate-500
                        sm:text-sm
                      "
                    >
                      Mr. Nagaraj brings more than 30 years of
                      experience in the HVAC field, providing
                      technical assistance and direction to achieve
                      sustainable organizational growth.
                    </p>

                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  SERVICE PRESENCE
              ================================================= */}

              <div className="mt-7">

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-green-600
                  "
                >
                  Service Presence
                </p>

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {serviceLocations.map((location) => (
                    <span
                      key={location}
                      className="
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-slate-600
                      "
                    >
                      {location}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>
          </div>

          {/* =====================================================
              CAPABILITIES
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              border-t
              border-slate-200
              bg-[#082B57]
              p-6
              text-white
              sm:p-8
              lg:p-10
            "
          >

            <div
              className="
                grid
                gap-8
                lg:grid-cols-[0.65fr_1.35fr]
                lg:items-center
              "
            >

              {/* =================================================
                  CAPABILITY INTRO
              ================================================= */}

              <div>

                <div
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-green-400/20
                    bg-green-500/10
                    px-4
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-green-400
                  "
                >
                  Our Capabilities
                </div>

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-black
                    leading-tight
                    sm:text-3xl
                  "
                >
                  Complete HVAC
                  <span className="block text-green-400">
                    project execution.
                  </span>
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-slate-300
                  "
                >
                  ACME HVAC is well equipped with project managers,
                  project engineers and project supervisors for
                  supply, installation, testing and commissioning
                  of HVAC products.
                </p>

              </div>

              {/* =================================================
                  CAPABILITY CARDS
              ================================================= */}

              <div
                className="
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >

                {capabilities.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      p-4
                      backdrop-blur-sm
                      transition
                      duration-300
                      hover:bg-white/10
                    "
                  >

                    <div className="flex gap-3">

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-green-500
                          text-xs
                          font-black
                          text-white
                        "
                      >
                        ✓
                      </div>

                      <div>

                        <h4
                          className="
                            text-sm
                            font-black
                            text-white
                          "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            leading-5
                            text-slate-400
                          "
                        >
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </motion.div>
                ))}

              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-center
            text-sm
            leading-7
            text-slate-500
            sm:text-base
          "
        >
          Experience, technical expertise and industry best
          practices continue to shape the journey of{" "}
          <span className="font-bold text-[#082B57]">
            ACME HVAC.
          </span>
        </motion.p>

      </div>
    </section>
  );
}