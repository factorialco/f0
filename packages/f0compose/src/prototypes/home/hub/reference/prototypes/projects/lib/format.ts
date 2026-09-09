import type { BillingType } from "../mocks/projects"
import type { CellStatus } from "./statusVariants"

/** Em dash used for empty / not-tracked values, matching the reference table. */
export const DASH = "—"

/** "140h", "0h" — tracked-hours display from the reference screen. */
export function formatHours(hours: number): string {
  return `${hours}h`
}

/** "2/11" completed-vs-total, or a dash when the project has no tasks yet. */
export function formatTasks(
  tasks: { completed: number; total: number } | null
): string {
  return tasks ? `${tasks.completed}/${tasks.total}` : DASH
}

/** "€5,678.35", or a dash when cost is not tracked. */
export function formatCost(cost: number | null): string {
  if (cost == null) return DASH
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(cost)
}

/** "14/5/2026" — day/month/year, matching the reference table. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number)
  return `${d}/${m}/${y}`
}

export function billingLabel(billing: BillingType): string {
  return billing === "billable" ? "Billable" : "Non-billable"
}

export function billingVariant(billing: BillingType): CellStatus {
  return billing === "billable" ? "info" : "neutral"
}
