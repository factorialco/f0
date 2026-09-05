import { useCallback, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

/**
 * The side panel's inner edge, behaving exactly like the chat's `ResizeHandle`
 * (`kits/ai/F0AiChat/components/layout/ResizeHandle.tsx`): incremental deltas
 * committed on every move, so the content reflows WITH the drag rather than
 * catching up when it ends. Double-click resets the width.
 *
 * The window's drag gesture cannot be reused here: it paints the rect straight
 * to the DOM and commits on release, which would leave the frame's reserved
 * width trailing a whole gesture behind the panel.
 */
export const PanelResizeHandle = ({
  onResize,
  onReset,
  isResizing,
  setIsResizing,
}: {
  /** Pixels the panel grew by since the last move. */
  onResize: (deltaX: number) => void
  onReset: () => void
  isResizing: boolean
  setIsResizing: (value: boolean) => void
}) => {
  const startXRef = useRef(0)

  const handleMouseDown = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      startXRef.current = event.clientX
      setIsResizing(true)
    },
    [setIsResizing]
  )

  useEffect(() => {
    if (!isResizing) return

    const handleMouseMove = (event: MouseEvent): void => {
      // The panel is on the left, so dragging its right edge rightward widens it.
      const deltaX = event.clientX - startXRef.current
      startXRef.current = event.clientX
      onResize(deltaX)
    }
    const handleMouseUp = (): void => setIsResizing(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing, onResize, setIsResizing])

  return (
    <div
      // `data-f0-no-drag` keeps a grab on the edge from starting a window drag.
      data-f0-no-drag
      className="group absolute inset-y-0 right-0 z-20 w-1 cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onDoubleClick={onReset}
    >
      {/* Invisible hit-area extension so the hairline stays comfortable to grab
          without widening the visible seam. */}
      <div aria-hidden className="absolute -inset-x-1 inset-y-0" />

      {/* Visible divider: hidden at rest, grows on hover and while dragging. */}
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
