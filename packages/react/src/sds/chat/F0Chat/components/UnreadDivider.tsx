import { type ReactNode } from "react"

import { motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"

/**
 * "New messages" divider (Stream-style), shown above the first unread message.
 * Stays put while you read; when you send a message the host flips `leaving` so
 * it fades out in place (rather than blinking out) just before its row is removed.
 */
export const UnreadDivider = ({
  leaving = false,
}: {
  leaving?: boolean
}): ReactNode => {
  const i18n = useI18n()
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      className="flex items-center gap-2 py-2"
      initial={false}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: reducedMotion ? 0 : 0.26, ease: "easeOut" }}
    >
      <div className="h-px flex-1 bg-f1-border" />
      <span className="text-md font-medium text-f1-foreground">
        {i18n.chat.newMessages}
      </span>
      <div className="h-px flex-1 bg-f1-border-secondary" />
    </motion.div>
  )
}
