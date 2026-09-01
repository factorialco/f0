/**
 * The detail behind an inbox row (Figma 2725:444787 / 2725:447260).
 *
 * The rows themselves come from the Needs-you / For-you fixtures — see
 * `inboxTasks` in HomeNav — so this only carries what the DETAIL view
 * adds. Keyed by the task id, with a fallback so a new task never opens
 * an empty panel.
 */

export type TicketStatus = "open" | "in-progress" | "blocked"
export type TicketPriority = "critical" | "high" | "medium" | "low"

export type TicketDetail = {
  /** Human reference, shown beside the status pill. */
  reference: string
  status: TicketStatus
  priority: TicketPriority
  team: string
  /** Initial for the team's square avatar. */
  teamInitial: string
  assignee?: string
  category: string
  requestedBy: string
  requestedBySeed: string
  createdOn: string
  /** Rendered in the critical token when `overdue`. */
  timeRemaining: string
  overdue?: boolean
  description: string
}

const FALLBACK: TicketDetail = {
  reference: "T-00000",
  status: "open",
  priority: "medium",
  team: "Team",
  teamInitial: "T",
  category: "General",
  requestedBy: "Samuel Alonso",
  requestedBySeed: "samuel-a",
  createdOn: "12/05/2026",
  timeRemaining: "4 days left",
  description:
    "No description was added when this item was raised. Open the source record for the full context.",
}

export const TICKETS: Record<string, TicketDetail> = {
  "time-off-batch": {
    reference: "T-00012",
    status: "open",
    priority: "high",
    team: "People Ops",
    teamInitial: "P",
    category: "Time off",
    requestedBy: "Elias Skile",
    requestedBySeed: "elias-skile",
    createdOn: "28/05/2026",
    timeRemaining: "2 days left",
    description:
      "Twelve requests covering June and July. All sit inside the current policy and none of them overlap with another absence in the same team, so they can be approved as a batch.",
  },
  "recruitment-pick": {
    reference: "T-00021",
    status: "in-progress",
    priority: "critical",
    team: "Talent",
    teamInitial: "T",
    assignee: "Marta Ibáñez",
    category: "Recruitment",
    requestedBy: "Lucía Fernandez",
    requestedBySeed: "lucia-f",
    createdOn: "21/05/2026",
    timeRemaining: "3 days overdue",
    overdue: true,
    description:
      "Fourteen interviews are done and the panel scored Lucía 9.2 out of 10. The offer sits inside the band for Senior Designer, so this only needs your sign-off.",
  },
  "contract-renewals": {
    reference: "T-00034",
    status: "open",
    priority: "medium",
    team: "People Ops",
    teamInitial: "P",
    category: "Contracts",
    requestedBy: "Marta Ibáñez",
    requestedBySeed: "marta-ibanez",
    createdOn: "30/05/2026",
    timeRemaining: "6 days left",
    description:
      "Four renewals, already drafted and within standard policy and budget. Nothing in them departs from the template you approved in February.",
  },
  "promotion-marc": {
    reference: "T-00040",
    status: "open",
    priority: "high",
    team: "People Ops",
    teamInitial: "P",
    category: "Performance",
    requestedBy: "Marc Roig",
    requestedBySeed: "marc-roig",
    createdOn: "26/05/2026",
    timeRemaining: "1 day left",
    description:
      "Two years at Mid, three consecutive reviews at 4.5 or above, and the promotion committee has already signed off. The band change takes effect next payroll.",
  },
  "q2-bonus": {
    reference: "T-00047",
    status: "blocked",
    priority: "critical",
    team: "Finance",
    teamInitial: "F",
    assignee: "Diego Ferrer",
    category: "Compensation",
    requestedBy: "Diego Ferrer",
    requestedBySeed: "diego-ferrer",
    createdOn: "19/05/2026",
    timeRemaining: "23 days overdue",
    overdue: true,
    description:
      "€34,200 across fourteen people, calculated with the same formula as February and inside the €35k cap. Blocked until you confirm the list.",
  },
  "workshop-budget": {
    reference: "T-00051",
    status: "open",
    priority: "low",
    team: "Learning",
    teamInitial: "L",
    category: "Training",
    requestedBy: "Marta Ibáñez",
    requestedBySeed: "marta-ibanez",
    createdOn: "01/06/2026",
    timeRemaining: "9 days left",
    description:
      "€890 for a one-day design workshop, requested by Marta. It comes out of the Q2 L&D budget, which still has room.",
  },
  "contract-addendum": {
    reference: "T-00058",
    status: "open",
    priority: "high",
    team: "People Ops",
    teamInitial: "P",
    category: "Documents",
    requestedBy: "Marta Ibáñez",
    requestedBySeed: "marta-ibanez",
    createdOn: "02/06/2026",
    timeRemaining: "Due Friday",
    description:
      "An addendum to your contract covering the new remote-work allowance. It needs your signature before Friday.",
  },
  "shift-swap": {
    reference: "T-00061",
    status: "open",
    priority: "medium",
    team: "Shifts",
    teamInitial: "S",
    category: "Shifts",
    requestedBy: "Pablo Navarro",
    requestedBySeed: "pablo-n",
    createdOn: "03/06/2026",
    timeRemaining: "2 days left",
    description:
      "Pablo asks to take your Saturday shift and give you his Thursday. Both are in the same store and neither breaks the weekly hours cap.",
  },
}

export function ticketFor(taskId: string): TicketDetail {
  return TICKETS[taskId] ?? FALLBACK
}

export const STATUS_LABELS: Record<TicketStatus, string> = {
  open: "Open",
  "in-progress": "In progress",
  blocked: "Blocked",
}

export const PRIORITY_LABELS: Record<TicketPriority, string> = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low",
}
