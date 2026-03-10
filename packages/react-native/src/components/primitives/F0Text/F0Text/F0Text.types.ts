import type { TextProps as RNTextProps } from "react-native"

/**
 * Props that must not be passed through to the underlying RN Text.
 * `style` is blocked to enforce the semantic API; `className` is allowed
 * for layout/positioning and merged with typography classes via twMerge.
 */
export const F0_TEXT_BANNED_PROPS = ["style"] as const

/**
 * Typography variant types based on semantic design tokens
 */
export const TYPOGRAPHY_VARIANTS = [
  "heading-xl",
  "heading-lg",
  "heading-md",
  "heading-sm",
  "body-md-default",
  "body-md-medium",
  "body-md-semibold",
  "body-sm-default",
  "body-sm-medium",
  "body-sm-semibold",
  "body-xs-medium",
] as const

export type TypographyVariant = (typeof TYPOGRAPHY_VARIANTS)[number]

/**
 * Text color variants aligned with F0 semantic color system
 */
export const TEXT_COLORS = [
  "default",
  "secondary",
  "tertiary",
  "inverse",
  "inverse-secondary",
  "disabled",
  "accent",
  "critical",
  "info",
  "warning",
  "positive",
  "selected",
] as const

export type TextColor = (typeof TEXT_COLORS)[number]

/**
 * Text alignment options
 */
export const TEXT_ALIGN = ["left", "center", "right", "justify"] as const

export type TextAlign = (typeof TEXT_ALIGN)[number]

/**
 * Text decoration options
 */
export const TEXT_DECORATIONS = ["none", "underline", "line-through"] as const

export type TextDecoration = (typeof TEXT_DECORATIONS)[number]

/**
 * Text transform options
 */
export const TEXT_TRANSFORMS = [
  "none",
  "uppercase",
  "lowercase",
  "capitalize",
] as const

export type TextTransform = (typeof TEXT_TRANSFORMS)[number]

/**
 * Props for the F0Text component.
 *
 * `className` is available for layout/positioning (margin, padding, flex, etc.).
 * Typography is controlled exclusively by semantic props (variant, color, align, etc.)
 * and always takes precedence — any typography classes in `className` are overridden.
 * `style` is NOT available (omitted from RNTextProps and filtered at runtime).
 */
export interface F0TextProps extends Omit<RNTextProps, "style"> {
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

  /**
   * Tailwind classes for layout and positioning.
   *
   * Allowed: margin, padding, flex, position, width, height, opacity, z-index, etc.
   * Ignored: font-size, font-weight, line-height, letter-spacing, color, text-align,
   * text-decoration, text-transform — these are controlled by semantic props and
   * always take precedence via twMerge.
   *
   * @example
   * className="mt-4 flex-1"
   * className="mb-2 self-center"
   * className="absolute top-0 left-0"
   */
  className?: string
}
