import type { TextProps as RNTextProps } from "react-native"

/**
 * Props that must not be passed through to the underlying RN Text
 * (`style` and `className` are handled by F0 instead).
 * Used with omitProps for runtime safety.
 */
export const F0_TEXT_BANNED_PROPS = ["style", "className"] as const

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
 * Internal props for the F0Text component.
 * @private
 */
interface F0TextPropsInternal extends Omit<RNTextProps, "style"> {
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
   * Excluded from public API via Omit<F0TextPropsInternal, "className">.
   * @private
   */
  className?: string
}

/**
 * Public props for the F0Text component
 *
 * Note: `className` and `style` props are NOT available.
 * Use semantic props (variant, color, align, etc.) for typography.
 * For spacing/layout, wrap F0Text in a View with className.
 */
export type F0TextProps = Omit<F0TextPropsInternal, "className">
