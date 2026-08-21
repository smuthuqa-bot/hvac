"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can apply for the HVAC training program?",
    answer:
      "Eligible candidates between 18 and 35 years of age can apply. The program is open to both men and women with qualifications such as 10th, ITI, Diploma, BE or Graduate.",
  },
  {
    question: "What will I learn during the training?",
    answer:
      "The program focuses on practical HVAC skills and industry-oriented technical training to help candidates prepare for professional opportunities.",
  },
  {
    question: "Is certification provided?",
    answer:
      "Candidates who successfully complete the applicable training requirements may receive certification as part of the program.",
  },
  {
    question: "Is there an internship opportunity?",
    answer:
      "Yes. The program includes a one-year practical internship designed to provide real-world workplace experience.",
  },
  {
    question: "Is there a job opportunity after training?",
    answer:
      "The program provides a pathway toward HVAC job opportunities after successful completion of the required training and internship. Job opportunities are subject to applicable terms and conditions.",
  },
  {
    question: "How can I register?",
    answer:
      "Simply fill in the registration form with your name, mobile number, email, qualification and address. Our team will contact you regarding the next steps.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-50 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            FAQ
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Questions?
            <span className="block text-green-600">
              We Have Answers.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            Everything you need to know about the HVAC training
            and career opportunity.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-green-200 bg-green-50/40 shadow-md"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-green-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <div className="border-t border-green-100 px-6 pb-6 pt-4 text-sm leading-7 text-slate-600 sm:px-7">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Small CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            Still have questions?
          </p>

          <a
            href="#register"
            className="mt-3 inline-flex items-center gap-2 font-bold text-green-600 transition hover:text-green-700"
          >
            Register your interest
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}