import type { TextProps as RNTextProps } from "react-native";

/**
 * Typography variant types based on semantic design tokens
 */
export const TYPOGRAPHY_VARIANTS = [
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
] as const;

export type TypographyVariant = (typeof TYPOGRAPHY_VARIANTS)[number];

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
] as const;

export type TextColor = (typeof TEXT_COLORS)[number];

/**
 * Text alignment options
 */
export const TEXT_ALIGN = ["left", "center", "right", "justify"] as const;

export type TextAlign = (typeof TEXT_ALIGN)[number];

/**
 * Text decoration options
 */
export const TEXT_DECORATIONS = ["none", "underline", "line-through"] as const;

export type TextDecoration = (typeof TEXT_DECORATIONS)[number];

/**
 * Text transform options
 */
export const TEXT_TRANSFORMS = [
  "none",
  "uppercase",
  "lowercase",
  "capitalize",
] as const;

export type TextTransform = (typeof TEXT_TRANSFORMS)[number];

/**
 * Internal props for the F0Text component (includes className for internal use)
 * @private
 */
interface F0TextPropsInternal extends Omit<RNTextProps, "style"> {
  /**
   * Semantic typography variant
   * @default "body-sm-default"
   */
  variant?: TypographyVariant;

  /**
   * Text color from F0 semantic color system
   * @default "default"
   */
  color?: TextColor;

  /**
   * Text alignment
   * @default "left"
   */
  align?: TextAlign;

  /**
   * Text decoration
   * @default "none"
   */
  decoration?: TextDecoration;

  /**
   * Text transform
   * @default "none"
   */
  transform?: TextTransform;

  /**
   * Maximum number of lines before truncating with ellipsis
   */
  numberOfLines?: number;

  /**
   * Children content
   */
  children?: React.ReactNode;

  /**
   * Internal use only - not exposed in public API
   * @private
   */
  className?: string;
}

/**
 * Public props for the F0Text component
 *
 * Note: `className` and `style` props are NOT available.
 * Use semantic props (variant, color, align, etc.) for typography.
 * For spacing/layout, wrap F0Text in a View with className.
 */
export type F0TextProps = Omit<F0TextPropsInternal, "className">;
