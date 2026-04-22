import { useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { ButtonInternal } from "@/components/F0Button/internal"
import { Quote } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type { ReplySelectionAnchor } from "./useReplySelection"

const GAP = 8
const MIN_MARGIN = 8

export type ReplyPopoverProps = {
  /** Selection anchor; null hides the popover. */
  anchor: ReplySelectionAnchor | null
  /** Called when the Reply button is clicked. */
  onReply: (text: string) => void
}

/**
 * Floating "Reply" button anchored above a text selection inside a chat
 * message. Rendered via a portal to `document.body` so transform/stacking
 * contexts in the chat shell don't clip it.
 */
export function ReplyPopover({ anchor, onReply }: ReplyPopoverProps) {
  const translation = useI18n()
  const ref = useRef<HTMLButtonElement>(null)
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null
  )

  // Position above the selection, flipping below if it would overflow the
  // viewport top. Horizontally clamped to keep the button fully on-screen.
  useLayoutEffect(() => {
    if (!anchor) {
      setCoords(null)
      return
    }
    const el = ref.current
    if (!el) return

    const btnWidth = el.offsetWidth
    const btnHeight = el.offsetHeight
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    let top = anchor.rect.top - btnHeight - GAP
    if (top < MIN_MARGIN) {
      top = anchor.rect.bottom + GAP
    }
    top = Math.min(
      Math.max(top, MIN_MARGIN),
      viewportHeight - btnHeight - MIN_MARGIN
    )

    const centered = anchor.rect.left + anchor.rect.width / 2 - btnWidth / 2
    const left = Math.min(
      Math.max(centered, MIN_MARGIN),
      viewportWidth - btnWidth - MIN_MARGIN
    )

    setCoords({ top, left })
  }, [anchor])

  if (typeof document === "undefined") return null
  if (!anchor) return null

  const label = translation.ai.reply

  return createPortal(
    <div
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
        ref={ref}
        type="button"
        variant="ghost"
        label={label}
        icon={Quote}
        onClick={() => {
          onReply(anchor.text)
        }}
      />
    </div>,
    document.body
  )
}
