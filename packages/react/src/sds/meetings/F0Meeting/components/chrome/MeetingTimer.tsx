import { useEffect, useState } from "react"

import { formatDuration } from "../../utils/format-duration"

/**
 * Isolated so its one-second tick re-renders a single `<span>` rather than the
 * window chrome around it.
 */
export const MeetingTimer = ({ startedAt }: { startedAt?: string }) => {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!startedAt) return
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [startedAt])

  if (!startedAt) return null

  const start = Date.parse(startedAt)
  if (Number.isNaN(start)) return null

  return (
    <span className="tabular-nums" data-testid="meeting-timer">
      {formatDuration(Math.max(0, now - start))}
    </span>
  )
}
