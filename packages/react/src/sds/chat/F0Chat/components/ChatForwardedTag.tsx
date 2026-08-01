import { type ReactNode } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Reply } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

/**
 * Thin "Forwarded" marker above the whole message (over the attachments AND the
 * bubble) — mirrors the inline "edited" marker's muted styling
 * (Slack/WhatsApp-style). It sits outside the bubble so it still shows on a
 * text-less forwarded message (a lone image, file, location or voice note has
 * no bubble to nest it in).
 *
 * Unlike a reply quote it carries no jump-to-source: the original may live in a
 * conversation this viewer doesn't belong to, so it's a plain, non-interactive
 * label rather than a preview of the source message.
 */
export const ChatForwardedTag = (): ReactNode => {
  const i18n = useI18n()

  return (
    <span className="flex w-fit items-center gap-1 px-3.5 pt-1 text-sm text-f1-foreground-tertiary">
      <F0Icon icon={Reply} size="sm" />
      {i18n.chat.forwarded}
    </span>
  )
}
