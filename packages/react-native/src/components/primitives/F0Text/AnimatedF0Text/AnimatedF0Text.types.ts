import type { TextProps as RNTextProps } from "react-native"
import type { AnimatedProps } from "react-native-reanimated"

import type {
  TextAlign,
  TextColor,
  TextDecoration,
  TextTransform,
  TypographyVariant,
} from "../F0Text/F0Text.types"

/**
 * Props for the AnimatedF0Text component.
 *
 * Combines F0Text semantic typography props with Reanimated animation
 * capabilities (`entering`, `exiting`, `layout`, animated `style`).
 */
export interface AnimatedF0TextProps extends Omit<
  AnimatedProps<RNTextProps>,
  "className"
> {
  /**
   * Semantic typography variant
   * @default "body-sm-default"
   */
  variant?: TypographyVariant

  /**
   * Text color from F0 semantic color system
   * @default "default"
   */
  color?: TextColor

  /**
   * Text alignment
   * @default "left"
   */
  align?: TextAlign

  /**
   * Text decoration
   * @default "none"
   */
  decoration?: TextDecoration

  /**
   * Text transform
   * @default "none"
   */
  transform?: TextTransform

  /**
   * Maximum number of lines before truncating with ellipsis
   */
  numberOfLines?: number

  /**
   * Children content
   */
  children?: React.ReactNode
}
