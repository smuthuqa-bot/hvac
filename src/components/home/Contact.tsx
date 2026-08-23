"use client";

import { motion } from "framer-motion";

const contactDetails = [
  {
    icon: "📍",
    label: "Chennai Office",
    title: "ACME HVAC PVT LTD",
    description:
      "Door No: 1/448A, Ground Floor, Karthikeyapuram 3rd Street, Madipakkam, Chennai - 600091.",
  },
  {
    icon: "☎",
    label: "Office",
    title: "+91 44 42627634",
    description: "Connect with our ACME HVAC office team.",
    href: "tel:+914442627634",
  },
  {
    icon: "📱",
    label: "Mobile",
    title: "+91 9840962832",
    description: "+91 9080000140",
    href: "tel:+919840962832",
  },
  {
    icon: "✉",
    label: "Email",
    title: "contact@acmehvac.co.in",
    description: "info@acmehvac.co.in",
    href: "mailto:contact@acmehvac.co.in",
  },
];

const branches = [
  "Bangalore — Malleshpalya",
  "Andhra Pradesh — Chinnapandur, Sricity",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#061A33] py-4 sm:py-6 lg:py-4"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Industrial grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-semibold text-green-300 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#65C943]" />
            Contact ACME HVAC
          </div>

          <h2 className="text-[clamp(2.25rem,7vw,4rem)] font-black leading-[1] tracking-tight text-white">
            Let&apos;s Build Your
            <span className="block text-[#65C943]">
              HVAC Career.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Have questions about the training program, eligibility,
            registration or career opportunities? Our team is here
            to help you.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Left - Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {contactDetails.map((item, index) => {
              const CardContent = (
                <>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-green-400/10 bg-green-400/10 text-xl">
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65C943]">
                        {item.label}
                      </p>

                      <h3 className="mt-1 break-words text-base font-black text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#65C943] transition-all duration-500 group-hover:w-20" />
                </>
              );

              return item.href ? (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition-all duration-300 hover:border-green-400/20 hover:bg-white/[0.09] hover:shadow-xl"
                >
                  {CardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition-all duration-300 hover:border-green-400/20 hover:bg-white/[0.09] hover:shadow-xl"
                >
                  {CardContent}
                </motion.div>
              );
            })}

            {/* Branches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65C943]">
                Branch Offices
              </p>

              <div className="mt-4 space-y-3">
                {branches.map((branch) => (
                  <div
                    key={branch}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-xs text-[#65C943]">
                      →
                    </span>

                    {branch}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl sm:min-h-[500px]"
          >
            {/* Map */}
            <iframe
              title="ACME HVAC Chennai Location"
              src="https://www.google.com/maps?q=ACME%20HVAC%20Madipakkam%20Chennai&output=embed"
              className="absolute inset-0 h-full w-full border-0 opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061A33]/80 via-transparent to-transparent" />

            {/* Location card */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#061A33]/90 p-4 shadow-2xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#65C943] text-lg">
                  📍
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#65C943]">
                    Chennai Office
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Karthikeyapuram 3rd Street,
                    <br />
                    Madipakkam, Chennai - 600091
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-green-400/10 bg-gradient-to-r from-[#082B57] to-[#0a315f] px-5 py-8 text-center shadow-2xl sm:px-8 sm:py-10"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
              Ready to Start?
            </p>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Take the first step toward your HVAC career.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Register your interest and our team will connect with
              you regarding the training program.
            </p>

            <motion.a
              href="#register"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-6 inline-flex rounded-full bg-[#65C943] px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-green-500/20 transition hover:bg-[#72d952]"
            >
              Register Now →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}