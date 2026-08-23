"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Daikin",
    logo: "/daikin.png",
  },
  {
    name: "Samsung",
    logo: "/samsung.png",
  },
  {
    name: "YORK",
    logo: "/york.jpg",
  },
  {
    name: "Toshiba Carrier",
    logo: "/toshiba-carrier.jpg",
  },
  {
    name: "Trane",
    logo: "/trane.jpg",
  },
];

export default function AuthorizedPartners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden border-b border-slate-100 bg-white py-10 sm:py-12"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[500px] -translate-x-1/2 rounded-full bg-green-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-7 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-600 sm:text-xs">
            Authorized Training Partners
          </p>

          <h2 className="mt-2 text-lg font-black text-slate-900 sm:text-xl">
            Trained with Industry-Leading Brands
          </h2>
        </div>

        {/* Logo slider */}
        <div className="relative mx-auto max-w-5xl overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* First set */}
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex min-w-full items-center justify-center px-8 sm:min-w-[50%] lg:min-w-[33.333%]"
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="flex h-24 w-full max-w-[260px] items-center justify-center rounded-2xl border border-slate-100 bg-white px-8 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:h-28"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-14 w-auto max-w-[190px] object-contain sm:max-h-16"
                  />
                </motion.div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <div
                key={`duplicate-${partner.name}`}
                className="flex min-w-full items-center justify-center px-8 sm:min-w-[50%] lg:min-w-[33.333%]"
              >
                <div className="flex h-24 w-full max-w-[260px] items-center justify-center rounded-2xl border border-slate-100 bg-white px-8 shadow-sm sm:h-28">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-14 w-auto max-w-[190px] object-contain sm:max-h-16"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Small trust line */}
        <p className="mt-5 text-center text-[11px] text-slate-400">
          Industry-aligned training with leading HVAC brands
        </p>
      </div>
    </section>
  );
}