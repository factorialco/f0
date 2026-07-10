import { type ReactNode, useEffect, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Clock } from "@/icons/app"
import { cn } from "@/lib/utils"

import { formatClock } from "../utils/natural-time"

/** Fast sends never flash the clock — it only shows once a send has been in
 * flight this long (bad-network signal). Half a second keeps healthy-network
 * sends completely clean of it. */
const SENDING_CLOCK_DELAY_MS = 500

/**
 * Clock beside an own bubble while its message uploads (`status: "sending"`).
 * Revealed only after {@link SENDING_CLOCK_DELAY_MS}, so with a healthy
 * connection it never appears. A timer (not a CSS animation-delay) so the
 * reveal is testable with fake timers and the `aria-hidden` state stays honest.
 * It's an action-less F0Button so `hideLabel` surfaces the send time as its
 * tooltip; mounted only once visible so it's never an invisible focus target.
 */
export const SendingClock = ({ sentAt }: { sentAt: string }): ReactNode => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), SENDING_CLOCK_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])
  return (
    <span
      aria-hidden={!visible}
      className={cn(
        "flex items-center transition-opacity duration-150",
        visible ? "opacity-100" : "opacity-0"
      )}
      data-testid="chat-sending-clock"
    >
      {visible && (
        <F0Button
          variant="ghost"
          hideLabel
          label={formatClock(new Date(sentAt))}
          icon={Clock}
        />
      )}
    </span>
  )
}
