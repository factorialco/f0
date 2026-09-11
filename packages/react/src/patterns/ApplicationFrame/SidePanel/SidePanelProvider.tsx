"use client"

import { breakpoints, panelWidths } from "@factorialco/f0-core"
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { useMediaQuery } from "usehooks-ts"
import { DEFAULT_CHAT_WIDTH } from "./constants"
import {
  panelBoundsFor,
  resolvePanelWidth,
  type PanelBounds,
} from "./panelWidth"
import {
  LEGACY_SIDE_PANEL_LAYOUT_KEYS,
  LEGACY_SIDE_PANEL_OPEN_KEYS,
  LEGACY_SIDE_PANEL_VIEW_ID_KEYS,
  LEGACY_SIDE_PANEL_WIDTH_KEYS,
  SIDE_PANEL_LAYOUT_KEY,
  SIDE_PANEL_OPEN_KEY,
  SIDE_PANEL_VIEW_ID_KEY,
  SIDE_PANEL_WIDTH_KEY,
  SIDE_PANEL_WIDTH_PERSIST_DEBOUNCE_MS,
} from "./storage"
import type {
  SidePanelContent,
  SidePanelContextValue,
  SidePanelLayout,
  SidePanelViewDefinition,
} from "./types"
import { usePersistedState } from "./usePersistedState"

const SidePanelContext = createContext<SidePanelContextValue | null>(null)

const { min: WIDTH_MIN, max: WIDTH_MAX } = panelWidths

/**
 * How long a pending restore may wait for its host before the panel gives up —
 * a host that never resolves (the content is gone, or it isn't restore-aware)
 * must not hold the panel forever.
 */
const PANEL_RESTORE_TIMEOUT_MS = 5000

const noop = () => {}

export type SidePanelProviderProps = {
  /**
   * What may occupy the panel. An empty list (or one where nothing is
   * available) means there is no panel at all.
   */
  views?: SidePanelViewDefinition[]
  /** Edge the panel docks to. @default "right" */
  side?: "left" | "right"
  /** Edge hosted content docks to. Defaults to `side`. */
  contentSide?: "left" | "right"
  /** Whether the panel may be resized. @default false */
  resizable?: boolean
  /** Layout the panel opens in when nothing is persisted. */
  defaultLayout?: SidePanelLayout
}

const EMPTY_VIEWS: SidePanelViewDefinition[] = []

/**
 * Owns the side panel: whether it is open, how wide, docked or covering, and
 * what is in it.
 *
 * This state used to live in `AiChatStateProvider`, which meant the panel only
 * existed when the AI chat did — a product with a panel and no assistant had
 * nowhere to put it. Nothing here knows what an AI chat is; the chat is one of
 * the things that can occupy this space.
 */
export const SidePanelProvider: FC<
  PropsWithChildren<SidePanelProviderProps>
