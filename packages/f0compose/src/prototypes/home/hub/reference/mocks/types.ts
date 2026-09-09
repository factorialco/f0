/**
 * Shared mock types — cross-cutting Factorial entities reused across many
 * prototypes. Minimal, tailored for UI rendering (NOT the production types).
 * Shapes are modelled after the real Factorial frontend (employees, teams,
 * legal entities) so a developer can map them to real data later.
 *
 * Module-specific data (job postings, payroll periods, expenses, …) does NOT
 * live here — it belongs in that prototype's own `mocks/` folder.
 */

export type EmployeeStatus =
  | "active"
  | "on-leave"
  | "offboarding"
  | "terminated"

export type Employee = {
  id: string
  fullName: string
  preferredName?: string
  email: string
  avatarUrl: string
  /** Job title, e.g. "Staff Engineer". */
  role: string
  departmentId: string
  teamId: string
  managerId: string | null
  /** Legal entity the employee belongs to (drives payroll/tax/currency context). */
  legalEntityId: string
  /** Office or remote location label, e.g. "Barcelona", "Remote — Tokyo". */
  location: string
  hireDate: string
  status: EmployeeStatus
}

export type Department = {
  id: string
  name: string
  headId: string
  headcount: number
  color: "accent" | "positive" | "warning" | "info" | "neutral" | "critical"
}

export type Team = {
  id: string
  name: string
  description: string
  departmentId: string
  leadId: string
  memberIds: string[]
  color: "accent" | "positive" | "warning" | "info" | "neutral" | "critical"
}

export type LegalEntity = {
  id: string
  legalName: string
  /** Whether this is the company's main legal entity. */
  isMain: boolean
  /** ISO country code, e.g. "ES". */
  country: string
  /** ISO currency code, e.g. "EUR". */
  currency: string
  /** Tax identification number. */
  tin?: string
}

export type Location = {
  id: string
  name: string
  country: string
  city?: string
  /** Remote locations have no physical office. */
  remote: boolean
}
