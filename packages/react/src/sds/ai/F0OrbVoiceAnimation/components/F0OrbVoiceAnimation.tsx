import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

import type {
  F0OrbVoiceAnimationColors,
  F0OrbVoiceAnimationProps,
} from "../types"

import { useOrbVoiceAnimation } from "../hooks/useOrbVoiceAnimation"
import { ReactShaderToy } from "./ReactShaderToy"
import { shaderSource } from "./shaderSource"

const DEFAULT_COLORS = {
  colorA: "#ffd1f2",
  colorB: "#b58cff",
  colorC: "#28e0ff",
  colorD: "#1861ff",
}

function hexToRgb(hexColor: string) {
  const rgbColor = hexColor.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  )

  if (rgbColor) {
    const [, r, g, b] = rgbColor
    const color = [r, g, b].map((c = "00") => parseInt(c, 16) / 255)

    return color
  }

  return [0, 0, 0]
}

interface OrbShaderProps {
  speed?: number
  intensity?: number
  complexity?: number
  scale?: number
  statePhase?: number
  colors?: F0OrbVoiceAnimationColors
}

function OrbShader({
  speed = 1.0,
  intensity = 0.42,
  complexity = 0.58,
  scale = 1,
  statePhase = 0,
  colors,
  ref,
  className,
  style,
  ...props
}: OrbShaderProps & ComponentProps<"div">) {
  const colorA = hexToRgb(colors?.colorA ?? DEFAULT_COLORS.colorA)
  const colorB = hexToRgb(colors?.colorB ?? DEFAULT_COLORS.colorB)
  const colorC = hexToRgb(colors?.colorC ?? DEFAULT_COLORS.colorC)
  const colorD = hexToRgb(colors?.colorD ?? DEFAULT_COLORS.colorD)

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `${style?.transform ? `${style.transform} ` : ""}scale(${scale})`,
        transformOrigin: "center",
      }}
      {...props}
    >
      <ReactShaderToy
        fs={shaderSource}
        devicePixelRatio={globalThis.devicePixelRatio ?? 1}
        uniforms={{
          uSpeed: { type: "1f", value: speed },
          uIntensity: { type: "1f", value: intensity },
          uComplexity: { type: "1f", value: complexity },
          uStatePhase: { type: "1f", value: statePhase },
          uColorA: { type: "3fv", value: colorA },
          uColorB: { type: "3fv", value: colorB },
          uColorC: { type: "3fv", value: colorC },
          uColorD: { type: "3fv", value: colorD },
        }}
        onError={(error) => {
          console.error("Shader error:", error)
        }}
        onWarning={(warning) => {
          console.warn("Shader warning:", warning)
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}

OrbShader.displayName = "OrbShader"

export function F0OrbVoiceAnimation({
  state = "connecting",
  audioTrack,
  colors,
  className,
  ref,
  ...props
}: F0OrbVoiceAnimationProps & ComponentProps<"div">) {
  const { speed, intensity, complexity, scale, statePhase } =
    useOrbVoiceAnimation(state, audioTrack)

  return (
    <OrbShader
      ref={ref}
      speed={speed}
      intensity={intensity}
      complexity={complexity}
      scale={scale}
      statePhase={statePhase}
      colors={colors}
      className={cn("overflow-hidden rounded-full", className)}
      {...props}
    />
  )
}
