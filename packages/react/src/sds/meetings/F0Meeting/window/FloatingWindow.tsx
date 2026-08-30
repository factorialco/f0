import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

import { useReducedMotion } from "@/lib/a11y"
import { EASE_OUT_SWIFT } from "@/lib/motion/f0-motion"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useMeetingSurface } from "../providers/MeetingSurfaceProvider"
import { type F0Rect } from "../types"
import { clamp } from "../utils/aspect"
import { PanelResizeHandle } from "./PanelResizeHandle"
import { nearestCorner } from "./placement"
import { ResizeHandles } from "./ResizeHandles"
import { useWindowGestures } from "./useWindowDrag"
import {
  KEYBOARD_STEP,
  KEYBOARD_STEP_LARGE,
  PANEL_DEFAULT_WIDTH,
  WINDOW_MARGIN,
  WINDOW_MIN_HEIGHT,
  WINDOW_MIN_WIDTH,
} from "./window-constants"

const EASE = `cubic-bezier(${EASE_OUT_SWIFT.join(",")})`

export type FloatingWindowProps = {
  header: React.ReactNode
  children: React.ReactNode
}

/**
 * The one window that hosts the room in every mode.
 *
 * Position and size are plain style properties with a CSS transition rather
 * than a motion animation: a gesture writes them straight to the DOM, and a
 * motion-driven value would be overwritten on the next render. The transition
 * is disabled while dragging so the window tracks the pointer exactly.
 */
