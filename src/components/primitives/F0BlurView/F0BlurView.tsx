import { BlurView as ExpoBlurView } from "expo-blur"
import React from "react"
import { Platform } from "react-native"
import { withUniwind } from "uniwind"

import { cn } from "../../../lib/utils"

import type { F0BlurViewProps } from "./F0BlurView.types"

const UniwindBlurView = withUniwind(ExpoBlurView)

/**
 * F0BlurView - Internal blur primitive for the F0 React Native system.
 *
 * Thin wrapper around `expo-blur`'s `BlurView` with className support via
 * UniWind. Use for blurred background effects inside F0 components.
 *
 * On Android, `experimentalBlurMethod` defaults to `"none"` (semi-transparent
 * overlay) to avoid graphical artifacts with elevated children. Pass
 * `experimentalBlurMethod="dimezisBlurView"` explicitly to opt in to real blur
 * on Android, only when no elevated children are inside the BlurView.
 *
 * @internal
 *
 * @example
 * // Overlay that fills parent — always use style prop for positioning
 * <F0BlurView intensity={60} tint="default" style={StyleSheet.absoluteFill} />
 */
export const F0BlurView = React.memo(function F0BlurView({
  intensity = 40,
  tint = "default",
  blurReductionFactor,
  experimentalBlurMethod = Platform.OS === "android"
    ? "dimezisBlurView"
    : "none",
  className,
  style,
  children,
  testID,
}: F0BlurViewProps) {
  return (
    <UniwindBlurView
      intensity={intensity}
      tint={tint}
      blurReductionFactor={blurReductionFactor}
      experimentalBlurMethod={experimentalBlurMethod}
      className={cn("overflow-hidden", className)}
      style={style}
      testID={testID}
    >
      {children}
    </UniwindBlurView>
  )
})

F0BlurView.displayName = "F0BlurView"
