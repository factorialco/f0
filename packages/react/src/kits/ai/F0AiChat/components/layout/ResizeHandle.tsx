import { useCallback, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

export const ResizeHandle = ({
  onResize,
  onReset,
  isResizing,
  setIsResizing,
  isCanvasMode,
  side = "right",
}: {
  onResize: (deltaX: number) => void
  onReset: () => void
  isResizing: boolean
  setIsResizing: (value: boolean) => void
  isCanvasMode?: boolean
  /** Edge the panel docks to. Determines which drag direction widens it. */
  side?: "left" | "right"
}) => {
  const startXRef = useRef(0)

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

  return (
    // z-10 so the handle — and its invisible hit-area extension — paints
    // above the chat-content sibling (same flex row, later in DOM, no
    // stacking context of its own). Without this, the `group-hover` never
    // fires on the right side because the chat panel's edge captures the
    // mouse events first.
    <div
      className={cn(
        "group relative z-10 h-full flex-shrink-0 cursor-ew-resize w-1",
        isCanvasMode &&
          "border border-solid border-x-0 border-f1-border-secondary bg-f1-special-page"
      )}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
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
          "transition-[width,background-color] duration-150 ease-out",
          "w-px bg-transparent",
          "group-hover:w-1 group-hover:bg-f1-background-secondary-hover",
          isResizing && "!w-1 !bg-f1-background-secondary-hover"
        )}
      />
    </div>
  )
}
