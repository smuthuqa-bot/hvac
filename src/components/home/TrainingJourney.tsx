"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Register",
    shortTitle: "Get Started",
    description:
      "Submit your basic details and register your interest in the HVAC skill development program.",
    icon: "→",
  },
  {
  number: "02",
  title: "Skill Training",
  shortTitle: "2 Months Training",
  description:
    "Complete 2 months of structured HVAC skill training with practical sessions and industry-focused technical learning.",
  icon: "⚙",
},
  {
    number: "03",
    title: "Certification",
    shortTitle: "Get Certified",
    description:
      "Complete the required training and work toward the applicable certification opportunities.",
    icon: "✓",
  },
  {
    number: "04",
    title: "Internship",
    shortTitle: "Get Experience",
    description:
      "Gain real-world workplace exposure through the mandatory one-year internship program.",
    icon: "◆",
  },
  {
    number: "05",
    title: "Career",
    shortTitle: "Move Forward",
    description:
      "Use your skills and experience to pursue HVAC career and job opportunities.",
    icon: "↗",
  },
];

export default function TrainingJourney() {
  return (
    <section
      id="program"
      className="relative overflow-hidden bg-slate-50 py-2 sm:py-2 lg:py-2"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-green-100/60 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-2 text-xs font-semibold text-green-700 sm:px-4 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Your Career Journey
          </div>

          <h2 className="text-[clamp(2.25rem,7vw,4rem)] font-black leading-[1] tracking-tight text-slate-950">
            From Learning
            <span className="block text-green-600">To Earning.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
            A structured journey designed to take you from registration
            to practical experience and career opportunities.
          </p>
        </motion.div>

        {/* ========================= */}
        {/* Desktop Timeline */}
        {/* ========================= */}

        <div className="relative mt-14 hidden lg:block">
          {/* Base line */}
          <div className="absolute left-[10%] right-[10%] top-12 h-1 rounded-full bg-slate-200">
            {/* Animated progress */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                delay: 0.3,
                ease: "easeInOut",
              }}
              className="h-full rounded-full bg-gradient-to-r from-green-500 via-green-500 to-[#082B57]"
            />
          </div>

          <div className="relative grid grid-cols-5 gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                className="group text-center"
              >
                {/* Timeline node */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-slate-50 bg-white shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#082B57] text-lg font-black text-white transition-all duration-300 group-hover:bg-green-500">
                    {step.number}
                  </div>

                  {/* Small icon */}
                  <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-green-500 text-xs font-bold text-white shadow">
                    {step.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                    {step.shortTitle}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-slate-700">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* Mobile / Tablet Timeline */}
        {/* ========================= */}

        <div className="relative mt-14 lg:hidden">
          {/* Vertical timeline */}
          <div className="absolute bottom-10 left-6 top-8 w-0.5 bg-slate-200 sm:left-7">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="w-full bg-gradient-to-b from-green-500 to-[#082B57]"
            />
          </div>

          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative flex gap-5 sm:gap-6"
              >
                {/* Node */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-slate-50 bg-[#082B57] text-xs font-black text-white shadow-lg sm:h-14 sm:w-14 sm:text-sm">
                  {step.number}

                  <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[9px] font-bold text-white sm:h-6 sm:w-6">
                    {step.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-green-600 sm:text-xs">
                    {step.shortTitle}
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-950 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* Internship Highlight */}
        {/* ========================= */}

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
            duration: 0.7,
          }}
          className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm sm:mt-20 sm:rounded-[2rem]"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-green-100/70 blur-3xl" />

          <div className="relative flex flex-col gap-7 p-6 sm:p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-xl font-bold text-green-600 sm:h-14 sm:w-14">
                  ✓
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 sm:text-sm sm:tracking-wider">
                    Internship
                  </p>

                  <h3 className="mt-1 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                    1 Year Practical Experience with salary
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                The program includes a mandatory one-year internship with a salary,
                giving candidates valuable exposure to a professional
                working environment and helping them build confidence
                before entering the industry.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="#register"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="w-full shrink-0 rounded-full bg-[#082B57] px-7 py-4 text-center text-sm font-bold text-white transition-colors duration-300 hover:bg-green-600 sm:text-base lg:w-auto"
            >
              Start Your Journey →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}