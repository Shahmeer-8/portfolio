"use client";

import { useEffect, useState } from "react";

function SMLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="smFoot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="36" height="36" rx="10" fill="url(#smFoot)" fillOpacity="0.12"
        stroke="url(#smFoot)" strokeOpacity="0.4" strokeWidth="1.2" />
      <path d="M15 12 C15 12 6 12 6 16 C6 20 15 20 15 24 C15 28 6 28 6 26"
        stroke="url(#smFoot)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M20 27 L20 11 L27.5 21 L35 11 L35 27"
        stroke="url(#smFoot)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navLinks = [
    ["About",        "#about"],
    ["Skills",       "#skills"],
    ["Experience",   "#experience"],
    ["Projects",     "#projects"],
    ["Achievements", "#achievements"],
    ["Contact",      "#contact"],
  ];

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--color-surface)" }}>

      {/* ── Top separator: triple-layer glow line ── */}
      <div className="relative w-full" style={{ height: 3 }}>
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.15) 20%, rgba(139,92,246,0.5) 40%, rgba(99,102,241,0.55) 60%, rgba(139,92,246,0.15) 80%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ filter: "blur(4px)",
          background: "linear-gradient(90deg, transparent 20%, rgba(99,102,241,0.4) 50%, transparent 80%)" }} />
      </div>

      {/* ── Subtle top gradient fade from prev section ── */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.04) 0%, transparent 100%)" }} />

      {/* ── Bg texture / noise ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }} />

      <div className="container-custom pt-20 pb-10 relative z-10">

        {/* ── Main 3-col grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-16"
          style={{ borderBottom: "1px solid rgba(99,102,241,0.1)" }}>

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <SMLogo />
              <div>
                <span className="font-bold text-base text-text block leading-tight">Shah Meer</span>
                <span className="text-xs text-text-dim font-mono">Software Engineer</span>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs mb-5">
              Building enterprise-grade web applications with Laravel, Next.js &amp; MySQL from Lahore, Pakistan.
            </p>
            <div className="flex items-center gap-1.5 mb-6 px-3 py-1.5 rounded-full w-fit"
              style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.22)" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium font-mono">Available for work</span>
            </div>
            {/* Social icons row */}
            <div className="flex items-center gap-2">
              <a href="https://www.linkedin.com/in/shah-meer-483b73254" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/40 transition-all duration-300"
                aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:shahmeerzaman197@gmail.com"
                className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/40 transition-all duration-300"
                aria-label="Email">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="tel:+923030692197"
                className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/40 transition-all duration-300"
                aria-label="Phone">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold text-text-dim uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="group flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-300 bg-transparent border-0 cursor-pointer text-left"
                  >
                    <span className="w-3 h-px bg-border group-hover:w-5 group-hover:bg-accent transition-all duration-300" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold text-text-dim uppercase tracking-widest mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a href="mailto:shahmeerzaman197@gmail.com"
                className="group flex items-start gap-3 p-3 rounded-xl border border-border/60 hover:border-accent/30 hover:bg-accent/[0.03] transition-all duration-300">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-[10px] text-text-dim font-mono uppercase tracking-wider mb-0.5">Email</div>
                  <span className="text-sm text-text-muted group-hover:text-accent transition-colors duration-300 break-all">
                    shahmeerzaman197@gmail.com
                  </span>
                </div>
              </a>

              <a href="tel:+923030692197"
                className="group flex items-start gap-3 p-3 rounded-xl border border-border/60 hover:border-accent/30 hover:bg-accent/[0.03] transition-all duration-300">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="text-[10px] text-text-dim font-mono uppercase tracking-wider mb-0.5">Phone</div>
                  <span className="text-sm text-text-muted group-hover:text-accent transition-colors duration-300">
                    +92 303 0692197
                  </span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/shah-meer-483b73254" target="_blank" rel="noopener noreferrer"
                className="group flex items-start gap-3 p-3 rounded-xl border border-border/60 hover:border-accent/30 hover:bg-accent/[0.03] transition-all duration-300">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <div>
                  <div className="text-[10px] text-text-dim font-mono uppercase tracking-wider mb-0.5">LinkedIn</div>
                  <span className="text-sm text-text-muted group-hover:text-accent transition-colors duration-300">
                    Shah Meer
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {currentYear} <span className="text-text font-semibold">Shah Meer</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-text-dim">
            <span>Built with</span>
            {["Next.js", "GSAP", "Tailwind"].map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span className="text-text-dim/40">+</span>}
                <span className="text-accent font-mono font-semibold text-xs">{t}</span>
              </span>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted hover:border-accent/50 hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
