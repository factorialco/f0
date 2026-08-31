import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useF0ChatChannelType } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"
import { CHAT_MEDIA_SCRIM_CLASS } from "../utils/media-layout"
import { formatClock } from "../utils/natural-time"

/**
 * The per-message time, WhatsApp-style. Three placements, one label:
 *
 * - `bubble` sits at the very END of the message: tucked onto the last line
 *   when there's room, dropped onto a line of its own when there isn't.
 * - `overlay` floats it over media that has nothing below, on a bottom scrim.
 * - `below` is the fallback for surfaces with no room (a voice card is a fixed
 *   58px strip whose right slot already holds duration ↔ speed) and for file
 *   chips, whose markup we don't own.
 *
 * `edited` joins the same cluster instead of trailing the body on its own —
 * again what WhatsApp does, and it keeps a single meta group per message.
 *
 * One type scale across all three (`text-xs`): the clock reads as the same
 * piece of information wherever it lands, and a message with a photo above its
 * caption showed two different sizes of the same time.
 *
 * Nothing renders on an announcement channel: those posts carry a SYNTHETIC
 * timestamp (they're seeded client-side, not sent), so a per-message minute
 * would be an invented precision. The day separator still carries the time.
 *
 * Always `aria-hidden`: the transcript has exactly one live region (the
 * delivery-status footer), and N announced clocks would make it unusable with a
 * screen reader. Callers that own the reading order pair this with a `sr-only`
 * copy AFTER the body — see `ChatMessageMetaLabel`.
 */
export const ChatMessageMeta = ({
  message,
  placement,
}: {
  message: F0ChatMessage
  placement: "bubble" | "overlay" | "below"
}): ReactNode => {
  const i18n = useI18n()
  const channelType = useF0ChatChannelType()
  const label = metaLabel(message, i18n.chat.edited)

  if (channelType === "announcement") return null

  if (placement === "overlay") {
    return (
      <>
        <span aria-hidden className={CHAT_MEDIA_SCRIM_CLASS} />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-1.5 right-2.5 text-xs leading-none text-f1-foreground-inverse [text-shadow:0_1px_2px_hsl(0_0%_0%/0.45)]"
          data-testid="chat-message-time"
        >
          {label}
        </span>
      </>
    )
  }

  if (placement === "below") {
    return (
      <span
        aria-hidden
        className="px-1 text-xs leading-none text-f1-foreground-tertiary"
        data-testid="chat-message-time"
      >
        {label}
      </span>
    )
  }

  // Two copies, the technique WhatsApp uses on the web.
  //
  // A float would pin the time to the FIRST line it meets, i.e. the top of the
  // bubble — wrong end. Instead an invisible twin trails the body and reserves
  // exactly the width the real one needs: if it fits on the last line the time
  // reads as a continuation of the text, and if it doesn't the twin wraps, the
  // bubble gains a line, and the pinned copy lands on it. No measuring, and it
  // stays correct for any body length or label ("22:14" vs "edited · 22:14").
  //
  // The pin's offsets mirror the body box's px-3.5 py-2.5.
  return (
    <>
      <span
        aria-hidden
        // Must track the pinned copy's type scale exactly — this is what
        // reserves its width, and a narrower twin lets the time overlap the
        // last word.
        className="invisible ml-1.5 inline-block select-none whitespace-nowrap align-bottom text-xs leading-none"
        data-testid="chat-message-time-reserve"
      >
        {label}
      </span>
      {/* `isolate` keeps it on the right of an RTL body — the sanitizer strips
          bidi controls, so the isolation has to come from a real element. */}
      <span
        aria-hidden
        className={cn(
          "absolute bottom-2.5 right-3 select-none whitespace-nowrap text-xs leading-none [unicode-bidi:isolate]",
          // `f1-foreground-secondary` is white 50% in dark, which lands just
          // under AA on the coloured bubbles; 60% clears it on every hue.
          "text-f1-foreground-tertiary dark:text-[hsl(var(--neutral-100)/0.6)]"
        )}
        data-testid="chat-message-time"
      >
        {label}
      </span>
    </>
  )
}

/** The same text, for assistive technology, placed in reading order. */
export const ChatMessageMetaLabel = ({
  message,
}: {
  message: F0ChatMessage
}): ReactNode => {
  const i18n = useI18n()
  const channelType = useF0ChatChannelType()
  // Announcing a made-up minute is worse than announcing nothing.
  if (channelType === "announcement") return null
  return <span className="sr-only">{metaLabel(message, i18n.chat.edited)}</span>
}

const metaLabel = (message: F0ChatMessage, editedLabel: string): string => {
  const time = formatClock(new Date(message.createdAt))
  // A tombstone never carries the edit history of what it replaced.
  return message.editedAt && !message.deleted
    ? `${editedLabel} · ${time}`
    : time
}
