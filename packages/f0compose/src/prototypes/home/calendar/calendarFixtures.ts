/**
 * Calendar fixtures (Figma 2621:29173).
 *
 * The frame's dates do not agree with each other — its navbar says "June
 * 2026", its range pill reads "Jun 31 → Aug 4" (no such day), its day
 * headers run Mon 31 / Tue 1 / Wed 2 / Thu 3 / Fri 4, and its mini month
 * is laid out for a 30-day month starting on a Sunday (November, not
 * June). Reproducing that would read as a bug in the prototype rather
 * than as the design, so the mock is anchored on ONE coherent week and
 * everything else derives from it. Structure and copy are the frame's.
 */

/** Monday of the week the grid shows. June 1 2026 really is a Monday. */
export const WEEK_START = new Date(Date.UTC(2026, 5, 1))
/** The day carrying the "today" badge in the frame — its second column. */
export const TODAY_INDEX = 1
/** The day the mini month shows as SELECTED — the frame fills the 4th,
 *  which is not today. Selecting a day you are not standing on is normal
 *  calendar behaviour, so the two deliberately differ. */
export const SELECTED_DAY_INDEX = 3

export const MONTH_LABEL = "June 2026"

/** Working week: the frame shows five columns, Mon–Fri. */
export const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const

/** 9 AM through 6 PM, the range the frame scrolls through. */
export const DAY_START_HOUR = 9
export const DAY_END_HOUR = 18

export type CalendarEvent = {
  id: string
  /** Column, 0 = Monday. */
  day: number
  /** Decimal hours, so 9.5 is 9:30. */
  start: number
  end: number
  title: string
  /** The frame draws two kinds: a solid block for the all-hands and
   *  all-day-ish blocks, an outlined chip for the short recurring ones. */
  variant: "solid" | "outline"
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
  // Monday — a stack of short recurring meetings.
  {
    id: "mon-trio",
    day: 0,
    start: 10,
    end: 10.5,
    title: "Trio sync | Foundations 10-10:30 AM",
    variant: "outline",
  },
  {
    id: "mon-weekly-1",
    day: 0,
    start: 10.5,
    end: 11,
    title: "Weekly | F0 & Mobile 10:30-11 AM",
    variant: "outline",
  },
  {
    id: "mon-allhands",
    day: 0,
    start: 11,
    end: 12,
    title: "Product All Hands",
    variant: "solid",
  },
  {
    id: "mon-weekly-2",
    day: 0,
    start: 12,
    end: 12.5,
    title: "Weekly | F0 & Mobile 10:30-11 AM",
    variant: "outline",
  },
  {
    id: "mon-trio-pm",
    day: 0,
    start: 13.5,
    end: 14,
    title: "Trio sync | Foundations 10-10:30 AM",
    variant: "outline",
  },
  {
    id: "mon-weekly-3",
    day: 0,
    start: 14,
    end: 14.5,
    title: "Weekly | F0 & Mobile 10:30-11 AM",
    variant: "outline",
  },
  {
    id: "mon-weekly-4",
    day: 0,
    start: 14.5,
    end: 15.5,
    title: "Weekly | F0 & Mobile",
    variant: "outline",
  },
  {
    id: "mon-weekly-5",
    day: 0,
    start: 15.5,
    end: 16,
    title: "Weekly | F0 & Mobile 10:30-11 AM",
    variant: "outline",
  },
  // Tue–Thu — the long alignment block the frame runs down three columns.
  {
    id: "tue-alignment",
    day: 1,
    start: 9.5,
    end: 18,
    title: "Product Alignment",
    variant: "solid",
  },
  {
    id: "wed-alignment",
    day: 2,
    start: 9.5,
    end: 18,
    title: "Product Alignment",
    variant: "solid",
  },
  {
    id: "thu-alignment",
    day: 3,
    start: 9.5,
    end: 18,
    title: "Product Alignment",
    variant: "solid",
  },
  // Friday.
  {
    id: "fri-routines",
    day: 4,
    start: 10,
    end: 10.5,
    title: "Routines experience 10-10:30 AM",
    variant: "outline",
  },
  {
    id: "fri-weekly",
    day: 4,
    start: 10.5,
    end: 11,
    title: "Weekly | F0 & Mobile 10:30-11 AM",
    variant: "outline",
  },
  {
    id: "fri-allhands",
    day: 4,
    start: 11,
    end: 12,
    title: "Factorial All Hands",
    variant: "solid",
  },
  {
    id: "fri-allhands-pm",
    day: 4,
    start: 16.5,
    end: 17.5,
    title: "Factorial All Hands",
    variant: "solid",
  },
]

/** Times the frame prints inside the solid blocks. The frame writes the
 *  11-12 one as "11-12 AM", which is wrong — noon is PM — so it is spelled
 *  out here the way the others already are. */
export const EVENT_TIMES: Record<string, string> = {
  "mon-allhands": "11 AM-12 PM",
  "tue-alignment": "9:30-6 PM",
  "wed-alignment": "9:30-6 PM",
  "thu-alignment": "9:30-6 PM",
  "fri-allhands": "4:30-5:30 PM",
  "fri-allhands-pm": "4:30-5:30 PM",
}

export const WORKPLACES = ["Barcelona", "Bilbao", "Madrid"] as const

export const TEAM_ABSENCE_FILTERS = [
  "Current employees",
  "My direct reports",
  "Employees whose time off I manage",
  "Out of office",
  "Out this month",
] as const

/** Days of the month with something on them — the picker ticks these,
 *  the way the frame marks the 26th. Derived from the week the grid
 *  shows, so the two can never disagree. */
export const EVENT_DAYS: number[] = [
  ...new Set(CALENDAR_EVENTS.map((e) => WEEK_START.getUTCDate() + e.day)),
]
