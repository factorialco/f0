/**
 * The signed-in employee's Time off detail page. Mirrors the reference screen:
 * two policy assignments (Urlaub, Mobiles Arbeit), a year-at-a-glance calendar
 * for 2026 with taken days and a blocked period, and no past absences yet.
 * "Today" is 24 Jun 2026 to match the rest of the prototype.
 */

export type PolicyAssignment = {
  name: string
  /** Effective range of the policy, e.g. "From 1 Jan to 31 Dec 2026". */
  period: string
  /** Allowance unit shown as a tag, e.g. "Days". */
  unit: string
  accrued: number
  available: number
  taken: number
}

export const assignmentFrom = "From 13 September 2024"

export const policies: PolicyAssignment[] = [
  {
    name: "Urlaub",
    period: "From 1 Jan to 31 Dec 2026",
    unit: "Days",
    accrued: 23,
    available: 23,
    taken: 0,
  },
  {
    name: "Mobiles Arbeit",
    period: "From 1 Jan to 31 Dec 2026",
    unit: "Days",
    accrued: 20,
    available: 20,
    taken: 0,
  },
]

export const calendarYear = 2026

/** Today, as month index (0-based) + day-of-month. */
export const today = { month: 5, day: 24 }

/** Days off taken, keyed by month index (0 = January). */
export const takenByMonth: Record<number, number[]> = {
  0: [1, 6],
  1: [2],
  2: [3, 16, 17, 30],
  3: [6, 7, 8, 30],
  4: [5, 14, 25],
  5: [9, 10, 19, 20],
  6: [3],
  7: [15],
  8: [12],
  9: [16],
  10: [7, 16],
  11: [1, 7, 8, 24, 25, 26],
}

/** Blocked periods (company-wide), keyed by month index. */
export const blockedByMonth: Record<number, number[]> = {
  10: [21, 22, 23],
  11: [13, 19, 20, 21, 22, 23, 27, 28, 29, 30, 31],
}
