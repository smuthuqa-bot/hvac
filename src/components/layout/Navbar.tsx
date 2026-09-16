"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Program", href: "#program" },
  { label: "Gallery", href: "#gallery" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#061A33]/95 shadow-2xl backdrop-blur-xl"
            : "bg-[#082B57]"
        }`}
      >
        <nav className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">

          {/* =====================================================
              LEFT - ACME LOGO
          ===================================================== */}
          <a
            href="#home"
            onClick={closeMenu}
            className="
              group
              flex
              h-[58px]
              w-[165px]
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              bg-white
              px-2
              py-1
              shadow-lg
              transition-all
              duration-300
              hover:shadow-xl

              sm:h-[62px]
              sm:w-[220px]
              sm:px-3
            "
          >
            <img
              src="/acmelogo-bg.png"
              alt="ACME SDC"
              className="h-full w-full object-contain"
            />
          </a>

          {/* =====================================================
              CENTER - DESKTOP NAVIGATION
          ===================================================== */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white lg:px-5"
              >
                {link.label}

                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#65C943] transition-all duration-300 group-hover:w-6" />
              </a>
            ))}
          </div>

          {/* =====================================================
              RIGHT - DESKTOP TN SKILL + REGISTER
          ===================================================== */}
          <div className="hidden items-center gap-3 md:flex">

            {/* TN Skill Logo */}
            <div className="flex h-[52px] w-[145px] items-center justify-center overflow-hidden rounded-xl bg-white px-2 shadow-lg">
              <img
                src="/tnskill-logo.png"
                alt="TN Skill"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Register */}
            <a
              href="#register"
              className="group inline-flex items-center gap-2 rounded-full bg-[#65C943] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#65C943]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#72D952] hover:shadow-xl hover:shadow-[#65C943]/30"
            >
              <span>Register Now</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* =====================================================
              MOBILE CONTROLS
          ===================================================== */}
          <div className="flex items-center gap-2 md:hidden">

            {/* Apply */}
            <a
              href="#register"
              onClick={closeMenu}
              className="
                rounded-full
                bg-[#65C943]
                px-3
                py-2.5
                text-xs
                font-black
                text-white
                shadow-lg
                shadow-[#65C943]/20
                whitespace-nowrap
              "
            >
              Apply
            </a>

            {/* Hamburger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/15
              "
            >
              {open ? (
                <span className="text-2xl font-light leading-none">
                  ×
                </span>
              ) : (
                <span className="flex flex-col gap-1">
                  <span className="h-0.5 w-5 rounded-full bg-white" />
                  <span className="h-0.5 w-4 rounded-full bg-white" />
                  <span className="h-0.5 w-5 rounded-full bg-white" />
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <div
          className={`absolute left-3 right-3 top-[88px] overflow-hidden rounded-2xl border border-white/10 bg-[#071c35]/98 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          <div className="p-3">

            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/5 hover:text-[#65C943]"
              >
                <span>{link.label}</span>

                <span className="text-xs text-white/25">
                  0{index + 1}
                </span>
              </a>
            ))}

            {/* Mobile Register */}
            <a
              href="#register"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#65C943] px-4 py-3.5 text-sm font-black text-white shadow-lg"
            >
              Register Now
              <span>→</span>
            </a>

          </div>
        </div>
      </header>

      {/* Navbar spacer */}
      <div className="h-[82px]" />
    </>
  );
}