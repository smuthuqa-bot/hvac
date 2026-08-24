"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Daikin",
    logo: "/company/daikin.jpeg",
  },
  {
    name: "Samsung",
    logo: "/company/samsung.jpeg",
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
    logo: "/company/trane.jpeg",
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
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-600 sm:text-xs">
            Authorized Training Partners
          </p>

          <h2 className="mt-2 text-lg font-black text-slate-900 sm:text-xl">
            Trained with Industry-Leading Brands
          </h2>
        </div>

        {/* =====================================================
            LOGO SLIDER
        ===================================================== */}
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">

          {/* Left fade */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-8
              bg-gradient-to-r
              from-white
              to-transparent
              sm:w-14
            "
          />

          {/* Right fade */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-8
              bg-gradient-to-l
              from-white
              to-transparent
              sm:w-14
            "
          />

          {/* =================================================
              SLIDER
          ================================================= */}
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >

            {/* =================================================
                FIRST SET
            ================================================= */}
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="
                  flex
                  min-w-full
                  items-center
                  justify-center
                  px-2
                  sm:min-w-[50%]
                  sm:px-3
                  lg:min-w-[33.333%]
                  lg:px-4
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    relative
                    flex
                    h-56
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-md
                    transition-shadow
                    duration-300
                    hover:shadow-xl
                    sm:h-64
                    lg:h-72
                  "
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="
                      block
                      h-[92%]
                      w-[92%]
                      object-contain
                    "
                  />
                </motion.div>
              </div>
            ))}

            {/* =================================================
                DUPLICATE SET
            ================================================= */}
            {partners.map((partner) => (
              <div
                key={`duplicate-${partner.name}`}
                className="
                  flex
                  min-w-full
                  items-center
                  justify-center
                  px-2
                  sm:min-w-[50%]
                  sm:px-3
                  lg:min-w-[33.333%]
                  lg:px-4
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-56
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-md
                    sm:h-64
                    lg:h-72
                  "
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="
                      block
                      h-[92%]
                      w-[92%]
                      object-contain
                    "
                  />
                </div>
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