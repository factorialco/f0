import { motion } from "motion/react"
import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useChatRenderConfig } from "../providers/ChatRenderConfigProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"
import { deliveryState } from "../utils/delivery-status"

/**
 * Footer under the conversation's last message: "Sent", advancing to "Read".
 *
 * Delivery only — no time. Every bubble carries its own clock now, so repeating
 * it here said the same thing twice and buried the one thing this row exists
 * for. Group messages only advance to "Read" once every other member appears in
 * the receipt count; identities and counts stay in the Info panel.
 */
export const MessageStatus = ({
  message,
  isGroup,
}: {
  message: F0ChatMessage
  isGroup?: boolean
}): ReactNode => {
  const i18n = useI18n()
  const { reducedMotion } = useChatRenderConfig()
  const { channel } = useF0Chat()

  const state = deliveryState(message, {
    isGroup,
    memberCount: channel.memberCount,
  })
  if (!state) return null

  const label =
    state === "failed"
      ? i18n.chat.notSent
      : state === "read"
        ? i18n.chat.read
        : i18n.chat.sent

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
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
