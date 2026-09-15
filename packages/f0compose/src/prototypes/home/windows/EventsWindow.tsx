import type { CalendarEventProps } from "@factorialco/f0-react/dist/experimental"

import { CalendarEventList } from "@factorialco/f0-react/dist/experimental"

/**
 * The agenda widget, rendered by f0's OWN `CalendarEventList` (Angel,
 * 2026-09-15: the widgets were hand-copied from production and their
 * paddings had drifted). Production's Events spec emits
 * `homeSlot('event-list', { events })`, and this component is what that
 * slot resolves to, so the rows here are the production rows.
 */

/** A fixed "today" keeps the seeded agenda stable across sessions. */
const TODAY = new Date(2026, 6, 22)
const day = (offset: number, hour = 9) =>
  new Date(2026, 6, TODAY.getDate() + offset, hour)

export const homeEvents: CalendarEventProps[] = [
  {
    title: "Sarah's birthday",
    description: "Turns 30 🎉",
    color: "#E51943",
    isPending: false,
    fromDate: day(2),
  },
  {
    title: "Company holiday",
    description: "2 days off",
    color: "#0CA57F",
    isPending: false,
    fromDate: day(8),
    toDate: day(9),
  },
  {
    label: "Costa Brava",
    title: "Team offsite",
    description: "Not confirmed yet",
    color: "#F5A51C",
    isPending: true,
    fromDate: day(12),
    toDate: day(13),
  },
  {
    title: "Monthly all-hands",
    subtitle: "16:00",
    description: "Q3 roadmap update",
    color: "#5596F6",
    isPending: false,
    fromDate: day(16, 16),
  },
]

export function EventsWindow() {
  return (
    <div className="px-1 pb-2">
      <CalendarEventList events={homeEvents} showAllItems />
    </div>
  )
}
