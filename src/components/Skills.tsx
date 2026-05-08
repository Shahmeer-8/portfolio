"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    label: "Frontend",
    color: "#6c63ff",
    skills: [
      { name: "Next.js / React", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "Bootstrap / Tailwind", level: 90 },
    ],
  },
  {
    label: "Backend",
    color: "#a78bfa",
    skills: [
      { name: "PHP (Laravel)", level: 92 },
      { name: "PHP (CodeIgniter)", level: 85 },
      { name: "REST API Design", level: 88 },
      { name: "CSP & Security", level: 80 },
    ],
  },
  {
    label: "Database & Tools",
    color: "#38bdf8",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "Database Design", level: 85 },
      { name: "Performance Optimization", level: 82 },
      { name: "API Integration", level: 90 },
    ],
  },
];

const techStack = [
  { name: "Laravel", color: "#ff2d20" },
  { name: "Next.js", color: "#ffffff" },
  { name: "PHP", color: "#8892BF" },
  { name: "MySQL", color: "#00758F" },
  { name: "React", color: "#61DAFB" },
  { name: "CodeIgniter", color: "#EE4623" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Shopify", color: "#96BF48" },
  { name: "Bootstrap", color: "#7952B3" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: headingRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        ".skill-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: cardsRef.current, start: "top 75%" } }
      );
      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 70%",
        onEnter: () => {
          document.querySelectorAll(".skill-fill").forEach((bar) => {
            const target = (bar as HTMLElement).dataset.level || "0";
            gsap.fromTo(bar, { width: "0%" }, { width: `${target}%`, duration: 1.5, ease: "power2.out", delay: 0.2 });
          });
        },
        once: true,
      });
      gsap.fromTo(
        ".tech-pill",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: "back.out(1.5)", scrollTrigger: { trigger: ".tech-grid", start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(108,99,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="container-custom">
        <div ref={headingRef} className="mb-10 sm:mb-16 text-center">
          <div className="section-label mx-auto">What I Use</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text">Skills &amp; Stack</h2>
          <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }} />
        </div>

        {/* Skill cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="skill-card card card-hover p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-2 h-8 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                <h3 className="font-bold text-text text-base sm:text-lg">{cat.label}</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs sm:text-sm text-text-muted font-medium">{skill.name}</span>
                      <span className="text-xs font-mono text-text-dim">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className="skill-fill h-full rounded-full"
                        data-level={skill.level}
                        style={{ width: 0, background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech pill cloud */}
        <div>
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs font-mono text-text-dim tracking-widest uppercase">Tech Ecosystem</span>
          </div>
          <div className="tech-grid flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="tech-pill flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl card hover:border-accent/30 transition-all duration-300 cursor-default group"
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
                  style={{ background: tech.color }}
                />
                <span className="text-xs sm:text-sm font-medium text-text-muted group-hover:text-text transition-colors duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
