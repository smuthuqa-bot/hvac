"use client";

import { useState } from "react";

const links = [
  { label: "Program", href: "#program" },
  { label: "Gallery", href: "#gallery" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="group flex flex-col"
        >
          <span className="text-xl font-black tracking-[0.15em] sm:text-2xl">
            ACME
          </span>

          <span className="text-[10px] tracking-[0.35em] text-[#65C943] sm:text-xs">
            SDC
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-[#65C943]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#register"
          className="hidden rounded-full bg-[#65C943] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#65C943]/20 transition hover:scale-105 md:inline-flex"
        >
          Register Now
        </a>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#register"
            onClick={closeMenu}
            className="rounded-full bg-[#65C943] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#65C943]/20"
          >
            Apply
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md"
          >
            {open ? (
              <span className="text-xl leading-none">×</span>
            ) : (
              <span className="flex flex-col gap-1">
                <span className="h-0.5 w-5 bg-white" />
                <span className="h-0.5 w-5 bg-white" />
                <span className="h-0.5 w-5 bg-white" />
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute left-3 right-3 top-[76px] z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#081d36]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="p-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/5 hover:text-[#65C943]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#register"
            onClick={closeMenu}
            className="mt-2 block rounded-xl bg-[#65C943] px-4 py-3.5 text-center text-sm font-bold text-white"
          >
            Register Now →
          </a>
        </div>
      </div>
    </>
  );
}