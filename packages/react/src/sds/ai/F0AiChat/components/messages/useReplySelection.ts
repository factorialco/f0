import { useCallback, useEffect, useState, type RefObject } from "react"

/**
 * Minimum character count for a selection to trigger the reply popover.
 * Avoids spurious popovers on accidental clicks / single-character drags.
 */
const MIN_SELECTION_LENGTH = 2

export type ReplySelectionAnchor = {
  /** Viewport-relative rect of the selection (from range.getBoundingClientRect). */
  rect: DOMRect
  /** Plain-text content of the selection, clamped to this message container. */
  text: string
}

type UseReplySelectionArgs = {
  /** Ref to the DOM node that wraps the selectable message content. */
  containerRef: RefObject<HTMLElement | null>
  /** When false the hook stays dormant (no listeners attached). */
  enabled?: boolean
}

/**
 * Clamp a selection range to the portion that lives inside `container` and
 * return both the clamped text and a sensible anchor rect. Works uniformly
 * for drag selections, triple-click, Ctrl+A / Select All, and shift+arrow
 * keyboard selections.
 */
function computeAnchor(
  range: Range,
  container: Element
): ReplySelectionAnchor | null {
  // `intersectsNode` is the cross-browser way to ask "does this selection
  // touch our element at all?". If it doesn't, the selection belongs to
  // another message (or elsewhere on the page) and we bail out.
  if (!range.intersectsNode(container)) return null

  const containerRange = document.createRange()
  containerRange.selectNodeContents(container)

  // Clone + clamp the range to the container bounds so `toString()` returns
  // only the portion of text that lives in *this* message — even when the
  // user selected half the page.
  const clamped = range.cloneRange()
  if (clamped.compareBoundaryPoints(Range.START_TO_START, containerRange) < 0) {
    clamped.setStart(containerRange.startContainer, containerRange.startOffset)
  }
  if (clamped.compareBoundaryPoints(Range.END_TO_END, containerRange) > 0) {
    clamped.setEnd(containerRange.endContainer, containerRange.endOffset)
  }

  const text = clamped.toString().trim()
  if (text.length < MIN_SELECTION_LENGTH) return null

  // Anchor the popover to the clamped range. If the clamped rect collapses
  // (can happen when the selection boundaries sit on a block edge), fall
  // back to the container's own rect so the button still has a place to go.
  const rangeRect = clamped.getBoundingClientRect()
  const hasUsableRect = rangeRect.width > 0 || rangeRect.height > 0
  const rect = hasUsableRect ? rangeRect : container.getBoundingClientRect()

  return { rect, text }
}

export function useReplySelection({
  containerRef,
  enabled = true,
}: UseReplySelectionArgs) {
  const [anchor, setAnchor] = useState<ReplySelectionAnchor | null>(null)

  const clear = useCallback(() => setAnchor(null), [])

  useEffect(() => {
    if (!enabled) return
    if (typeof window === "undefined") return

    const container = containerRef.current
    if (!container) return

    const readAndApply = () => {
      const selection = window.getSelection()
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
        setAnchor(null)
        return
      }
      setAnchor(computeAnchor(selection.getRangeAt(0), container))
    }

    // `mouseup` covers drag selections (including drags that end outside
    // the container). `keyup` covers Ctrl+A, Shift+Arrow, Home/End, etc.
    // We defer one tick so the browser has time to commit the new selection
    // — Chrome in particular sometimes reports the pre-event selection on
    // the very event that produced the change.
    const schedule = () => {
      window.setTimeout(readAndApply, 0)
    }

    // `selectionchange` only runs to clear the anchor when the selection
    // goes away (e.g. user clicks elsewhere). We don't open the popover
    // from here — it would flicker mid-drag.
    const onSelectionChange = () => {
      const selection = window.getSelection()
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
        setAnchor(null)
      }
    }

    document.addEventListener("mouseup", schedule)
    document.addEventListener("keyup", schedule)
    document.addEventListener("selectionchange", onSelectionChange)

    return () => {
      document.removeEventListener("mouseup", schedule)
      document.removeEventListener("keyup", schedule)
      document.removeEventListener("selectionchange", onSelectionChange)
    }
  }, [containerRef, enabled])

  return { anchor, clear }
}
