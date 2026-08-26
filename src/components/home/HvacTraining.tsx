"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trainingImages = [
  {
    src: "/training/award3.jpeg",
    title: "Indian Industrial Icon Award by FTDF",
    description: "An initiative by FTDF to recognize.",
    featured: true,
  },
  {
    src: "/training/tra9.jpg",
    title: "Indian Industrial Icon Award by FTDF",
    description: "An initiative by FTDF to recognize",
  },
  {
    src: "/training/tra2.jpg",
    title: "Technical Training",
    description: "Industry-focused technical sessions.",
  },
  {
    src: "/training/tra7.jpeg",
    title: "Hands-on Practice",
    description: "Practice with real equipment.",
  },
  {
    src: "/training/tra8.jpeg",
    title: "Industry Skills",
    description: "Build practical workplace skills.",
  },
];

export default function HvacTraining() {
  return (
    <section
      id="gallery"
      className="relative scroll-mt-4 overflow-hidden bg-slate-50 py-4 sm:py-4 lg:py-4"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            HVAC Training
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Learn By Doing.
            <span className="block text-green-600">
              Build Your Future.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Get practical exposure, technical knowledge and
            industry-focused HVAC training designed to prepare
            you for your career.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-slate-900 sm:min-h-[450px] lg:col-span-7 lg:row-span-2 lg:min-h-[600px]"
          >
            <Image
              src={trainingImages[0].src}
              alt={trainingImages[0].title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061A33]/90 via-[#061A33]/20 to-transparent" />

            {/* Featured badge */}
            <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              Featured Training
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 text-lg text-white shadow-lg">
                ✓
              </div>

              <h3 className="text-2xl font-black text-white sm:text-3xl">
                {trainingImages[0].title}
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                {trainingImages[0].description}
              </p>
            </div>
          </motion.div>

          {/* Smaller images */}
          {trainingImages.slice(1).map((image, index) => (
            <motion.div
              key={image.src}
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative min-h-[250px] overflow-hidden rounded-[1.5rem] bg-slate-900 sm:min-h-[280px] lg:col-span-5"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061A33]/90 via-transparent to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />

              {/* Hover icon */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                ↗
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-green-400">
                  ACME HVAC
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  {image.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-200">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#082B57] px-6 py-7 text-center sm:px-8 md:flex-row md:text-left"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
              Start Your Journey
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Ready to build your HVAC career?
            </h3>
          </div>

          <a
            href="#register"
            className="shrink-0 rounded-full bg-green-500 px-7 py-4 font-bold text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-1 hover:bg-green-400"
          >
            Register Now →
          </a>
        </motion.div>
      </div>
    </section>
  );
}