export type ActivityStatus = "needs-you" | "in-progress" | "completed"
export type ActivityRecord = {
  id: string
  kind?: "expenses" | "onboarding" | "documents" | "time-off" | "timesheet"
  person?: { firstName: string; lastName: string }
  breakdownLabel?: string
  title: string
  detail: string
  owner: string
  status: ActivityStatus
  when: string
  period: string
  steps: string[]
  children?: ActivityRecord[]
  decision?: "expenses" | "buddy"
}
export const activityViews: { id: ActivityStatus; label: string }[] = [
  { id: "needs-you", label: "Needs you" },
  { id: "in-progress", label: "In progress" },
  { id: "completed", label: "Completed" },
]
export const periodLabels: Record<string, string> = {
  "0-today": "Today",
  "1-yesterday": "Yesterday",
  "2-week": "Earlier this week",
}
export const reviewSteps = [
  "9 of 12 checked · Comparing 3 receipts with the travel policy",
  "10 of 12 checked · Validating the currency on 2 receipts",
  "11 of 12 checked · Waiting for Ana to upload a clearer receipt",
]
