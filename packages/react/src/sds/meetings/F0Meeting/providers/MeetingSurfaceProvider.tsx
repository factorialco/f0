"use client"

import { breakpoints } from "@factorialco/f0-core"
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { useMediaQuery } from "usehooks-ts"

import { usePersistedState } from "@/lib/persisted-state"

import {
  f0MeetingSurfaceModes,
  type F0MeetingFocusIntent,
  type F0MeetingSurfaceMode,
  type F0Rect,
} from "../types"
import { panelRect, panelWidthFor, viewportRect } from "../window/panel"
import { resolvePlacement } from "../window/placement"
import { useWindowPlacement } from "../window/useWindowPlacement"
import {
  MINIMIZED_HEIGHT,
  MINIMIZED_WIDTH,
  MODE_STORAGE_KEY,
  PANEL_DEFAULT_WIDTH,
} from "../window/window-constants"

/** Modes worth remembering across reloads. `inline` depends on the route. */
const PERSISTED_MODES: F0MeetingSurfaceMode[] = [
  "fullscreen",
  "floating",
  "minimized",
  "panel",
]

const isSurfaceMode = (value: unknown): value is F0MeetingSurfaceMode =>
  typeof value === "string" &&
  (f0MeetingSurfaceModes as readonly string[]).includes(value)

/**
 * The stored mode is scoped to its room. It exists so the SAME call survives a
 * reload — not so a preference outlives the call that produced it: minimizing
 * one huddle must not make the next one open minimized, ignoring the host's
 * `defaultMode`.
 */
type StoredMode = { roomId: string; mode: F0MeetingSurfaceMode }

const isStoredMode = (value: unknown): value is StoredMode =>
  typeof value === "object" &&
  value !== null &&
  typeof (value as StoredMode).roomId === "string" &&
  isSurfaceMode((value as StoredMode).mode)

export type MeetingSurfaceContextValue = {
  /** What the user chose. Never mutated by the environment. */
  mode: F0MeetingSurfaceMode
  /**
   * What actually renders. A small viewport or an unmounted inline slot derives
   * a different mode without destroying the user's preference.
   */
  effectiveMode: F0MeetingSurfaceMode
  setMode: (mode: F0MeetingSurfaceMode) => void
  /** Absolute rect the window animates to, in viewport coordinates. */
  rect: F0Rect
  isDragging: boolean
  setIsDragging: (dragging: boolean) => void
  /** Commit an absolute rect after a drag (re-anchors and snaps). */
  settleRect: (rect: F0Rect) => void
  /** Commit a resize, keeping the current anchor. */
  resizeRect: (rect: F0Rect) => void
  /** True below the md breakpoint: no dragging, pill instead of window. */
  isCompactViewport: boolean
  /** Width the side panel reserves. */
  panelWidth: number
  /** The region the side panel may occupy — the frame's content area. */
  panelArea: F0Rect
  setPanelWidth: (width: number) => void
  /** Registered by `F0MeetingSlot` so `inline` knows where to fly to. */
  setInlineRect: (rect: F0Rect | null) => void
  /**
   * The application frame's content region, published by the frame itself. The
   * side panel lives inside it — between the navigation and the content —
   * rather than on top of the whole viewport.
   */
  setFrameRect: (rect: F0Rect | null) => void
  /** What the user asked the spotlight to do, if anything. */
  focusIntent: F0MeetingFocusIntent
  setFocusIntent: (intent: F0MeetingFocusIntent) => void
  /** Whether the in-call side panel is open, and on which tab. */
  isSidePanelOpen: boolean
  setSidePanelOpen: (open: boolean) => void
  activeTabId: string | null
  setActiveTabId: (id: string) => void
  announce: (message: string) => void
  liveMessage: string
}

const MeetingSurfaceContext = createContext<MeetingSurfaceContextValue | null>(
  null
)

