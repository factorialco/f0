import { F0Icon } from "@factorialco/f0-react"
import { SolidPlay } from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"

import {
  requestClockInWidget,
  toggleClockIn,
  useClockIn,
} from "../windows/clockInStore"
import { ClockDot } from "./ClockDot"
import { RollingTime } from "./RollingTime"

/**
 * Clock-in, in front of the recommendations and never part of them
 * (Angel, 2026-09-15). Before you clock in it is the one filled pill on
 * the row; after, it stays put as an outline with a pulsing dot and the
 * time running from 00:00, and clicking it brings the clock-in card out
 * underneath.
 */
function pad(value: number) {
  return String(value).padStart(2, "0")
}

export function ClockInPill() {
  const { clockedInAt } = useClockIn()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!clockedInAt) return
    // `now` was captured on MOUNT, which predates the click: re-sync
    // before ticking or the first second reads negative.
    setNow(Date.now())
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [clockedInAt])

  const seconds = clockedInAt
    ? Math.max(0, Math.floor((now - clockedInAt) / 1000))
    : 0
  const elapsed = `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`

  return (
    <button
      type="button"
      data-home-clockin-pill
      aria-label={clockedInAt ? `Clocked in, ${elapsed}` : "Clock-in"}
      onClick={clockedInAt ? requestClockInWidget : toggleClockIn}
      className={`f0c-pressable inline-flex h-8 shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded border-none pl-2.5 pr-3.5 text-base font-medium backdrop-blur-[8px] ${
        clockedInAt
          ? // The same ground f0's outline buttons stand on, so the
            // running clock matches the chevrons beside it (Angel,
            // 2026-09-15).
            "bg-f1-background-inverse-secondary text-f1-foreground ring-1 ring-inset ring-f1-border hover:bg-f1-background-tertiary dark:bg-f1-background-tertiary"
          : "bg-f1-background-accent-bold text-f1-foreground-inverse hover:bg-f1-background-accent-bold-hover"
      }`}
    >
      {clockedInAt ? (
        <span className="flex size-5 shrink-0 items-center justify-center">
          <ClockDot />
        </span>
      ) : (
        <span className="flex size-5 shrink-0 items-center justify-center text-f1-icon-inverse">
          <F0Icon icon={SolidPlay} size="md" color="currentColor" />
        </span>
      )}
      {clockedInAt ? <RollingTime value={elapsed} /> : <span>Clock-in</span>}
    </button>
  )
}
