import type { ActivityRecord } from "./model"

import { reviewSteps } from "./model"
const expenseEntries: [string, string, number][] = [
  ["Ana García", "Taxi", 35],
  ["Pablo Ruiz", "Hotel", 240],
  ["Marta López", "Train", 95],
  ["Carlos Díaz", "Client lunch", 60],
  ["Lucía Martín", "Hotel", 220],
  ["Diego Pérez", "Taxi", 30],
  ["Elena Torres", "Flight", 310],
  ["Sara Romero", "Train", 85],
  ["Hugo Navarro", "Client lunch", 55],
  ["Inés Vidal", "Parking", 20],
]
const expenses: ActivityRecord[] = expenseEntries.map(
  ([owner, title, amount], i) => ({
    id: `expense-${i}`,
    kind: "expenses",
    person: {
      firstName: owner.split(" ")[0],
      lastName: owner.split(" ").slice(1).join(" "),
    },
    title: `${title} · ${owner}`,
    detail: `€${amount} · Approved within policy`,
    owner: "Expenses agent",
    status: "completed",
    when: "Today, 10:42",
    period: "0-today",
    steps: [
      "Receipt checked against the travel policy.",
      `€${amount} approved by the expenses agent.`,
    ],
  })
)
const activityRecords: ActivityRecord[] = [
  {
    id: "exceptions",
    kind: "expenses",
    breakdownLabel: "Expenses",
    title: "2 expenses need an exception",
    detail: "Client dinner · €184 · Above the meal allowance",
    owner: "Expenses agent",
    status: "needs-you",
    when: "Due today · Waiting 13 days",
    period: "0-today",
    decision: "expenses",
    steps: [
      "Ana García and Pablo Ruiz each submitted a €92 receipt for a client dinner.",
      "The meal allowance is €75 per person. Both receipts are attached.",
      "Approving authorizes both expenses, totalling €184, as an exception to the travel policy.",
    ],
  },
  {
    id: "buddy",
    person: { firstName: "Laura", lastName: "Martínez" },
    kind: "onboarding",
    breakdownLabel: "Tasks",
    title: "Choose a buddy for Laura",
    detail: "Marta López is available · Product Design, Barcelona",
    owner: "Onboarding agent",
    status: "needs-you",
    when: "Starts Monday",
    period: "0-today",
    decision: "buddy",
    steps: [
      "Laura joins Product Design in Barcelona on Monday.",
      "Marta López is on the same team and is available to be her buddy.",
      "Assigning Marta confirms the buddy for Laura’s onboarding.",
    ],
  },
  {
    id: "review",
    kind: "expenses",
    breakdownLabel: "Expenses",
    title: "Reviewing September expenses",
    detail: reviewSteps[0],
    owner: "Expenses agent",
    status: "in-progress",
    when: "Started today",
    period: "0-today",
    steps: [
      "12 receipts received and read.",
      "9 expenses comply with the travel policy.",
      "Checking the remaining receipts. No action is needed from you.",
    ],
  },
  {
    id: "laptop",
    person: { firstName: "Marcos", lastName: "Sánchez" },
    kind: "onboarding",
    breakdownLabel: "Tasks",
    title: "Preparing Marcos’s onboarding",
    detail: "Waiting for IT to confirm laptop delivery",
    owner: "Onboarding agent",
    status: "in-progress",
    when: "Started yesterday",
    period: "1-yesterday",
    steps: [
      "Documents and first-week agenda are ready.",
      "Laptop request sent to IT yesterday.",
      "Waiting for IT’s confirmation. No action is needed from you.",
    ],
  },
  {
    id: "expense-batch",
    kind: "expenses",
    breakdownLabel: "Expenses",
    title: "10 expenses approved",
    detail: "€1,150 · Approved within policy",
    owner: "Expenses agent",
    status: "completed",
    when: "Today, 10:42",
    period: "0-today",
    children: expenses,
    steps: [
      "10 receipts checked and approved within the travel policy.",
      "Total approved: €1,150. Open the expense breakdown to inspect each expense.",
    ],
  },
  {
    id: "documents",
    person: { firstName: "Laura", lastName: "Martínez" },
    kind: "documents",
    breakdownLabel: "Documents",
    title: "3 documents sent for signature",
    detail: "Laura · Contract, NDA and remote work policy",
    owner: "Onboarding agent",
    status: "completed",
    when: "Today, 09:15",
    period: "0-today",
    steps: [
      "Contract sent to Laura at 09:15.",
      "NDA and remote work policy sent at 09:15.",
      "Sending is complete. The documents are still awaiting signatures.",
    ],
  },
  {
    id: "holidays",
    kind: "time-off",
    breakdownLabel: "Time-off requests",
    title: "4 time-off requests approved",
    detail: "Ana, Pablo, Marta and Carlos",
    owner: "You",
    status: "completed",
    when: "Yesterday, 16:20",
    period: "1-yesterday",
    steps: [
      "Ana García · September 14–18.",
      "Pablo Ruiz · September 21–22.",
      "Marta López · September 25.",
      "Carlos Díaz · September 28–30.",
    ],
  },
  {
    id: "reminders",
    kind: "timesheet",
    breakdownLabel: "Reminders",
    title: "6 timesheet reminders sent",
    detail: "September timesheets · 6 employees",
    owner: "Time agent",
    status: "completed",
    when: "Monday, 09:00",
    period: "2-week",
    steps: [
      "6 employees with missing timesheets received a reminder.",
      "Reminder delivery is complete; timesheet submission remains pending.",
    ],
  },
]

