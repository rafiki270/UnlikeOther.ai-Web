import { useCallback, useEffect, useRef } from 'react'

const cssVar = (name: string, fallback: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback

// Fading squiggle that follows the mouse.
export function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    const points: { x: number; y: number; t: number }[] = []
    const onMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY, t: performance.now() })
      if (points.length > 60) points.shift()
    }
    let raf = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const now = performance.now()
      while (points.length && now - points[0].t > 600) points.shift()
      if (points.length > 1) {
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.strokeStyle = cssVar('--c1', '#FF5C39')
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2
          const yc = (points[i].y + points[i + 1].y) / 2
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
        }
        const last = points[points.length - 1]
        ctx.lineTo(last.x, last.y)
        ctx.globalAlpha = 0.55
        ctx.stroke()
        ctx.globalAlpha = 1
      }
      raf = requestAnimationFrame(draw)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(draw)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <canvas ref={ref} className="cursor-trail" aria-hidden="true" />
}

type Particle = {
  x: number; y: number; vx: number; vy: number; rot: number; vrot: number
  size: number; color: string; life: number; shape: number
}

// Returns burst(x, y) which fires a confetti explosion at viewport coordinates.
export function useConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:99998'
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    document.body.appendChild(canvas)
    canvasRef.current = canvas
    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(rafRef.current)
      canvas.remove()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return useCallback((x: number, y: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const colors = ['--c1', '--c2', '--c3', '--c4', '--c5'].map((v) => cssVar(v, '#FF5C39'))
    const parts: Particle[] = []
    for (let i = 0; i < 80; i++) {
      const a = Math.random() * Math.PI * 2
      const s = 4 + Math.random() * 10
      parts.push({
        x, y,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s - 4,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.3,
        size: 6 + Math.random() * 10,
        color: colors[i % colors.length],
        life: 1,
        shape: i % 3,
      })
    }
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of parts) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.4
        p.vx *= 0.99
        p.rot += p.vrot
        p.life -= 0.01
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.globalAlpha = Math.max(0, p.life)
        ctx.fillStyle = p.color
        ctx.strokeStyle = '#16140F'
        ctx.lineWidth = 1.5
        if (p.shape === 0) {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66)
          ctx.strokeRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66)
        } else if (p.shape === 1) {
          ctx.beginPath()
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
        } else {
          ctx.beginPath()
          for (let k = 0; k < 8; k++) {
            const r = k % 2 ? p.size / 4 : p.size / 2
            const ang = (k / 8) * Math.PI * 2
            if (k === 0) ctx.moveTo(Math.cos(ang) * r, Math.sin(ang) * r)
            else ctx.lineTo(Math.cos(ang) * r, Math.sin(ang) * r)
          }
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
        }
        ctx.restore()
      }
      if (parts.some((p) => p.life > 0)) rafRef.current = requestAnimationFrame(tick)
      else ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(tick)
  }, [])
}

// ↑↑↓↓←→←→ B A toggles disco mode on <body>.
export function useKonami() {
  useEffect(() => {
    const seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let i = 0
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (k === seq[i]) {
        i++
        if (i === seq.length) {
          document.body.classList.toggle('disco')
          i = 0
        }
      } else {
        i = k === seq[0] ? 1 : 0
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}
