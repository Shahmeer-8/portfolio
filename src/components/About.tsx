"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        contentRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        badgesRef.current?.children ?? [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: badgesRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    { icon: "🏆", text: "Best Performance Award — Multilynx" },
    { icon: "🔐", text: "CSP Security Implementation" },
    { icon: "🎓", text: "BS CS — GCUF, CGPA 3.34/4.00" },
    { icon: "🥈", text: "2nd Position — Dev Logic Competition" },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Faint bg orb */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-custom">
        {/* Section heading */}
        <div className="mb-10 sm:mb-16 text-center">
          <div className="section-label mx-auto">Who I Am</div>
          <h2 className="text-4xl sm:text-5xl font-black text-text">About Me</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image column */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-5 rounded-3xl pointer-events-none"
                style={{ border: "1px solid rgba(99,102,241,0.1)" }} />
              <div className="absolute -inset-10 rounded-3xl pointer-events-none"
                style={{ border: "1px solid rgba(99,102,241,0.05)" }} />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden card">
                <Image
                  src="/profile.png"
                  alt="Shah Meer"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-accent/35 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-accent/35 rounded-br-2xl" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 card px-4 py-3 shadow-card">
                <div className="text-xs text-text-dim font-mono">Currently at</div>
                <div className="text-sm font-bold text-text mt-0.5">Multilynx, Lahore</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">Full-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div ref={contentRef} className="space-y-6">
            <div>
              <h3 className="text-3xl font-black text-text mb-4 leading-tight">
                Building the web, one{" "}
                <span className="text-gradient">scalable system</span>{" "}at a time.
              </h3>
              <p className="text-text-muted leading-relaxed text-sm sm:text-[0.95rem]">
                I&apos;m a Software Engineer based in Lahore, Pakistan, delivering enterprise-grade
                applications at <span className="text-text font-semibold">Multilynx</span>. I specialize
                in PHP (Laravel, CodeIgniter), Next.js, and MySQL — building booking portals and
                self-service platforms for brands like
                <span className="text-accent font-semibold"> Honda Pakistan</span>,{" "}
                <span className="text-accent font-semibold">MG Pakistan</span>, and{" "}
                <span className="text-accent font-semibold">Jazz Pakistan</span>.
              </p>
            </div>

            <p className="text-text-muted leading-relaxed text-sm sm:text-[0.95rem]">
              Beyond code, I&apos;ve competed in national programming competitions and am currently
              deepening my expertise in{" "}
              <span className="text-text font-semibold">Python, Django, and Algorithms</span>.
            </p>

            {/* Highlight badges */}
            <div ref={badgesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((h) => (
                <div
                  key={h.text}
                  className="flex items-center gap-3 p-3 rounded-xl card card-hover group"
                >
                  <span className="text-xl">{h.icon}</span>
                  <span className="text-xs text-text-muted group-hover:text-text transition-colors duration-300 leading-snug">
                    {h.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Info row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { label: "Location",  value: "Lahore, Pakistan" },
                { label: "Education", value: "BS CS — GCUF" },
                { label: "Email",     value: "shahmeerzaman197@gmail.com" },
              ].map((info) => (
                <div key={info.label}>
                  <div className="text-xs text-text-dim font-mono uppercase tracking-wider">{info.label}</div>
                  <div className="text-sm text-text font-medium mt-1">{info.value}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a href="/cv.pdf" download className="btn-outline">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
