import { employees, findEmployee } from "@/prototypes/home/hub/reference/mocks"

import type { TrainingRequest } from "../mocks/requests"

import {
  formatCost,
  formatDate,
  requestStatusLabel,
  requestStatusVariant,
} from "./format"

/**
 * Column definitions for the Training requests OneDataCollection table:
 * Requester · Course · Requested on · Status · Estimated cost. Renderers return
 * strings or compound `{ type, value }` cells — never JSX (OneDataCollection
 * maps these to F0 value-display cell components).
 */
export function requestColumns() {
  return [
    {
      id: "requester",
      label: "Requester",
      sorting: "requester",
      render: (item: TrainingRequest) => {
        const emp = findEmployee(item.requesterId) ?? employees[0]
        const [firstName, ...rest] = emp.fullName.split(" ")
        return {
          type: "person" as const,
          value: { firstName, lastName: rest.join(" "), src: emp.avatarUrl },
        }
      },
    },
    {
      id: "course",
      label: "Course",
      sorting: "course",
      render: (item: TrainingRequest) => item.courseName,
    },
    {
      id: "requestedAt",
      label: "Requested on",
      sorting: "requestedAt",
      render: (item: TrainingRequest) => formatDate(item.requestedAt),
    },
    {
      id: "status",
      label: "Status",
      render: (item: TrainingRequest) => ({
        type: "status" as const,
        value: {
          label: requestStatusLabel(item.status),
          status: requestStatusVariant(item.status),
        },
      }),
    },
    {
      id: "cost",
      label: "Estimated cost",
      sorting: "cost",
      render: (item: TrainingRequest) => formatCost(item.cost),
    },
  ]
}
