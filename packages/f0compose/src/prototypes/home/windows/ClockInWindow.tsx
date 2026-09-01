import { F0Button, F0Icon } from "@factorialco/f0-react"
import { Office, SolidPlay, SolidStop } from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"

import { toggleClockIn, useClockIn } from "./clockInStore"

const WORKDAY_MINUTES = 8 * 60

function pad(n: number): string {
  return String(n).padStart(2, "0")
}

/**
 * Clock in — the time-tracking widget (Figma 1044:8162 `clock-in-side`).
 *
 * Two things the earlier pass got wrong and this replicates properly: the
 * card carries NO status label above the counter (the header title says
 * "Clock in"), and the location row is a plain icon + name with no
 * chevron. Measurements off the frame: content `px-[6px]`, the counter
 * block `px-[6px] py-[8px]`, the footer `px-[4px]`, `gap-[2px]` between
 * them, and a 26px/32 semibold counter at -0.26 tracking.
 *
 * The 188px floating variant (Figma 2694:55372) is BACK as of 2026-08-31
 * — Clock in is the one widget Oskar wanted to keep floatable instead of
 * full-screen. It is this same body with `compact`, which drops the
 * location label to just its icon; nothing else changes.
 *
 * INFERRED: the design's progress fill is only ever shown at 0%, so the
 * clocked-in fill colour is not in the frame — it stays on f0's accent,
 * matching the Clock in button.
 */
export function ClockInWindow({ compact = false }: { compact?: boolean }) {
  const { clockedInAt } = useClockIn()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!clockedInAt) return
    // Re-sync immediately: `now` was captured when the widget MOUNTED,
    // which predates the clock-in click (elapsed would go negative).
    setNow(Date.now())
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [clockedInAt])

  const elapsedSeconds = clockedInAt
    ? Math.max(0, Math.floor((now - clockedInAt) / 1000))
    : 0
  const elapsedLabel = `${pad(Math.floor(elapsedSeconds / 60))}:${pad(elapsedSeconds % 60)}`
  const startLabel = clockedInAt
    ? new Date(clockedInAt).toTimeString().slice(0, 5)
    : "--:--"
  const leftMinutes = Math.max(
    0,
    WORKDAY_MINUTES - Math.floor(elapsedSeconds / 60)
  )
  const leftLabel = `${Math.floor(leftMinutes / 60)}h ${pad(leftMinutes % 60)}m left`
  const progress = Math.min(1, elapsedSeconds / (WORKDAY_MINUTES * 60))

  return (
    <div className="flex flex-col gap-0.5 px-1.5 pb-2.5">
      {/* Counter + progress */}
      <div className="flex flex-col rounded-md px-1.5 py-2">
        <span className="truncate text-[26px] font-semibold leading-8 tracking-[-0.26px] text-f1-foreground">
          {elapsedLabel}
        </span>
        {/* 20px row with an 8px bar, per the frame's ProgressBar. */}
        <div className="flex h-5 items-center">
          <div className="h-2 w-full overflow-hidden rounded-[10px] bg-f1-background-secondary">
            <div
              // scaleX, not width: the bar ticks every second for the
              // widget's whole open life, and width re-lays-out its
              // subtree each time. The parent clips, so the cap matches.
              className="h-full w-full origin-left rounded-[10px] bg-f1-background-accent-bold transition-transform duration-1000 ease-linear"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
        <div className="flex h-5 items-start justify-between text-base text-f1-foreground-secondary">
          <span className="truncate font-medium">{startLabel}</span>
          <span className="truncate">{leftLabel}</span>
        </div>
      </div>

      {/* Location + clock action */}
      <div className="flex items-center justify-between gap-2 px-1">
        <button
          aria-label="Barcelona HQ"
          className="f0c-pressable flex min-w-0 shrink-0 cursor-pointer items-center gap-2 rounded-[10px] p-1.5 hover:bg-f1-background-secondary"
        >
          <F0Icon icon={Office} size="md" color="default" />
          {/* The 188px card has no room for the site name, so the frame
              keeps only the icon (Figma 2694:55372). */}
          {!compact && (
            <span className="truncate text-base text-f1-foreground">
              Barcelona HQ
            </span>
          )}
        </button>
        <F0Button
          variant={clockedInAt ? "neutral" : "default"}
          size="md"
          icon={clockedInAt ? SolidStop : SolidPlay}
          label={clockedInAt ? "Clock out" : "Clock in"}
          onClick={toggleClockIn}
        />
      </div>
    </div>
  )
}

/** The 188px floating card's body (Figma 2694:55372) — the docked one
 *  with the location label dropped. Its own component so the registry
 *  keeps its "content takes no props" rule. */
export function ClockInWindowCompact() {
  return <ClockInWindow compact />
}
