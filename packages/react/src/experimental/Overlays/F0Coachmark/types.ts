import type { ReactNode } from "react"

import type { PopoverContentProps } from "@/ui/popover"

export type CoachmarkAction = {
  label: string
  onClick: () => void
}

/**
 * Position of this coachmark within a sequence, rendered as `current/total`
 * beside the action. Presentational only: the component does not sequence
 * anything itself, so the consumer stays in control of what each step shows and
 * when it advances.
 */
export type CoachmarkStep = {
  current: number
  total: number
}

export interface F0CoachmarkProps {
  /**
   * Whether the coachmark is visible. The coachmark is fully controlled: the
   * consumer owns visibility so it can decide when to show it and persist the
   * dismissal.
   */
  open: boolean
  /**
   * Called when the user dismisses the coachmark, either with the close button
   * or the Escape key. Clicking outside does **not** dismiss it — a coachmark
   * stays until it is explicitly acknowledged.
   */
  onDismiss: () => void
  /** Headline of the coachmark. */
  title: string
  /** Supporting copy shown under the title. */
  description?: string
  /** The single call to action rendered at the bottom, right aligned. */
  action: CoachmarkAction
  /**
   * Optional position within a sequence, shown as `1/3` to the left of the
   * action. Use it when the coachmark is one step of a guided walkthrough.
   */
  step?: CoachmarkStep
  /** Renders a triangle pointing at the anchored element. Defaults to `true`. */
  arrow?: boolean
  /**
   * Preferred side of the anchor to render on. The coachmark flips and shifts
   * automatically when it would overflow the viewport.
   */
  side?: PopoverContentProps["side"]
  /** Alignment against the anchor. */
  align?: PopoverContentProps["align"]
  /** Distance in pixels between the anchor and the coachmark. */
  sideOffset?: number
  /** The element the coachmark points at. */
  children: ReactNode
}
