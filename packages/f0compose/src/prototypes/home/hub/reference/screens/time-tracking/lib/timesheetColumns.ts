import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import { findEmployee } from "@/prototypes/home/hub/reference/mocks"

import type { ReviewStatus, Timesheet } from "../mocks/timesheets"

import { formatBalance, formatDuration } from "./formatDuration"

const STR = {
  en: {
    employee: "Employee",
    alerts: "Alerts",
    distribution: "Distribution",
    workedPlanned: "Worked / Planned",
    balance: "Balance",
    extraHours: "Extra hours",
    reviewStatus: "Review status",
    approved: "Approved",
    pending: "Pending",
  },
  es: {
    employee: "Empleado",
    alerts: "Alertas",
    distribution: "Distribución",
    workedPlanned: "Trabajadas / Previstas",
    balance: "Balance",
    extraHours: "Horas extra",
    reviewStatus: "Estado de revisión",
    approved: "Aprobada",
    pending: "Pendiente",
  },
} as const

/**
 * Column definitions for the Time tracking review table. Renderers return
 * strings or compound `{ type, value }` cells — never JSX (OneDataCollection
 * maps these to F0 cell components). Mirrors the reference screen:
 * Employee · Alerts · Distribution · Worked/Planned · Balance · Extra hours ·
 * Review status.
 */
const DASH = "—"

function statusVariant(status: ReviewStatus): "positive" | "warning" {
  return status === "approved" ? "positive" : "warning"
}

function statusLabel(status: ReviewStatus, t: (typeof STR)[AppLocale]): string {
  return status === "approved" ? t.approved : t.pending
}

export function timesheetColumns(locale: AppLocale = "en") {
  const t = STR[locale]
  return [
    {
      id: "employee",
      label: t.employee,
      sorting: "employee",
      render: (item: Timesheet) => {
        const emp = findEmployee(item.employeeId)
        if (!emp) return item.employeeId
        const [firstName, ...rest] = emp.fullName.split(" ")
        return {
          type: "person" as const,
          value: { firstName, lastName: rest.join(" "), src: emp.avatarUrl },
        }
      },
    },
    {
      id: "alerts",
      label: t.alerts,
      render: (item: Timesheet) =>
        item.alerts > 0 ? String(item.alerts) : DASH,
    },
    {
      id: "distribution",
      label: t.distribution,
      render: (item: Timesheet) =>
        item.worked > 0 ? formatDuration(item.worked) : DASH,
    },
    {
      id: "worked",
      label: t.workedPlanned,
      sorting: "worked",
      render: (item: Timesheet) =>
        `${formatDuration(item.worked)} / ${formatDuration(item.planned)}`,
    },
    {
      id: "balance",
      label: t.balance,
      sorting: "balance",
      render: (item: Timesheet) => formatBalance(item.balance),
    },
    {
      id: "extraHours",
      label: t.extraHours,
      render: (item: Timesheet) =>
        item.extraHours != null ? formatDuration(item.extraHours) : DASH,
    },
    {
      id: "status",
      label: t.reviewStatus,
      render: (item: Timesheet) => ({
        type: "status" as const,
        value: {
          label: statusLabel(item.status, t),
          status: statusVariant(item.status),
        },
      }),
    },
  ]
}
