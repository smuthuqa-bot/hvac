"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type EmploymentType = "Permanent" | "Temporary";

export default function CorporateInquiry() {
  const [formData, setFormData] = useState({
    companyName: "",
    gstin: "",
    mobile: "",
    email: "",
    address: "",
    employeesRequired: "",
    employmentType: "Permanent" as EmploymentType,
    temporaryDuration: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectEmploymentType = (value: EmploymentType) => {
    setFormData((prev) => ({
      ...prev,
      employmentType: value,
      temporaryDuration:
        value === "Temporary" ? prev.temporaryDuration : "",
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/corporate-inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          gstin: formData.gstin,
          mobile: formData.mobile,
          email: formData.email,
          address: formData.address,
          employeesRequired: Number(formData.employeesRequired),
          employmentType: formData.employmentType,
          temporaryDuration:
            formData.employmentType === "Temporary"
              ? formData.temporaryDuration
              : null,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit enquiry."
        );
      }

      setSuccessMessage(
        `Requirement submitted successfully. Enquiry ID: ${result.enquiryId}`
      );

      setFormData({
        companyName: "",
        gstin: "",
        mobile: "",
        email: "",
        address: "",
        employeesRequired: "",
        employmentType: "Permanent",
        temporaryDuration: "",
      });
    } catch (error) {
      console.error("Corporate enquiry error:", error);

      setErrorMessage(
        "Unable to submit your requirement. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="corporate-inquiry"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-200/30 blur-3xl"
        />

        {/* Floating dots */}
        <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-blue-400/50" />
        <div className="absolute right-[12%] top-[25%] h-3 w-3 rounded-full bg-cyan-400/40" />
        <div className="absolute bottom-[20%] left-[15%] h-2 w-2 rounded-full bg-blue-300/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            Corporate Manpower Solutions
          </motion.span>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Need Skilled{" "}
            <span className="text-blue-700">HVAC Manpower?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Get trained HVAC professionals for your company, project, or
            facility. Tell us your manpower requirement and our team will
            connect with you.
          </p>
        </motion.div>

        {/* =========================================================
            MANPOWER HIGHLIGHTS
        ========================================================= */}
        <div className="mx-auto mb-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "👷",
              title: "Skilled Workforce",
              text: "Trained HVAC professionals",
            },
            {
              icon: "📅",
              title: "Permanent",
              text: "Long-term manpower needs",
            },
            {
              icon: "⏱️",
              title: "Temporary",
              text: "Project-based requirements",
            },
            {
              icon: "🤝",
              title: "Easy Connection",
              text: "Share your requirement",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-3xl">{item.icon}</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 transition-transform group-hover:rotate-12">
                  →
                </span>
              </div>

              <h3 className="font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            MAIN CARD
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* =====================================================
                LEFT PANEL
            ===================================================== */}
            <div className="relative overflow-hidden bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
              {/* Grid pattern */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              {/* Glow */}
              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative z-10">
                {/* HVAC TECHNICIAN */}
                <div className="relative mb-8 flex h-52 items-center justify-center">
                  {/* Orbit */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-44 w-44 rounded-full border border-dashed border-blue-400/30"
                  />

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    {/* Technician head */}
                    <div className="relative mx-auto h-16 w-16 rounded-full bg-orange-200 shadow-xl">
                      {/* Helmet */}
                      <div className="absolute -top-3 left-1/2 h-7 w-20 -translate-x-1/2 rounded-t-full bg-blue-500 shadow-lg" />

                      {/* Helmet stripe */}
                      <div className="absolute -top-1 left-1/2 h-2 w-16 -translate-x-1/2 rounded-full bg-cyan-300" />

                      {/* Eyes */}
                      <div className="absolute left-4 top-7 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <div className="absolute right-4 top-7 h-1.5 w-1.5 rounded-full bg-slate-900" />

                      {/* Smile */}
                      <div className="absolute bottom-4 left-1/2 h-2 w-5 -translate-x-1/2 rounded-b-full border-b-2 border-slate-800" />
                    </div>

                    {/* Body */}
                    <div className="relative mx-auto h-24 w-24 rounded-t-[2rem] bg-blue-600 shadow-xl">
                      {/* Safety vest */}
                      <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-yellow-300/80" />

                      {/* Shirt badge */}
                      <div className="absolute right-3 top-5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[8px] font-black text-blue-700">
                        A
                      </div>

                      {/* Left arm */}
                      <motion.div
                        animate={{
                          rotate: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute -left-5 top-3 h-14 w-7 origin-top rounded-full bg-blue-500"
                      />

                      {/* Right arm */}
                      <motion.div
                        animate={{
                          rotate: [-15, 8, -15],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute -right-5 top-3 h-14 w-7 origin-top rounded-full bg-blue-500"
                      />

                      {/* Tool */}
                      <motion.div
                        animate={{
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                        className="absolute -right-11 top-9 rounded-md bg-slate-300 px-2 py-1 text-[10px] font-black text-slate-700 shadow-lg"
                      >
                        HVAC
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Floating badge */}
                  <motion.div
                    animate={{
                      y: [0, -7, 0],
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute right-2 top-5 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-bold backdrop-blur-md"
                  >
                    ✓ TRAINED
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 6, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="absolute bottom-2 left-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-bold backdrop-blur-md"
                  >
                    ⚙ HVAC READY
                  </motion.div>
                </div>

                <div className="mb-7">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                    Workforce Connection
                  </span>

                  <h3 className="mt-3 text-3xl font-black leading-tight">
                    Build Your
                    <br />
                    Skilled HVAC Team
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Whether you need HVAC manpower for a long-term position
                    or a specific project, share your requirement with us.
                  </p>
                </div>

                {/* Process */}
                <div className="space-y-4">
                  {[
                    {
                      number: "01",
                      title: "Share Requirement",
                      text: "Tell us your manpower needs.",
                    },
                    {
                      number: "02",
                      title: "Requirement Review",
                      text: "Our team reviews your request.",
                    },
                    {
                      number: "03",
                      title: "Connect With Workforce",
                      text: "We connect you with suitable trained candidates.",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="flex gap-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xs font-black">
                        {step.number}
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {step.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {step.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom highlight */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                      🤝
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Looking for HVAC manpower?
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Start your requirement below.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT FORM
            ===================================================== */}
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Corporate Requirement
                </span>

                <h3 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                  Tell Us What You Need
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Provide a few details about your workforce requirement.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* =================================================
                    COMPANY NAME
                ================================================= */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Company Name
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* =================================================
                    GSTIN
                ================================================= */}
                <div>
                  <label
                    htmlFor="gstin"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    GSTIN
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="gstin"
                    name="gstin"
                    type="text"
                    required
                    maxLength={15}
                    value={formData.gstin}
                    onChange={handleChange}
                    placeholder="Enter GSTIN"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm uppercase text-slate-900 outline-none transition-all placeholder:normal-case placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* =================================================
                    MOBILE + EMAIL
                ================================================= */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Mobile */}
                  <div>
                    <label
                      htmlFor="mobile"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Mobile Number
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      required
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                    <p className="mt-1 text-xs text-slate-400">
                      10-digit mobile number
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Email Address
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* =================================================
                    LOCATION
                ================================================= */}
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Company / Work Location
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter company or project location"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* =================================================
                    EMPLOYEES
                ================================================= */}
                <div>
                  <label
                    htmlFor="employeesRequired"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    How Many Employees Do You Need?
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="employeesRequired"
                    name="employeesRequired"
                    type="number"
                    min="1"
                    required
                    value={formData.employeesRequired}
                    onChange={handleChange}
                    placeholder="Example: 10"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* =================================================
                    EMPLOYMENT TYPE
                ================================================= */}
                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-700">
                    What Type of Manpower Do You Need?
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {/* Permanent */}
                    <motion.button
                      type="button"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        selectEmploymentType("Permanent")
                      }
                      className={`relative overflow-hidden rounded-2xl border-2 p-4 text-left transition-all ${
                        formData.employmentType === "Permanent"
                          ? "border-blue-600 bg-blue-50 shadow-lg shadow-blue-100"
                          : "border-slate-200 bg-white hover:border-blue-300"
                      }`}
                    >
                      {formData.employmentType === "Permanent" && (
                        <motion.div
                          layoutId="employment-active"
                          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white"
                        >
                          ✓
                        </motion.div>
                      )}

                      <div className="mb-3 text-3xl">
                        👷
                      </div>

                      <h4 className="font-black text-slate-900">
                        Permanent
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        For long-term or regular workforce requirements.
                      </p>
                    </motion.button>

                    {/* Temporary */}
                    <motion.button
                      type="button"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        selectEmploymentType("Temporary")
                      }
                      className={`relative overflow-hidden rounded-2xl border-2 p-4 text-left transition-all ${
                        formData.employmentType === "Temporary"
                          ? "border-cyan-600 bg-cyan-50 shadow-lg shadow-cyan-100"
                          : "border-slate-200 bg-white hover:border-cyan-300"
                      }`}
                    >
                      {formData.employmentType === "Temporary" && (
                        <motion.div
                          layoutId="employment-active"
                          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-600 text-xs text-white"
                        >
                          ✓
                        </motion.div>
                      )}

                      <div className="mb-3 text-3xl">
                        ⏱️
                      </div>

                      <h4 className="font-black text-slate-900">
                        Temporary
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        For projects or manpower required for a fixed period.
                      </p>
                    </motion.button>
                  </div>
                </div>

                {/* =================================================
                    TEMPORARY DURATION
                ================================================= */}
                {formData.employmentType === "Temporary" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <label
                      htmlFor="temporaryDuration"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      How Long Do You Need Them?
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <input
                      id="temporaryDuration"
                      name="temporaryDuration"
                      type="text"
                      required
                      value={formData.temporaryDuration}
                      onChange={handleChange}
                      placeholder="Example: 6 months"
                      className="w-full rounded-xl border border-cyan-200 bg-cyan-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                    />
                  </motion.div>
                )}

                {/* =================================================
                    SUCCESS
                ================================================= */}
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-green-200 bg-green-50 p-4"
                  >
                    <div className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                        ✓
                      </div>

                      <div>
                        <p className="text-sm font-bold text-green-800">
                          Requirement Submitted
                        </p>

                        <p className="mt-1 text-xs leading-5 text-green-700">
                          {successMessage}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                    ERROR
                ================================================= */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {/* =================================================
                    SUBMIT
                ================================================= */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-blue-700 px-5 py-4 text-sm font-black text-white shadow-xl shadow-blue-700/20 transition-all hover:bg-blue-800 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {/* Button shine */}
                  <motion.span
                    animate={{
                      x: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    className="absolute inset-y-0 w-20 skew-x-[-20deg] bg-white/20 blur-sm"
                  />

                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>

                      Submitting Requirement...
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">
                        Submit Manpower Requirement
                      </span>

                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                        className="relative z-10 text-lg"
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  Our team will review your requirement and contact you
                  regarding the next steps.
                </p>
              </form>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
              ✓
            </span>

            <span>
              Looking for trained HVAC manpower?
            </span>
          </div>

          <div className="hidden h-5 w-px bg-slate-300 sm:block" />

          <span className="text-sm font-bold text-blue-700">
            Start your requirement today.
          </span>
        </motion.div>
      </div>
    </section>
  );
}