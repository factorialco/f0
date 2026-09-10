import type { ReactNode } from "react"
import type { AiChatUsageLimits } from "../F0AiChat/types"

export const usageLimitsPopoverSides = ["top", "bottom"] as const
export type UsageLimitsPopoverSide = (typeof usageLimitsPopoverSides)[number]

export interface F0AiChatUsageLimitsButtonProps {
  /** `null` while loading: empty ring, skeleton in the popover. */
  usage: AiChatUsageLimits | null
  /** Shows an error line instead of the rows. */
  error?: boolean
  /** Hosts refetch on open. */
  onOpenChange?: (open: boolean) => void
  /** Custom popover trigger (asChild). Defaults to the usage ring button. */
  trigger?: ReactNode
  /** `"top"` suits the composer row; use `"bottom"` from a header. */
  side?: UsageLimitsPopoverSide
}
