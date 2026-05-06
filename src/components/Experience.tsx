"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Engineer",
    company: "Multilynx",
    location: "Lahore, Pakistan",
    period: "Dec 2023 – Present",
    type: "Full-time",
    color: "#6c63ff",
    highlights: [
      "Developed enterprise-level applications using Laravel & Next.js",
      "Led development of Honda Pakistan Website & Booking Portal",
      "Built MG Pakistan Website using Next.js + Laravel stack",
      "Developed Jazz Pakistan SSP (Self Service Portal)",
      "Database design & optimization with MySQL",
      "Implemented CSP security for production projects",
      "Code reviews, debugging, and performance optimization",
    ],
    projects: ["Honda Pakistan", "MG Pakistan", "Jazz Pakistan SSP"],
  },
  {
    role: "Web Developer Intern",
    company: "NY Digital",
    location: "Remote",
    period: "Mar 2023 – Dec 2023",
    type: "Internship",
    color: "#a78bfa",
    highlights: [
      "Built web applications using PHP, JavaScript, HTML & CSS",
      "Debugging and database operations",
      "Worked in real-world agile development environment",
      "Hands-on experience with client-facing projects",
    ],
    projects: [],
  },
  {
    role: "Senior Lecturer",
    company: "Russells International Institute",
    location: "Remote",
    period: "2022 – 2023",
    type: "Teaching",
    color: "#38bdf8",
    highlights: [
      "Taught Computer Science subjects to university-level students",
      "Delivered engaging online lectures and coursework",
      "Mentored students in programming and web development",
    ],
    projects: [],
  },
  {
    role: "Computer Teacher",
    company: "Knowledge House & Johar Public School",
    location: "Faisalabad",
    period: "2020 – 2022",
    type: "Teaching",
    color: "#34d399",
    highlights: [
      "Taught computer science and programming fundamentals",
      "Prepared students for national IT competitions",
      "Winner of Computer Skills Competition during high school years",
    ],
    projects: [],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-item",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-list",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Decorative orb */}
      <div
        className="absolute -left-40 top-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-custom">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="section-label mx-auto">My Journey</div>
          <h2 className="text-4xl sm:text-5xl font-black text-text">Experience</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="exp-list relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-accent/40 via-accent-2/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-item relative sm:pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 w-12 h-12 rounded-xl hidden sm:flex items-center justify-center text-lg shadow-glow-sm"
                  style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}40` }}
                >
                  {exp.type === "Full-time" ? "💼" : exp.type === "Internship" ? "🚀" : "🎓"}
                </div>

                {/* Card */}
                <div className="card card-hover p-6 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-text group-hover:text-gradient-subtle transition-all duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-accent font-semibold text-sm">{exp.company}</span>
                        <span className="text-text-dim text-xs">·</span>
                        <span className="text-text-dim text-xs">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xs font-mono text-text-dim bg-surface border border-border px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{
                          background: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}30`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Projects at company */}
                  {exp.projects.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.projects.map((proj) => (
                        <span
                          key={proj}
                          className="text-xs px-2.5 py-1 rounded-lg bg-accent/10 text-accent border border-accent/20 font-medium"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-text-muted">
                        <div
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ background: exp.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education card */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="card card-hover p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)" }}>
                  🎓
                </div>
                <div>
                  <h3 className="font-bold text-text text-lg">BS Computer Science</h3>
                  <p className="text-accent font-semibold text-sm">
                    Government College University Faisalabad
                  </p>
                  <p className="text-text-dim text-xs mt-0.5">2018 – 2022</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="text-2xl font-black text-gradient">3.34</div>
                <div className="text-xs text-text-dim font-mono">/ 4.00 CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
