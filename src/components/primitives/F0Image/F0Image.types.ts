import type { ImageProps as ExpoImageProps } from "expo-image"

/**
 * Public F0Image props.
 *
 * Thin primitive wrapper around `expo-image` with className support.
 */
export interface F0ImageProps extends Omit<ExpoImageProps, "source" | "style"> {
  /**
   * Image source passed to expo-image.
   */
  source: ExpoImageProps["source"]

  /**
   * Utility classes for sizing/layout.
   */
  className?: string

  /**
   * Inline style escape hatch.
   */
  style?: ExpoImageProps["style"]
}
