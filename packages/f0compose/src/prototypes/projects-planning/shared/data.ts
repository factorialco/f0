import { employees } from "@/fixtures"

/**
 * Local project / planning fixture data.
 * Mirrors the structure visible in the production "Planificación" screen
 * — projects with a code prefix, color-coded category, assigned hours
 * per employee per day, plus absences.
 */

export type ProjectStatus = "active" | "paused" | "archived"

export type Project = {
  id: string
  /** Visible code shown as the avatar ("1S", "1D", "55", "AB", ...). */
  code: string
  name: string
  client?: string
  /** Category drives the badge tint. */
  category: "design" | "engineering" | "ops" | "sales" | "research"
  status: ProjectStatus
  /** Total hours tracked vs planned (e.g. 84h / 144h). */
  trackedHours: number
  plannedHours: number
  /** Hourly rate in EUR. */
  rate: number
  /** Lead employee id, for "Personas" tab. */
  leadId: string
}

export const projects: Project[] = [
  {
    id: "p-1",
    code: "1S",
    name: "1_inonboarding still",
    client: "Acme Inc.",
    category: "design",
    status: "active",
    trackedHours: 84,
    plannedHours: 144,
    rate: 65,
    leadId: employees[0].id,
  },
  {
    id: "p-2",
    code: "1D",
    name: "123 dfws",
    client: "Globex",
    category: "engineering",
    status: "active",
    trackedHours: 0,
    plannedHours: 0,
    rate: 80,
    leadId: employees[1].id,
  },
  {
    id: "p-3",
    code: "1P",
    name: "15_Margarita_24 Pi…",
    client: "Initech",
    category: "ops",
    status: "active",
    trackedHours: 0,
    plannedHours: 0,
    rate: 55,
    leadId: employees[2].id,
  },
  {
    id: "p-4",
    code: "1N",
    name: "15_Roser Nuno",
    client: "Umbrella",
    category: "research",
    status: "paused",
    trackedHours: 0,
    plannedHours: 102,
    rate: 70,
    leadId: employees[3].id,
  },
  {
    id: "p-5",
    code: "55",
    name: "50 50",
    client: "Hooli",
    category: "sales",
    status: "active",
    trackedHours: 0,
    plannedHours: 0,
    rate: 60,
    leadId: employees[4].id,
  },
  {
    id: "p-6",
    code: "AB",
    name: "a b",
    client: "Soylent",
    category: "engineering",
    status: "archived",
    trackedHours: 0,
    plannedHours: 0,
    rate: 75,
    leadId: employees[5].id,
  },
  {
    id: "p-7",
    code: "ML",
    name: "Mobile redesign",
    client: "Acme Inc.",
    category: "design",
    status: "active",
    trackedHours: 32,
    plannedHours: 80,
    rate: 70,
    leadId: employees[6].id,
  },
  {
    id: "p-8",
    code: "GO",
    name: "Growth onboarding",
    client: "Globex",
    category: "ops",
    status: "active",
    trackedHours: 12,
    plannedHours: 40,
    rate: 65,
    leadId: employees[7].id,
  },
  {
    // Featured project used by the WhatsApp Capture activity-log
    // sidepanel demo (see prototypes/whatsapp-capture-*). Reusing a
    // real-feeling Spanish-language project keeps the cross-prototype
    // story consistent for designers.
    id: "p-9",
    code: "AA",
    name: "Avenida Aragón 12",
    client: "Comunidad de propietarios",
    category: "engineering",
    status: "active",
    trackedHours: 96,
    plannedHours: 220,
    rate: 58,
    leadId: employees[0].id,
  },
]

/** Status of a single allocation cell (overbooked, absence, ok). */
export type AllocationKind = "ok" | "overbooked" | "absence"

export type Allocation = {
  projectId: string
  /** Day index 0..N (0 = first column day in the timeline). */
  dayIndex: number
  /** Hours assigned for that day. */
  hours: number
  /** Optional label override (e.g. "4h/día" range). */
  label?: string
  kind: AllocationKind
  /** Span in days for ranged allocations (default 1). */
  span?: number
}

/**
 * Allocations roughly matching the screenshot:
 * - Project 1 ("1S"): 8h on day 0, 4h with overbooked on day 0,
 *   4h/día range across days 3..7, 4h/día range across days 10..12,
 *   8h on day 13, 4h on day 14 (with overbooked).
 * - Project 4 ("1N"): 10h absence on day 0.
 * - Project 7 ("ML"): 6h on day 4.
 * - Project 8 ("GO"): 3h on day 6, 3h on day 11.
 */
export const allocations: Allocation[] = [
  { projectId: "p-1", dayIndex: 0, hours: 8, kind: "ok" },
  { projectId: "p-1", dayIndex: 0, hours: 4, kind: "overbooked" },
  {
    projectId: "p-1",
    dayIndex: 3,
    hours: 4,
    label: "4h/día",
    span: 5,
    kind: "ok",
  },
  {
    projectId: "p-1",
    dayIndex: 10,
    hours: 4,
    label: "4h/día",
    span: 3,
    kind: "ok",
  },
  { projectId: "p-1", dayIndex: 13, hours: 8, kind: "ok" },
  { projectId: "p-1", dayIndex: 14, hours: 4, kind: "ok" },
  { projectId: "p-1", dayIndex: 14, hours: 4, kind: "overbooked" },
  { projectId: "p-4", dayIndex: 0, hours: 10, kind: "absence" },
  { projectId: "p-7", dayIndex: 4, hours: 6, kind: "ok" },
  { projectId: "p-8", dayIndex: 6, hours: 3, kind: "ok" },
  { projectId: "p-8", dayIndex: 11, hours: 3, kind: "ok" },
]

/** Days shown across the timeline — matches "may 2026" header in the shot. */
export type TimelineDay = {
  /** Short label like "V 01" or "L 04". */
  label: string
  /** Day-of-month as string (1, 2, ...). */
  dayOfMonth: number
  /** Whether the day is a weekend (lighter tint). */
  weekend: boolean
}

const DAY_LABELS_ES = ["D", "L", "M", "M", "J", "V", "S"]

export const timelineDays: TimelineDay[] = Array.from({ length: 16 }).map(
  (_, i) => {
    // May 1, 2026 is a Friday → dayOfWeek = 5
    const dayOfMonth = i + 1
    const dayOfWeek = (5 + i) % 7
    return {
      label: `${DAY_LABELS_ES[dayOfWeek]} ${String(dayOfMonth).padStart(2, "0")}`,
      dayOfMonth,
      weekend: dayOfWeek === 0 || dayOfWeek === 6,
    }
  }
)

export type Role = {
  id: string
  name: string
  rate: number
  currency: "EUR"
  peopleCount: number
}

export const roles: Role[] = [
  { id: "r-1", name: "Product Manager", rate: 75, currency: "EUR", peopleCount: 4 },
  { id: "r-2", name: "Senior Engineer", rate: 95, currency: "EUR", peopleCount: 8 },
  { id: "r-3", name: "Engineer", rate: 65, currency: "EUR", peopleCount: 12 },
  { id: "r-4", name: "Designer", rate: 70, currency: "EUR", peopleCount: 5 },
  { id: "r-5", name: "Researcher", rate: 60, currency: "EUR", peopleCount: 3 },
  { id: "r-6", name: "Account Manager", rate: 55, currency: "EUR", peopleCount: 6 },
]
