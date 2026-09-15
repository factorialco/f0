import { useEffect, useState } from "react"

import { requestClockInWidget, useClockIn } from "./clockInStore"

/**
 * The running clock, under Settings in the rail (Angel, 2026-09-15): once
 * you are clocked in, the rail carries a live dot and the elapsed time,
 * and clicking it brings the clock-in card out beside it. It is absent
 * when you are clocked out, so the rail only grows while something is
 * actually running.
 */
function elapsedLabel(since: number, now: number): string {
  const minutes = Math.max(0, Math.floor((now - since) / 60000))
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  return `${hours}h ${String(minutes % 60).padStart(2, "0")}`
}

export function RailClockIn() {
  const { clockedInAt } = useClockIn()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!clockedInAt) return
    setNow(Date.now())
    // Once a second, not once a minute: the label rolls over on its own
    // boundary rather than up to 59s late.
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [clockedInAt])

  if (!clockedInAt) return null

  return (
    <button
      data-home-clockin-rail
      aria-label={`Clocked in for ${elapsedLabel(clockedInAt, now)}`}
      onClick={requestClockInWidget}
      className="f0c-pressable flex cursor-pointer flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 hover:bg-f1-background-secondary"
    >
      <span className="size-2 rounded-full bg-f1-background-positive-bold" />
      <span className="text-[11px] font-semibold leading-3 text-f1-foreground-secondary">
        {elapsedLabel(clockedInAt, now)}
      </span>
    </button>
  )
}
