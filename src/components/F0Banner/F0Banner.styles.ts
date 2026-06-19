import { tv } from "tailwind-variants"

import type { TextColor } from "../primitives/F0Text"

import type { F0BannerLevel } from "./F0Banner.types"

// Full-bleed container (edge-to-edge, no rounded corners) + per-level
// background tint (f0-background-* 10% fills).
export const bannerVariants = tv({
  base: "w-full flex-row items-center gap-2 px-3 py-2",
  variants: {
    level: {
      info: "bg-f0-background-info",
      warning: "bg-f0-background-warning",
      positive: "bg-f0-background-positive",
      critical: "bg-f0-background-critical",
    },
  },
  defaultVariants: {
    level: "info",
  },
})

// Semantic F0Text color by level.
export const F0_BANNER_TEXT_COLORS: Record<F0BannerLevel, TextColor> = {
  info: "info",
  warning: "warning",
  positive: "positive",
  critical: "critical",
}
