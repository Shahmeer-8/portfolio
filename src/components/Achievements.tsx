"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: "🏆",
    title: "Best Performance Award",
    org: "Multilynx Lahore",
    description:
      "Recognized for exceptional performance and contribution to enterprise-level projects including Honda Pakistan, MG Pakistan, and Jazz Pakistan portals.",
    color: "#f59e0b",
    year: "2024",
  },
  {
    icon: "🔐",
    title: "CSP Security Implementation",
    org: "Multilynx Lahore",
    description:
      "Successfully implemented Content Security Policy (CSP) headers for production projects, significantly improving security posture and protecting against XSS attacks.",
    color: "#6c63ff",
    year: "2024",
  },
  {
    icon: "🥈",
    title: "2nd Position — Dev Logic Competition",
    org: "Gojra, Pakistan",
    description:
      "Secured 2nd position in a competitive programming and logic competition, demonstrating strong problem-solving and algorithmic thinking skills.",
    color: "#a78bfa",
    year: "2023",
  },
  {
    icon: "🖥️",
    title: "Winner — Computer Skills Competition",
    org: "High School Level",
    description:
      "Won the Computer Skills Competition at high school level, showcasing proficiency in computing fundamentals and software applications.",
    color: "#38bdf8",
    year: "2018",
  },
];

const stats = [
  { value: "2+", label: "Years at Multilynx", icon: "💼" },
  { value: "10+", label: "Projects Delivered", icon: "🚀" },
  { value: "3", label: "Enterprise Brands", icon: "🏢" },
  { value: "100%", label: "Client Satisfaction", icon: "⭐" },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ach-card",
        { y: 50, opacity: 0, rotateX: 10 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ach-grid",
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".stat-card",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-row",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Bg gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="section-label mx-auto">Recognition</div>
          <h2 className="text-4xl sm:text-5xl font-black text-text">Achievements</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        {/* Stats row */}
        <div className="stats-row grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card card card-hover p-5 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
              <div className="text-xs text-text-dim leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="ach-grid grid md:grid-cols-2 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.title}
              className="ach-card card card-hover p-6 group relative overflow-hidden"
            >
              {/* Decorative glow */}
              <div
                className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${ach.color}18 0%, transparent 70%)`,
                  filter: "blur(20px)",
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{
                        background: `${ach.color}15`,
                        border: `1px solid ${ach.color}30`,
                      }}
                    >
                      {ach.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-text text-sm sm:text-base leading-tight">
                        {ach.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="text-xs font-medium"
                          style={{ color: ach.color }}
                        >
                          {ach.org}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-text-dim bg-surface border border-border px-2.5 py-1 rounded-full flex-shrink-0">
                    {ach.year}
                  </span>
                </div>

                <p className="text-sm text-text-muted leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning banner */}
        <div className="mt-12">
          <div className="card p-6 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(108,99,255,0.06) 0%, rgba(56,189,248,0.04) 100%)",
              }}
            />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-4xl">📚</div>
              <div>
                <h3 className="font-bold text-text mb-1">Currently Learning</h3>
                <p className="text-sm text-text-muted">
                  Expanding my skill set with{" "}
                  <span className="text-accent font-medium">Python & Django</span> and deepening
                  knowledge in{" "}
                  <span className="text-accent font-medium">Data Structures & Algorithms</span> to
                  tackle more complex system design challenges.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap sm:ml-auto">
                {["Python", "Django", "DSA"].map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
