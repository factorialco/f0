import type { CourseRequirement } from "../mocks/courses"
import type { RequestStatus } from "../mocks/requests"
import type { CellStatus } from "./statusVariants"

/** Em dash used for empty values (Categories / Axes), matching the reference. */
export const DASH = "—"

/** "Published" / "Draft" label for the status cell. */
export function statusLabel(status: "published" | "draft"): string {
  return status === "published" ? "Published" : "Draft"
}

/** "Mandatory" / "Not mandatory" requirement label. */
export function requirementLabel(requirement: CourseRequirement): string {
  return requirement === "mandatory" ? "Mandatory" : "Not mandatory"
}

/** "0 people" / "3 people" — validity-expired display from the reference. */
export function peopleLabel(count: number): string {
  return count === 1 ? "1 person" : `${count} people`
}

/** "Pending" / "Approved" / "Rejected" label for a training request. */
export function requestStatusLabel(status: RequestStatus): string {
  return status === "pending"
    ? "Pending"
    : status === "approved"
      ? "Approved"
      : "Rejected"
}

/** Status-cell variant for a training request: pending→warning, approved→positive, rejected→critical. */
export function requestStatusVariant(status: RequestStatus): CellStatus {
  return status === "pending"
    ? "warning"
    : status === "approved"
      ? "positive"
      : "critical"
}

/** "€320", or a dash when the request has no cost. */
export function formatCost(cost: number | null): string {
  if (cost == null) return DASH
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(cost)
}

/** "18/6/2026" — day/month/year, matching the reference tables. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number)
  return `${d}/${m}/${y}`
}