> = ({
  children,
  views = EMPTY_VIEWS,
  side = "right",
  contentSide: initialContentSide,
  resizable = false,
  defaultLayout = "sidepanel",
}) => {
  // The one expression behind "never show an empty panel". It does not grow
  // with the number of occupants, which is the whole point of declaring them.
  const hasDeclaredView = views.some((view) => view.available !== false)

  const [width, setWidth] = usePersistedState<number>({
    key: SIDE_PANEL_WIDTH_KEY,
    legacyKeys: LEGACY_SIDE_PANEL_WIDTH_KEYS,
    fallback: DEFAULT_CHAT_WIDTH,
    validate: (v): v is number =>
      typeof v === "number" && !isNaN(v) && v >= WIDTH_MIN && v <= WIDTH_MAX,
    debounceMs: SIDE_PANEL_WIDTH_PERSIST_DEBOUNCE_MS,
  })

  // Not persisted: this is the live state of a pointer drag, not a preference.
  const [isResizing, setIsResizing] = useState(false)

  // How much room the frame has for panel + content, published by
  // ApplicationFrame from its measured content box. 0 means "not measured yet".
  const [frameWidth, setFrameWidth] = useState(0)

  const widthBounds: PanelBounds = useMemo(
    () => panelBoundsFor(frameWidth),
    [frameWidth]
  )

  // `width` above is the PREFERENCE — what the user last dragged to, kept in
  // localStorage against the absolute range. This is what the layout actually
  // reserves. Narrowing the window must not overwrite a width chosen
  // deliberately on a wider one, so the clamp lives here and not in the
  // setter: widen the window again and the preference comes back untouched.
  const effectiveWidth = useMemo(
    () => resolvePanelWidth(width, frameWidth),
    [width, frameWidth]
  )

  // Whether the panel covers the frame instead of sitting beside it.
  //
  // Derived once, here, because two consumers need the same answer: the frame
  // reserves (or doesn't) against it, and the window hides its resize handle
  // against it. They each computed their own version before, which is how you
  // end up dragging a seam on a panel that is already full-screen.
  //
  // Width alone decides it for a mouse — a half-screen laptop window is a
  // legitimate place to want two columns. Touch is judged on the viewport
  // instead, so a tablet still gets the drawer it expects rather than two
  // columns nobody can hit.
  const isCoarsePointer = useMediaQuery("(pointer: coarse)", {
    initializeWithValue: true,
  })
  const isCompactViewport = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })
  const panelOverlays =
    (isCoarsePointer && isCompactViewport) || widthBounds.shouldOverlay

  // Declared above `open` because the guard below reads it: content that has
  // been presented keeps the panel alive on its own.
  const [activeContent, setActiveContentState] =
    useState<SidePanelContent | null>(null)

  // Hosted content counts even if every declared view went away mid-session —
  // pulling the floor out from under something on screen is worse than a panel
  // that outlives its declaration by one close.
  const hasAvailableView = hasDeclaredView || activeContent !== null

  const [openState, setOpen] = usePersistedState<boolean>({
    key: SIDE_PANEL_OPEN_KEY,
    legacyKeys: LEGACY_SIDE_PANEL_OPEN_KEYS,
    fallback: defaultLayout === "fullscreen",
    validate: (v): v is boolean => typeof v === "boolean",
  })
  // `open` is persisted, so a user who left a conversation open and comes back
  // to a build that no longer has that product would reopen an empty panel.
  const open = openState && hasAvailableView

  const [layout, setLayoutRaw] = usePersistedState<SidePanelLayout>({
    key: SIDE_PANEL_LAYOUT_KEY,
    legacyKeys: LEGACY_SIDE_PANEL_LAYOUT_KEYS,
    fallback: defaultLayout,
    validate: (v): v is SidePanelLayout =>
      v === "sidepanel" || v === "fullscreen",
  })

  const setLayout = useCallback<
    React.Dispatch<React.SetStateAction<SidePanelLayout>>
  >(
    (next) => {
      setLayoutRaw((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next
        // Covering the page implies the panel is open. Set here, on the change
        // itself, rather than via an effect on `open`: a reactive effect would
        // also fire while the panel is CLOSING (open → false with the layout
        // still "fullscreen") and reopen it. Closing must always fully close.
        if (resolved === "fullscreen") {
          setOpen(true)
        }
        return resolved
      })
    },
    [setLayoutRaw, setOpen]
  )

  const [shouldPlayEntranceAnimation, setShouldPlayEntranceAnimation] =
    useState(() => layout !== "fullscreen")

  // The content itself is a host-provided ReactNode and can't be serialized —
  // persist only its id, so a reload can reopen WHAT was showing rather than
  // just that the panel was open. The host re-mounts the content when ready.
  const [persistedViewId, setPersistedViewId] = usePersistedState<
    string | null
  >({
    key: SIDE_PANEL_VIEW_ID_KEY,
    legacyKeys: LEGACY_SIDE_PANEL_VIEW_ID_KEYS,
    fallback: null,
    validate: (v): v is string | null => v === null || typeof v === "string",
  })

  // Same guard. The id itself is not checked against `views`: what gets
  // persisted is what was SHOWING (a conversation id, say), not the id of the
  // view that put it there, so it legitimately matches nothing. What has to be
  // true is that some view is still around to answer the restore.
  const [restoringViewId, setRestoringViewId] = useState<string | null>(() =>
    open ? persistedViewId : null
  )

  const present = useCallback(
    (content: SidePanelContent | null) => {
      setActiveContentState(content)
      setRestoringViewId(null)
      if (content && !open) {
        setOpen(true)
      }
    },
    [open, setOpen]
  )

  const clear = useCallback(() => {
    setActiveContentState(null)
    setRestoringViewId(null)
  }, [])

  const cancelRestore = useCallback(() => setRestoringViewId(null), [])

  const resetWidth = useCallback(() => setWidth(DEFAULT_CHAT_WIDTH), [setWidth])

  // Keep the persisted id in sync with what's actually showing. Skipped while
  // a restore is pending — `activeContent` is still null then and writing
  // would wipe the very id being restored (breaking a reload mid-restore).
  useEffect(() => {
    if (restoringViewId) {
      return
    }
    setPersistedViewId(activeContent?.id ?? null)
  }, [activeContent, restoringViewId, setPersistedViewId])

  // A restore only makes sense while the panel is open; closing drops the
  // pending id.
  useEffect(() => {
    if (!open) {
      setRestoringViewId(null)
    }
  }, [open])

  // Safety net: a host that never resolves the restore must not block the panel.
  useEffect(() => {
    if (!restoringViewId) {
      return
    }
    const timer = setTimeout(
      () => setRestoringViewId(null),
      PANEL_RESTORE_TIMEOUT_MS
    )
    return () => clearTimeout(timer)
  }, [restoringViewId])

  useEffect(() => {
    if (!open) {
      setLayoutRaw("sidepanel")
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      setShouldPlayEntranceAnimation(!prefersReducedMotion)
    }
  }, [open, setLayoutRaw])

  const [side_, setSide] = useState<"left" | "right">(side)
  const [contentSide, setContentSide] = useState<"left" | "right">(
    initialContentSide ?? side
  )

  const value = useMemo<SidePanelContextValue>(
    () => ({
      views,
      hasAvailableView,
      open,
      setOpen,
      layout,
      setLayout,
      side: side_,
      setSide,
      contentSide,
      setContentSide,
      activeContent,
      present,
      clear,
      restoringViewId,
      cancelRestore,
      width,
      setWidth,
      resetWidth,
      effectiveWidth,
      widthBounds,
      panelOverlays,
      setFrameWidth,
      isResizing,
      setIsResizing,
      resizable,
      shouldPlayEntranceAnimation,
      setShouldPlayEntranceAnimation,
    }),
    [
      views,
      hasAvailableView,
      open,
      setOpen,
      layout,
      setLayout,
      side_,
      contentSide,
      activeContent,
      present,
      clear,
      restoringViewId,
      cancelRestore,
      width,
      setWidth,
      resetWidth,
      effectiveWidth,
      widthBounds,
      panelOverlays,
      isResizing,
      resizable,
      shouldPlayEntranceAnimation,
    ]
  )

  return (
    <SidePanelContext.Provider value={value}>
      {children}
    </SidePanelContext.Provider>
  )
}

