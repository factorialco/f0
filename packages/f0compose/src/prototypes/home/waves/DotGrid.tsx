import { useEffect, useRef } from "react"

/**
 * React Bits' DotGrid, ported to plain canvas.
 *
 * The original drives its dots with GSAP's InertiaPlugin, which the
 * prototype allowlist does not carry (and adding a dependency means
 * editing package.json, which AGENTS.md forbids). The behaviour is the
 * same: a grid that tints toward `activeColor` near the pointer, and a
 * click that shoves the dots outward before they spring home. Same
 * props, same defaults.
 */

export type DotGridProps = {
  dotSize?: number
  gap?: number
  baseColor?: string
  activeColor?: string
  proximity?: number
  shockRadius?: number
  shockStrength?: number
  resistance?: number
  returnDuration?: number
  className?: string
}

type Dot = {
  x: number
  y: number
  ox: number
  oy: number
  vx: number
  vy: number
}

function parseColor(hex: string): [number, number, number] {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!match) return [0, 0, 0]
  return [
    parseInt(match[1], 16),
    parseInt(match[2], 16),
    parseInt(match[3], 16),
  ]
}

export function DotGrid({
  dotSize = 2,
  gap = 19,
  baseColor = "#d4d4d8",
  activeColor = "#7c3aed",
  proximity = 70,
  shockRadius = 250,
  shockStrength = 3,
  resistance = 1600,
  returnDuration = 1.5,
  className = "",
}: DotGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const props = useRef({
    dotSize,
    gap,
    baseColor,
    activeColor,
    proximity,
    shockRadius,
    shockStrength,
    resistance,
    returnDuration,
  })
  props.current = {
    dotSize,
    gap,
    baseColor,
    activeColor,
    proximity,
    shockRadius,
    shockStrength,
    resistance,
    returnDuration,
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const canvas = document.createElement("canvas")
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.display = "block"
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    container.appendChild(canvas)

    let dots: Dot[] = []
    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const build = () => {
      const rect = container.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const step = props.current.gap + props.current.dotSize
      const cols = Math.ceil(width / step) + 1
      const rows = Math.ceil(height / step) + 1
      // Centred, so the grid never looks cropped on one side only.
      const offsetX = (width - (cols - 1) * step) / 2
      const offsetY = (height - (rows - 1) * step) / 2
      dots = []
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = offsetX + col * step
          const y = offsetY + row * step
          dots.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 })
        }
      }
    }

    const ro = new ResizeObserver(build)
    ro.observe(container)
    build()

    const pointer = { x: -9999, y: -9999 }
    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }
    const onPointerDown = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const cx = event.clientX - rect.left
      const cy = event.clientY - rect.top
      const { shockRadius: radius, shockStrength: strength } = props.current
      for (const dot of dots) {
        const dx = dot.x - cx
        const dy = dot.y - cy
        const dist = Math.hypot(dx, dy)
        if (dist > radius || dist === 0) continue
        // Falls off with distance, like the original's inertia shove.
        const push = (1 - dist / radius) * strength * 60
        dot.vx += (dx / dist) * push
        dot.vy += (dy / dist) * push
      }
    }
    // The layer sits behind the content with pointer-events off, so it
    // listens on the window rather than on itself.
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerdown", onPointerDown)

    let raf = 0
    let visible = true
    let pageVisible = !document.hidden
    let last = performance.now()

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const p = props.current
      const base = parseColor(p.baseColor)
      const active = parseColor(p.activeColor)
      const radius = p.dotSize / 2
      // Spring home: `resistance` is the pull, `returnDuration` the time
      // it should take, so damping follows from them rather than being a
      // third dial to keep in sync.
      const stiffness = p.resistance / 100
      const damping = 2 * Math.sqrt(stiffness) * (1 / p.returnDuration)
      ctx.clearRect(0, 0, width, height)
      for (const dot of dots) {
        if (!reduced.matches) {
          const ax = (dot.ox - dot.x) * stiffness - dot.vx * damping
          const ay = (dot.oy - dot.y) * stiffness - dot.vy * damping
          dot.vx += ax * dt
          dot.vy += ay * dt
          dot.x += dot.vx * dt
          dot.y += dot.vy * dt
        }
        const dx = dot.x - pointer.x
        const dy = dot.y - pointer.y
        const dist = Math.hypot(dx, dy)
        // Eased, not linear: a straight ramp meant even the closest dot
        // sat halfway between the two colours, so the tint never read as
        // radical (Angel, 2026-09-14).
        const falloff = dist > p.proximity ? 0 : 1 - dist / p.proximity
        const t = Math.pow(falloff, 0.55)
        const r = Math.round(base[0] + (active[0] - base[0]) * t)
        const g = Math.round(base[1] + (active[1] - base[1]) * t)
        const b = Math.round(base[2] + (active[2] - base[2]) * t)
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    const play = () => {
      if (visible && pageVisible && raf === 0) {
        last = performance.now()
        raf = requestAnimationFrame(frame)
      }
    }
    const pause = () => {
      if (raf !== 0) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) play()
        else pause()
      },
      { threshold: 0 }
    )
    io.observe(container)
    const onVisibility = () => {
      pageVisible = !document.hidden
      if (pageVisible) play()
      else pause()
    }
    document.addEventListener("visibilitychange", onVisibility)
    play()

    return () => {
      pause()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerdown", onPointerDown)
      canvas.remove()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`pointer-events-none relative h-full w-full overflow-hidden ${className}`.trim()}
    />
  )
}
