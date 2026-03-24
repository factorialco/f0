import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type {
  F0OrbVoiceAnimationColors,
  F0OrbVoiceAnimationProps,
} from "../types"

import { useOrbVoiceAnimation } from "../hooks/useOrbVoiceAnimation"
import "./styles.css"

const DEFAULT_COLORS: F0OrbVoiceAnimationColors = {
  colorA: "#e55619",
  colorB: "#e51943",
  colorC: "#a1ade5",
  colorD: "#ffffff",
}

// ---------------------------------------------------------------------------
// Petal definitions — same paths as ChatSpinner
// ---------------------------------------------------------------------------
const PETALS = [
  {
    id: "bottom",
    transformOrigin: "center 89%",
    path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z",
  },
  {
    id: "right",
    transformOrigin: "88.5% center",
    path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z",
  },
  {
    id: "top",
    transformOrigin: "center 11%",
    path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z",
  },
  {
    id: "left",
    transformOrigin: "11% center",
    path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z",
  },
]

// ---------------------------------------------------------------------------
// ActionOrb — used for thinking / listening / connecting / initializing states
// ---------------------------------------------------------------------------
interface ActionOrbProps {
  colors: F0OrbVoiceAnimationColors
  pulse?: boolean
  spinDuration?: number
  gradDuration?: number
}

function ActionOrb({
  colors,
  pulse = false,
  spinDuration = 2,
  gradDuration = 3,
}: ActionOrbProps) {
  const clipId = useId()
  const { colorA, colorB, colorC } = colors

  return (
    <motion.svg
      viewBox="0 0 32 32"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        "--gradient-angle": ["0deg", "360deg"],
        rotate: "360deg",
        ...(pulse ? { opacity: [0.5, 1, 0.5] } : {}),
      }}
      transition={{
        "--gradient-angle": {
          duration: gradDuration,
          ease: "linear",
          repeat: Infinity,
        },
        rotate: {
          duration: spinDuration,
          ease: "linear",
          repeat: Infinity,
        },
        ...(pulse
          ? {
              opacity: {
                duration: 3.2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }
          : {}),
      }}
      style={
        {
          "--gradient-angle": "0deg",
        } as React.CSSProperties
      }
    >
      <defs>
        <clipPath id={`${clipId}-circle`}>
          <circle cx="16" cy="16" r="16" />
        </clipPath>
        {PETALS.map((p) => (
          <clipPath key={p.id} id={`${clipId}-${p.id}`}>
            <path d={p.path} />
          </clipPath>
        ))}
      </defs>

      <g clipPath={`url(#${clipId}-circle)`}>
        {PETALS.map((p) => (
          <motion.foreignObject
            key={p.id}
            x="0"
            y="0"
            width="32"
            height="32"
            clipPath={`url(#${clipId}-${p.id})`}
            animate={{
              "--scale": [1, 8, 1],
            }}
            transition={{
              "--scale": {
                duration: 2,
                ease: [0.85, 0, 0.15, 1],
                repeat: Infinity,
                delay: 1,
              },
            }}
            style={
              {
                "--scale": 1,
                transform: "scale(var(--scale))",
                transformOrigin: p.transformOrigin,
                willChange: "transform",
              } as React.CSSProperties
            }
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: `conic-gradient(from var(--gradient-angle) at 50% 50%, ${colorA} 0%, ${colorC} 33%, ${colorB} 66%, ${colorA} 100%)`,
              }}
            />
          </motion.foreignObject>
        ))}
      </g>
    </motion.svg>
  )
}

ActionOrb.displayName = "ActionOrb"

// ---------------------------------------------------------------------------
// SpeakingOrb — used for the speaking state, reacts to LiveKit audio scale
// ---------------------------------------------------------------------------
interface SpeakingOrbProps {
  colors: F0OrbVoiceAnimationColors
  scale: number
}

