import { useCallback, useRef, useState } from "react"

const GRID_GAP = 16
const GRID_COLS = 3

type ColSpan = 1 | 2 | 3

interface UseColumnResizeOptions {
  itemId: string
  currentSpan: ColSpan
  gridElement: HTMLDivElement | null
  onSpanChange: (itemId: string, newSpan: ColSpan) => void
}

interface UseColumnResizeResult {
  resizeHandleProps: {
    onPointerDown: (e: React.PointerEvent) => void
  }
  isResizing: boolean
  previewSpan: ColSpan | null
  /** Pixel width that follows the cursor during resize, null when idle */
  resizeWidthPx: number | null
}

export function useColumnResize({
  itemId,
  currentSpan,
  gridElement,
  onSpanChange,
}: UseColumnResizeOptions): UseColumnResizeResult {
  const [previewSpan, setPreviewSpan] = useState<ColSpan | null>(null)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeWidthPx, setResizeWidthPx] = useState<number | null>(null)
  const startXRef = useRef(0)
  const startSpanRef = useRef<ColSpan>(1)
  const startWidthRef = useRef(0)
  const columnWidthRef = useRef(0)
  const targetRef = useRef<HTMLElement | null>(null)
  const minWidthRef = useRef(0)
  const maxWidthRef = useRef(0)

  const onPointerMove = useCallback((e: PointerEvent) => {
    const delta = e.clientX - startXRef.current
    const deltaColumns = Math.round(delta / columnWidthRef.current)
    const raw = startSpanRef.current + deltaColumns
    const clamped = Math.max(1, Math.min(3, raw)) as ColSpan
    setPreviewSpan(clamped)

    const newWidth = startWidthRef.current + delta
    setResizeWidthPx(
      Math.max(minWidthRef.current, Math.min(maxWidthRef.current, newWidth))
    )
  }, [])

  const onPointerUp = useCallback(
    (e: PointerEvent) => {
      const delta = e.clientX - startXRef.current
      const deltaColumns = Math.round(delta / columnWidthRef.current)
      const raw = startSpanRef.current + deltaColumns
      const finalSpan = Math.max(1, Math.min(3, raw)) as ColSpan

      if (finalSpan !== currentSpan) {
        onSpanChange(itemId, finalSpan)
      }

      setPreviewSpan(null)
      setResizeWidthPx(null)
      setIsResizing(false)

      const el = targetRef.current
      if (el) {
        el.removeEventListener("pointermove", onPointerMove)
        el.removeEventListener("pointerup", onPointerUp)
        el.releasePointerCapture(e.pointerId)
        targetRef.current = null
      }
    },
    [currentSpan, itemId, onSpanChange, onPointerMove]
  )

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!gridElement) return

      e.stopPropagation()
      e.preventDefault()

      const gridWidth = gridElement.clientWidth
      const colWidth = (gridWidth - GRID_GAP * (GRID_COLS - 1)) / GRID_COLS

      const startWidth = currentSpan * colWidth + (currentSpan - 1) * GRID_GAP

      startXRef.current = e.clientX
      startSpanRef.current = currentSpan
      startWidthRef.current = startWidth
      columnWidthRef.current = colWidth
      minWidthRef.current = colWidth
      maxWidthRef.current = GRID_COLS * colWidth + (GRID_COLS - 1) * GRID_GAP
      targetRef.current = e.currentTarget as HTMLElement

      setIsResizing(true)
      setPreviewSpan(currentSpan)
      setResizeWidthPx(startWidth)

      const el = e.currentTarget as HTMLElement
      el.setPointerCapture(e.pointerId)
      el.addEventListener("pointermove", onPointerMove)
      el.addEventListener("pointerup", onPointerUp)
    },
    [gridElement, currentSpan, onPointerMove, onPointerUp]
  )

  return {
    resizeHandleProps: { onPointerDown },
    isResizing,
    previewSpan,
    resizeWidthPx,
  }
}
