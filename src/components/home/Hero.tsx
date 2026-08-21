"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-[#061A33] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-[#5BBE3F]/20 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl sm:h-[500px] sm:w-[500px]" />
      </div>

      {/* Industrial grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-8 sm:px-6 sm:pb-28 sm:pt-10 lg:min-h-[calc(100svh-96px)] lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-4">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-4 sm:pt-6 lg:pt-0"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#65C943]/30 bg-[#65C943]/10 px-3.5 py-2 text-xs font-semibold text-[#8BE66E] sm:mb-6 sm:px-4 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#65C943]" />
            Skill & Placement 2026
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-[clamp(2.75rem,10vw,5rem)] font-black leading-[0.94] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Build Your
            <span className="block text-[#65C943]">
              HVAC Career.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            Get industry-focused HVAC skill training,
            certification, internship opportunities and
            a pathway toward your professional career.
          </p>

          {/* Job guarantee */}
          <div className="mt-6 flex max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-md sm:mt-8 sm:px-5 sm:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#65C943] text-lg sm:h-11 sm:w-11 sm:text-xl">
              ✓
            </div>

            <div>
              <div className="text-base font-extrabold sm:text-xl">
                100% Job Guarantee*
              </div>

              <div className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">
                Terms & conditions apply
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <motion.a
              href="#register"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-[#65C943] px-7 py-3.5 text-center text-sm font-bold shadow-xl shadow-[#65C943]/20 sm:px-8 sm:py-4 sm:text-base"
            >
              Start Your Journey →
            </motion.a>

            <a
              href="#program"
              className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold backdrop-blur-sm transition hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Program
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:mt-10 sm:gap-8 sm:pt-8">
            <div>
              <div className="text-xl font-black sm:text-2xl">
                18–35
              </div>
              <div className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                Eligible Age
              </div>
            </div>

            <div>
              <div className="text-xl font-black sm:text-2xl">
                ₹18K+
              </div>
              <div className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                Salary*
              </div>
            </div>

            <div>
              <div className="text-xl font-black sm:text-2xl">
                1 Year
              </div>
              <div className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                Internship
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
          className="relative mx-auto w-full max-w-lg lg:max-w-xl"
        >
          <div className="relative mx-auto w-[88%] sm:w-[82%] lg:w-full">
            {/* Main visual */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-700 via-[#12345B] to-[#061A33] shadow-2xl sm:rounded-[2rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(101,201,67,0.25),transparent_45%)]" />

              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#061A33] via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center p-6 text-center sm:p-10">
                <div>
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#65C943]/30 bg-[#65C943]/10 text-4xl sm:mb-6 sm:h-24 sm:w-24 sm:rounded-3xl sm:text-5xl">
                    ❄️
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8BE66E] sm:text-sm sm:tracking-[0.3em]">
                    HVAC
                  </p>

                  <h2 className="mt-3 text-2xl font-black sm:text-4xl">
                    Learn Today.
                    <br />
                    Earn Tomorrow.
                  </h2>
                </div>
              </div>
            </div>

            {/* Career card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 rounded-xl border border-white/10 bg-white/10 p-3.5 shadow-2xl backdrop-blur-xl sm:-bottom-6 sm:-left-5 sm:rounded-2xl sm:p-5"
            >
              <div className="text-[10px] text-slate-300 sm:text-xs">
                Career Opportunity
              </div>

              <div className="mt-1 text-lg font-black sm:text-2xl">
                ₹18,000+
              </div>

              <div className="text-[10px] text-[#8BE66E] sm:text-xs">
                After course completion*
              </div>
            </motion.div>

            {/* Eligibility card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-10 rounded-xl border border-white/10 bg-white/10 p-3.5 shadow-2xl backdrop-blur-xl sm:-right-5 sm:top-16 sm:rounded-2xl sm:p-5"
            >
              <div className="text-[10px] text-slate-300 sm:text-xs">
                Open For
              </div>

              <div className="mt-1 text-xs font-bold sm:text-base">
                Women & Men
              </div>

              <div className="mt-1 text-[10px] text-[#8BE66E] sm:text-xs">
                Age 18–35
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-8 rounded-t-[50%] bg-white sm:h-12 lg:h-16" />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        <a
          href="#register"
          className="flex w-full items-center justify-center rounded-xl bg-[#65C943] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#65C943]/20"
        >
          Register Now →
        </a>
      </div>
    </section>
  );
}