function SpeakingOrb({ colors, scale }: SpeakingOrbProps) {
  const outerRef = useRef<HTMLDivElement>(null)
  const [scaleFactor, setScaleFactor] = useState(1)
  const { colorA, colorB, colorC } = colors

  useEffect(() => {
    const el = outerRef.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 90
      setScaleFactor(width / 90)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={outerRef}
      style={{ width: "100%", aspectRatio: "1", position: "relative" }}
    >
      {/* Fixed 90px inner container, scaled to fill outer */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 90,
          height: 90,
          transform: `translate(-50%, -50%) scale(${scaleFactor * scale})`,
          transformOrigin: "center",
        }}
      >
        <div
          className="orb-speaking-ball"
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            background: `linear-gradient(270deg, ${colorC} 0%, ${colorB}b3 50%, ${colorA}b3 100%)`,
          }}
        >
          <div
            className="orb-blob orb-blob--1"
            style={{ background: `${colorA}b3` }}
          />
          <div
            className="orb-blob orb-blob--2"
            style={{ background: `${colorB}b3` }}
          />
          <div
            className="orb-blob orb-blob--3"
            style={{ background: colorC }}
          />
          <div
            className="orb-blob orb-blob--4"
            style={{ background: `${colorC}d9` }}
          />
        </div>
      </div>
    </div>
  )
}

SpeakingOrb.displayName = "SpeakingOrb"

// ---------------------------------------------------------------------------
// StaticOrb — used for idle / disconnected / failed states
// ---------------------------------------------------------------------------
interface StaticOrbProps {
  colors: F0OrbVoiceAnimationColors
}

function StaticOrb({ colors }: StaticOrbProps) {
  const gradId = useId()
  const { colorA, colorB, colorC } = colors

  return (
    <svg
      viewBox="0 0 90 90"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: "grayscale(0.6) opacity(0.5)",
        transform: "scale(0.9)",
        transformOrigin: "center",
      }}
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="90"
          y1="45"
          x2="0"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={colorC} />
          <stop offset="50%" stopColor={colorB} stopOpacity={0.7} />
          <stop offset="100%" stopColor={colorA} stopOpacity={0.7} />
        </linearGradient>
      </defs>
      <circle cx="45" cy="45" r="45" fill={`url(#${gradId})`} />
    </svg>
  )
}

StaticOrb.displayName = "StaticOrb"

// ---------------------------------------------------------------------------
// Label hook
// ---------------------------------------------------------------------------
function useOrbLabel(state: F0OrbVoiceAnimationProps["state"]) {
  const i18n = useI18n()
  const { connecting, listening, thinking, buffering, disconnected, failed } =
    i18n.ai.orbVoiceAnimation

  switch (state) {
    case "connecting":
    case "initializing":
      return connecting
    case "listening":
      return listening
    case "thinking":
      return thinking
    case "pre-connect-buffering":
      return buffering
    case "disconnected":
      return disconnected
    case "failed":
      return failed
    default:
      return null
  }
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export function F0OrbVoiceAnimation({
  state = "connecting",
  audioTrack,
  colors,
  className,
  ref,
  ...props
}: F0OrbVoiceAnimationProps & React.ComponentProps<"div">) {
  const { scale } = useOrbVoiceAnimation(state, audioTrack)
  const label = useOrbLabel(state)

  const resolvedColors: F0OrbVoiceAnimationColors = {
    ...DEFAULT_COLORS,
    ...colors,
  }

  function renderOrb() {
    switch (state) {
      case "thinking":
        return (
          <ActionOrb
            colors={resolvedColors}
            spinDuration={2}
            gradDuration={3}
          />
        )
      case "listening":
      case "pre-connect-buffering":
        return (
          <ActionOrb
            colors={resolvedColors}
            spinDuration={2.5}
            gradDuration={4}
          />
        )
      case "connecting":
      case "initializing":
        return (
          <ActionOrb
            colors={resolvedColors}
            pulse
            spinDuration={3}
            gradDuration={3}
          />
        )
      case "speaking":
        return <SpeakingOrb colors={resolvedColors} scale={scale} />
      default:
        // idle, disconnected, failed
        return <StaticOrb colors={resolvedColors} />
    }
  }

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center gap-3", className)}
      {...props}
    >
      <div style={{ width: "100%", aspectRatio: "1" }}>{renderOrb()}</div>
      <AnimatePresence>
        {label !== null && (
          <motion.span
            key={label}
            className="shine-text text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
