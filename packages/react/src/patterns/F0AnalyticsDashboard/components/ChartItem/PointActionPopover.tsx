import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { ButtonInternal } from "@/components/F0Button/internal"
import { One as OneIcon } from "@/icons/ai"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

const GAP = 8
const MIN_MARGIN = 8

export type PointActionAnchor = {
  /** Viewport coordinates of the click that opened this. */
  clientX: number
  clientY: number
}

export type PointActionPopoverProps = {
  /** Click position; null hides the popover. */
  anchor: PointActionAnchor | null
  /** Called when the action is chosen. */
  onAsk: () => void
  /** Called when the popover should close without acting. */
  onDismiss: () => void
}

/**
 * Floating single-action menu anchored to a clicked chart mark — the same shape
 * as the "Reply" affordance over a text selection in the chat, so quoting works
 * the same way wherever the user starts.
 *
 * Portalled to `document.body`: the widget clips its content (`overflow-hidden`
 * on the card, and charts sit inside scroll containers), which would cut a
 * popover positioned within the tree.
 */
export function PointActionPopover({
  anchor,
  onAsk,
  onDismiss,
}: PointActionPopoverProps) {
  const translations = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null
  )

  // Sit above the click, flipping below when that would overflow the viewport
  // top, and clamp horizontally so the button never hangs off-screen.
  useLayoutEffect(() => {
    if (!anchor) {
      setCoords(null)
      return
    }
    const el = containerRef.current
    if (!el) return

    const { offsetWidth: width, offsetHeight: height } = el
    let top = anchor.clientY - height - GAP
    if (top < MIN_MARGIN) top = anchor.clientY + GAP
    top = Math.min(
      Math.max(top, MIN_MARGIN),
      window.innerHeight - height - MIN_MARGIN
    )

    const centered = anchor.clientX - width / 2
    const left = Math.min(
      Math.max(centered, MIN_MARGIN),
      window.innerWidth - width - MIN_MARGIN
    )

    setCoords({ top, left })
  }, [anchor])

  // Dismiss on Escape or on a pointer press anywhere outside. The press is
  // captured so it closes even when the click lands on another chart mark,
  // which would otherwise re-anchor and re-open in the same gesture.
  useEffect(() => {
    if (!anchor) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss()
    }
    const onPointerDown = (e: PointerEvent) => {
      const el = containerRef.current
      if (el && e.target instanceof Node && el.contains(e.target)) return
      onDismiss()
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown, true)
    // Anchored to a viewport position taken at click time, so anything that
    // moves the mark underneath leaves this pointing at nothing. Dismiss
    // rather than re-measure: the mark may have scrolled out of the widget
    // entirely, and a popover that follows it out would be worse than one
    // that goes away. Capture, because the dashboard scrolls inside its own
    // containers and `scroll` doesn't bubble.
    const onViewportChange = () => onDismiss()
    window.addEventListener("scroll", onViewportChange, true)
    window.addEventListener("resize", onViewportChange)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown, true)
      window.removeEventListener("scroll", onViewportChange, true)
      window.removeEventListener("resize", onViewportChange)
    }
  }, [anchor, onDismiss])

  if (typeof document === "undefined") return null
  if (!anchor) return null

  return createPortal(
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: coords?.top ?? -9999,
        left: coords?.left ?? -9999,
        visibility: coords ? "visible" : "hidden",
      }}
      className={cn(
        "z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary",
        "drop-shadow"
      )}
    >
      <ButtonInternal
        type="button"
        variant="ghost"
        label={translations.ai.dashboardItem.askOne}
        icon={OneIcon}
        onClick={onAsk}
      />
    </div>,
    document.body
  )
}
