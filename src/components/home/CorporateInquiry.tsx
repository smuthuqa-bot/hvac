"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type EmploymentType = "Permanent" | "Temporary";

export default function CorporateInquiry() {
  const [formData, setFormData] = useState({
    companyName: "",
    gstin: "",
    address: "",
    employeesRequired: "",
    employmentType: "Permanent" as EmploymentType,
    temporaryDuration: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmploymentTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value as EmploymentType;

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
      /*
       * Step 1 only:
       * API integration will be completed in Step 2.
       *
       * For now, we are only preparing the form.
       */

      console.log("Corporate Inquiry:", formData);

     const response = await fetch("/api/corporate-inquiries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            companyName: formData.companyName,
            gstin: formData.gstin,
            address: formData.address,
            employeesRequired: Number(
            formData.employeesRequired
            ),
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
        `Enquiry submitted successfully. Enquiry ID: ${result.enquiryId}`
        );

      setFormData({
        companyName: "",
        gstin: "",
        address: "",
        employeesRequired: "",
        employmentType: "Permanent",
        temporaryDuration: "",
      });
    } catch (error) {
      console.error("Corporate enquiry error:", error);

      setErrorMessage(
        "Unable to submit your enquiry. Please try again."
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
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <span className="mb-3 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
            Corporate Partnership
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Corporate{" "}
            <span className="text-blue-700">Enquiry</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Looking for skilled HVAC professionals? Share your workforce
            requirement with us and our team will get in touch with you.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Information Panel */}
            <div className="relative overflow-hidden bg-slate-900 p-7 text-white sm:p-10 lg:p-12">
              {/* Decorative circles */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-900/30">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-2M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold sm:text-3xl">
                  Build Your Skilled Workforce
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Companies and organizations can share their HVAC manpower
                  requirements through this enquiry form.
                </p>

                {/* Benefits */}
                <div className="mt-8 space-y-4">
                  {[
                    "Skilled HVAC workforce requirements",
                    "Permanent & temporary manpower",
                    "Industry-focused training",
                    "Professional career pathways",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-sm text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom message */}
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-white">
                    Corporate Requirement
                  </p>

                  <p className="mt-1 text-xs leading-6 text-slate-400">
                    Submit your requirement and our team will review the
                    details and contact you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="mb-7">
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Company Requirement Details
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Please provide the required information below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Corporate / Company Name
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* GSTIN */}
                <div>
                  <label
                    htmlFor="gstin"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    GSTIN Number
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
                    placeholder="Enter GSTIN number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm uppercase text-slate-900 outline-none transition placeholder:normal-case placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Company Address
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={4}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter complete company address"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Employees + Employment Type */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Employees */}
                  <div>
                    <label
                      htmlFor="employeesRequired"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      No. of Employees Required
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
                      placeholder="e.g. 25"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  {/* Employment Type */}
                  <div>
                    <label
                      htmlFor="employmentType"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Employment Type
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <select
                      id="employmentType"
                      name="employmentType"
                      required
                      value={formData.employmentType}
                      onChange={handleEmploymentTypeChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="Permanent">Permanent</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                  </div>
                </div>

                {/* Temporary Duration */}
                {formData.employmentType === "Temporary" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                  >
                    <label
                      htmlFor="temporaryDuration"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Temporary Duration
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <input
                      id="temporaryDuration"
                      name="temporaryDuration"
                      type="text"
                      required
                      value={formData.temporaryDuration}
                      onChange={handleChange}
                      placeholder="e.g. 6 months or 2 years"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </motion.div>
                )}

                {/* Messages */}
                {successMessage && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {errorMessage}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
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

                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Corporate Enquiry

                      <svg
                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  Our team will review your requirement and contact you.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}