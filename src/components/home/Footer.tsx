"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#061A33] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-black tracking-[0.15em]">
              ACME
            </div>

            <div className="mt-1 text-xs font-semibold tracking-[0.35em] text-green-400">
              Skill Development Center
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Building practical HVAC skills and creating pathways
              toward better career opportunities through structured
              training and industry experience.
            </p>

            <a
              href="#register"
              className="mt-7 inline-flex rounded-full bg-green-600 px-6 py-3 text-sm font-bold transition hover:bg-green-500"
            >
              Register Your Interest →
            </a>
          </motion.div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="#program"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Training Program
              </a>

              <a
                href="#benefits"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Benefits
              </a>

              <a
                href="#eligibility"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Eligibility
              </a>

              <a
                href="#faq"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                FAQ
              </a>

              <a
                href="#register"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Registration
              </a>
            </div>
          </div>

          {/* Program */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Program
            </h3>

            <div className="mt-6 space-y-4 text-sm text-slate-400">
              <p>HVAC Skill Training</p>
              <p>Industry Certification</p>
              <p>1 Year Internship</p>
              <p>Career Opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
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