export const MeetingSurfaceProvider = ({
  defaultMode = "fullscreen",
  roomId = "",
  children,
}: {
  defaultMode?: F0MeetingSurfaceMode
  /** Scopes the remembered mode. A different meeting starts at `defaultMode`. */
  roomId?: string
  children: ReactNode
}): ReactNode => {
  const [stored, setStored] = usePersistedState<StoredMode>(
    MODE_STORAGE_KEY,
    { roomId, mode: defaultMode },
    isStoredMode,
    (value) => PERSISTED_MODES.includes(value.mode)
  )

  // Restore only what belongs to this call; anything else starts fresh.
  const mode = stored.roomId === roomId ? stored.mode : defaultMode

  const setMode = useCallback(
    (next: F0MeetingSurfaceMode) => setStored({ roomId, mode: next }),
    [setStored, roomId]
  )

  const [inlineRect, setInlineRect] = useState<F0Rect | null>(null)
  const [frameRect, setFrameRect] = useState<F0Rect | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [focusIntent, setFocusIntent] = useState<F0MeetingFocusIntent>({
    type: "auto",
  })
  const [isSidePanelOpen, setSidePanelOpen] = useState(false)
  const [activeTabId, setActiveTabId] = useState<string | null>(null)
  const [liveMessage, setLiveMessage] = useState("")

  const {
    placement,
    viewport,
    rect: floatingRect,
    settle,
    resize,
    setPanelWidth: setStoredPanelWidth,
  } = useWindowPlacement()

  const isCompactViewport = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })

  // The environment never mutates the stored mode — it only derives a
  // different one, so returning to desktop restores what the user picked.
  const effectiveMode = useMemo<F0MeetingSurfaceMode>(() => {
    if (mode === "inline" && !inlineRect) return "floating"
    if (
      isCompactViewport &&
      (mode === "floating" || mode === "inline" || mode === "panel")
    ) {
      return "minimized"
    }
    return mode
  }, [mode, inlineRect, isCompactViewport])

  /** Where the side panel is allowed to live. */
  const panelArea = useMemo(
    () => frameRect ?? viewportRect(viewport),
    [frameRect, viewport]
  )

  const panelWidth = useMemo(
    () =>
      panelWidthFor(
        { width: panelArea.width, height: panelArea.height },
        placement.panelWidth ?? PANEL_DEFAULT_WIDTH
      ),
    [panelArea, placement.panelWidth]
  )

  const setPanelWidth = useCallback(
    (width: number) => setStoredPanelWidth(width, panelArea),
    [setStoredPanelWidth, panelArea]
  )

  const rect = useMemo<F0Rect>(() => {
    if (effectiveMode === "fullscreen") {
      return { x: 0, y: 0, width: viewport.width, height: viewport.height }
    }
    if (effectiveMode === "inline" && inlineRect) return inlineRect
    if (effectiveMode === "panel") {
      // The window stays in its portal and simply covers the strip the frame
      // reserves. Nothing is reparented, so the video never remounts.
      return panelRect(panelArea, panelWidth)
    }
    if (effectiveMode === "minimized") {
      return isCompactViewport
        ? { x: 0, y: 0, width: viewport.width, height: MINIMIZED_HEIGHT }
        : resolvePlacement(
            { ...placement, width: MINIMIZED_WIDTH, height: MINIMIZED_HEIGHT },
            viewport,
            MINIMIZED_WIDTH,
            MINIMIZED_HEIGHT
          )
    }
    return floatingRect
  }, [
    effectiveMode,
    viewport,
    inlineRect,
    isCompactViewport,
    placement,
    floatingRect,
    panelWidth,
    panelArea,
  ])

  const announce = useCallback((message: string) => {
    setLiveMessage(message)
  }, [])

  const value = useMemo<MeetingSurfaceContextValue>(
    () => ({
      mode,
      effectiveMode,
      setMode,
      rect,
      isDragging,
      setIsDragging,
      settleRect: settle,
      resizeRect: resize,
      isCompactViewport,
      setInlineRect,
      setFrameRect,
      focusIntent,
      setFocusIntent,
      isSidePanelOpen,
      setSidePanelOpen,
      activeTabId,
      setActiveTabId,
      announce,
      liveMessage,
      panelWidth,
      panelArea,
      setPanelWidth,
    }),
    [
      mode,
      effectiveMode,
      setMode,
      rect,
      isDragging,
      settle,
      resize,
      isCompactViewport,
      focusIntent,
      isSidePanelOpen,
      activeTabId,
      announce,
      liveMessage,
      panelWidth,
      panelArea,
      setPanelWidth,
    ]
  )

  return (
    <MeetingSurfaceContext.Provider value={value}>
      {children}
    </MeetingSurfaceContext.Provider>
  )
}

export const useMeetingSurface = (): MeetingSurfaceContextValue => {
  const context = useContext(MeetingSurfaceContext)
  if (!context) {
    throw new Error(
      "useMeetingSurface must be used within a MeetingSurfaceProvider"
    )
  }
  return context
}

/**
 * The same state, for consumers that render whether or not a call exists — the
 * application frame reads this to decide how much width to reserve, and there
 * is no provider at all when `runtime` is null.
 */
export const useMeetingSurfaceOptional =
  (): MeetingSurfaceContextValue | null => useContext(MeetingSurfaceContext)
