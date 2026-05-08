"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const professionalProjects = [
  {
    title: "Honda Pakistan Portal",
    description:
      "Enterprise booking portal for Honda Pakistan — vehicle catalogue, online booking, dealer locator, and full admin CMS secured with Content Security Policy headers.",
    tech: ["Laravel", "Next.js", "MySQL", "REST API", "CSP"],
    color: "#ef4444",
    live: "#",
  },
  {
    title: "MG Pakistan Website",
    description:
      "Official digital presence for MG Pakistan. Next.js frontend + Laravel API backend covering vehicle showcase, dealer network, specifications, and lead generation.",
    tech: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    color: "#38bdf8",
    live: "#",
  },
  {
    title: "Jazz Pakistan SSP",
    description:
      "Self-Service Portal for Jazz Pakistan — account management, bill viewing, plan upgrades, and support requests in one unified, responsive interface.",
    tech: ["Laravel", "PHP", "MySQL", "API Integration"],
    color: "#f59e0b",
    live: "#",
  },
];

const personalProjects = [
  {
    title: "Sogaat POS System",
    description:
      "Full-featured Point of Sale on the MERN stack — real-time sales tracking, inventory management, reporting dashboards, and multi-user access control.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    color: "#8b5cf6",
    live: "#",
  },
  {
    title: "Go VPN",
    description:
      "Secure VPN application with encrypted communication channels, user authentication, and server connection management built for network security.",
    tech: ["PHP", "Laravel", "MySQL", "Encryption"],
    color: "#10b981",
    live: "#",
  },
  {
    title: "BreknBall — Shopify Store",
    description:
      "High-performance eCommerce store with custom Liquid theme development, advanced technical SEO, and conversion-rate optimisation.",
    tech: ["Shopify", "Liquid", "SEO", "Performance"],
    color: "#84cc16",
    live: "#",
  },
  {
    title: "Pet Experts — Shopify",
    description:
      "Subscription-based pet-products store with recurring billing, personalised recommendations, and a full customer subscription management portal.",
    tech: ["Shopify", "Liquid", "Subscriptions", "API"],
    color: "#c084fc",
    live: "#",
  },
  {
    title: "Yumeaz App Integration",
    description:
      "RESTful API integration layer for a mobile app — designed for seamless, scalable communication between mobile client and Laravel backend.",
    tech: ["PHP", "Laravel", "REST API", "MySQL"],
    color: "#06b6d4",
    live: "#",
  },
  {
    title: "Russells International Institute",
    description:
      "Fully dynamic Next.js + Laravel website for an educational institute with admin panel for courses, announcements, and programs.",
    tech: ["Next.js", "Laravel", "MySQL", "Admin CMS"],
    color: "#6366f1",
    live: "#",
  },
];

const PROJECT_GRADIENTS = [
  "from-violet-600 via-purple-600 to-indigo-700",
  "from-cyan-500 via-blue-600 to-indigo-700",
  "from-emerald-500 via-teal-600 to-cyan-700",
  "from-rose-500 via-pink-600 to-purple-700",
  "from-amber-500 via-orange-600 to-red-600",
  "from-blue-500 via-cyan-600 to-teal-700",
];

function LinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GradientProjectCard({
  project,
  index,
  badgeLabel,
}: {
  project: (typeof professionalProjects)[0];
  index: number;
  badgeLabel: string;
}) {
  return (
    <div className="group glass-card overflow-hidden hover:border-purple-500/30 dark:hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 flex flex-col w-full">
      {/* Gradient banner */}
      <div
        className={`w-full h-36 sm:h-48 bg-gradient-to-br ${
          PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length]
        } relative overflow-hidden flex-shrink-0`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl sm:text-6xl opacity-20 font-black text-white">
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold text-xs sm:text-sm border border-white/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            View Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
          <div className="min-w-0">
            <span
              className="text-[10px] sm:text-[11px] font-bold font-mono uppercase tracking-wider"
              style={{ color: project.color }}
            >
              {badgeLabel}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-text mt-0.5 leading-snug">{project.title}</h3>
          </div>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg text-text-dim hover:text-accent hover:bg-accent/10 transition-all duration-300 min-h-[36px] min-w-[36px] flex items-center justify-center"
            aria-label={`Visit ${project.title}`}
          >
            <LinkIcon />
          </a>
        </div>
        <p className="text-xs sm:text-sm text-text-muted leading-relaxed flex-1 mb-3 sm:mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg font-mono font-medium"
              style={{
                background: `${project.color}12`,
                color: project.color,
                border: `1px solid ${project.color}28`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".proj-grid", start: "top 78%" },
        }
      );
      gsap.fromTo(
        ".personal-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".personal-grid", start: "top 78%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div
        className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="container-custom">
        <div className="mb-10 sm:mb-16 lg:mb-20 text-center">
          <div className="section-label mx-auto">Portfolio</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text">My Work</h2>
          <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)" }} />
        </div>

        {/* Professional Work */}
        <div className="mb-10 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0"
                style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)" }}
              >
                💼
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-text">Professional Work</h3>
                <p className="text-xs font-mono text-text-dim mt-0.5">
                  Built at <span className="text-accent font-semibold">Multilynx, Lahore</span>
                </p>
              </div>
            </div>
            <div
              className="flex-1 h-px hidden sm:block"
              style={{ background: "linear-gradient(90deg, rgba(0,212,255,0.3), transparent)" }}
            />
          </div>

          <div
            className="mb-5 sm:mb-6 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl flex items-start gap-2 sm:gap-3"
            style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.12)" }}
          >
            <span className="text-accent mt-0.5 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <p className="text-xs text-text-muted leading-relaxed">
              Enterprise client projects built during my full-time role at{" "}
              <span className="font-semibold text-text">Multilynx, Lahore</span>.
            </p>
          </div>

          <div className="proj-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {professionalProjects.map((p, index) => (
              <div key={p.title} className="proj-card">
                <GradientProjectCard project={p} index={index} badgeLabel="Enterprise" />
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0"
                style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
              >
                🚀
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-text">Personal Projects</h3>
                <p className="text-xs font-mono text-text-dim mt-0.5">Side projects, freelance &amp; open exploration</p>
              </div>
            </div>
            <div
              className="flex-1 h-px hidden sm:block"
              style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.3), transparent)" }}
            />
          </div>

          <div className="personal-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {personalProjects.map((p, index) => (
              <div key={p.title} className="personal-card">
                <GradientProjectCard project={p} index={index + 3} badgeLabel="Personal" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
