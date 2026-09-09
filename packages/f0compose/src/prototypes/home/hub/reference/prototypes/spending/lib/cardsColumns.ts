import { findEmployee } from "@/prototypes/home/hub/reference/mocks"

import type { Card } from "../mocks/cards"
import type { SpendingStrings } from "../state"

/** Splits a shared employee's `fullName` into first / last for the person cell. */
function nameParts(fullName: string): { firstName: string; lastName: string } {
  const [firstName, ...rest] = fullName.split(" ")
  return { firstName, lastName: rest.join(" ") }
}

/**
 * Column definitions for the "All cards" table, matching the reference:
 * Cardholder (avatar + name), Card number, Card alias, Type, Service, Status.
 */
export function cardsColumns(t: SpendingStrings) {
  const c = t.cards
  return [
    {
      id: "cardholder",
      label: c.colCardholder,
      render: (item: Card) => {
        const employee = findEmployee(item.holderId)
        const { firstName, lastName } = nameParts(employee?.fullName ?? "—")
        return {
          type: "person" as const,
          value: { firstName, lastName, src: employee?.avatarUrl },
        }
      },
    },
    {
      id: "cardNumber",
      label: c.colCardNumber,
      render: (item: Card) => `•••• ${item.last4}`,
    },
    {
      id: "alias",
      label: c.colAlias,
      render: (item: Card) => item.alias,
    },
    {
      id: "type",
      label: c.colType,
      render: (item: Card) => ({
        type: "status" as const,
        value: { label: item.type, status: "neutral" as const },
      }),
    },
    {
      id: "service",
      label: c.colService,
      render: (item: Card) => item.service,
    },
    {
      id: "status",
      label: c.colStatus,
      render: (item: Card) => ({
        type: "status" as const,
        value: {
          label: item.status === "active" ? c.statusActive : c.statusInactive,
          status:
            item.status === "active"
              ? ("positive" as const)
              : ("neutral" as const),
        },
      }),
    },
  ]
}
