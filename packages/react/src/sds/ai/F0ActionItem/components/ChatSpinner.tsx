import type { CSSProperties, Ref } from "react"

import { forwardRef, useEffect, useMemo, useRef } from "react"

import { cn } from "@/lib/utils"

import type { GlobeSpinState } from "./globeSpinMath"
import {
  buildFrameInto,
  createGlobeSpinState,
  easeInOutCubic,
  PAUSE_MS,
  PRECESSION_MS,
  QUAD_POOL_SIZE,
  SPIN_MS,
} from "./globeSpinMath"

type ChatSpinnerProps = {
  size?: number
  className?: string
  style?: CSSProperties
  /**
   * "default" → spins 2 rotations, pauses, repeats.
   * "continuous" → 2 rotations forward, then 2 backward, no pause. Used for
   * "writing"-style activity where the indicator should never rest.
   */
  variant?: "default" | "continuous"
}

const ChatSpinnerComponent = (
  { size = 20, className, style, variant = "default" }: ChatSpinnerProps,
  ref: Ref<HTMLDivElement>
) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  // Pool — created lazily once per instance, reused across all frames.
  const stateRef = useRef<GlobeSpinState | null>(null)
  if (stateRef.current === null) stateRef.current = createGlobeSpinState()

  // Stable placeholder array for the JSX: one <polygon> per pool slot. We pay
  // the React mount cost ONCE; per-frame updates go straight to the DOM.
  const placeholders = useMemo(() => new Array(QUAD_POOL_SIZE).fill(0), [])

  const setRefs = (el: HTMLDivElement | null) => {
    wrapperRef.current = el
    if (!ref) return
    if (typeof ref === "function") ref(el)
    else (ref as { current: HTMLDivElement | null }).current = el
  }

  useEffect(() => {
    const svg = svgRef.current
    const wrapper = wrapperRef.current
    if (!svg || !wrapper) return

    const polys = svg.querySelectorAll(
      "polygon"
    ) as NodeListOf<SVGPolygonElement>
    const state = stateRef.current!

    let rafId: number | null = null
    let start = 0
    let mount = 0
    let pauseStart = 0
    let pausedAt: number | null = null
    let phase: "spin" | "pause" = "spin"
    let visible = true
    let everTicked = false

    const paint = (count: number) => {
      const quads = state.quads
      for (let i = 0; i < polys.length; i++) {
        const p = polys[i]
        if (i < count) {
          const q = quads[i]
          p.setAttribute("points", q.points)
          p.setAttribute("fill", q.color)
          if (p.hasAttribute("display")) p.removeAttribute("display")
        } else if (!p.hasAttribute("display")) {
          p.setAttribute("display", "none")
        }
      }
    }

    const tick = (now: number) => {
      if (!everTicked) {
        start = now
        mount = now
        everTicked = true
      }

      let progress = 0
      let applyEase = true

      if (variant === "continuous") {
        const cycleMs = SPIN_MS * 2
        const p = ((now - start) % cycleMs) / cycleMs
        progress = p < 0.5 ? p * 2 : (1 - p) * 2
        applyEase = false
      } else if (phase === "spin") {
        progress = Math.min((now - start) / SPIN_MS, 1)
        if (progress >= 1) {
          progress = 0
          phase = "pause"
          pauseStart = now
        }
      } else {
        progress = 0
        if (now - pauseStart >= PAUSE_MS) {
          phase = "spin"
          start = now
        }
      }

      const axisPhase = ((now - mount) / PRECESSION_MS) % 1
      const angleProgress = applyEase ? easeInOutCubic(progress) : progress
      const count = buildFrameInto(state, angleProgress, size, axisPhase)
      paint(count)

      rafId = requestAnimationFrame(tick)
    }

    const startLoop = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(tick)
    }
    const stopLoop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }

    // Initial paint so the spinner shows static geometry before the first
    // RAF tick fires (eliminates a flash of empty SVG on mount).
    paint(buildFrameInto(state, 0, size, 0))

    // Pause the animation while off-screen. On resume, shift the time origin
    // forward by the elapsed gap so the spinner picks up where it left off
    // instead of jumping to "current time".
    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          const isVisible = entries[0]?.isIntersecting ?? true
          if (isVisible === visible) return
          visible = isVisible
          if (isVisible) {
            if (pausedAt !== null && everTicked) {
              const gap = performance.now() - pausedAt
              start += gap
              mount += gap
              pauseStart += gap
            }
            pausedAt = null
            startLoop()
          } else {
            pausedAt = performance.now()
            stopLoop()
          }
        },
        { threshold: 0 }
      )
      observer.observe(wrapper)
    }

    startLoop()

    return () => {
      stopLoop()
      observer?.disconnect()
    }
  }, [size, variant])

  return (
    <div
      ref={setRefs}
      role="progressbar"
      aria-label="Loading"
      className={cn("shrink-0 globe-spin-enter globe-spin-breathe", className)}
      style={{ width: size, height: size, ...style }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        style={{ display: "block", overflow: "visible" }}
      >
        {placeholders.map((_, i) => (
          <polygon key={i} stroke="none" display="none" />
        ))}
      </svg>
    </div>
  )
}

export const ChatSpinner = forwardRef<HTMLDivElement, ChatSpinnerProps>(
  ChatSpinnerComponent
)
