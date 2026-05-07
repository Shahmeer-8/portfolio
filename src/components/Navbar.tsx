"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "About",        href: "#about"        },
  { label: "Skills",       href: "#skills"       },
  { label: "Experience",   href: "#experience"   },
  { label: "Projects",     href: "#projects"     },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact"      },
];

function SMLogo() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-label="Shah Meer">
      <defs>
        <linearGradient id="smG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="36" height="36" rx="10" fill="url(#smG)" fillOpacity="0.12"
        stroke="url(#smG)" strokeOpacity="0.4" strokeWidth="1.2" />
      <path d="M15 12 C15 12 6 12 6 16 C6 20 15 20 15 24 C15 28 6 28 6 26"
        stroke="url(#smG)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M20 27 L20 11 L27.5 21 L35 11 L35 27"
        stroke="url(#smG)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const navRef  = useRef<HTMLElement>(null);
  const { theme, toggle } = useTheme();
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.3 }
    );
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2.5 glass border-b border-border shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="container-custom">
          {/* Three-zone layout: Logo | Nav | Actions */}
          <div className="flex items-center justify-between gap-4">

            {/* ── LEFT: Logo + Name ── */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label="Shah Meer — home"
            >
              <SMLogo />
              <span className="font-bold text-sm text-text-muted group-hover:text-text transition-colors duration-300 hidden lg:block">
                Shah Meer
              </span>
            </a>

            {/* ── CENTER: Nav links (desktop) ── */}
            <ul className="hidden md:flex items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-2.5 lg:px-3.5 py-2 text-xs lg:text-sm font-medium transition-colors duration-300 group bg-transparent border-0 cursor-pointer rounded-lg hover:bg-white/5 whitespace-nowrap ${
                      activeSection === link.href.replace("#", "")
                        ? "text-accent"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 rounded-full ${
                      activeSection === link.href.replace("#", "") ? "w-4/5" : "w-0 group-hover:w-4/5"
                    }`} />
                  </button>
                </li>
              ))}
            </ul>

            {/* ── RIGHT: Available badge + theme + resume + hire ── */}
            <div className="flex items-center gap-2 flex-shrink-0">

              {/* Available badge — desktop only */}
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
                style={{
                  background: "rgba(16,185,129,0.07)",
                  borderColor: "rgba(16,185,129,0.22)",
                }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-[11px] font-mono font-semibold text-emerald-400 tracking-wide whitespace-nowrap">
                  Available
                </span>
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggle}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-300 border border-border"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>

              {/* Resume — desktop */}
              <a href="/cv.pdf" download
                className="hidden md:inline-flex btn-outline py-2 px-4 text-sm gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>

              {/* Hire Me — desktop */}
              <button onClick={() => scrollTo("#contact")}
                className="hidden md:inline-flex btn-primary py-2 px-4 text-sm">
                Hire Me
              </button>

              {/* Hamburger — mobile */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-2 ml-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-current text-text-muted transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current text-text-muted transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current text-text-muted transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[9999] glass transition-all duration-300 md:hidden flex flex-col items-center justify-center gap-6 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-text hover:border-accent/40 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Available badge in mobile menu */}
        {/* <div className="flex items-center gap-1.5 px-4 py-2 rounded-full border mb-2"
          style={{ background: "rgba(16,185,129,0.07)", borderColor: "rgba(16,185,129,0.22)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold text-emerald-400">Available for Work</span>
        </div> */}

        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-2xl font-bold text-text-muted hover:text-text transition-colors duration-300 bg-transparent border-0 cursor-pointer"
          >
            {link.label}
          </button>
        ))}

        <div className="flex flex-col gap-3 w-52 mt-4">
          <a href="/cv.pdf" download className="btn-outline text-center">Download Resume</a>
          <button onClick={() => scrollTo("#contact")} className="btn-primary">Hire Me</button>
        </div>
      </div>
    </>
  );
}
