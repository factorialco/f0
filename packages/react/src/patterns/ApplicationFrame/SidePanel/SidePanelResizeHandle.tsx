import { useCallback, useEffect, useRef } from "react"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

/** How far one arrow press moves the separator. */
const KEYBOARD_RESIZE_STEP = 16

export const SidePanelResizeHandle = ({
  onResize,
  onReset,
  isResizing,
  setIsResizing,
  flushInnerSeam,
  side = "right",
  value,
  minValue,
  maxValue,
}: {
  onResize: (deltaX: number) => void
  onReset: () => void
  isResizing: boolean
  setIsResizing: (value: boolean) => void
  /**
   * The handle is the only divider between the panel and a neighbour sitting
   * flush against it, so it draws itself as a hairline rule rather than
   * staying invisible until hover.
   */
  flushInnerSeam?: boolean
  /** Edge the panel docks to. Determines which drag direction widens it. */
  side?: "left" | "right"
  /** Current panel width in pixels — what the separator reports. */
  value: number
  /** Narrowest the panel may go at the frame's current width. */
  minValue: number
  /** Widest the panel may go at the frame's current width. */
  maxValue: number
}) => {
  const startXRef = useRef(0)
  const pendingDeltaRef = useRef(0)
  const frameRef = useRef<number | null>(null)
  const translations = useI18n()

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      startXRef.current = e.clientX
      setIsResizing(true)
    },
    [setIsResizing]
  )

  const handleDoubleClick = useCallback(() => {
    setIsResizing(true)
    onReset()
    setIsResizing(false)
  }, [onReset, setIsResizing])

  useEffect(() => {
    if (!isResizing) {
      return
    }

    // Pointer samples arrive faster than the screen repaints (120Hz trackpads),
    // and every one of them re-lays-out the whole panel — including a
    // synchronous re-measure of every rendered transcript row. Accumulate the
    // deltas and apply at most one per frame.
    const flush = () => {
      frameRef.current = null
      const delta = pendingDeltaRef.current
      pendingDeltaRef.current = 0
      if (delta !== 0) {
        onResize(delta)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Right-docked: dragging the (left-edge) handle leftward widens the panel.
      // Left-docked: the handle is on the right edge, so dragging right widens.
      const deltaX =
        side === "left"
          ? e.clientX - startXRef.current
          : startXRef.current - e.clientX
      startXRef.current = e.clientX
      pendingDeltaRef.current += deltaX
      if (frameRef.current == null) {
        frameRef.current = requestAnimationFrame(flush)
      }
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
      // Don't drop the last sample when the gesture ends between frames.
      flush()
    }
  }, [isResizing, onResize, setIsResizing, side])

  // Keyboard equivalent of the drag. Arrows follow the SCREEN direction, not
  // "wider/narrower": on a left-docked panel the same key has to grow it, or
  // the separator would move opposite to the key that pushed it.
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      let delta: number
      switch (event.key) {
        case "ArrowLeft":
          delta = side === "left" ? -KEYBOARD_RESIZE_STEP : KEYBOARD_RESIZE_STEP
          break
        case "ArrowRight":
          delta = side === "left" ? KEYBOARD_RESIZE_STEP : -KEYBOARD_RESIZE_STEP
          break
        case "Home":
          delta = minValue - value
          break
        case "End":
          delta = maxValue - value
          break
        case "Enter":
          event.preventDefault()
          onReset()
          return
        default:
          return
      }

      event.preventDefault()
      onResize(delta)
    },
    [maxValue, minValue, onReset, onResize, side, value]
  )

  return (
    // z-10 so the handle — and its invisible hit-area extension — paints
    // above the chat-content sibling (same flex row, later in DOM, no
    // stacking context of its own). Without this, the `group-hover` never
    // fires on the right side because the chat panel's edge captures the
    // mouse events first.
    <div
      className={cn(
        "group relative z-10 h-full w-1 flex-shrink-0",
        flushInnerSeam &&
          "border border-solid border-x-0 border-f1-border-secondary bg-f1-special-page"
      )}
    >
      <div
        className={focusRing(
          "relative h-full w-full cursor-ew-resize rounded-sm"
        )}
        role="separator"
        aria-label={translations.navigation.sidePanel.resize}
        aria-orientation="vertical"
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
        aria-valuenow={value}
        aria-valuetext={translations.t("navigation.sidePanel.width", {
          width: value,
        })}
        tabIndex={0}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
        onKeyDown={handleKeyDown}
      >
        {/* Invisible hit-area extension so the 1-pixel line stays comfortable
            to grab with a mouse without widening the visible gap between
            canvas and chat. Extends a few pixels into each neighbour. */}
        <div aria-hidden className="absolute -inset-x-1 inset-y-0" />

        {/* Visible divider. Absolutely positioned and centered so it can grow
            on hover without pushing the surrounding layout. In canvas mode it
            starts as a 1px hairline rule; in chat-only mode it starts hidden
            and only reveals on hover / while dragging. */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 rounded-full",
            "transition-[width,background-color] duration-150 ease-out motion-reduce:transition-none",
            "w-px bg-transparent",
            "group-hover:w-1 group-hover:bg-f1-background-secondary-hover",
            isResizing && "!w-1 !bg-f1-background-secondary-hover"
          )}
        />
      </div>
    </div>
  )
}