export const FloatingWindow = ({ header, children }: FloatingWindowProps) => {
  const i18n = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const {
    effectiveMode,
    rect,
    isDragging,
    setIsDragging,
    settleRect,
    resizeRect,
    isCompactViewport,
    announce,
    setMode,
    panelWidth,
    setPanelWidth,
  } = useMeetingSurface()

  const elementRef = useRef<HTMLDivElement | null>(null)
  const rectRef = useRef<F0Rect>(rect)
  rectRef.current = rect

  // The side panel is placed by the frame, not by the user: like the chat's
  // panel it cannot be dragged, and the mode buttons are the way out of it.
  const canManipulate =
    !isCompactViewport &&
    (effectiveMode === "floating" || effectiveMode === "minimized")

  const handleSettle = useCallback(
    (next: F0Rect) => {
      setIsDragging(false)
      settleRect(next)
      const corner = nearestCorner(next, {
        width: window.innerWidth,
        height: window.innerHeight,
      })
      const cornerLabel = {
        tl: i18n.meeting.cornerTopLeft,
        tr: i18n.meeting.cornerTopRight,
        bl: i18n.meeting.cornerBottomLeft,
        br: i18n.meeting.cornerBottomRight,
      }[corner]
      announce(i18n.t("meeting.movedToCorner", { corner: cornerLabel }))
    },
    [setIsDragging, settleRect, announce, i18n]
  )

  const isPanel = effectiveMode === "panel"
  const canResizePanel = isPanel && !isCompactViewport

  const handleResize = useCallback(
    (next: F0Rect) => {
      setIsDragging(false)
      resizeRect(next)
    },
    [setIsDragging, resizeRect]
  )

  const gestures = useWindowGestures({
    elementRef,
    getRect: () => rectRef.current,
    onStart: () => setIsDragging(true),
    onSettle: handleSettle,
    onResize: handleResize,
    enabled: canManipulate,
  })

  // The panel resizes live, like the chat's, so it needs its own transient
  // flag: `isDragging` means "a gesture owns the DOM", which is not the case
  // here — the rect still comes from React on every move.
  const [isResizingPanel, setIsResizingPanel] = useState(false)
  const panelWidthRef = useRef(panelWidth)
  panelWidthRef.current = panelWidth

  const handlePanelResize = useCallback(
    (deltaX: number) => setPanelWidth(panelWidthRef.current + deltaX),
    [setPanelWidth]
  )
  const resetPanelWidth = useCallback(
    () => setPanelWidth(PANEL_DEFAULT_WIDTH),
    [setPanelWidth]
  )

  // While a gesture owns the element the DOM is the source of truth, so the
  // declarative sync has to stand down until it finishes.
  useLayoutEffect(() => {
    const element = elementRef.current
    if (!element || isDragging) return
    element.style.left = `${rect.x}px`
    element.style.top = `${rect.y}px`
    element.style.width = `${rect.width}px`
    element.style.height = `${rect.height}px`
  }, [rect, isDragging])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (!canManipulate) return

      const step = event.shiftKey ? KEYBOARD_STEP_LARGE : KEYBOARD_STEP
      const resizing = event.metaKey || event.ctrlKey
      const current = rectRef.current
      const view = { width: window.innerWidth, height: window.innerHeight }

      const deltas: Record<string, [number, number]> = {
        ArrowUp: [0, -step],
        ArrowDown: [0, step],
        ArrowLeft: [-step, 0],
        ArrowRight: [step, 0],
      }
      const delta = deltas[event.key]
      if (!delta) return
      event.preventDefault()

      const next: F0Rect = resizing
        ? {
            ...current,
            width: clamp(
              current.width + delta[0],
              WINDOW_MIN_WIDTH,
              view.width - WINDOW_MARGIN * 2
            ),
            height: clamp(
              current.height + delta[1],
              WINDOW_MIN_HEIGHT,
              view.height - WINDOW_MARGIN * 2
            ),
          }
        : {
            ...current,
            x: clamp(
              current.x + delta[0],
              WINDOW_MARGIN,
              Math.max(
                WINDOW_MARGIN,
                view.width - current.width - WINDOW_MARGIN
              )
            ),
            y: clamp(
              current.y + delta[1],
              WINDOW_MARGIN,
              Math.max(
                WINDOW_MARGIN,
                view.height - current.height - WINDOW_MARGIN
              )
            ),
          }

      if (resizing) resizeRect(next)
      else handleSettle(next)
    },
    [canManipulate, resizeRect, handleSettle]
  )

  // Escape leaves fullscreen. It must never hang up: losing a call to a stray
  // keypress is unforgivable.
  useEffect(() => {
    if (effectiveMode !== "fullscreen") return
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setMode("floating")
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [effectiveMode, setMode])

  const isFullscreen = effectiveMode === "fullscreen"
  const isInline = effectiveMode === "inline"

  return (
    <>
      <div
        ref={elementRef}
        role="dialog"
        // Only fullscreen is modal. In every other mode the user keeps working in
        // the app with the call open, so trapping focus would be wrong.
        aria-modal={isFullscreen}
        aria-label={i18n.meeting.meetingWindow}
        data-testid="meeting-window"
        data-mode={effectiveMode}
        className={cn(
          // Same surface token as the chat's side panel, which is what the call
          // sits flush against in panel mode.
          "pointer-events-auto fixed overflow-hidden bg-f1-special-page shadow-lg",
          // The panel is a card inset in its slot, exactly like the chat's, so
          // it is rounded and bordered all the way round like the rest.
          isFullscreen || isInline
            ? "rounded-none"
            : "rounded-xl border border-solid border-f1-border-secondary",
          isFullscreen ? "z-[45]" : "z-40"
        )}
        style={{
          transition:
            isDragging || isResizingPanel || shouldReduceMotion
              ? "none"
              : `left 220ms ${EASE}, top 220ms ${EASE}, width 220ms ${EASE}, height 220ms ${EASE}`,
          willChange: isDragging ? "left, top, width, height" : undefined,
        }}
      >
        <div
          role={canManipulate ? "button" : undefined}
          tabIndex={canManipulate ? 0 : undefined}
          aria-label={canManipulate ? i18n.meeting.moveWindow : undefined}
          aria-keyshortcuts={
            canManipulate ? "ArrowUp ArrowDown ArrowLeft ArrowRight" : undefined
          }
          onPointerDown={
            canManipulate ? (event) => gestures.begin(event, null) : undefined
          }
          onPointerMove={canManipulate ? gestures.move : undefined}
          onPointerUp={canManipulate ? gestures.end : undefined}
          onPointerCancel={canManipulate ? gestures.cancel : undefined}
          onKeyDown={handleKeyDown}
          style={{ touchAction: canManipulate ? "none" : undefined }}
          className={cn(
            "relative flex shrink-0 items-center gap-2",
            // Fullscreen is a room rather than a widget, so its chrome scales
            // up with it. The body's height has to follow the same number.
            isFullscreen ? "h-14 px-4" : "px-3",
            effectiveMode === "minimized"
              ? "h-full"
              : !isFullscreen && "h-[3.75rem]",
            canManipulate && "cursor-grab active:cursor-grabbing"
          )}
        >
          {header}
        </div>

        {effectiveMode !== "minimized" && (
          <div
            className={cn(
              "relative w-full",
              isFullscreen ? "h-[calc(100%-3.5rem)]" : "h-[calc(100%-3.75rem)]"
            )}
          >
            {children}
          </div>
        )}

        {canManipulate && effectiveMode === "floating" && (
          <ResizeHandles
            onPointerDown={gestures.begin}
            onPointerMove={gestures.move}
            onPointerUp={gestures.end}
            onPointerCancel={gestures.cancel}
          />
        )}

        {canResizePanel && (
          // Only the inner edge resizes the panel; the other three belong to
          // the frame's content area.
          <PanelResizeHandle
            onResize={handlePanelResize}
            onReset={resetPanelWidth}
            isResizing={isResizingPanel}
            setIsResizing={setIsResizingPanel}
          />
        )}
      </div>
    </>
  )
}