type BreakdownEntry = [person: string, title: string, detail: string]
const breakdowns: Record<string, BreakdownEntry[]> = {
  exceptions: [
    ["Ana García", "Client dinner", "€92 · €17 above the meal allowance"],
    ["Pablo Ruiz", "Client dinner", "€92 · €17 above the meal allowance"],
  ],
  documents: [
    [
      "Laura Martínez",
      "Employment contract",
      "Sent for signature · Awaiting Laura’s signature",
    ],
    [
      "Laura Martínez",
      "Non-disclosure agreement",
      "Sent for signature · Awaiting Laura’s signature",
    ],
    [
      "Laura Martínez",
      "Remote work policy",
      "Sent for signature · Awaiting Laura’s signature",
    ],
  ],
  holidays: [
    ["Ana García", "Time-off request", "September 14–18 · Approved"],
    ["Pablo Ruiz", "Time-off request", "September 21–22 · Approved"],
    ["Marta López", "Time-off request", "September 25 · Approved"],
    ["Carlos Díaz", "Time-off request", "September 28–30 · Approved"],
  ],
  reminders: [
    [
      "Ana García",
      "Timesheet reminder",
      "September timesheet · Reminder delivered",
    ],
    [
      "Pablo Ruiz",
      "Timesheet reminder",
      "September timesheet · Reminder delivered",
    ],
    [
      "Marta López",
      "Timesheet reminder",
      "September timesheet · Reminder delivered",
    ],
    [
      "Carlos Díaz",
      "Timesheet reminder",
      "September timesheet · Reminder delivered",
    ],
    [
      "Lucía Martín",
      "Timesheet reminder",
      "September timesheet · Reminder delivered",
    ],
    [
      "Diego Pérez",
      "Timesheet reminder",
      "September timesheet · Reminder delivered",
    ],
  ],
  laptop: [
    ["Marcos Sánchez", "Prepare onboarding documents", "Documents ready"],
    ["Marcos Sánchez", "Prepare first-week agenda", "Agenda ready"],
    [
      "Marcos Sánchez",
      "Arrange laptop delivery",
      "Waiting for IT’s confirmation",
    ],
  ],
  review: [
    ...expenseEntries.map(
      ([name, title, amount]): BreakdownEntry => [
        name,
        title,
        `€${amount} · Checking against the travel policy`,
      ]
    ),
    [
      "Laura Martínez",
      "Hotel receipt",
      "Checking currency and policy allowance",
    ],
    ["Marcos Sánchez", "Train receipt", "Checking receipt details"],
  ],
}

export const initialActivity: ActivityRecord[] = activityRecords.map(
  (parent) => ({
    ...parent,
    children:
      parent.children ??
      breakdowns[parent.id]?.map(([name, title, detail], index) => ({
        id: `${parent.id}-item-${index}`,
        kind: parent.kind,
        person: {
          firstName: name.split(" ")[0],
          lastName: name.split(" ").slice(1).join(" "),
        },
        title: `${title} · ${name}`,
        detail,
        owner: parent.owner,
        status:
          parent.id === "laptop" && index < 2 ? "completed" : parent.status,
        when: parent.when,
        period: parent.period,
        steps: [
          detail,
          parent.id === "documents"
            ? "The sending task is complete; signing is still pending."
            : parent.id === "reminders"
              ? "The reminder was delivered; the timesheet may still need to be submitted."
              : parent.id === "exceptions"
                ? "Review and approve the two receipts together from the parent task."
                : `Handled by ${parent.owner}.`,
        ],
      })),
  })
)
