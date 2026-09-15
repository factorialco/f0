import { useEffect, useState } from "react"

import { ClockDot } from "../one/ClockDot"
import { requestClockInWidget, useClockIn } from "./clockInStore"

/**
 * The running clock in the rail, above Settings (Angel, 2026-09-15): once
 * you are clocked in the rail carries the breathing mark and how long you
 * have been at it, and clicking it brings the clock-in card out beside
 * it. It is absent when you are clocked out, so the rail only grows while
 * something is actually running.
 *
 * COARSE on purpose: this is a glance, not a stopwatch, so it counts in
 * minutes and hours and never animates (the pill under the composer is
 * the one that ticks).
 */
function coarse(minutes: number): string {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return rest === 0 ? `${hours}h` : `${hours}h ${rest}m`
}

export function RailClockIn() {
  const { clockedInAt } = useClockIn()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!clockedInAt) return
    setNow(Date.now())
    // Every 15s is enough to land on the minute without a per-second
    // render that nothing on screen would show.
    const interval = setInterval(() => setNow(Date.now()), 15000)
    return () => clearInterval(interval)
  }, [clockedInAt])

  if (!clockedInAt) return null

  const elapsed = coarse(Math.max(0, Math.floor((now - clockedInAt) / 60000)))

  return (
    <button
      data-home-clockin-rail
      aria-label={`Clocked in, ${elapsed}`}
      onClick={requestClockInWidget}
      // 12px, the size the rail's own labels carry (Angel, 2026-09-15).
      className="f0c-pressable flex cursor-pointer items-center gap-1 rounded-lg px-1.5 py-1 text-[12px] font-medium leading-4 text-f1-foreground hover:bg-f1-background-secondary"
    >
      <ClockDot size={8} />
      <span className="whitespace-nowrap">{elapsed}</span>
    </button>
  )
}
