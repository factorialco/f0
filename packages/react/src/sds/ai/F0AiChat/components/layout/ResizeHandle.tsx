import { useCallback, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

/**
 * Resize handle between the canvas panel (when present) and the chat panel.
 *
 * Visual goals:
 * - In the default chat-only layout, the handle is a 4-pixel hit strip with
 *   a rounded indicator that lights up on hover / while dragging.
 * - In canvas mode (`narrow=true`), the layout slot collapses to a thin
 *   1-pixel vertical rule so canvas and chat look visually flush with a
 *   hairline divider between them.
 *
 * Both modes use an invisible hit-area extension (`absolute -inset-x-1`) so
 * the user never has to precisely target a 1-pixel line: the mouse grabs
 * the handle anywhere within ~9-12 pixels. The visible line is positioned
 * absolutely and centered, letting it grow from 1px to 4px on hover without
 * reflowing the surrounding canvas/chat layout.
 */
export const ResizeHandle = ({
  onResize,
  onReset,
  isResizing,
  setIsResizing,
  narrow,
}: {
  onResize: (deltaX: number) => void
  onReset: () => void
  isResizing: boolean
  setIsResizing: (value: boolean) => void
  narrow?: boolean
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
      const deltaX = startXRef.current - e.clientX
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
  }, [isResizing, onResize, setIsResizing])

  return (
    <div
      className={cn(
        // z-10 so the handle — and its invisible hit-area extension —
        // paints above the chat-content sibling (same flex row, later
        // in DOM, no stacking context of its own). Without this, the
        // `group-hover` never fires on the right side because the chat
        // panel's edge captures the mouse events first.
        "group relative z-10 h-full flex-shrink-0 cursor-ew-resize",
        narrow
          ? "w-1 bg-f1-special-page border border-x-0 border-solid border-f1-border-secondary"
          : "w-1"
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
          narrow ? "w-0 bg-f1-background" : "w-1 bg-transparent",
          "group-hover:w-1 group-hover:bg-f1-background-secondary-hover",
          isResizing && "!w-1 !bg-f1-background-secondary-hover"
        )}
      />
    </div>
  )
}
