/**
 * Profile-specific mock data — the single employee whose profile the Overview
 * screen renders (Hellen Howard, matching the reference screen). Cross-cutting
 * entities (other employees, teams) would come from `@/mocks`, but everything
 * here is unique to this one profile dashboard.
 */

export type StatusVariant =
  | "positive"
  | "neutral"
  | "info"
  | "warning"
  | "critical"

/** Header identity + the right-hand "Details" panel. */
export const profile = {
  fullName: "Hellen Howard",
  manager: "Carlos Carter",
  email: "hellen@demof91c7d85.com",
  phone: "611719636",
  legalEntity: "Entidad legal Barcelona",
  startDate: "May 6, 2024",
  tenure: "2 years, 1 month and 18 days ago",
  workdays: [
    { label: "M", on: true },
    { label: "T", on: true },
    { label: "W", on: true },
    { label: "T", on: true },
    { label: "F", on: true },
    { label: "S", on: false },
    { label: "S", on: false },
  ],
  teams: ["Managers", "People"],
} as const

/** Status card — clock state. */
export const status = {
  state: "Clocked out",
  timer: "00:00",
} as const

/** Goals card. */
export const goals = {
  progress: 81,
  expected: 62,
  items: [
    "Mejorar la efectividad de la gestión de equipos",
    "Mejorar los RRHH y el desarrollo de los empleados",
  ],
} as const

/** Time off card — requested + current/upcoming events. */
export const timeOff = {
  requested: [
    { label: "Holidays", days: "5 days", from: "SEP 14", to: "SEP 20" },
  ],
  upcoming: [
    { label: "Holidays", days: "5 days", from: "JUL 6", to: "JUL 10" },
    { label: "Holidays", days: "2 days", from: "AUG 6", to: "AUG 7" },
    { label: "Holidays", days: "3 days", from: "SEP 21", to: "SEP 23" },
  ],
  moreCount: 2,
} as const

/** Timesheet card. */
export const timesheet = {
  month: "June",
  workedHours: 40,
  diffHours: -64,
  progress: 38,
} as const

/** Tasks card. */
export const tasks = {
  overdue: 8,
  due: 2,
  noDue: 0,
  items: [
    {
      title: "Revisar las condiciones contractuales con los…",
      due: "Due Jun 21",
      overdue: true,
    },
    {
      title: "Actualizar la documentación de cumplimiento de la normativa",
      due: "Due Jul 5",
      overdue: false,
    },
    {
      title: "Preparar la documentación legal",
      due: "Due Jun 21",
      overdue: true,
    },
    { title: "Configurar equipos", due: "Due Jun 15", overdue: true },
    { title: "Configurar oficinas", due: "Due Jun 17", overdue: true },
  ],
  moreCount: 5,
} as const

/** Performance card — score + the review-period bar chart. */
export const performance = {
  score: 3,
  chart: {
    categories: ["Jun 2025", "Mar 2026"],
    data: [3, 3],
  },
} as const

/**
 * Compensations card — the stacked area chart. One category per month, three
 * series matching the reference legend (total / base / additional).
 */
export const compensation = {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  series: [
    {
      name: "Total Compensation",
      color: "malibu",
      data: [62, 63, 63, 64, 65, 66],
    },
    { name: "Base salary", color: "viridian", data: [48, 48, 49, 49, 50, 50] },
    {
      name: "Additional compensation",
      color: "orange",
      data: [14, 15, 14, 15, 15, 16],
    },
  ],
} as const

/** My projects card. */
export const projects = {
  month: "June",
  items: [
    "Proyecto de comercio electrónico (muestra)",
    "Proyecto de consultoría legal (muestra)",
    "Proyecto de logística y envíos",
  ],
} as const

/** My expenses card. */
export const expenses = {
  month: "June",
  rows: [
    { label: "Approved", amount: "€0.00", variant: "info" as StatusVariant },
    {
      label: "In payroll",
      amount: "€0.00",
      variant: "positive" as StatusVariant,
    },
    { label: "Paid", amount: "€0.00", variant: "info" as StatusVariant },
    { label: "Pending", amount: "€0.00", variant: "warning" as StatusVariant },
    {
      label: "Sent to pay",
      amount: "€0.00",
      variant: "neutral" as StatusVariant,
    },
  ],
} as const

/** Training card — the six counters. */
export const training = {
  counters: [
    { label: "Pending group sessions", value: 0 },
    { label: "Enrolled", value: 1 },
    { label: "Started", value: 0 },
    { label: "Ongoing", value: 1 },
    { label: "Course completed", value: 1 },
    { label: "No participation", value: 0 },
  ],
} as const

/** Employee pulse — one entry per weekday. */
export const pulse = {
  days: [
    { label: "T" },
    { label: "F" },
    { label: "S" },
    { label: "S" },
    { label: "M" },
    { label: "T" },
    { label: "Today" },
  ],
} as const
