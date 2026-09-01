import { F0Button } from "@factorialco/f0-react"
import {
  ChevronLeft,
  ChevronRight,
  Reset,
  Sliders,
} from "@factorialco/f0-react/icons/app"

import type { CalendarEvent } from "./calendarFixtures"

import {
  CALENDAR_EVENTS,
  DAY_END_HOUR,
  DAY_START_HOUR,
  EVENT_TIMES,
  TODAY_INDEX,
  WEEK_DAYS,
  WEEK_START,
} from "./calendarFixtures"

/**
 * The week grid (Figma 2621:29173). Measured off the frame: a 40px day
 * header row, 80px per hour, a 64px gutter carrying the hour labels, and
 * the hairline for each hour drawn at the label's baseline rather than at
 * the top of its cell.
 *
 * Events are absolutely positioned from their decimal start/end — one
 * `HOUR_PX` constant drives both the rows and the blocks, so the two can
 * never fall out of step.
 */

const HOUR_PX = 80
const TOOLBAR_PX = 52
/**
 * Half an hour of lead-in above the first hour line, which is what the
 * frame draws between the day header and its "9 AM" rule.
 *
 * It has to be applied to the RULES AND THE EVENTS ALIKE. It was only on
 * the rules, so every block sat HOUR_PX/2 above its own hour line — a
 * 10:00 meeting drew 40px north of the "10 AM" rule.
 */
const GRID_TOP_PAD = HOUR_PX / 2
const GUTTER_PX = 64
const HEADER_PX = 40

function dayLabel(index: number): { name: string; date: number } {
  const d = new Date(WEEK_START)
  d.setUTCDate(WEEK_START.getUTCDate() + index)
  return { name: WEEK_DAYS[index], date: d.getUTCDate() }
}

/** A block does not fill its slot: the frame insets it 2px top and bottom
 *  (a 30-minute event is 36 tall in a 40px slot, an hour 76 in 80), which
 *  is what puts air between stacked meetings. Horizontally it sits 2px
 *  from the column's left edge with a 12px gutter on the right. */
const BLOCK_INSET_Y = 2
const BLOCK_INSET_LEFT = 2
const BLOCK_INSET_RIGHT = 12

function EventBlock({ event }: { event: CalendarEvent }) {
  const top =
    GRID_TOP_PAD + (event.start - DAY_START_HOUR) * HOUR_PX + BLOCK_INSET_Y
  const height = (event.end - event.start) * HOUR_PX - BLOCK_INSET_Y * 2
  const time = EVENT_TIMES[event.id]
  return (
    <div
      style={{
        top,
        height,
        left: BLOCK_INSET_LEFT,
        right: BLOCK_INSET_RIGHT,
      }}
      // NO items-start: it cross-sizes the spans shrink-to-fit, and
      // `truncate`'s nowrap makes min-content == max-content, so they grow
      // PAST the block and the ellipsis never fires — the title just got
      // guillotined mid-word. Top alignment comes from flex-col's default
      // justify-content anyway.
      className={`absolute flex flex-col overflow-hidden rounded-[6px] px-[7px] py-[7px] ${
        event.variant === "solid"
          ? "bg-f1-background-info-bold text-f1-foreground-inverse"
          : "border border-solid border-f1-border-info-bold bg-f1-background text-f1-foreground-info"
      }`}
    >
      <span className="truncate text-base font-medium">{event.title}</span>
      {time && <span className="truncate text-base">{time}</span>}
    </div>
  )
}

