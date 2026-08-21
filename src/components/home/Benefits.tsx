"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    icon: "₹",
    title: "Government + Company Stipend",
    description:
      "Financial support during the course duration to help you focus on learning and skill development.",
  },
  {
    number: "02",
    icon: "✦",
    title: "Government Certificate",
    description:
      "Build your professional profile with certification opportunities associated with the training program.",
  },
  {
    number: "03",
    icon: "₹",
    title: "Attractive Salary",
    description:
      "Develop practical HVAC skills and move toward exciting career opportunities with competitive earning potential.",
  },
  {
    number: "04",
    icon: "⌂",
    title: "Food & Accommodation",
    description:
      "Food and accommodation support is available for eligible candidates coming from outside the local area.",
  },
  {
    number: "05",
    icon: "◆",
    title: "Uniform Provided",
    description:
      "Get the required professional uniform for your training and workplace experience.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-100/60 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-50 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-2 text-xs font-semibold text-green-700 sm:px-4 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Why Choose ACME HVAC
          </div>

          <h2 className="text-[clamp(2.25rem,7vw,4rem)] font-black leading-[1] tracking-tight text-slate-950">
            More Than Training.
            <span className="block text-green-600">
              A Career Launchpad.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
            Get the skills, support and practical experience you need
            to take your first step toward a professional HVAC career.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="mt-12 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-2xl sm:p-6"
            >
              {/* Number */}
              <div className="pointer-events-none absolute right-4 top-3 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-green-50 sm:right-5 sm:top-5">
                {benefit.number}
              </div>

              {/* Icon */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-lg font-black text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white sm:h-14 sm:w-14 sm:text-xl">
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="relative mt-6 sm:mt-7">
                <h3 className="text-lg font-extrabold leading-tight text-slate-950 sm:text-xl">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 sm:mt-4">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-[1.75rem] bg-[#082B57] p-6 text-white sm:mt-12 sm:rounded-[2rem] sm:p-8 lg:p-10"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400 sm:text-sm sm:tracking-[0.25em]">
                Your advantage
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                Learn practical skills.
                <br />
                Build a better future.
              </h3>
            </div>

            <motion.a
              href="#register"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full shrink-0 rounded-full bg-green-500 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:bg-green-400 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
            >
              Register for Training →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}