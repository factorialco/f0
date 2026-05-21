import { useRef, useEffect, useCallback, type MouseEvent, type ReactNode } from "react"

interface ClickSparkProps {
  sparkColor?: string
  sparkSize?: number
  sparkRadius?: number
  sparkCount?: number
  duration?: number
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out"
  extraScale?: number
  children: ReactNode
}

interface Spark {
  x: number
  y: number
  angle: number
  startTime: number
}

/**
 * Resolve any CSS color expression (including nested var() chains and tokens
 * like `hsl(var(--x))`) to an absolute color the canvas can paint.
 *
 * We delegate to the browser by setting `color` on a probe element and reading
 * back the computed value. The browser handles var() resolution, fallbacks,
 * and color-space conversion, returning a concrete `rgb(...)` / `rgba(...)`.
 */
function resolveCssColor(raw: string, contextElement: HTMLElement): string {
  const probe = document.createElement("span")
  probe.style.color = raw
  probe.style.display = "none"
  contextElement.appendChild(probe)
  const resolved = getComputedStyle(probe).color
  probe.remove()
  // Browser returns "" if `raw` is invalid — fall back to a sane default.
  return resolved || "#000"
}

export function ClickSpark({
  sparkColor = "var(--f0-graph-spark)",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
  children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sparksRef = useRef<Spark[]>([])
  const startTimeRef = useRef<number | null>(null)
  const resolvedColorRef = useRef<string>(sparkColor)
  const startAnimationRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const parent = canvas.parentElement
    if (!parent) return

    let resizeTimeout: ReturnType<typeof setTimeout>

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect()
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
    }

    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 100)
    }

    const ro = new ResizeObserver(handleResize)
    ro.observe(parent)

    resizeCanvas()

    return () => {
      ro.disconnect()
      clearTimeout(resizeTimeout)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    // Resolve from the .f0-graph child where --f0-graph-spark is declared.
    // The probe element appended there inherits the F0Graph CSS scope.
    const colorSource =
      canvas.parentElement?.querySelector<HTMLElement>(".f0-graph") ?? canvas
    resolvedColorRef.current = resolveCssColor(sparkColor, colorSource)
  }, [sparkColor])

  const easeFunc = useCallback(
    (t: number): number => {
      switch (easing) {
        case "linear":
          return t
        case "ease-in":
          return t * t
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        default:
          return t * (2 - t)
      }
    },
    [easing]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number | null = null

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime
        if (elapsed >= duration) {
          return false
        }

        const progress = elapsed / duration
        const eased = easeFunc(progress)

        const distance = eased * sparkRadius * extraScale
        const lineLength = sparkSize * (1 - eased)

        const x1 = spark.x + distance * Math.cos(spark.angle)
        const y1 = spark.y + distance * Math.sin(spark.angle)
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle)
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle)

        ctx.strokeStyle = resolvedColorRef.current
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        return true
      })

      // Only continue the loop if there are sparks to animate
      if (sparksRef.current.length > 0) {
        animationId = requestAnimationFrame(draw)
      } else {
        animationId = null
      }
    }

    // Expose a start function the click handler can trigger
    startAnimationRef.current = () => {
      if (animationId === null) {
        animationId = requestAnimationFrame(draw)
      }
    }

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId)
      }
      startAnimationRef.current = null
    }
  }, [sparkSize, sparkRadius, duration, easeFunc, extraScale])

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest("[data-no-spark]")) return

    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const now = performance.now()
    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }))

    sparksRef.current.push(...newSparks)
    startAnimationRef.current?.()
  }

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          userSelect: "none",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      {children}
    </div>
  )
}
