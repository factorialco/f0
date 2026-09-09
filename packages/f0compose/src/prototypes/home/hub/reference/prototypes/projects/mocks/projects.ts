/**
 * Mock data for the Projects module — modelled after the real Factorial
 * Projects list (name, code, people, client, tracked hours, tasks, billing,
 * status, cost-to-date, start/end dates).
 *
 * `CURRENT_USER_ID` is the signed-in employee. "Assigned to me" filters to
 * projects whose `memberIds` include this id; "Created by me" filters to
 * projects they own (`ownerId`). Picking emp-001 (Ada Lovelace) as "me" keeps
 * both views a meaningful subset of all projects.
 */

export type BillingType = "billable" | "non-billable"
export type ProjectStatus = "active"

export type Project = {
  id: string
  name: string
  code: string
  /** Employee ids of people assigned to the project (rendered as avatar stack). */
  memberIds: string[]
  /** Client company name, or null when internal / unassigned. */
  client: string | null
  trackedHours: number
  /** Completed vs. total tasks, or null when no tasks exist yet. */
  tasks: { completed: number; total: number } | null
  billing: BillingType
  status: ProjectStatus
  /** Cost accrued to date in EUR, or null when not tracked. */
  costToDate: number | null
  /** ISO start / end dates. */
  startDate: string
  endDate: string
  /** Creator — "Created by me" filters to projects owned by the current user. */
  ownerId: string
}

/** The signed-in employee. "Assigned to me" filters to projects they belong to. */
export const CURRENT_USER_ID = "emp-001"

export const projects: Project[] = [
  {
    id: "prj-log-env",
    name: "Proyecto de logística y envíos",
    code: "LOG_ENV",
    memberIds: ["emp-001", "emp-006", "emp-012"],
    client: null,
    trackedHours: 0,
    tasks: null,
    billing: "billable",
    status: "active",
    costToDate: 150,
    startDate: "2026-05-14",
    endDate: "2027-06-14",
    ownerId: "emp-001",
  },
  {
    id: "prj-pdg",
    name: "Proyecto de diseño gráfico",
    code: "PDG",
    memberIds: ["emp-007", "emp-009"],
    client: "Xavier Comércio",
    trackedHours: 0,
    tasks: { completed: 1, total: 8 },
    billing: "billable",
    status: "active",
    costToDate: 2000,
    startDate: "2026-05-14",
    endDate: "2027-02-14",
    ownerId: "emp-007",
  },
  {
    id: "prj-dis-int",
    name: "Proyecto de diseño de interiores",
    code: "DIS_INT",
    memberIds: ["emp-011", "emp-016"],
    client: null,
    trackedHours: 20,
    tasks: null,
    billing: "non-billable",
    status: "active",
    costToDate: null,
    startDate: "2026-04-14",
    endDate: "2026-08-14",
    ownerId: "emp-011",
  },
  {
    id: "prj-cons-leg",
    name: "Proyecto de consultoría legal (muestra)",
    code: "CONS_LEG",
    memberIds: ["emp-001", "emp-003", "emp-014", "emp-018"],
    client: "Xavier Comércio",
    trackedHours: 80,
    tasks: { completed: 0, total: 4 },
    billing: "billable",
    status: "active",
    costToDate: 3374.43,
    startDate: "2026-05-25",
    endDate: "2026-10-14",
    ownerId: "emp-003",
  },
  {
    id: "prj-ecom",
    name: "Proyecto de comercio electrónico (muestra)",
    code: "ECOM",
    memberIds: ["emp-001", "emp-005", "emp-010", "emp-017"],
    client: "Xavier Comércio",
    trackedHours: 140,
    tasks: { completed: 2, total: 11 },
    billing: "billable",
    status: "active",
    costToDate: 5678.35,
    startDate: "2026-03-14",
    endDate: "2026-12-14",
    ownerId: "emp-001",
  },
  {
    id: "prj-onboarding",
    name: "Proyecto de onboarding interno",
    code: "ONB_INT",
    memberIds: ["emp-002", "emp-008"],
    client: null,
    trackedHours: 36,
    tasks: { completed: 5, total: 9 },
    billing: "non-billable",
    status: "active",
    costToDate: null,
    startDate: "2026-02-01",
    endDate: "2026-07-31",
    ownerId: "emp-001",
  },
  {
    id: "prj-mobile-app",
    name: "Proyecto de app móvil (muestra)",
    code: "MOB_APP",
    memberIds: ["emp-001", "emp-004", "emp-013", "emp-019", "emp-020"],
    client: "Northwind Retail",
    trackedHours: 212,
    tasks: { completed: 7, total: 18 },
    billing: "billable",
    status: "active",
    costToDate: 9120.0,
    startDate: "2026-01-12",
    endDate: "2026-11-30",
    ownerId: "emp-004",
  },
  {
    id: "prj-data-migration",
    name: "Proyecto de migración de datos",
    code: "DATA_MIG",
    memberIds: ["emp-003", "emp-005"],
    client: "Globex",
    trackedHours: 58,
    tasks: { completed: 3, total: 6 },
    billing: "billable",
    status: "active",
    costToDate: 2410.5,
    startDate: "2026-04-02",
    endDate: "2026-09-15",
    ownerId: "emp-003",
  },
  {
    id: "prj-brand-refresh",
    name: "Proyecto de renovación de marca",
    code: "BRAND",
    memberIds: ["emp-009", "emp-011", "emp-016"],
    client: "Xavier Comércio",
    trackedHours: 44,
    tasks: { completed: 4, total: 12 },
    billing: "billable",
    status: "active",
    costToDate: 1875.0,
    startDate: "2026-03-20",
    endDate: "2026-08-20",
    ownerId: "emp-009",
  },
]
