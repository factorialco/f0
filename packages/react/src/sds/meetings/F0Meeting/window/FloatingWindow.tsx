import { useCallback, useEffect, useLayoutEffect, useRef } from "react"
import { useReducedMotion } from "@/lib/a11y"
import { EASE_OUT_SWIFT } from "@/lib/motion/f0-motion"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { densityFor, HEADER_HEIGHT } from "../layout/density"
import { MeetingDensityProvider } from "../providers/MeetingDensityProvider"
import { useMeetingSurface } from "../providers/MeetingSurfaceProvider"
import { type F0Rect } from "../types"
import { clamp } from "../utils/aspect"
import { nearestCorner } from "./placement"
import { ResizeHandles } from "./ResizeHandles"
import { useWindowGestures } from "./useWindowDrag"
import {
  KEYBOARD_STEP,
  KEYBOARD_STEP_LARGE,
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
 * The window that hosts the room in every mode but `panel`, where there is no
 * window: the room is the side panel's content and the panel draws the card.
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
  } = useMeetingSurface()

  const elementRef = useRef<HTMLDivElement | null>(null)
  const rectRef = useRef<F0Rect>(rect)
  rectRef.current = rect

  // Fullscreen and inline are placed for the user, not by them. `panel` never
  // reaches here at all: docked, the room is the side panel's content and has
  // no window of its own.
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

  // While a gesture owns the element the DOM is the source of truth, so the
  // declarative sync has to stand down until it finishes.
  useLayoutEffect(() => {
    const element = elementRef.current
    if (!element || isDragging) {
      return
    }
    element.style.left = `${rect.x}px`
    element.style.top = `${rect.y}px`
    element.style.width = `${rect.width}px`
    element.style.height = `${rect.height}px`
  }, [rect, isDragging])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (!canManipulate) {
        return
      }

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
      if (!delta) {
        return
      }
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

      if (resizing) {
        resizeRect(next)
      } else {
        handleSettle(next)
      }
    },
    [canManipulate, resizeRect, handleSettle]
  )

  // Escape leaves fullscreen. It must never hang up: losing a call to a stray
  // keypress is unforgivable.
  useEffect(() => {
    if (effectiveMode !== "fullscreen") {
      return
    }
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setMode("floating")
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [effectiveMode, setMode])

  const isFullscreen = effectiveMode === "fullscreen"
  const isInline = effectiveMode === "inline"
  const isMinimized = effectiveMode === "minimized"
  // From the window's own rect, which is the authority for its size in every
  // mode — including full screen, where it is the viewport.
  const density = isFullscreen ? "regular" : densityFor(rect)

  return (
    <MeetingDensityProvider density={density}>
      <div
        ref={elementRef}
        role="dialog"
        // Only fullscreen is modal. In every other mode the user keeps working
        // in the app with the call open, so trapping focus would be wrong.
        aria-modal={isFullscreen}
        aria-label={i18n.meeting.meetingWindow}
        data-testid="meeting-window"
        data-mode={effectiveMode}
        className={cn(
          // Same surface token as the side panel's card, so a call reads as the
          // same object whether it is docked or floating over the page.
          "pointer-events-auto fixed flex flex-col overflow-hidden bg-f1-background shadow-lg",
          isFullscreen || isInline
            ? "rounded-none"
            : "rounded-xl border border-solid border-f1-border-secondary",
          isFullscreen ? "z-[45]" : "z-40"
        )}
        style={{
          transition:
            isDragging || shouldReduceMotion
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
          style={{
            touchAction: canManipulate ? "none" : undefined,
            // A pill is all title bar; full screen keeps its own scaled-up
            // chrome. Everything else takes the height its density asks for.
            ...(isMinimized || isFullscreen
              ? {}
              : { height: HEADER_HEIGHT[density] }),
          }}
          className={cn(
            "relative flex shrink-0 items-center gap-2",
            // Fullscreen is a room rather than a widget, so its chrome scales
            // up with it.
            isFullscreen ? "h-14 px-4" : density === "tight" ? "px-2" : "px-3",
            isMinimized && "h-full",
            canManipulate && "cursor-grab active:cursor-grabbing"
          )}
        >
          {header}
        </div>

        {/* What is left of the column. No `calc(100% - header)`: that number
            had to be kept in step with the title bar by hand, and it was
            already wrong for one of the two heights it tried to cover. */}
        {isMinimized ? null : (
          <div className="relative min-h-0 w-full flex-1">{children}</div>
        )}

        {canManipulate && effectiveMode === "floating" ? (
          <ResizeHandles
            onPointerDown={gestures.begin}
            onPointerMove={gestures.move}
            onPointerUp={gestures.end}
            onPointerCancel={gestures.cancel}
          />
        ) : null}
      </div>
    </MeetingDensityProvider>
  )
}
