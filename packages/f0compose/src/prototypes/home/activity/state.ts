import { useSyncExternalStore } from "react"

import { initialActivity } from "./mock-data"
import { reviewSteps, type ActivityRecord } from "./model"
let records = initialActivity
let progress = 0
const listeners = new Set<() => void>()
const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
const getSnapshot = () => records
export const readActivity = getSnapshot
function publish(next: ActivityRecord[]) {
  records = next
  listeners.forEach((listener) => listener())
}
export function useActivity() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}
export function advanceReview() {
  if (progress >= reviewSteps.length - 1) return
  progress += 1
  publish(
    records.map((row) =>
      row.id === "review"
        ? {
            ...row,
            detail: reviewSteps[progress],
            steps: [
              "12 receipts received and read.",
              `${9 + progress} expenses comply with the travel policy.`,
              reviewSteps[progress],
            ],
          }
        : row
    )
  )
}
export function resolveActivity(id: string) {
  const row = records.find((item) => item.id === id)
  if (!row || row.status !== "needs-you") return
  publish(
    records.map((item) =>
      item.id === id
        ? {
            ...item,
            status: "completed",
            owner: "You",
            when: "Just now",
            period: "0-today",
            decision: undefined,
            children: item.children?.map((child) => ({
              ...child,
              status: "completed",
              owner: "You",
              when: "Just now",
              detail: child.detail.replace(
                "above the meal allowance",
                "above the meal allowance · Exception approved by you"
              ),
              steps: [
                ...child.steps,
                "You approved this expense by exception.",
              ],
            })),
            title:
              item.decision === "expenses"
                ? "2 expenses approved by exception"
                : "Buddy assigned to Laura",
            detail:
              item.decision === "expenses"
                ? "€184 · Exception approved by you"
                : "Marta López · Assigned by you",
            steps: [
              ...item.steps,
              item.decision === "expenses"
                ? "You approved both expenses by exception."
                : "You assigned Marta López as Laura’s buddy.",
            ],
          }
        : item
    )
  )
}
