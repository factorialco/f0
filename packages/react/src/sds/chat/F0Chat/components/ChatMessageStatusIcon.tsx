import { type ReactNode, useEffect, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Clock } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

/** Fast sends never flash the clock — it only shows once a send has been in
 * flight this long (bad-network signal). Half a second keeps healthy-network
 * sends completely clean of it. */
const SENDING_CLOCK_DELAY_MS = 500

/**
 * Clock beside an own bubble while its message uploads (`status: "sending"`).
 * Rendered from mount but revealed only after {@link SENDING_CLOCK_DELAY_MS},
 * so with a healthy connection it never appears. A timer (not a CSS
 * animation-delay) so the reveal is testable with fake timers and the
 * `aria-hidden` state stays honest.
 */
export const SendingClock = (): ReactNode => {
  const i18n = useI18n()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), SENDING_CLOCK_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])
  return (
    <span
      aria-hidden={!visible}
      className={cn(
        "flex items-center transition-opacity duration-150 px-1.5",
        visible ? "opacity-100" : "opacity-0"
      )}
      data-testid="chat-sending-clock"
    >
      <F0Icon
        icon={Clock}
        size="md"
        color="secondary"
        aria-label={i18n.chat.sending}
      />
    </span>
  )
}
