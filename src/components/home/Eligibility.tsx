"use client";

import { motion } from "framer-motion";

const eligibility = [
  {
    icon: "18+",
    title: "Age",
    value: "18 – 35 Years",
    description:
      "Applicants within the eligible age range can apply.",
  },
  {
    icon: "♀♂",
    title: "Gender",
    value: "Men & Women",
    description:
      "The program is open to eligible male and female candidates.",
  },
  {
    icon: "10",
    title: "Education",
    value: "10th / ITI",
    description:
      "Candidates with 10th, ITI or higher qualifications can apply.",
  },
  {
    icon: "BE",
    title: "Higher Education",
    value: "Diploma / BE / Graduate",
    description:
      "Diploma holders, engineers and graduates are also welcome.",
  },
];

export default function Eligibility() {
  return (
    <section
      id="eligibility"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-green-50 blur-3xl sm:h-[500px] sm:w-[500px]" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl sm:h-[400px] sm:w-[400px]" />

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
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Eligibility
          </div>

          <h2 className="text-[clamp(2.25rem,7vw,4rem)] font-black leading-[1] tracking-tight text-slate-950">
            Your Background
            <span className="block text-green-600">
              Doesn't Stop Your Future.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
            If you're looking for a practical skill and a pathway
            into the HVAC industry, this opportunity could be for you.
          </p>
        </motion.div>

        {/* Eligibility cards */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {eligibility.map((item, index) => (
            <motion.div
              key={item.title}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -7,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-2xl sm:p-7"
            >
              {/* Number */}
              <div className="pointer-events-none absolute right-5 top-3 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-green-50 sm:right-6 sm:top-5">
                0{index + 1}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082B57] text-xs font-black text-white shadow-md transition-colors duration-300 group-hover:bg-green-600 sm:h-14 sm:w-14 sm:text-sm"
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <div className="relative mt-6 sm:mt-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-green-600 sm:text-xs sm:tracking-[0.2em]">
                  {item.title}
                </p>

                <h3 className="mt-2 text-xl font-black leading-tight text-slate-950 sm:text-2xl">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Education strip */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:mt-8 sm:p-8"
        >
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 font-black text-green-700 sm:h-12 sm:w-12">
              ✓
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-950 sm:text-base">
                Multiple educational backgrounds accepted
              </h3>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                10th&nbsp;&nbsp;•&nbsp;&nbsp;ITI&nbsp;&nbsp;•&nbsp;&nbsp;
                Diploma&nbsp;&nbsp;•&nbsp;&nbsp;BE&nbsp;&nbsp;•&nbsp;&nbsp;Graduate
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-14 overflow-hidden rounded-[2rem] bg-[#082B57] px-5 py-12 text-center text-white sm:mt-20 sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:px-12"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full border-[35px] border-green-500/10 sm:h-72 sm:w-72" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[40px] border-green-500/10 sm:h-80 sm:w-80" />

          {/* Green glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400 sm:text-sm sm:tracking-[0.3em]">
              Ready to begin?
            </p>

            <h3 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,7vw,3.5rem)] font-black leading-[1.05]">
              Your next opportunity
              <span className="text-green-400">
                {" "}
                could start today.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Submit your details and our team can connect with you
              regarding the training and career opportunity.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <motion.a
                href="#register"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="w-full rounded-full bg-green-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-green-500/20 transition hover:bg-green-400 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Register Your Interest →
              </motion.a>

              <motion.a
                href="#program"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="w-full rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold transition hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                View Program
              </motion.a>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-[11px] leading-5 text-slate-400 sm:text-xs">
              *Eligibility and job opportunities are subject to
              applicable program terms and conditions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}