/**
 * The inert shape returned when no panel is mounted. A real frozen object
 * rather than a Proxy, so it can be spread like the live value.
 */
const NO_SIDE_PANEL: SidePanelContextValue = Object.freeze({
  views: EMPTY_VIEWS,
  hasAvailableView: false,
  open: false,
  setOpen: noop,
  layout: "sidepanel",
  setLayout: noop,
  side: "right",
  setSide: noop,
  contentSide: "right",
  setContentSide: noop,
  activeContent: null,
  present: noop,
  clear: noop,
  restoringViewId: null,
  cancelRestore: noop,
  width: DEFAULT_CHAT_WIDTH,
  setWidth: noop,
  resetWidth: noop,
  effectiveWidth: DEFAULT_CHAT_WIDTH,
  // Unmeasured, so the absolute range — the same fallback the provider starts on.
  widthBounds: panelBoundsFor(0),
  // `false`, never `undefined`: a standalone chat keeps its fullscreen button,
  // and a consumer writing `panelOverlays ?? true` would get the opposite.
  panelOverlays: false,
  setFrameWidth: noop,
  isResizing: false,
  setIsResizing: noop,
  resizable: false,
  shouldPlayEntranceAnimation: true,
  setShouldPlayEntranceAnimation: noop,
}) as SidePanelContextValue

/**
 * Read and control the frame's side panel.
 *
 * Returns an inert value when no panel is mounted, so a component can be used
 * both inside and outside a frame without guarding.
 */
export function useSidePanel(): SidePanelContextValue {
  return useContext(SidePanelContext) ?? NO_SIDE_PANEL
}

/** Whether a `SidePanelProvider` is mounted above this point. */
export function useHasSidePanel(): boolean {
  return useContext(SidePanelContext) !== null
}
