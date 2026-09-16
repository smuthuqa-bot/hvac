"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trainingImages = [
  {
    src: "/training/award3.jpeg",
    title: "Indian Industrial Icon Award 2026 by FTDF",
    description:
      "An initiative by FTDF to recognize excellence in the industrial sector.",
    featured: true,
  },
  {
    src: "/training/tra9.jpg",
    title: "Indian Industrial Icon Award 2026 by FTDF",
    description:
      "Recognizing excellence and contribution to the industry.",
  },
  {
    src: "/training/certificate.jpeg",
    title: "Award Certificate",
    description:
      "Certificate of recognition presented to ACME SDC.",
  },
  {
    src: "/training/award4.jpeg",
    title: "Award Recognition",
    description:
      "ACME SDC recognized for excellence and contribution to the HVAC industry.",
  },
  {
    src: "/training/award5.jpeg",
    title: "Industry Achievement",
    description:
      "Celebrating excellence and contribution to the HVAC industry.",
  },
];

export default function HvacTraining() {
  return (
    <section
      id="gallery"
      className="
        relative
        scroll-mt-4
        overflow-hidden
        bg-slate-50
        py-4
        sm:py-4
        lg:py-4
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div
        className="
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-green-100/60
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-100/40
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================================================
            HEADING
        ========================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-200
              bg-green-50
              px-4
              py-2
              text-sm
              font-semibold
              text-green-700
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-green-500
              "
            />

            HVAC Award Recognition
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-slate-950
              sm:text-5xl
              lg:text-6xl
            "
          >
            Celebrate Excellence.

            <span className="block text-green-600">
              Recognize Achievement.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-500
              sm:text-lg
            "
          >
            ACME SDC is proud to be recognized for its contribution to the
            HVAC industry, receiving the Indian Industrial Icon Award by FTDF.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN GALLERY
        ========================================================== */}

        <div
          className="
            mt-12
            grid
            gap-4
            lg:grid-cols-12
            lg:grid-rows-2
          "
        >
          {/* =====================================================
              FEATURED AWARD
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              group
              relative
              min-h-[380px]
              overflow-hidden
              rounded-[2rem]
              bg-slate-900
              sm:min-h-[450px]
              lg:col-span-7
              lg:row-span-2
              lg:min-h-[600px]
            "
          >
            <Image
              src={trainingImages[0].src}
              alt={trainingImages[0].title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#061A33]/90
                via-[#061A33]/20
                to-transparent
              "
            />

            {/* Badge */}

            <div
              className="
                absolute
                left-5
                top-5
                rounded-full
                border
                border-white/20
                bg-black/20
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-white
                backdrop-blur-md
              "
            >
              Featured Award
            </div>

            {/* Content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-6
                sm:p-8
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-green-500
                  text-lg
                  text-white
                  shadow-lg
                "
              >
                ✓
              </div>

              <h3
                className="
                  text-2xl
                  font-black
                  text-white
                  sm:text-3xl
                "
              >
                {trainingImages[0].title}
              </h3>

              <p
                className="
                  mt-2
                  max-w-md
                  text-sm
                  leading-6
                  text-slate-200
                "
              >
                {trainingImages[0].description}
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              AWARD PHOTO
          ====================================================== */}

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
              duration: 0.6,
            }}
            className="
              group
              relative
              min-h-[250px]
              overflow-hidden
              rounded-[1.5rem]
              bg-slate-900
              sm:min-h-[280px]
              lg:col-span-5
            "
          >
            <Image
              src={trainingImages[1].src}
              alt={trainingImages[1].title}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="
                object-cover
                transition
                duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#061A33]/90
                via-transparent
                to-transparent
                opacity-80
                transition
                duration-300
                group-hover:opacity-100
              "
            />

            {/* Content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-5
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-green-400
                "
              >
                ACME SDC
              </p>

              <h3
                className="
                  mt-1
                  text-lg
                  font-black
                  text-white
                "
              >
                {trainingImages[1].title}
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-slate-200
                "
              >
                {trainingImages[1].description}
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              EXISTING AWARD VIDEO
          ====================================================== */}

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
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              group
              relative
              min-h-[250px]
              overflow-hidden
              rounded-[1.5rem]
              bg-slate-900
              sm:min-h-[280px]
              lg:col-span-5
            "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            >
              <source
                src="/training/award.mp4"
                type="video/mp4"
              />
            </video>

            {/* Video Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#061A33]/90
                via-[#061A33]/20
                to-transparent
              "
            />

            {/* Playing Indicator */}

            <div
              className="
                absolute
                left-4
                top-4
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-black/30
                px-3
                py-2
                text-xs
                font-bold
                text-white
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-green-400
                "
              />

              Award Highlights
            </div>

            {/* Video Content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-5
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-green-400
                "
              >
                ACME SDC
              </p>

              <h3
                className="
                  mt-1
                  text-lg
                  font-black
                  text-white
                "
              >
                Indian Industrial Icon Award
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-slate-200
                "
              >
                Highlights from the award recognition.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            ADDITIONAL AWARD GALLERY
        ========================================================== */}

        <div
          className="
            mt-4
            grid
            gap-4
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {/* =====================================================
              AWARD 4
          ====================================================== */}

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
              duration: 0.6,
            }}
            className="
              group
              relative
              min-h-[280px]
              overflow-hidden
              rounded-[1.5rem]
              bg-slate-900
              sm:min-h-[340px]
            "
          >
            <Image
              src="/training/award4.jpeg"
              alt="Award Recognition"
              fill
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1024px) 50vw,
                33vw
              "
              className="
                object-cover
                transition
                duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#061A33]/90
                via-[#061A33]/20
                to-transparent
              "
            />

            {/* Badge */}

            <div
              className="
                absolute
                left-4
                top-4
                rounded-full
                border
                border-white/20
                bg-black/30
                px-3
                py-2
                text-xs
                font-bold
                text-white
                backdrop-blur-md
              "
            >
              Award Recognition
            </div>

            {/* Content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-5
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-green-400
                "
              >
                ACME SDC
              </p>

              <h3
                className="
                  mt-1
                  text-lg
                  font-black
                  text-white
                "
              >
                Award Recognition
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-slate-200
                "
              >
                Excellence and achievement in the HVAC industry.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              AWARD 5
          ====================================================== */}

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
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              group
              relative
              min-h-[280px]
              overflow-hidden
              rounded-[1.5rem]
              bg-slate-900
              sm:min-h-[340px]
            "
          >
            <Image
              src="/training/award5.jpeg"
              alt="Industry Achievement"
              fill
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1024px) 50vw,
                33vw
              "
              className="
                object-cover
                transition
                duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#061A33]/90
                via-[#061A33]/20
                to-transparent
              "
            />

            {/* Badge */}

            <div
              className="
                absolute
                left-4
                top-4
                rounded-full
                border
                border-white/20
                bg-black/30
                px-3
                py-2
                text-xs
                font-bold
                text-white
                backdrop-blur-md
              "
            >
              Achievement
            </div>

            {/* Content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-5
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-green-400
                "
              >
                ACME SDC
              </p>

              <h3
                className="
                  mt-1
                  text-lg
                  font-black
                  text-white
                "
              >
                Industry Achievement
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-slate-200
                "
              >
                Celebrating excellence and contribution to the industry.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              AWARD 6 VIDEO
          ====================================================== */}

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
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              group
              relative
              min-h-[280px]
              overflow-hidden
              rounded-[1.5rem]
              bg-slate-900
              sm:min-h-[340px]
            "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            >
              <source
                src="/training/award6.mp4"
                type="video/mp4"
              />
            </video>

            {/* Video Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#061A33]/90
                via-[#061A33]/20
                to-transparent
              "
            />

            {/* Playing Indicator */}

            <div
              className="
                absolute
                left-4
                top-4
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-black/30
                px-3
                py-2
                text-xs
                font-bold
                text-white
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-green-400
                "
              />

              Award Highlights
            </div>

            {/* Video Content */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-5
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-green-400
                "
              >
                ACME SDC
              </p>

              <h3
                className="
                  mt-1
                  text-lg
                  font-black
                  text-white
                "
              >
                Indian Industrial Icon Award
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-slate-200
                "
              >
                Highlights from our award recognition.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            CERTIFICATE
        ========================================================== */}

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
          className="
            group
            relative
            mt-4
            overflow-hidden
            rounded-[1.5rem]
            bg-white
            shadow-lg
          "
        >
          <div
            className="
              relative
              min-h-[300px]
              w-full
              sm:min-h-[400px]
            "
          >
            <Image
              src={trainingImages[2].src}
              alt={trainingImages[2].title}
              fill
              sizes="100vw"
              className="
                object-contain
                p-4
                transition
                duration-700
                group-hover:scale-[1.02]
                sm:p-8
              "
            />
          </div>

          {/* Certificate Content */}

          <div
            className="
              border-t
              border-slate-100
              px-6
              py-5
              text-center
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-green-600
              "
            >
              Recognition
            </p>

            <h3
              className="
                mt-1
                text-xl
                font-black
                text-slate-900
              "
            >
              {trainingImages[2].title}
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              {trainingImages[2].description}
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

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
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-3xl
            bg-[#082B57]
            px-6
            py-7
            text-center
            sm:px-8
            md:flex-row
            md:text-left
          "
        >
          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-green-400
              "
            >
              Start Your Journey
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-black
                text-white
              "
            >
              Ready to build your HVAC career?
            </h3>
          </div>

          <a
            href="#register"
            className="
              shrink-0
              rounded-full
              bg-green-500
              px-7
              py-4
              font-bold
              text-white
              shadow-lg
              shadow-green-500/20
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-green-400
            "
          >
            Register Now →
          </a>
        </motion.div>
      </div>
    </section>
  );
}