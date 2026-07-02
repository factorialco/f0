import type { ReactNode } from "react"

import type { F0ButtonProps } from "../F0Button"

// Semantic levels (Warning / Info / Positive / Critical).
export const F0_BANNER_LEVELS = [
  "info",
  "warning",
  "positive",
  "critical",
] as const

export type F0BannerLevel = (typeof F0_BANNER_LEVELS)[number]

// Placement variants: "global" (full-bleed, squared, flat — pinned to the top
// of the screen) and "inline" (rounded + elevated — sits inside page content).
export const F0_BANNER_VARIANTS = ["global", "inline"] as const

export type F0BannerVariant = (typeof F0_BANNER_VARIANTS)[number]

// Trailing action button — a curated subset of F0Button; the banner owns variant/size.
export type F0BannerAction = Pick<
  F0ButtonProps,
  "label" | "onPress" | "loading" | "disabled"
>

export interface F0BannerProps {
  /** Banner message. */
  message: string
  /** Semantic level driving icon, colors, and background tint. */
  level: F0BannerLevel
  /**
   * Placement variant. `global` = full-bleed, squared, flat (top of screen);
   * `inline` = rounded + elevated (inside page content). @default "global"
   */
  variant?: F0BannerVariant
  /** Trailing link slot, e.g. `<F0Link size="sm" href="…">Learn more</F0Link>`. */
  link?: ReactNode
  /** Trailing action button. */
  action?: F0BannerAction
  /** Show a trailing loading spinner tinted to the level. @default false */
  loading?: boolean
  /** Show a close button that self-removes the banner. Implied by `onDismiss`. @default false */
  dismissible?: boolean
  /** Called after the user dismisses the banner. */
  onDismiss?: () => void
  /** Accessible label for the dismiss button. @default "Dismiss" */
  dismissLabel?: string
  /** Clamp the message to N lines. Defaults to unbounded (wraps). */
  numberOfLines?: number
  /** Test ID for testing. */
  testID?: string
}
