/**
 * Allowed counter size variants.
 *
 * - `md` — 20px pill (Figma: "md (20px)")
 * - `sm` — 16px pill (Figma: "sm (16px)")
 */
export const F0_COUNTER_SIZES = ["md", "sm"] as const

/**
 * Counter size union.
 */
export type F0CounterSize = (typeof F0_COUNTER_SIZES)[number]

/**
 * Allowed counter type variants.
 *
 * - `default`      — secondary bg + border, default text (Figma: "Default")
 * - `primary`      — transparent bg, inverse border, inverse text — for dark surfaces (Figma: "Primary")
 * - `selected`     — selected-bold bg, inverse text (Figma: "Selected")
 * - `notification` — accent-bold bg, inverse text (Figma: "Notification")
 */
export const F0_COUNTER_TYPES = [
  "default",
  "primary",
  "selected",
  "notification",
] as const

/**
 * Counter type union.
 */
export type F0CounterType = (typeof F0_COUNTER_TYPES)[number]

/**
 * Props for the `F0Counter` component.
 */
export interface F0CounterProps {
  /**
   * Numeric value to display.
   */
  value: number

  /**
   * When `value` exceeds `maxValue`, displays `+maxValue` instead.
   */
  maxValue?: number

  /**
   * Controls the pill dimensions.
   * @default "md"
   */
  size?: F0CounterSize

  /**
   * Visual style variant affecting background and text color.
   * @default "default"
   */
  type?: F0CounterType

  /**
   * Tailwind classes for the outer wrapper (layout/positioning only).
   */
  className?: string
}
