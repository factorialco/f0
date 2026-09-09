/**
 * Per-employee weekly timesheet rows for the Time tracking review screen.
 * Each row references a shared employee by id (never inline employee data —
 * names/avatars come from `@/mocks`). Durations are stored in minutes so the
 * column renderers can format them consistently.
 */
export type ReviewStatus = "pending" | "approved"

export type Timesheet = {
  id: string
  employeeId: string
  /** Minutes actually worked this week. */
  worked: number
  /** Minutes planned by the work schedule this week. */
  planned: number
  /** Balance in minutes (worked − planned). */
  balance: number
  /** Extra/overtime minutes, or null when none. */
  extraHours: number | null
  /** Number of attendance alerts (missing entries, overlaps…). */
  alerts: number
  status: ReviewStatus
}

/**
 * Three employees, start-of-week zero state (week of 12 Jan 2026): nothing
 * tracked yet, everyone pending review — mirrors the reference screen.
 */
export const timesheets: Timesheet[] = [
  {
    id: "ts-001",
    employeeId: "emp-005",
    worked: 0,
    planned: 0,
    balance: 0,
    extraHours: null,
    alerts: 0,
    status: "pending",
  },
  {
    id: "ts-002",
    employeeId: "emp-006",
    worked: 0,
    planned: 0,
    balance: 0,
    extraHours: null,
    alerts: 0,
    status: "pending",
  },
  {
    id: "ts-003",
    employeeId: "emp-017",
    worked: 0,
    planned: 0,
    balance: 0,
    extraHours: null,
    alerts: 0,
    status: "pending",
  },
]
