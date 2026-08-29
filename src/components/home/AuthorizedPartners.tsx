"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Daikin",
    logo: "/company/daikin.jpeg",
  },
  {
    name: "Voltas",
    logo: "/company/voltas.jpg",
  },
  {
    name: "Samsung",
    logo: "/company/samsung1.jpg",
  },
  {
    name: "YORK",
    logo: "/york.jpg",
  },
  {
    name: "Toshiba Carrier",
    logo: "/company/toshiba-carrier.jpeg",
  },
  {
    name: "Trane",
    logo: "/company/trane.jpg",
  },
  {
    name: "Carrier",
    logo: "/company/carrier.jpeg",
  },
];

export default function AuthorizedPartners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden border-b border-slate-100 bg-white py-10 sm:py-12"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[500px] -translate-x-1/2 rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADING
        ===================================================== */}
        <div className="mb-7 text-center sm:mb-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-600 sm:text-xs">
            Authorized Training Partners
          </p>

          <h2 className="mt-2 text-lg font-black text-slate-900 sm:text-xl">
            Hands on training on leading brands
          </h2>
        </div>

        {/* =====================================================
            SLIDER VIEWPORT
        ===================================================== */}
        <div
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-3xl
            py-3
            sm:py-4
          "
        >
          {/* =================================================
              LEFT FADE
          ================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-10
              bg-gradient-to-r
              from-white
              to-transparent
              sm:w-16
            "
          />

          {/* =================================================
              RIGHT FADE
          ================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-10
              bg-gradient-to-l
              from-white
              to-transparent
              sm:w-16
            "
          />

          {/* =================================================
              CONTINUOUS TRACK
          ================================================= */}
          <motion.div
            className="flex w-max items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {/* =================================================
                FIRST SET - ALL 7
            ================================================= */}
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="
                  flex
                  w-[85vw]
                  shrink-0
                  items-center
                  justify-center
                  px-2
                  sm:w-[50vw]
                  sm:px-3
                  lg:w-[33.333vw]
                  lg:max-w-[400px]
                  lg:px-4
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    relative
                    flex
                    h-52
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-md
                    transition-shadow
                    duration-300
                    hover:shadow-xl
                    sm:h-60
                    sm:p-6
                    lg:h-64
                    lg:p-7
                  "
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="
                      block
                      max-h-full
                      max-w-full
                      object-contain
                    "
                  />
                </motion.div>
              </div>
            ))}

            {/* =================================================
                DUPLICATE SET - ALL 7
                Required for seamless looping
            ================================================= */}
            {partners.map((partner) => (
              <div
                key={`duplicate-${partner.name}`}
                className="
                  flex
                  w-[85vw]
                  shrink-0
                  items-center
                  justify-center
                  px-2
                  sm:w-[50vw]
                  sm:px-3
                  lg:w-[33.333vw]
                  lg:max-w-[400px]
                  lg:px-4
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    relative
                    flex
                    h-52
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-md
                    transition-shadow
                    duration-300
                    hover:shadow-xl
                    sm:h-60
                    sm:p-6
                    lg:h-64
                    lg:p-7
                  "
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="
                      block
                      max-h-full
                      max-w-full
                      object-contain
                    "
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            TRUST LINE
        ===================================================== */}
        <p className="mt-5 text-center text-[11px] text-slate-400">
          Industry-aligned training with leading HVAC brands
        </p>
      </div>
    </section>
  );
}