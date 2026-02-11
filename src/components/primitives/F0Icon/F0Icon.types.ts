import type { ForwardRefExoticComponent, RefAttributes } from "react"
import type { SvgProps } from "react-native-svg"
import type { Svg } from "react-native-svg"
import type { VariantProps } from "tailwind-variants"

import type { iconVariants } from "./F0Icon.styles"

/**
 * Icon component type - forward ref to SVG component with className support
 */
export type IconType = ForwardRefExoticComponent<
  SvgProps &
    RefAttributes<Svg> & {
      className?: string
    }
>

/**
 * Public F0Icon props - includes className for color customization
 * Icons need className support for semantic color tokens (text-f0-icon-critical, etc.)
 */
export interface F0IconProps extends Omit<SvgProps, "style"> {
  /**
   * Tailwind className for color customization
   * Use semantic tokens like text-f0-icon-critical, text-f0-icon-success, etc.
   */
  className?: string

  /**
   * Icon component to render (from icons directory)
   */
  icon: IconType

  /**
   * Icon size variant
   * @default 'md'
   */
  size?: VariantProps<typeof iconVariants>["size"]

  /**
   * Test ID for testing
   */
  testID?: string

  /**
   * @deprecated variant prop is not used in F0Icon, size handles all styling
   */
  variant?: "default" | "critical" | "neutral" | "ghost" | "outline" | "promote"

  /**
   * @deprecated isPressed is not used in F0Icon
   */
  isPressed?: boolean
}
