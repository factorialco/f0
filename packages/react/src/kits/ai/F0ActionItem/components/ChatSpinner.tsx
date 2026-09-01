import type { CSSProperties, Ref } from "react"

import { forwardRef, useEffect, useMemo, useRef } from "react"

import { cn } from "@/lib/utils"

import type { GlobeSpinState } from "./globeSpinMath"
import {
  buildFrameInto,
  createGlobeSpinState,
  PAUSE_MS,
  PRECESSION_MS,
  QUAD_POOL_SIZE,
  SPIN_MS,
  spinEase,
} from "./globeSpinMath"

export interface ChatSpinnerProps {
  size?: number
  className?: string
  style?: CSSProperties
  /**
   * "default" → spins 2 rotations, pauses, repeats.
   * "continuous" → rotates forward at a constant rate, never pausing. Used
   * for "writing"-style activity where the indicator should never rest.
   */
  variant?: "default" | "continuous"
  /**
   * When false, the spinner rests at its base orientation (the static One
   * mark). A spin already in progress completes its current cycle before
   * resting, so toggling mid-spin never jumps. Only affects "default".
   */
  playing?: boolean
}

const ChatSpinnerComponent = (
  {
    size = 20,
    className,
    style,
    variant = "default",
    playing = true,
  }: ChatSpinnerProps,
  ref: Ref<HTMLDivElement>
) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const playingRef = useRef(playing)
  const resumeRef = useRef<(() => void) | null>(null)
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
    let phase: "spin" | "pause" | "rest" =
      variant === "continuous" || playingRef.current ? "spin" : "rest"
    let visible = true
    let everTicked = false

    // The RAF rotation is by far the dominant motion, so it is the one that has
    // to stop under reduced motion. The stylesheet keeps a plain fade in.
    const motionQuery =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null
    let reduced = motionQuery?.matches ?? false

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

      // Fraction of TOTAL_ANGLE (two whole turns) to show this frame.
      let angleProgress = 0

      if (variant === "continuous") {
        // Constant forward rotation, deliberately un-eased: TOTAL_ANGLE is
        // exactly two turns, so the 1 → 0 wrap is seamless, whereas easing it
        // would drop a stall into every wrap — and this variant exists to read
        // as "never resting", against a `default` that pauses for PAUSE_MS.
        angleProgress = ((now - start) % SPIN_MS) / SPIN_MS
      } else if (phase === "spin") {
        const p = Math.min((now - start) / SPIN_MS, 1)
        // At p === 1 the mark is back at its base orientation; hand over to the
        // pause on 0 so the resting pose is the plain One mark.
        angleProgress = p < 1 ? spinEase(p) : 0
        if (p >= 1) {
          if (playingRef.current) {
            phase = "pause"
            pauseStart = now
          } else {
            phase = "rest"
          }
        }
      } else if (phase === "pause") {
        if (now - pauseStart >= PAUSE_MS) {
          if (playingRef.current) {
            phase = "spin"
            start = now
          } else {
            phase = "rest"
          }
        }
      }
      // "pause" and "rest" both leave angleProgress at 0 — the static mark.

      const axisPhase = ((now - mount) / PRECESSION_MS) % 1
      const count = buildFrameInto(state, angleProgress, size, axisPhase)
      paint(count)

      if (phase === "rest") {
        rafId = null
        return
      }

      rafId = requestAnimationFrame(tick)
    }

    const startLoop = () => {
      if (rafId !== null || reduced) return
      rafId = requestAnimationFrame(tick)
    }
    const stopLoop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }
    // Wake up from "rest" when `playing` turns true again.
    resumeRef.current = () => {
      if (phase === "rest") {
        phase = "spin"
        start = performance.now()
        // Off-screen, the observer will shift `start` forward by the elapsed
        // gap when we come back. Re-anchor the gap to now, or it gets counted
        // twice and `start` lands in the future — negative progress.
        if (pausedAt !== null) pausedAt = start
      }
      if (visible) startLoop()
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

    const onMotionPref = () => {
      reduced = motionQuery?.matches ?? false
      if (reduced) {
        stopLoop()
        paint(buildFrameInto(state, 0, size, 0))
      } else {
        startLoop()
      }
    }
    motionQuery?.addEventListener("change", onMotionPref)

    if (variant === "continuous" || playingRef.current) startLoop()

    return () => {
      stopLoop()
      resumeRef.current = null
      observer?.disconnect()
      motionQuery?.removeEventListener("change", onMotionPref)
    }
  }, [size, variant])

  useEffect(() => {
    playingRef.current = playing
    if (playing) resumeRef.current?.()
  }, [playing])

  return (
    <div
      ref={setRefs}
      role="progressbar"
      aria-label="Loading"
      className={cn("shrink-0 globe-spin-anim", className)}
      style={
        {
          width: size,
          height: size,
          // Both are consumed by styles.css. The entrance blur has to scale
          // with the mark — a flat 4px was 20% of a 20px spinner and 3% of a
          // 120px one — and the breathe has to share the spin's period, or the
          // two rhythms beat against each other. "continuous" has no pause,
          // so its period is the spin alone.
          "--globe-spin-blur": `${(size * 0.05).toFixed(2)}px`,
          "--globe-spin-cycle": `${
            variant === "continuous" ? SPIN_MS : SPIN_MS + PAUSE_MS
          }ms`,
          ...style,
        } as CSSProperties
      }
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
ChatSpinner.displayName = "ChatSpinner"
