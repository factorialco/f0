import { ReactNode } from "react"

import { IconType } from "@/components/F0Icon"

export const sidepanelWidths = [
  "narrow",
  "wide",
  "wideXL",
  "extended",
  "full",
] as const

export type SidepanelWidth = (typeof sidepanelWidths)[number]

export const sidepanelSides = ["left", "right"] as const

export type SidepanelSide = (typeof sidepanelSides)[number]

export type NavigationStep = { title?: string } & (
  | { url: string }
  | { onClick: () => void }
)

export interface SidepanelNavigation {
  previous?: NavigationStep
  next?: NavigationStep
  counter?: { current: number; total: number }
}

export interface SidepanelOption {
  label: string
  description?: string
  icon?: IconType
  onClick?: () => void
  href?: string
  critical?: boolean
}

export interface F0SidepanelProps {
  open: boolean
  onClose: () => void
  /**
   * Fires immediately when the user requests to close (click outside, X, Esc).
   * `onClose` fires after the exit animation completes.
   */
  onCloseClicked?: () => void
  title?: ReactNode
  closeLabel?: string
  /** Which edge the sidepanel slides in from. Default "right". */
  side?: SidepanelSide
  width?: SidepanelWidth
  /** Apply default 24px padding around children. Default true. */
  boxPadding?: boolean
  footer?: ReactNode
  /** Show the dimmed background overlay. Default true. */
  overlay?: boolean
  /** Prevent closing via outside click / Esc. Default false. */
  locked?: boolean
  /** Skip the overlay entirely so background remains interactive. Default false. */
  allowBackgroundInteraction?: boolean
  /** Show a bottom border on the header. Default false. */
  headerBorder?: boolean
  /** Render with the elevation shadow. Default true. */
  shadow?: boolean
  /** Legacy actions menu rendered as a kebab dropdown on the right of the header. */
  options?: SidepanelOption[]
  /** Page-stepping navigation (previous/next + counter). */
  navigation?: SidepanelNavigation
  children?: ReactNode
}
