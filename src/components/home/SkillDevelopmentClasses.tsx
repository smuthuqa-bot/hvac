"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skillDevelopmentImages = [
  {
    src: "/images/skill-development/ala.jpeg",
    alt: "TILTH Murugappa Skill Development Class 1",
  },
  {
    src: "/images/skill-development/ala2.jpeg",
    alt: "TILTH Murugappa Skill Development Class 2",
  },
  {
    src: "/images/skill-development/ala3.jpeg",
    alt: "TILTH Murugappa Skill Development Class 3",
  },
  {
    src: "/images/skill-development/img1.jpeg",
    alt: "ICICI Foundation Skill Development Class 1",
  },
  {
    src: "/images/skill-development/img2.jpeg",
    alt: "ICICI Foundation Skill Development Class 2",
  },
  {
    src: "/images/skill-development/img3.jpeg",
    alt: "ICICI Foundation Skill Development Class 3",
  },
  {
    src: "/images/skill-development/tra1.jpg",
    alt: "ICICI Foundation Skill Development Class 3",
  },
  {
    src: "/images/skill-development/tra2.jpg",
    alt: "ICICI Foundation Skill Development Class 2",
  },
];

export default function SkillDevelopmentClasses() {
  // Duplicate the images to create a seamless infinite loop.
  const scrollingImages = [
    ...skillDevelopmentImages,
    ...skillDevelopmentImages,
  ];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Skill & Development Classes
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Skill & Development Classes
          </h2>
        </motion.div>

        {/* Auto Scrolling Gallery */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

          <motion.div
            className="flex w-max gap-5 hover:[animation-play-state:paused]"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {scrollingImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="
                  group
                  relative
                  w-[280px]
                  flex-shrink-0
                  overflow-hidden
                  rounded-2xl
                  bg-gray-100
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  sm:w-[340px]
                  md:w-[380px]
                "
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 380px"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 max-w-4xl text-center"
        >
          <p className="text-lg font-medium leading-8 text-gray-700 sm:text-xl">
            ACME HVAC has conducted Skill Development Classes in association
            with ICICI Foundation and TILTH (Murugappa)
          </p>
        </motion.div>
      </div>
    </section>
  );
}