import { employees, findEmployee } from "@/prototypes/home/hub/reference/mocks"

import type { Project } from "../mocks/projects"

import {
  DASH,
  billingLabel,
  billingVariant,
  formatCost,
  formatDate,
  formatHours,
  formatTasks,
} from "./format"

/**
 * Column definitions for the Projects OneDataCollection table — mirrors the
 * reference screen: Name · Code · People (avatar stack) · Client ·
 * Tracked hours · Completed tasks · Billing · Status · Cost-to-date ·
 * Start date · End date. Renderers return strings or compound `{ type, value }`
 * cells — never JSX (OneDataCollection maps these to F0 cell components).
 */
export function projectColumns() {
  return [
    {
      id: "name",
      label: "Name",
      sorting: "name",
      render: (item: Project) => item.name,
    },
    {
      id: "code",
      label: "Code",
      render: (item: Project) => item.code,
    },
    {
      id: "people",
      label: "People",
      render: (item: Project) => ({
        type: "avatarList" as const,
        value: {
          type: "person" as const,
          avatarList: item.memberIds.map((id) => {
            const emp = findEmployee(id) ?? employees[0]
            const [firstName, ...rest] = emp.fullName.split(" ")
            return { firstName, lastName: rest.join(" "), src: emp.avatarUrl }
          }),
          max: 3,
        },
      }),
    },
    {
      id: "client",
      label: "Client",
      sorting: "client",
      render: (item: Project) => item.client ?? DASH,
    },
    {
      id: "trackedHours",
      label: "Tracked hours",
      sorting: "trackedHours",
      render: (item: Project) => formatHours(item.trackedHours),
    },
    {
      id: "tasks",
      label: "Completed tasks",
      render: (item: Project) => formatTasks(item.tasks),
    },
    {
      id: "billing",
      label: "Billing",
      render: (item: Project) => ({
        type: "status" as const,
        value: {
          label: billingLabel(item.billing),
          status: billingVariant(item.billing),
        },
      }),
    },
    {
      id: "status",
      label: "Status",
      render: (_item: Project) => ({
        type: "status" as const,
        value: { label: "Active", status: "positive" as const },
      }),
    },
    {
      id: "costToDate",
      label: "Cost-to-date",
      sorting: "costToDate",
      render: (item: Project) => formatCost(item.costToDate),
    },
    {
      id: "startDate",
      label: "Start date",
      sorting: "startDate",
      render: (item: Project) => formatDate(item.startDate),
    },
    {
      id: "endDate",
      label: "End date",
      sorting: "endDate",
      render: (item: Project) => formatDate(item.endDate),
    },
  ]
}
