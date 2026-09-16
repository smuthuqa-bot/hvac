"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#061A33] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* =====================================================
              BRAND
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logos */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">

              {/* ACME Logo */}
              <div
                className="
                  flex
                  h-[58px]
                  w-[155px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-white
                  px-2
                  py-1
                  shadow-lg

                  sm:h-[65px]
                  sm:w-[190px]

                  md:h-[70px]
                  md:w-[205px]
                "
              >
                <img
                  src="/acmelogo-bg.png"
                  alt="ACME SDC"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* TN Skill Logo */}
              <div
                className="
                  flex
                  h-[52px]
                  w-[120px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-white
                  px-2
                  py-1
                  shadow-lg

                  sm:h-[58px]
                  sm:w-[135px]

                  md:h-[62px]
                  md:w-[145px]
                "
              >
                <img
                  src="/tnskill-logo.png"
                  alt="TN Skill"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Small brand title */}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400 sm:text-sm">
                ACME Skill Development Center
              </p>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Building practical HVAC skills and creating pathways
              toward better career opportunities through structured
              training and industry experience.
            </p>

            {/* CTA */}
            <a
              href="#register"
              className="
                mt-7
                inline-flex
                items-center
                rounded-full
                bg-green-600
                px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-green-600/20
                transition
                hover:-translate-y-0.5
                hover:bg-green-500
              "
            >
              Register Your Interest →
            </a>
          </motion.div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="#program"
                className="block text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                Training Program
              </a>

              <a
                href="#benefits"
                className="block text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                Benefits
              </a>

              <a
                href="#eligibility"
                className="block text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                Eligibility
              </a>

              <a
                href="#faq"
                className="block text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                FAQ
              </a>

              <a
                href="#contact"
                className="block text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                Contact
              </a>

              <a
                href="#register"
                className="block text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                Registration
              </a>
            </div>
          </div>

          {/* =====================================================
              PROGRAM
          ===================================================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Program
            </h3>

            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <p>HVAC Skill Training</p>
              <p>2 Month Skill Training</p>
              <p>Industry Certification</p>
              <p>1 Year Mandatory Internship</p>
              <p>Experience Certificate</p>
              <p>Career Opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM
      ===================================================== */}
      <div className="border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-3
            px-4
            py-5
            text-center
            text-xs
            text-slate-400

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
            sm:text-left

            lg:px-8
          "
        >
          <p>
            © {new Date().getFullYear()} ACME SDC. All rights reserved.
          </p>

          <p>
            Training & career opportunities are subject to applicable
            terms and conditions.
          </p>
        </div>
      </div>
    </footer>
  );
}