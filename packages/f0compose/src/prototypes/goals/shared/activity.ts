import type { GoalRecord } from "./types"

/**
 * Activity entry for the goal detail timeline. Each entry represents an
 * action a user took on a goal — currently only "progress update"; the
 * structure leaves room for status changes / comments later.
 */
export type GoalActivity = {
  id: string
  goalId: string
  authorId: string
  date: string
  type: "progress-update"
  /** Numeric "current value" before the update. */
  previousValue: number
  /** Numeric "current value" after the update. */
  newValue: number
  note: string
  /**
   * Lifecycle of the entry. Defaults to `"completed"` (already happened).
   * Use `"in-progress"` for drafts the author is still working on, and
   * `"not-started"` for scheduled future check-ins that haven't begun yet.
   */
  status?: "completed" | "in-progress" | "not-started"
}

/**
 * Hand-crafted activity log. We seed enough entries for the highest-traffic
 * goals to mirror the design (Factorial ARR, Ship payroll integration, etc.)
 * and add a couple of entries for assorted goals so navigating around the
 * tree always shows something meaningful.
 */
export const goalActivityFixtures: GoalActivity[] = [
  // ─── g-001 — Factorial ARR ─────────────────────────────────────────
  {
    id: "act-000b",
    goalId: "g-001",
    authorId: "emp-002",
    date: "2026-05-12",
    type: "progress-update",
    previousValue: 10_000_000,
    newValue: 10_000_000,
    note: "Pending check-in with the EMEA sales lead before publishing May numbers.",
    status: "not-started",
  },
  {
    id: "act-000a",
    goalId: "g-001",
    authorId: "emp-002",
    date: "2026-05-05",
    type: "progress-update",
    previousValue: 10_000_000,
    newValue: 10_650_000,
    note: "Draft — waiting on finance to confirm the two enterprise renewals.",
    status: "in-progress",
  },
  {
    id: "act-001",
    goalId: "g-001",
    authorId: "emp-002",
    date: "2026-04-28",
    type: "progress-update",
    previousValue: 9_203_000,
    newValue: 10_000_000,
    note: "French sales team closed 20 big deals past week.",
  },
  {
    id: "act-002",
    goalId: "g-001",
    authorId: "emp-003",
    date: "2026-03-30",
    type: "progress-update",
    previousValue: 8_920_504,
    newValue: 9_203_000,
    note: "Jennifer retained 5 clients and closed 5 new deals.",
  },
  {
    id: "act-003",
    goalId: "g-001",
    authorId: "emp-003",
    date: "2026-03-02",
    type: "progress-update",
    previousValue: 8_400_000,
    newValue: 8_920_504,
    note: "Renewed two enterprise contracts in DACH region.",
  },
  {
    id: "act-004",
    goalId: "g-001",
    authorId: "emp-002",
    date: "2026-02-04",
    type: "progress-update",
    previousValue: 7_950_000,
    newValue: 8_400_000,
    note: "Kicked off Q1 outbound campaign — early pipeline up 18%.",
  },

  // ─── g-002 — Enhance store operations ──────────────────────────────
  {
    id: "act-004b",
    goalId: "g-002",
    authorId: "emp-003",
    date: "2026-05-10",
    type: "progress-update",
    previousValue: 35,
    newValue: 35,
    note: "Site visit scheduled for Lisbon flagship — will measure post-rollout impact.",
    status: "not-started",
  },
  {
    id: "act-005",
    goalId: "g-002",
    authorId: "emp-002",
    date: "2026-04-20",
    type: "progress-update",
    previousValue: 25,
    newValue: 35,
    note: "Rolled out new POS workflow across 3 flagship stores.",
  },

  // ─── g-003 — Close €1M in Q1 ───────────────────────────────────────
  {
    id: "act-006",
    goalId: "g-003",
    authorId: "emp-002",
    date: "2026-03-31",
    type: "progress-update",
    previousValue: 95,
    newValue: 100,
    note: "Hit Q1 target on the last working day — 🎯",
  },

  // ─── g-101 — Ship payroll integration ──────────────────────────────
  {
    id: "act-009",
    goalId: "g-101",
    authorId: "emp-001",
    date: "2026-05-08",
    type: "progress-update",
    previousValue: 60,
    newValue: 70,
    note: "Drafting QA notes — will publish once the staging deploy is green.",
    status: "in-progress",
  },
  {
    id: "act-010",
    goalId: "g-101",
    authorId: "emp-001",
    date: "2026-04-22",
    type: "progress-update",
    previousValue: 50,
    newValue: 60,
    note: "Backend endpoints scaffolded; webhook layer next.",
  },
  {
    id: "act-011",
    goalId: "g-101",
    authorId: "emp-001",
    date: "2026-03-15",
    type: "progress-update",
    previousValue: 35,
    newValue: 50,
    note: "API spec signed off by partner team.",
  },

  // ─── g-103 — Backend implementation ────────────────────────────────
  {
    id: "act-012",
    goalId: "g-103",
    authorId: "emp-001",
    date: "2026-04-25",
    type: "progress-update",
    previousValue: 30,
    newValue: 50,
    note: "6/12 endpoints shipped behind the feature flag.",
  },

  // ─── g-201 — Achieve SOC2 compliance ───────────────────────────────
  {
    id: "act-020",
    goalId: "g-201",
    authorId: "emp-016",
    date: "2026-04-12",
    type: "progress-update",
    previousValue: 60,
    newValue: 75,
    note: "Closed 12 of the 18 outstanding control gaps.",
  },
  {
    id: "act-021",
    goalId: "g-201",
    authorId: "emp-016",
    date: "2026-02-28",
    type: "progress-update",
    previousValue: 40,
    newValue: 60,
    note: "Vendor risk review completed; auditor scheduled for May.",
  },

  // ─── g-205 — Build analytics dashboard ─────────────────────────────
  {
    id: "act-030",
    goalId: "g-205",
    authorId: "emp-019",
    date: "2026-04-18",
    type: "progress-update",
    previousValue: 65,
    newValue: 80,
    note: "Dashboards live in beta with first 5 design partners.",
  },
]

export function getActivityForGoal(goalId: string): GoalActivity[] {
  return goalActivityFixtures
    .filter((a) => a.goalId === goalId)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

/**
 * Build the "progress over time" series for the sidebar chart. Anchors
 * the first point at the goal's start (progress 0) and the last point at
 * the current progress, with intermediate points derived from the
 * activity log if available.
 */
export function getProgressSeriesForGoal(
  goal: GoalRecord
): Array<{ date: string; progress: number }> {
  const activity = [...getActivityForGoal(goal.id)]
    .filter((a) => (a.status ?? "completed") === "completed")
    .reverse()
  if (activity.length === 0) {
    return [
      { date: goal.startDate, progress: 0 },
      { date: goal.dueDate, progress: goal.progress },
    ]
  }

  // Map activity to a 0–100 progress curve. For numeric goals the activity
  // stores raw values, so we normalise against the latest value as 100%.
  const latestNumeric = activity[activity.length - 1].newValue
  const normalize = (n: number) =>
    latestNumeric === 0
      ? 0
      : Math.round((n / latestNumeric) * goal.progress)

  const points = activity.map((a) => ({
    date: a.date,
    progress: normalize(a.newValue),
  }))

  return [{ date: goal.startDate, progress: 0 }, ...points]
}
