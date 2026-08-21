"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  qualification: string;
  address: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  mobile: "",
  qualification: "",
  address: "",
};

export default function Registration() {
  const [form, setForm] = useState<FormData>(initialForm);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

 const handleSubmit = async (
  e: FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setError("");
  setSuccess(false);

  if (!form.name.trim()) {
    setError("Please enter your name.");
    return;
  }

  if (!form.mobile.trim()) {
    setError("Please enter your mobile number.");
    return;
  }

  if (!form.email.trim()) {
    setError("Please enter your email address.");
    return;
  }

  if (!form.address.trim()) {
    setError("Please enter your address.");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(
      "http://localhost:5005/api/registrations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Registration failed."
      );
    }

    console.log("Registration success:", result);

    setSuccess(true);
    setForm(initialForm);

  } catch (err) {
    console.error(
      "Registration error:",
      err
    );

    setError(
      err instanceof Error
        ? err.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      id="register"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      {/* Background decoration */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-green-100/50 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

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
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <span className="h-2 w-2 rounded-full bg-green-500" />

            Registration
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Start Your
            <span className="block text-green-600">
              HVAC Journey.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Submit your details and our team will contact you
            regarding the skill development and career opportunity.
          </p>
        </motion.div>

        {/* Form */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              {/* Left panel */}

              <div className="relative overflow-hidden bg-[#082B57] p-8 text-white sm:p-10 lg:p-12">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[50px] border-green-500/10" />

                <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-[50px] border-green-500/10" />

                <div className="relative">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                    Take the first step
                  </p>

                  <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                    Your future in HVAC starts here.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    Tell us a little about yourself. Our team
                    will get in touch with you about the next steps.
                  </p>

                  <div className="mt-10 space-y-5">
                    {[
                      "Industry-focused skill training",
                      "Certification opportunities",
                      "Practical internship experience",
                      "Career opportunities",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-black">
                          ✓
                        </div>

                        <span className="text-sm text-slate-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right form */}

              <div className="p-8 sm:p-10 lg:p-12">
                {success ? (
                  <SuccessMessage
                    onReset={() => setSuccess(false)}
                  />
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name + Mobile */}

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Input
                        label="Full Name"
                        name="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />

                      <Input
                        label="Mobile Number"
                        name="mobile"
                        type="tel"
                        placeholder="Enter mobile number"
                        value={form.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email + Qualification */}

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />

                      <div>
                        <label
                          htmlFor="qualification"
                          className="mb-2 block text-sm font-bold text-slate-800"
                        >
                          Qualification
                        </label>

                        <select
                          id="qualification"
                          name="qualification"
                          value={form.qualification}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                        >
                          <option value="">
                            Select qualification
                          </option>

                          <option value="10th">
                            10th
                          </option>

                          <option value="ITI">
                            ITI
                          </option>

                          <option value="Diploma">
                            Diploma
                          </option>

                          <option value="BE">
                            BE
                          </option>

                          <option value="Graduate">
                            Graduate
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Address */}

                    <div>
                      <label
                        htmlFor="address"
                        className="mb-2 block text-sm font-bold text-slate-800"
                      >
                        Address
                      </label>

                      <textarea
                        id="address"
                        name="address"
                        rows={4}
                        placeholder="Enter your address"
                        value={form.address}
                        onChange={handleChange}
                        required
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>

                    {/* Error */}

                    {error && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                        {error}
                      </div>
                    )}

                    {/* Submit */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Registration

                          <span>→</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs leading-5 text-slate-400">
                      By submitting this form, you agree to be
                      contacted regarding this training opportunity.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Input component */
/* -------------------------------- */

type InputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  required,
  onChange,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-slate-800"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
      />
    </div>
  );
}

/* -------------------------------- */
/* Success */
/* -------------------------------- */

function SuccessMessage({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600"
      >
        ✓
      </motion.div>

      <h3 className="mt-6 text-3xl font-black text-slate-950">
        Registration Submitted!
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
        Thank you for your interest. Our team will contact
        you regarding the next steps.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-full bg-[#082B57] px-7 py-3 font-bold text-white transition hover:bg-green-600"
      >
        Submit Another
      </button>
    </div>
  );
}