export function CalendarScreen() {
  const hours = Array.from(
    { length: DAY_END_HOUR - DAY_START_HOUR },
    (_, i) => DAY_START_HOUR + i
  )
  // The lead-in is part of the scrollable height, or the last hour clips.
  const gridHeight = GRID_TOP_PAD + hours.length * HOUR_PX
  // Nine slots need TEN boundaries — without the last one the 6 PM edge
  // is open and the blocks that end there stop against nothing.
  const lines = [...hours, DAY_END_HOUR]

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col">
      {/* Toolbar. The frame is 52px tall with its 32px controls at the
          TOP (y=0), so the leftover 20px becomes the clearance before the
          day header — items-start, not items-center.
          `h-13` is NOT a class in this build (it computed to 0px and the
          row collapsed to its content); heights here go through style. */}
      <div
        style={{ height: TOOLBAR_PX }}
        className="flex shrink-0 items-start justify-between px-4 pt-0"
      >
        <div className="flex h-8 items-center gap-1 rounded-[10px] border border-solid border-f1-border-secondary px-1">
          <F0Button
            variant="ghost"
            size="sm"
            icon={ChevronLeft}
            hideLabel
            label="Previous week"
          />
          <span className="px-1 text-base font-medium text-f1-foreground">
            Jun 1 → Jun 5
          </span>
          <F0Button
            variant="ghost"
            size="sm"
            icon={ChevronRight}
            hideLabel
            label="Next week"
          />
        </div>
        {/* Frame: two 32px view controls, a 1px divider, then the range
            selector. All visual only in the mock. */}
        <div className="flex items-center gap-2">
          {/* Outlined in the frame, not ghost — measured as two 32px
              bordered buttons 8px apart. */}
          <F0Button
            variant="outline"
            size="md"
            icon={Reset}
            hideLabel
            label="Reset to today"
          />
          <F0Button
            variant="outline"
            size="md"
            icon={Sliders}
            hideLabel
            label="Calendar settings"
          />
          <span className="mx-1 h-5 w-px shrink-0 bg-f1-border-secondary" />
          <F0Button variant="outline" size="md" label="Workweek" />
        </div>
      </div>

      <div className="home-window-scroll min-h-0 flex-1 overflow-auto">
        <div className="min-w-[720px]">
          {/* Day header row. Sticky so the days stay while the hours run
              under them — the frame is a static render, but a scrolling
              grid that loses its headers is unusable. */}
          <div
            // The frame's day header is the canvas surface (#FCFCFC), not
            // white. It still needs an OPAQUE ground because it is sticky
            // — see .f0c-canvas-surface in Home's stylesheet.
            //
            // Ruled top AND bottom, edge to edge — the frame runs both
            // rules across the hour gutter as well, unlike the hour lines
            // below, which start after it.
            className="f0c-canvas-surface sticky top-0 z-10 flex border-0 border-y border-solid border-f1-border-secondary"
            style={{ height: HEADER_PX }}
          >
            <div className="shrink-0" style={{ width: GUTTER_PX }} />
            {WEEK_DAYS.map((_, index) => {
              const { name, date } = dayLabel(index)
              const isToday = index === TODAY_INDEX
              return (
                <div
                  key={name}
                  className="flex flex-1 items-center gap-2 border-0 border-l border-solid border-f1-border-secondary px-3 text-base text-f1-foreground-secondary"
                >
                  <span className="truncate">{name}</span>
                  {isToday ? (
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-f1-background-accent-bold text-sm font-medium text-f1-foreground-inverse">
                      {date}
                    </span>
                  ) : (
                    <span>{date}</span>
                  )}
                </div>
              )
            })}
          </div>

          <div className="relative flex" style={{ height: gridHeight }}>
            {/* Hour gutter. The label sits at the LINE, not centred in the
                cell, so it reads as marking that hour's start. */}
            <div className="relative shrink-0" style={{ width: GUTTER_PX }}>
              {lines.map((hour, i) => (
                <div
                  key={hour}
                  style={{ top: GRID_TOP_PAD + i * HOUR_PX }}
                  className="absolute right-3 -translate-y-1/2 text-sm text-f1-foreground-secondary"
                >
                  {hour === 12
                    ? "12 PM"
                    : hour > 12
                      ? `${hour - 12} PM`
                      : `${hour} AM`}
                </div>
              ))}
            </div>
            {WEEK_DAYS.map((name, index) => (
              <div
                key={name}
                className="relative min-w-0 flex-1 border-0 border-l border-solid border-f1-border-secondary"
              >
                {lines.map((hour, i) => (
                  <div
                    key={hour}
                    style={{ top: GRID_TOP_PAD + i * HOUR_PX }}
                    className="absolute inset-x-0 border-0 border-t border-solid border-f1-border-secondary"
                  />
                ))}
                {CALENDAR_EVENTS.filter((e) => e.day === index).map((event) => (
                  <EventBlock key={event.id} event={event} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
