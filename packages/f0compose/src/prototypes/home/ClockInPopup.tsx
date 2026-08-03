import { F0Button, F0Icon } from "@factorialco/f0-react"
import {
  ChevronDown,
  ChevronRight,
  Ellipsis,
  Office,
  SolidPlay,
  SolidStop,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const WORKDAY_MINUTES = 8 * 60

function pad(n: number): string {
  return String(n).padStart(2, "0")
}

/**
 * Time-tracking popup (Figma node 975:13056), anchored below the navbar
 * timer button. Clocking in starts a live counter: elapsed time ticks,
 * the progress bar fills against an 8h workday and the start time
 * replaces the "--:--" placeholder.
 */
export function ClockInPopup({
  anchor,
  onClose,
  clockedInAt,
  onToggleClock,
}: {
  anchor: { top: number; right: number }
  onClose: () => void
  clockedInAt: number | null
  onToggleClock: () => void
}) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (!clockedInAt) return
    // Re-sync immediately: `now` was captured when the popup OPENED,
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
  const leftMinutes = Math.max(0, WORKDAY_MINUTES - Math.floor(elapsedSeconds / 60))
  const leftLabel = `${Math.floor(leftMinutes / 60)}h ${pad(leftMinutes % 60)}m left`
  const progress = Math.min(1, elapsedSeconds / (WORKDAY_MINUTES * 60))

  return createPortal(
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div
        role="dialog"
        aria-label="Time tracking"
        className="f0c-popover fixed z-50 flex w-[340px] flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
        style={{ top: anchor.top, right: anchor.right, transformOrigin: "top right" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-1 pl-1">
          <span className="truncate text-base font-medium text-f1-foreground">
            {clockedInAt ? "Clocked in" : "Clock in"}
          </span>
          <div className="flex items-center">
            <F0Button variant="ghost" size="sm" icon={Ellipsis} hideLabel label="Options" />
            <F0Button
              variant="ghost"
              size="sm"
              icon={ChevronRight}
              hideLabel
              label="Open time tracking"
            />
          </div>
        </div>

        {/* Time + progress */}
        <div className="flex flex-col gap-1 px-1">
          <span className="text-[26px] font-semibold leading-8 tracking-[-0.26px] text-f1-foreground">
            {elapsedLabel}
          </span>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-f1-background-secondary">
            <div
              className="h-full rounded-full bg-f1-background-accent-bold transition-[width] duration-1000 ease-linear"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-base text-f1-foreground-secondary">
            <span>{startLabel}</span>
            <span>{leftLabel}</span>
          </div>
        </div>

        {/* Footer: office + clock action */}
        <div className="flex items-center justify-between pt-3">
          <button className="flex cursor-pointer items-center gap-1 rounded-[10px] py-1 pl-1 pr-1.5 hover:bg-f1-background-secondary">
            <F0Icon icon={Office} size="md" color="default" />
            <span className="text-base font-medium text-f1-foreground">
              Barcelona HQ
            </span>
            <F0Icon icon={ChevronDown} size="xs" color="secondary" />
          </button>
          <F0Button
            variant={clockedInAt ? "neutral" : "default"}
            size="md"
            icon={clockedInAt ? SolidStop : SolidPlay}
            label={clockedInAt ? "Clock out" : "Clock in"}
            onClick={onToggleClock}
          />
        </div>
      </div>
    </>,
    document.body
  )
}
