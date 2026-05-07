"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ecommerceProjects = [
  {
    platform: "Shopify",
    title: "BreknBall",
    description:
      "A high-performance eCommerce store built on Shopify with custom theme development, advanced SEO optimization, and performance tuning. Achieved significant improvements in page load speed and organic search rankings.",
    highlights: ["Custom Shopify Theme", "SEO Optimization", "Performance Tuning", "Conversion Rate Optimization"],
    color: "#96BF48",
    icon: "⚡",
    live: "#", // Replace with the actual Shopify store URL
  },
  {
    platform: "Shopify",
    title: "Pet Experts",
    description:
      "A subscription-based pet products store featuring personalized product recommendations, recurring billing integration, and a seamless customer portal for managing subscriptions.",
    highlights: ["Subscription Model", "Product Recommendations", "Customer Portal", "Recurring Billing"],
    color: "#96BF48",
    icon: "🐾",
    live: "#", // Replace with the actual Shopify store URL
  },
];

const capabilities = [
  {
    icon: "🎨",
    title: "Custom Theme Dev",
    desc: "Liquid templating, custom sections, and pixel-perfect builds from Figma designs.",
  },
  {
    icon: "🔍",
    title: "SEO & Performance",
    desc: "Core Web Vitals optimization, structured data, and technical SEO implementation.",
  },
  {
    icon: "🔌",
    title: "App Integration",
    desc: "Third-party app setup, custom API integrations, and webhook management.",
  },
  {
    icon: "📊",
    title: "Analytics & CRO",
    desc: "Conversion tracking, A/B testing setup, and data-driven UX improvements.",
  },
];

export default function Shopify() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ecom-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ecom-grid",
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        ".cap-card",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".cap-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="shopify" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(150,191,72,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom">
        {/* Heading */}
        <div className="mb-10 sm:mb-16 text-center">
          <div className="section-label mx-auto">eCommerce</div>
          <h2 className="text-4xl sm:text-5xl font-black text-text">
            Shopify &amp; WordPress
          </h2>
          <p className="text-text-muted text-sm mt-4 max-w-lg mx-auto">
            Building high-converting online stores with custom development, SEO, and performance optimization.
          </p>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        {/* Platform badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 sm:mb-12">
          {[
            { name: "Shopify", color: "#96BF48", icon: "🛍️" },
            { name: "WordPress", color: "#21759B", icon: "🌐" },
            { name: "WooCommerce", color: "#7F54B3", icon: "🛒" },
          ].map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl card"
            >
              <span>{p.icon}</span>
              <span className="text-sm font-semibold text-text-muted">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Store cards */}
        <div className="ecom-grid grid md:grid-cols-2 gap-6 mb-16">
          {ecommerceProjects.map((store) => (
            <div
              key={store.title}
              className="ecom-card card card-hover p-6 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${store.color}15`, border: `1px solid ${store.color}30` }}
                  >
                    {store.icon}
                  </div>
                  <div>
                    <span
                      className="text-xs font-mono font-bold uppercase tracking-wider"
                      style={{ color: store.color }}
                    >
                      {store.platform}
                    </span>
                    <h3 className="text-lg font-bold text-text">{store.title}</h3>
                  </div>
                </div>
                <a
                  href={store.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* Replace # with the actual store URL */
                  className="p-2 rounded-lg hover:bg-white/5 text-text-dim hover:text-text transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {store.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {store.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-2.5 py-1 rounded-lg font-medium"
                    style={{
                      background: `${store.color}12`,
                      color: store.color,
                      border: `1px solid ${store.color}25`,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div>
          <h3 className="text-center text-lg font-bold text-text mb-8">What I Can Build for You</h3>
          <div className="cap-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="cap-card card card-hover p-5 text-center group"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h4 className="font-bold text-text text-sm mb-2 group-hover:text-gradient-subtle transition-all duration-300">
                  {c.title}
                </h4>
                <p className="text-xs text-text-dim leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
