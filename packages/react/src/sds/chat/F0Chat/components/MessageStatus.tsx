import { type ReactNode } from "react"

import { motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type F0ChatMessage } from "../types"
import { formatStatusTime } from "../utils/natural-time"

/**
 * Footer under the conversation's last message: its time, plus — when the
 * message is mine and READ — the read state ("Read hh:mm", or "Read by N" in
 * groups). iMessage-style: only the latest message carries this line.
 * Optimistic on purpose (WhatsApp): sending/sent/delivered all show the bare
 * time — success isn't announced, a slow send is the SendingClock's job
 * (500ms) and a failure is the loud one ("Not sent" + retry alert).
 */
export const MessageStatus = ({
  message,
  isGroup,
}: {
  message: F0ChatMessage
  isGroup?: boolean
}): ReactNode => {
  const i18n = useI18n()
  const reducedMotion = useReducedMotion()

  const time = formatStatusTime(new Date(message.createdAt), new Date(), {
    today: i18n.date.groups.today,
    yesterday: i18n.date.groups.yesterday,
  })

  let label = time
  if (message.isMine) {
    // sending/sent/delivered fall through to the bare time: the label never
    // changes when the ack lands (same string, same key below) — zero flicker.
    if (message.status === "failed") label = `${i18n.chat.notSent} · ${time}`
    else if (message.status === "read")
      label =
        isGroup && message.readByCount
          ? i18n.t(
              message.readByCount === 1
                ? "chat.readBy.one"
                : "chat.readBy.other",
              { count: message.readByCount }
            )
          : `${i18n.chat.read} ${time}`
  }

  return (
    <div
      className={cn(
        "px-1 pt-1 text-sm text-f1-foreground-secondary",
        message.isMine ? "text-right" : "text-left"
      )}
    >
      {/* Fade the new label in as the status advances (sending → sent → read).
          Keying on the label remounts on change; no exit/`mode="wait"` so there's
          no sequential gap that makes the update feel laggy. */}
      <motion.span
        key={label}
        className="inline-block"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.15 }}
      >
        {label}
      </motion.span>
    </div>
  )
}
