import type { ReactNode } from "react"
import type { AiChatUsageLimits } from "../F0AiChat/types"

export const usageLimitsPopoverSides = ["top", "bottom"] as const
export type UsageLimitsPopoverSide = (typeof usageLimitsPopoverSides)[number]

export interface F0AiChatUsageLimitsButtonProps {
  /**
   * Resolved usage. `null` while the host is still loading it: the ring
   * renders empty and the popover shows a skeleton.
   */
  usage: AiChatUsageLimits | null
  /** The host failed to load usage: the popover shows an error line instead of bars. */
  error?: boolean
  /** Fires on open and close. Hosts refetch on open so the numbers are fresh. */
  onOpenChange?: (open: boolean) => void
  /** Custom popover trigger (asChild). Defaults to the usage ring button. */
  trigger?: ReactNode
  /**
   * Side of the trigger the popover opens on. Defaults to `"top"`, the right
   * choice for the composer's disclaimer row; use `"bottom"` from a header.
   */
  side?: UsageLimitsPopoverSide
}
