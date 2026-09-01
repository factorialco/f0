import { F0Button, F0Icon } from "@factorialco/f0-react"
import { ChevronDown, ChevronUp } from "@factorialco/f0-react/icons/app"
import { Fragment, useState } from "react"

import { EVENT_DAYS, SELECTED_DAY_INDEX, WEEK_START } from "./calendarFixtures"

/**
 * The Cal panel's month picker (Figma 2621:29173, the 289×295 block under
 * the panel navbar): month label with up/down steppers, ISO week numbers
 * down the left, Mo–Su columns, and the selected day as a filled disc.
 *
 * Generated from a date rather than hardcoded, so the grid is always
 * internally consistent — the frame's own is laid out for a different
 * month than its label claims (see calendarFixtures).
 */

const WEEKDAY_INITIALS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

/** ISO week number — the frame prints one per row. */
function isoWeek(date: Date): number {
  const d = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  )
  // Thursday decides the week's year, per ISO-8601.
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
}

/** Six Mon-first weeks covering the month, with the spill either side. */
function monthGrid(anchor: Date): Date[][] {
  const first = new Date(
    Date.UTC(anchor.getUTCFullYear(), anchor.getUTCMonth(), 1)
  )
  const start = new Date(first)
  start.setUTCDate(first.getUTCDate() - ((first.getUTCDay() + 6) % 7))
  return Array.from({ length: 6 }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => {
      const d = new Date(start)
      d.setUTCDate(start.getUTCDate() + week * 7 + day)
      return d
    })
  )
}

export function MiniMonth() {
  // The frame fills the 4th while the grid badges Tuesday as today —
  // those are different things (the day you are LOOKING at vs today), so
  // both stand, but the offset is named rather than a stray +3.
  const [selected, setSelected] = useState(
    () => WEEK_START.getUTCDate() + SELECTED_DAY_INDEX
  )
  const weeks = monthGrid(WEEK_START)
  const month = WEEK_START.getUTCMonth()

  return (
    <div className="flex flex-col gap-2 px-3 pb-3 pt-1">
      {/* No month label here: the frame keeps the month on the PAGE (the
          canvas navbar already says "June 2026"), so the panel carries
          only the steppers. */}
      <div className="flex items-center justify-end gap-1.5">
        <F0Button
          variant="outline"
          size="sm"
          icon={ChevronUp}
          hideLabel
          label="Previous month"
        />
        <F0Button
          variant="outline"
          size="sm"
          icon={ChevronDown}
          hideLabel
          label="Next month"
        />
      </div>
      {/* 24px week-number gutter then 7 even columns. Measured off the
          frame: 12px digits, a 32px cell and ~38px between rows — the
          grid is deliberately airier than a dense date picker. */}
      <div className="grid grid-cols-[24px_repeat(7,1fr)] gap-y-1.5">
        <span />
        {WEEKDAY_INITIALS.map((day) => (
          <span
            key={day}
            className="text-center text-sm text-f1-foreground-secondary"
          >
            {day}
          </span>
        ))}
        {weeks.map((week) => (
          <Fragment key={week[0].toISOString()}>
            <span className="self-center text-center text-sm text-f1-foreground-tertiary">
              {isoWeek(week[0])}
            </span>
            {week.map((date) => {
              const day = date.getUTCDate()
              const inMonth = date.getUTCMonth() === month
              const isSelected = inMonth && day === selected
              const hasEvents = inMonth && EVENT_DAYS.includes(day)
              return (
                <button
                  key={date.toISOString()}
                  onClick={() => inMonth && setSelected(day)}
                  aria-label={date.toISOString().slice(0, 10)}
                  aria-current={isSelected ? "date" : undefined}
                  disabled={!inMonth}
                  className={`relative mx-auto flex size-8 items-center justify-center rounded-sm text-sm ${
                    isSelected
                      ? "f0c-pressable cursor-pointer bg-f1-background-selected-bold font-medium text-f1-foreground-inverse"
                      : inMonth
                        ? "f0c-pressable cursor-pointer text-f1-foreground hover:bg-f1-background-secondary"
                        : // Spill days are inert, so they must not offer a
                          // pointer or a hover — the affordance was lying.
                          "text-f1-foreground-tertiary"
                  }`}
                >
                  {day}
                  {/* A day with something on it gets a tick underneath,
                      the way the frame marks the 26th. */}
                  {hasEvents && !isSelected && (
                    <span className="absolute bottom-0.5 h-0.5 w-2 rounded-full bg-f1-background-selected-bold" />
                  )}
                </button>
              )
            })}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

/** Collapsible group header matching the panel's other sections, but
 *  local to the calendar so it can sit outside SidebarGroup's gap rules. */
export function CalGroup({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex flex-col gap-0.5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center gap-1 rounded-[10px] py-1.5 pl-1.5 pr-2 text-left text-sm font-medium text-f1-foreground-secondary hover:bg-f1-background-secondary"
      >
        {label}
        <F0Icon
          icon={open ? ChevronDown : ChevronUp}
          size="xs"
          color="default"
        />
      </button>
      {open && children}
    </div>
  )
}
