import { useEffect, useState } from "react"

import { ClockDot } from "../one/ClockDot"
import { RollingTime } from "../one/RollingTime"
import { requestClockInWidget, useClockIn } from "./clockInStore"

/**
 * The running clock in the rail, above Settings (Angel, 2026-09-15): once
 * you are clocked in the rail carries the breathing mark and the time in
 * the same mm:ss the pill shows, and clicking it brings the clock-in card
 * out beside it. It is absent when you are clocked out, so the rail only
 * grows while something is actually running.
 */
function pad(value: number) {
  return String(value).padStart(2, "0")
}

export function RailClockIn() {
  const { clockedInAt } = useClockIn()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!clockedInAt) return
    setNow(Date.now())
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [clockedInAt])

  if (!clockedInAt) return null

  const seconds = Math.max(0, Math.floor((now - clockedInAt) / 1000))
  const elapsed = `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`

  return (
    <button
      data-home-clockin-rail
      aria-label={`Clocked in, ${elapsed}`}
      onClick={requestClockInWidget}
      // text-base is f0's 14px: the 11px of the rail's own labels is for
      // words under a glyph, and this is a readout (Angel, 2026-09-15).
      className="f0c-pressable flex cursor-pointer items-center gap-1 rounded-lg px-1.5 py-1 text-base font-medium text-f1-foreground hover:bg-f1-background-secondary"
    >
      <ClockDot size={8} />
      <RollingTime value={elapsed} />
    </button>
  )
}
