'use client'
import { useEffect, useState } from 'react'

const TITLES = ['Full Stack Developer', 'Laravel Expert', 'Next.js Engineer', 'Problem Solver']

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const currentTitle = TITLES[titleIndex]
    const speed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
      if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % TITLES.length)
        return
      }
      setDisplayText(prev =>
        isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1)
      )
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, titleIndex])

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 10,
  }))

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* DARK MODE BACKGROUND */}
      <div className="absolute inset-0 dark:block hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#08080f] via-[#0d0a1a] to-[#080f1a]" />
        <div
          className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-20 blur-[80px] sm:blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', animation: 'meshMove 8s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full opacity-15 blur-[60px] sm:blur-[80px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', animation: 'meshMove 10s ease-in-out infinite reverse' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full opacity-10 blur-[50px] sm:blur-[60px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ec4899, transparent)', animation: 'meshMove 12s ease-in-out infinite 2s' }}
        />
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-cyan-400 opacity-30 pointer-events-none"
            style={{ width: p.size, height: p.size, left: `${p.left}%`, bottom: '-10px', animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite` }}
          />
        ))}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      {/* LIGHT MODE BACKGROUND */}
      <div className="absolute inset-0 dark:hidden block">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30" />
        <div
          className="absolute top-10 sm:top-20 right-4 sm:right-20 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full opacity-30 blur-[60px] sm:blur-[80px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)', animation: 'meshMove 8s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] rounded-full opacity-20 blur-[50px] sm:blur-[60px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0ea5e9, transparent)', animation: 'meshMove 10s ease-in-out infinite reverse' }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      {/* HERO CONTENT */}
      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-medium border dark:bg-white/5 dark:border-white/10 dark:text-cyan-400 bg-indigo-50 border-indigo-200 text-indigo-600">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-current animate-pulse flex-shrink-0" />
          Available for hire
        </div>

        {/* Main name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-3 sm:mb-4 leading-tight">
          <span className="dark:text-white text-slate-900">Hi, I&apos;m </span>
          <span className="gradient-text">Shahmeer</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center mb-4 sm:mb-6">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold dark:text-slate-300 text-slate-600 cursor-blink">
            {displayText}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed dark:text-slate-400 text-slate-500 px-2 sm:px-0">
          I craft beautiful, performant web experiences with modern technologies.
          Passionate about clean code, great UX, and solving real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[44px] flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #00d4ff)' }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 dark:border-white/20 dark:text-white dark:hover:bg-white/10 border-2 border-slate-300 text-slate-700 hover:bg-slate-100 min-h-[44px] flex items-center justify-center"
          >
            Contact Me
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex flex-col items-center gap-2 dark:text-slate-500 text-slate-400 text-sm">
          <span>Scroll down</span>
          <div className="w-6 h-10 rounded-full border-2 dark:border-white/20 border-slate-300 flex items-start justify-center p-1">
            <div
              className="w-1.5 h-3 rounded-full dark:bg-cyan-400 bg-indigo-400"
              style={{ animation: 'float 1.5s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
