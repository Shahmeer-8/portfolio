'use client'
import { useEffect, useRef } from 'react'

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Nodes (dots)
    const nodes: { x: number; y: number; vx: number; vy: number; label: string }[] = []
    const techLabels = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Git', 'API', 'CSS', 'SQL', 'JS', '</>',  '{ }', '#', '01', '10']

    for (let i = 0; i < 40; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        label: techLabels[i % techLabels.length],
      })
    }

    const isDark = () => document.documentElement.classList.contains('dark')

    let animId: number
    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const dark = isDark()
      const lineColor = dark ? 'rgba(0, 212, 255, ' : 'rgba(99, 102, 241, '
      const dotColor = dark ? '#00d4ff' : '#6366f1'
      const textColor = dark ? 'rgba(0, 212, 255, 0.5)' : 'rgba(99, 102, 241, 0.4)'

      // Move nodes
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.4
            ctx.beginPath()
            ctx.strokeStyle = lineColor + opacity + ')'
            ctx.lineWidth = 0.8
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes + labels
      nodes.forEach(n => {
        // Dot
        ctx.beginPath()
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = dotColor
        ctx.globalAlpha = 0.7
        ctx.fill()
        ctx.globalAlpha = 1

        // Label
        ctx.font = '10px monospace'
        ctx.fillStyle = textColor
        ctx.fillText(n.label, n.x + 6, n.y - 4)
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
