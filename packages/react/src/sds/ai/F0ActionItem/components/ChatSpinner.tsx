import type { CSSProperties, Ref } from "react"

import { forwardRef, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import type { Quad } from "./globeSpinMath"
import {
  buildFrame,
  easeInOutCubic,
  PAUSE_MS,
  PRECESSION_MS,
  SPIN_MS,
} from "./globeSpinMath"

type ChatSpinnerProps = {
  size?: number
  className?: string
  style?: CSSProperties
}

const ChatSpinnerComponent = (
  { size = 20, className, style }: ChatSpinnerProps,
  ref: Ref<HTMLDivElement>
) => {
  const [quads, setQuads] = useState<Quad[]>(() => buildFrame(0, size, 0))
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)
  const mountRef = useRef<number | null>(null)
  const phaseRef = useRef<"spin" | "pause">("spin")
  const pauseStartRef = useRef<number>(0)

  useEffect(() => {
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now
      if (mountRef.current === null) mountRef.current = now

      let progress = 0
      if (phaseRef.current === "spin") {
        progress = Math.min((now - startRef.current) / SPIN_MS, 1)
        if (progress >= 1) {
          progress = 0
          phaseRef.current = "pause"
          pauseStartRef.current = now
        }
      } else {
        progress = 0
        if (now - pauseStartRef.current >= PAUSE_MS) {
          phaseRef.current = "spin"
          startRef.current = now
        }
      }

      const axisPhase = ((now - mountRef.current) / PRECESSION_MS) % 1
      setQuads(buildFrame(easeInOutCubic(progress), size, axisPhase))
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [size])

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-label="Loading"
      className={cn(
        "shrink-0 globe-spin-enter globe-spin-breathe globe-spin-glow",
        className
      )}
      style={{ width: size, height: size, ...style }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        style={{ display: "block", overflow: "visible" }}
      >
        {quads.map((q, i) => (
          <polygon key={i} points={q.points} fill={q.color} stroke="none" />
        ))}
      </svg>
    </div>
  )
}

export const ChatSpinner = forwardRef<HTMLDivElement, ChatSpinnerProps>(
  ChatSpinnerComponent
)
