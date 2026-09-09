import { employees } from "@/prototypes/home/hub/reference/mocks"

import { CURRENT_USER_ID } from "../state"

/**
 * Company cards. "My cards" (the current user's) mixes software-service virtual
 * cards (Slack, Google Workspace, …) with a benefits card; "All cards" is the
 * company-wide list of benefits cards, one per cardholder. Mirrors the
 * Spending → Cards reference screens. Holder ids reference shared `@/mocks`.
 */
export type CardService =
  | "Benefits"
  | "Slack"
  | "Google Workspace"
  | "Pagerduty"
  | "Dropbox"

export type CardStatus = "active" | "inactive"

export type Card = {
  id: string
  holderId: string
  /** Card alias shown as the card title / alias column. */
  alias: string
  type: "Virtual"
  service: CardService
  /** Last 4 digits (masked elsewhere). */
  last4: string
  status: CardStatus
}

const benefitsAlias = (holderId: string) => {
  const name = employees.find((e) => e.id === holderId)?.fullName ?? "—"
  return `Tarjeta de beneficios para ${name}`
}

/** The current user's own cards — the "My cards" card grid. */
const myCards: Card[] = [
  {
    id: "card-me-1",
    holderId: CURRENT_USER_ID,
    alias: "Slack",
    type: "Virtual",
    service: "Slack",
    last4: "1234",
    status: "active",
  },
  {
    id: "card-me-2",
    holderId: CURRENT_USER_ID,
    alias: "Google Workspace",
    type: "Virtual",
    service: "Google Workspace",
    last4: "1234",
    status: "active",
  },
  {
    id: "card-me-3",
    holderId: CURRENT_USER_ID,
    alias: "Pagerduty",
    type: "Virtual",
    service: "Pagerduty",
    last4: "1234",
    status: "active",
  },
  {
    id: "card-me-4",
    holderId: CURRENT_USER_ID,
    alias: "Dropbox",
    type: "Virtual",
    service: "Dropbox",
    last4: "1234",
    status: "active",
  },
  {
    id: "card-me-5",
    holderId: CURRENT_USER_ID,
    alias: benefitsAlias(CURRENT_USER_ID),
    type: "Virtual",
    service: "Benefits",
    last4: "1234",
    status: "active",
  },
  {
    id: "card-me-6",
    holderId: CURRENT_USER_ID,
    alias: "Google Workspace",
    type: "Virtual",
    service: "Google Workspace",
    last4: "1234",
    status: "inactive",
  },
]

/** One company benefits card per other cardholder — the "All cards" table. */
const benefitsCards: Card[] = employees.slice(1, 15).map((e, i) => ({
  id: `card-ben-${i + 1}`,
  holderId: e.id,
  alias: benefitsAlias(e.id),
  type: "Virtual" as const,
  service: "Benefits" as const,
  last4: "1234",
  status: "active" as const,
}))

export const cards: Card[] = [...myCards, ...benefitsCards]
