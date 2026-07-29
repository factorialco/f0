import { useCallback, useEffect, useRef } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import Minus from "@/icons/app/Minus"
import Plus from "@/icons/app/Plus"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

const KEYBOARD_RESIZE_STEP = 16

export const ResizeHandle = ({
  onResize,
  onReset,
  isResizing,
  setIsResizing,
  isCanvasMode,
  side = "right",
  value,
  minValue,
  maxValue,
}: {
  onResize: (deltaX: number) => void
  onReset: () => void
  isResizing: boolean
  setIsResizing: (value: boolean) => void
  isCanvasMode?: boolean
  /** Edge the panel docks to. Determines which drag direction widens it. */
  side?: "left" | "right"
  /** Current panel width in pixels. */
  value: number
  /** Minimum panel width in pixels. */
  minValue: number
  /** Maximum panel width in pixels. */
  maxValue: number
}) => {
  const startXRef = useRef(0)
  const translations = useI18n()

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      startXRef.current = e.clientX
      setIsResizing(true)
    },
    [setIsResizing]
  )

  const handleDoubleClick = useCallback(async () => {
    setIsResizing(true)
    await onReset()
    setIsResizing(false)
  }, [onReset, setIsResizing])

  useEffect(() => {
    if (!isResizing) return

    const handleMouseMove = (e: MouseEvent) => {
      // Right-docked: dragging the (left-edge) handle leftward widens the panel.
      // Left-docked: the handle is on the right edge, so dragging right widens.
      const deltaX =
        side === "left"
          ? e.clientX - startXRef.current
          : startXRef.current - e.clientX
      startXRef.current = e.clientX
      onResize(deltaX)
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing, onResize, setIsResizing, side])

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
        isCanvasMode &&
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
        <div aria-hidden className="absolute -inset-x-3 inset-y-0" />

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

      {/* Pointer alternative to dragging (WCAG 2.5.7). The controls stay out
          of the resting layout and reveal on hover or keyboard focus. */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-1 opacity-0 shadow-sm",
          "transition-opacity motion-reduce:transition-none",
          "group-hover:opacity-100 group-focus-within:opacity-100"
        )}
      >
        <ButtonInternal
          variant="ghost"
          size="sm"
          hideLabel
          label={translations.navigation.sidePanel.increaseWidth}
          icon={Plus}
          disabled={value >= maxValue}
          onClick={() => onResize(KEYBOARD_RESIZE_STEP)}
        />
        <ButtonInternal
          variant="ghost"
          size="sm"
          hideLabel
          label={translations.navigation.sidePanel.decreaseWidth}
          icon={Minus}
          disabled={value <= minValue}
          onClick={() => onResize(-KEYBOARD_RESIZE_STEP)}
        />
      </div>
    </div>
  )
}
