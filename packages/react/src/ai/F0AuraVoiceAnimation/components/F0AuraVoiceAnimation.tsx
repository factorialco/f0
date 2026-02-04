import { type ComponentProps, useMemo } from "react"

import { ReactShaderToy } from "./ReactShaderToy"
import { shaderSource } from "./shaderSource"
import { useAuraVoiceAnimation } from "../hooks/useAuraVoiceAnimation"
import type { F0AuraVoiceAnimationProps } from "../types"

function hexToRgb(hexColor: string) {
  const rgbColor = hexColor.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  )

  if (rgbColor) {
    const [, r, g, b] = rgbColor
    const color = [r, g, b].map((c = "00") => parseInt(c, 16) / 255)

    return color
  }
}

interface AuraShaderProps {
  speed?: number
  amplitude?: number
  frequency?: number
  scale?: number
  shape?: number
  blur?: number
  color?: string
  colorShift?: number
  brightness?: number
  themeMode?: "dark" | "light"
}

function AuraShader({
  shape = 1.0,
  speed = 1.0,
  amplitude = 0.5,
  frequency = 0.5,
  scale = 0.2,
  blur = 1.0,
  color = "#FF355E",
  colorShift = 1.0,
  brightness = 1.0,
  themeMode = typeof window !== "undefined" &&
  document.documentElement.classList.contains("dark")
    ? "dark"
    : "light",
  ref,
  className,
  ...props
}: AuraShaderProps & ComponentProps<"div">) {
  const rgbColor = useMemo(() => hexToRgb(color), [color])

  return (
    <div ref={ref} className={className} {...props}>
      <ReactShaderToy
        fs={shaderSource}
        devicePixelRatio={globalThis.devicePixelRatio ?? 1}
        uniforms={{
          // Aurora wave speed
          uSpeed: { type: "1f", value: speed },
          // Edge blur/softness
          uBlur: { type: "1f", value: blur },
          // Shape scale
          uScale: { type: "1f", value: scale },
          // Shape type: 1=circle, 2=line
          uShape: { type: "1f", value: shape },
          // Wave frequency and complexity
          uFrequency: { type: "1f", value: frequency },
          // Turbulence amplitude
          uAmplitude: { type: "1f", value: amplitude },
          // Light intensity (bloom)
          uBloom: { type: "1f", value: 0.0 },
          // Brightness of the aurora (0-1)
          uMix: { type: "1f", value: brightness },
          // Color variation across layers (0-1)
          uSpacing: { type: "1f", value: 0.5 },
          // Color palette offset - shifts colors along the gradient (0-1)
          uColorShift: { type: "1f", value: colorShift },
          // Color variation across layers (0-1)
          uVariance: { type: "1f", value: 0.1 },
          // Smoothing of the aurora (0-1)
          uSmoothing: { type: "1f", value: 1.0 },
          // Display mode: 0=dark background, 1=light background
          uMode: { type: "1f", value: themeMode === "light" ? 1.0 : 0.0 },
          // Color
          uColor: { type: "3fv", value: rgbColor ?? [0, 0.7, 1] },
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

AuraShader.displayName = "AuraShader"

export function F0AuraVoiceAnimation({
  className,
  state,
  color,
  colorShift = 0.05,
  audioTrack,
  themeMode,
  ref,
  ...props
}: F0AuraVoiceAnimationProps & ComponentProps<"div">) {
  const { speed, scale, amplitude, frequency, brightness } =
    useAuraVoiceAnimation(state, audioTrack)

  return (
    <AuraShader
      ref={ref}
      blur={0.2}
      color={color}
      colorShift={colorShift}
      speed={speed}
      scale={scale}
      themeMode={themeMode}
      amplitude={amplitude}
      frequency={frequency}
      brightness={brightness}
      className={className}
      {...props}
    />
  )
}
