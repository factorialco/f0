import { cva } from "cva"

import type { F0IconProps, IconType } from "@/components/F0Icon"
import { AlertCircle, CheckCircle, InfoCircle, Warning } from "@/icons/app"

import type { AiCalloutStatus } from "./types"

/**
 * The tint, and nothing else. It deliberately carries no `w-full`: the deck
 * layers are absolutely positioned with `inset-x-*`, and a width declared
 * alongside both `left` and `right` wins over `right` — which shifted every
 * layer sideways at full width instead of insetting it, so they hung off the
 * edge.
 *
 * One tint per callout however many findings it holds: the status colour
 * appears three times (tint, title, glyph) whether the callout carries one
 * verdict or five, where one tinted card per finding would repeat all three per
 * row. `neutral` has no status tint of its own, so it borrows the flat grey
 * surface.
 */
export const statusTintVariants = cva({
  variants: {
    status: {
      neutral: "bg-f1-background-tertiary",
      info: "bg-f1-background-info",
      positive: "bg-f1-background-positive",
      warning: "bg-f1-background-warning",
      critical: "bg-f1-background-critical",
    },
  },
})

/**
 * Used for the 2px ring around the white card, the hairline between rows, and
 * the deck edge. All of them must be pinned with `border-solid` — this repo
 * disables Tailwind's preflight, so a border with no style computes to zero
 * width and renders nothing at all while still applying its colour.
 */
export const cardBorderVariants = cva({
  variants: {
    status: {
      neutral: "border-f1-border-secondary",
      info: "border-f1-border-info",
      positive: "border-f1-border-positive",
      warning: "border-f1-border-warning",
      critical: "border-f1-border-critical",
    },
  },
})

/**
 * Kept apart from the type scale because two different sizes need it: the
 * title at 14/20 Medium and, when stacked, the header byline at 12/16 Medium.
 * Folding the size into the colour variant meant `text-base` overriding
 * `text-sm` through `cn`.
 */
export const statusForegroundVariants = cva({
  variants: {
    status: {
      neutral: "text-f1-foreground",
      info: "text-f1-foreground-info",
      positive: "text-f1-foreground-positive",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
    },
  },
})

/**
 * `neutral` is deliberately empty: there is no glyph that means "no stance",
 * so the caller passes one that describes the content instead.
 */
export const statusIcons: Record<AiCalloutStatus, IconType | null> = {
  neutral: null,
  info: InfoCircle,
  positive: CheckCircle,
  warning: Warning,
  critical: AlertCircle,
}

/**
 * The glyph runs one tone brighter than the title (Figma's `Icon/{status}` is
 * the 50 tone, `Foreground/{status}` the 70) so the icon reads as the signal
 * and the title stays legible as text.
 */
export const statusIconColors = {
  neutral: "default",
  info: "info",
  positive: "positive",
  warning: "warning",
  critical: "critical",
} as const satisfies Record<AiCalloutStatus, F0IconProps["color"]>

export const cardClasses =
  "flex flex-col overflow-hidden rounded-xl border-2 border-solid bg-f1-background"

export const rowClasses =
  "flex flex-row items-center justify-between gap-3 border-x-0 border-b-0 border-t border-solid"

/**
 * The single callout's footer byline: grey, 14/20, and it keeps the One mark.
 * The stacked header's byline is deliberately different — status colour, 12/16
 * Medium, no mark — because there it is a suffix to a coloured title rather
 * than a row's own content. Both come straight from their Figma nodes.
 */
