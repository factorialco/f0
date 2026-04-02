import type { BlurTint, BlurViewProps as ExpoBlurViewProps } from "expo-blur"

export type { BlurTint }

/**
 * Props for the F0BlurView internal primitive.
 */
export interface F0BlurViewProps extends Pick<
  ExpoBlurViewProps,
  | "intensity"
  | "tint"
  | "blurReductionFactor"
  | "experimentalBlurMethod"
  | "style"
  | "children"
  | "testID"
> {
  className?: string
}
