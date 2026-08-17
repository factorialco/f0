import type { SVGProps } from "react"

/**
 * Props for the F0OneIcon component
 */
export interface F0OneIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Whether the icon should spin
   */
  spin?: boolean
  /**
   * Whether the icon is in hover state
   */
  hover?: boolean
  /**
   * Background color override
   */
  background?: string
  /**
   * Size of the icon
   */
  size?: "xs" | "sm" | "md" | "lg"
}

export const oneIconSizes = ["xs", "sm", "md", "lg"] as const
export type OneIconSize = (typeof oneIconSizes)[number]
