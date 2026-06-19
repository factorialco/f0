import { AnimatePresence, motion } from "motion/react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type {
  F0OrbVoiceAnimationColors,
  F0OrbVoiceAnimationProps,
} from "../types"

import { useOrbVoiceAnimation } from "../hooks/useOrbVoiceAnimation"
import { ReactShaderToy } from "./ReactShaderToy"
import { shaderSource } from "./shaderSource"
import "./styles.css"

const DEFAULT_COLORS: F0OrbVoiceAnimationColors = {
  colorA: "#ED8262", // peach  — gradient right
  colorB: "#E9607F", // pink   — gradient centre
  colorC: "#A1ADE5", // lavender — gradient left
  colorD: "#ffffff",
}

// ---------------------------------------------------------------------------
// Convert a CSS hex color (#rrggbb or #rgb) to a normalised [r, g, b] triple.
// ---------------------------------------------------------------------------
function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "")
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean
  const r = Number.parseInt(full.slice(0, 2), 16) / 255
  const g = Number.parseInt(full.slice(2, 4), 16) / 255
  const b = Number.parseInt(full.slice(4, 6), 16) / 255
  return [r, g, b]
}

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
  const { speed, intensity, complexity, scale, statePhase } =
    useOrbVoiceAnimation(state, audioTrack)
  const label = useOrbLabel(state)

  const resolvedColors: F0OrbVoiceAnimationColors = {
    ...DEFAULT_COLORS,
    ...colors,
  }

  // ReactShaderToy reads these from a ref every frame — passing a new object
  // each render is fine; values are picked up without remounting the canvas.
  // "3fv" → gl.uniform3fv (correct path for a vec3 with a 3-element array).
  // "1f"  → gl.uniform1f  (correct path for a float scalar).
  const uniforms = {
    uColorA: { type: "3fv", value: hexToRgb(resolvedColors.colorA) },
    uColorB: { type: "3fv", value: hexToRgb(resolvedColors.colorB) },
    uColorC: { type: "3fv", value: hexToRgb(resolvedColors.colorC) },
    uIntensity: { type: "1f", value: intensity },
    uSpeed: { type: "1f", value: speed },
    uComplexity: { type: "1f", value: complexity },
    uStatePhase: { type: "1f", value: statePhase },
  }

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center gap-3", className)}
      {...props}
    >
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          overflow: "hidden",
          transform: `scale(${scale})`,
          transformOrigin: "center",
        }}
      >
        <ReactShaderToy
          fs={shaderSource}
          uniforms={uniforms}
          clearColor={[0, 0, 0, 0]}
          contextAttributes={{ alpha: true }}
          style={{ display: "block" }}
        />
      </div>
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
