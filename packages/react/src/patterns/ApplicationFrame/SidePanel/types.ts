import type { PanelBounds } from "./panelWidth"

/**
 * How the panel is laid out. Deliberately two values: the AI chat's `canvas`
 * is a third thing the AI kit derives on top of this, not a panel concern.
 */
export type SidePanelLayout = "sidepanel" | "fullscreen"

/**
 * A single piece of content hosted in the side panel — the resizable,
 * fullscreen-able space beside the page. Only one is mounted at a time: the
 * `id` keys the content, so switching views unmounts the previous one and
 * mounts the next.
 */
export type SidePanelContent = {
  id: string
  content: React.ReactNode
}

/**
 * A product's claim on the panel.
 *
 * Declaring this is what lets the frame answer "is there anything at all to
 * show?" without the host computing it. The distinction that matters is
 * between a view that COULD open and one that is not installed at all — with
 * only `present()` those look identical (no content either way), which is why
 * the panel used to need a global `enabled` flag and why a customer with
 * communications and no assistant got no panel.
 */
export type SidePanelViewDefinition = {
  id: string
  /** Can this view occupy the panel at all? @default true */
  available?: boolean
  /** Edge this view docks to. Falls back to the panel's `side`. */
  side?: "left" | "right"
  /**
   * Static renderer, for views that own their whole surface (the AI chat).
   * Omit for views whose content is pushed at runtime via `present()`.
   */
  render?: () => React.ReactNode
}

export type SidePanelContextValue = {
  /** Every view declared for this frame, in declaration order. */
  views: SidePanelViewDefinition[]
  /**
   * Whether anything can occupy the panel. False means the panel does not
   * exist: no chrome, no reserved width, no DOM.
   */
  hasAvailableView: boolean
  /** Whether the panel is showing at all. Persisted. */
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  /** Docked beside the page, or covering it. Persisted. */
  layout: SidePanelLayout
  setLayout: React.Dispatch<React.SetStateAction<SidePanelLayout>>
  /** Edge the panel docks to. @default "right" */
  side: "left" | "right"
  setSide: React.Dispatch<React.SetStateAction<"left" | "right">>
  /**
   * Edge hosted content docks to. Defaults to `side`; when the two differ the
   * frame renders a window on each edge and keeps them mutually exclusive.
   */
  contentSide: "left" | "right"
  setContentSide: React.Dispatch<React.SetStateAction<"left" | "right">>
  /** Content currently hosted in the panel, or `null`. */
  activeContent: SidePanelContent | null
  /** Mount content (replacing whatever was there) and open the panel. */
  present: (content: SidePanelContent | null) => void
  /** Remove the hosted content without closing the panel. */
  clear: () => void
  /**
   * Id persisted from the last session, waiting for its host to re-mount it.
   * The panel holds a placeholder until the host calls `present`, calls
   * `cancelRestore` (the content is gone), or a safety timeout fires.
   */
  restoringViewId: string | null
  cancelRestore: () => void
  /** The user's width PREFERENCE, against the absolute range. Persisted. */
  width: number
  setWidth: React.Dispatch<React.SetStateAction<number>>
  resetWidth: () => void
  /** `width` held inside what the measured frame can actually give it. */
  effectiveWidth: number
  /** The range the panel may be dragged to at the frame's current width. */
  widthBounds: PanelBounds
  /** True when the panel covers the frame rather than sitting beside it. */
  panelOverlays: boolean
  /** Published by the frame from its measured content box. */
  setFrameWidth: React.Dispatch<React.SetStateAction<number>>
  /** Live state of a pointer drag, not a preference. */
  isResizing: boolean
  setIsResizing: React.Dispatch<React.SetStateAction<boolean>>
  /** Whether the panel may be resized at all. */
  resizable: boolean
  shouldPlayEntranceAnimation: boolean
  setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>
}
