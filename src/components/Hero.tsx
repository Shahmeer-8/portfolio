"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@/components/ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

/* ── Matrix code-rain background — theme-aware ── */
function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef  = useRef(theme);

  // Keep ref in sync — clear canvas on theme switch for instant clean transition
  useEffect(() => {
    themeRef.current = theme;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const FONT = 13;
    // IT-themed character set: code symbols + katakana for Matrix feel
    const CHARS = "01アウエオカキクケコ<>{}[]();:=/*&#@!|~^+-%$".split("");

    let w = 0, h = 0, cols = 0;
    let drops: number[] = [];

    const resize = () => {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      cols = Math.floor(w / FONT);
      // Preserve existing drop positions across resize
      drops = Array.from({ length: cols }, (_, i) =>
        drops[i] !== undefined ? drops[i] : -Math.floor(Math.random() * (h / FONT))
      );
    };

    const draw = () => {
      const isDark = themeRef.current === "dark";

      // Semi-transparent fill creates the fade-trail effect
      // Color matches the page background so trails fade naturally
      ctx.fillStyle = isDark ? "rgba(6,6,9,0.042)" : "rgba(237,237,237,0.052)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${FONT}px 'Courier New',monospace`;

      for (let col = 0; col < drops.length; col++) {
        // Skip columns whose drop is still above the canvas
        if (drops[col] * FONT < 0) { drops[col]++; continue; }

        const x = col * FONT;
        const y = drops[col] * FONT;
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];

        // ~3.5% of characters become bright "head" glyphs
        const isHead = Math.random() > 0.965;

        if (isHead) {
          // Bright leading character with glow
          ctx.fillStyle    = isDark ? "rgba(220,215,255,0.95)" : "rgba(79,70,229,0.6)";
          ctx.shadowColor  = isDark ? "#a78bfa" : "#6366f1";
          ctx.shadowBlur   = isDark ? 10 : 5;
        } else {
          // Depth-faded trail: deeper = more visible
          const t = Math.min(y / h, 1);
          const a = isDark ? 0.07 + t * 0.45 : 0.03 + t * 0.12;
          ctx.fillStyle  = isDark
            ? `rgba(139,92,246,${a.toFixed(2)})`
            : `rgba(99,102,241,${a.toFixed(2)})`;
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Randomly reset column when it reaches the bottom
        if (y > h && Math.random() > 0.975) {
          drops[col] = -Math.floor(Math.random() * 20);
        } else {
          drops[col]++;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => { resize(); });
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: theme === "dark" ? 0.88 : 0.45 }}
    />
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4, defaults: { ease: "power3.out" } });

      tl.fromTo(".h-badge",  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo(".h-name",   { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.2")
        .fromTo(".h-sub",    { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6  }, "-=0.45")
        .fromTo(".h-desc",   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5  }, "-=0.35")
        .fromTo(".h-btns",   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5  }, "-=0.3")
        .fromTo(".h-stats",  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5  }, "-=0.25")
        .fromTo(".h-right",  { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.95 }, "<-=1.2");
    }, heroRef);

    // Subtle parallax on scroll
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Layered background ── */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

      {/* Animated network canvas */}
      <TechBackground />

      {/* Premium gradient orbs */}
      <div
        className="absolute top-[-80px] left-[-60px] w-[600px] h-[600px] rounded-full pointer-events-none animate-blob-1"
        style={{
          background: "radial-gradient(circle at 40% 40%, rgba(99,102,241,0.14) 0%, rgba(139,92,246,0.05) 50%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute bottom-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none animate-blob-2"
        style={{
          background: "radial-gradient(circle at 60% 60%, rgba(139,92,246,0.12) 0%, rgba(6,182,212,0.05) 50%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
          animationDelay: "4s",
        }}
      />

      {/* Vignette edge darkening */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.15) 100%)" }} />

      {/* ── Content ── */}
      <div ref={contentRef} className="container-custom relative z-10 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ════ LEFT ════ */}
          <div className="space-y-7">

            {/* Available badge */}
            <div className="h-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
              style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wider">
                Available for Work
              </span>
            </div>

            {/* Name */}
            <div className="h-name">
              <p className="text-text-muted font-medium mb-2 text-base">Hi, I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl xl:text-[4.5rem] font-black tracking-tight leading-[1.04]">
                <span className="text-gradient-white block">Shah</span>
                <span className="text-gradient block">Meer</span>
              </h1>
              <p className="text-base font-semibold text-text-muted mt-3 font-mono tracking-wide">
                Software Engineer
              </p>
            </div>

            {/* Subheading */}
            <p className="h-sub text-xl sm:text-2xl font-semibold text-text/75 leading-snug max-w-lg">
              I build{" "}
              <span className="text-gradient font-bold">secure</span>,
              high-performance web applications for{" "}
              <span className="font-bold" style={{ color: "var(--color-text)" }}>modern businesses</span>.
            </p>

            {/* Description */}
            <p className="h-desc text-text-muted text-[0.95rem] leading-relaxed max-w-lg">
              Specialized in Laravel, Next.js, and scalable backend systems —
              delivering fast, secure, and enterprise-level solutions since 2023.
            </p>

            {/* CTA Buttons */}
            <div className="h-btns flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollTo("#projects"); }}
                className="btn-primary group"
              >
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                className="btn-outline"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Hire Me
              </a>
            </div>

            {/* Stats */}
            <div className="h-stats flex items-center gap-8 pt-2">
              {[
                { value: "2+",  label: "Years Exp" },
                { value: "10+", label: "Projects" },
                { value: "3",   label: "Enterprise Clients" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-10 bg-border" />}
                  <div>
                    <div className="text-2xl font-black text-gradient leading-none">{stat.value}</div>
                    <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT — Visuals ════ */}
          <div className="h-right relative flex items-center justify-center h-[500px] lg:h-[520px]">

            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[380px] h-[380px] rounded-full animate-spin-slow"
                style={{ border: "1px solid rgba(99,102,241,0.09)" }} />
              <div className="absolute w-[300px] h-[300px] rounded-full animate-spin-slow-r"
                style={{ border: "1px solid rgba(99,102,241,0.06)" }} />
              <div className="absolute w-[220px] h-[220px] rounded-full"
                style={{ border: "1px solid rgba(99,102,241,0.1)" }} />
              {/* Glow center */}
              <div className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }} />
            </div>

            {/* Profile image */}
            <div className="relative z-10 w-[178px] h-[178px] rounded-2xl overflow-hidden animate-float-profile"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 60px rgba(99,102,241,0.22), 0 4px 32px rgba(0,0,0,0.5)",
              }}>
              <Image src="/profile.png" alt="Shah Meer" fill className="object-cover" priority />
            </div>

            {/* Floating cards */}
            <div className="absolute top-[28px] right-[16px] animate-float-1">
              <div className="card px-4 py-3 flex items-center gap-3 w-[168px]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.2)" }}>⚡</div>
                <div>
                  <p className="text-sm font-bold text-text">Laravel</p>
                  <p className="text-[11px] text-text-muted">Backend Expert</p>
                </div>
              </div>
            </div>

            <div className="absolute top-[48px] left-[8px] animate-float-2" style={{ animationDelay: "1.5s" }}>
              <div className="card px-4 py-3 flex items-center gap-3 w-[162px]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>▲</div>
                <div>
                  <p className="text-sm font-bold text-text">Next.js</p>
                  <p className="text-[11px] text-text-muted">Frontend Dev</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[58px] right-[12px] animate-float-3" style={{ animationDelay: "2s" }}>
              <div className="card px-4 py-3 flex items-center gap-3 w-[168px]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)" }}>🔐</div>
                <div>
                  <p className="text-sm font-bold text-text">CSP Security</p>
                  <p className="text-[11px] text-text-muted">Implementation</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[78px] left-[4px] animate-float-4" style={{ animationDelay: "0.8s" }}>
              <div className="card px-4 py-3 flex items-center gap-3 w-[162px]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.22)" }}>🔌</div>
                <div>
                  <p className="text-sm font-bold text-text">API</p>
                  <p className="text-[11px] text-text-muted">Integration</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 animate-float-1" style={{ animationDelay: "1s" }}>
              <div className="card px-4 py-2.5 flex items-center gap-2.5">
                <span className="text-base">🗄️</span>
                <p className="text-xs font-semibold text-text-muted">MySQL</p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 opacity-35 animate-bounce">
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Scroll</span>
            <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
