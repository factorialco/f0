import { employees } from "@/fixtures/employees"
import { avatarFor } from "@/fixtures/helpers"

/**
 * The Organization › People directory (Figma 2730:459215).
 *
 * Built ON TOP of the shared `employees` fixture rather than beside it —
 * that file is the workspace's 20 curated people and is referenced by
 * payroll, time off and performance, so the directory reuses it and only
 * adds what this screen shows on top: the access state, the contract
 * state, and a handful of recent joiners so every status has a row.
 *
 * The joiners are LOCAL to this screen (not appended to the shared
 * fixture) — other prototypes count on that list staying as it is.
 */

export type AccessStatus = "active" | "pending" | "uninvited"
export type ContractStatus = "in-progress" | "ending-soon" | "not-started"

export type PersonRow = {
  id: string
  firstName: string
  lastName: string
  avatar: string
  /** As the design prints it — "Barcelona", "Remote — Tokyo". */
  workplace: string
  /** Normalised for the filter: every "Remote — X" collapses to "Remote". */
  workplaceKey: string
  /** "4 years ago", the design's Contratado column. */
  hired: string
  /** Tenure in years — backs the functional Contratado sort. */
  tenureYears: number
  access: AccessStatus
  contract: ContractStatus
}

export const ACCESS_LABEL: Record<AccessStatus, string> = {
  active: "Active",
  pending: "Pending to accept",
  uninvited: "Uninvited",
}

export const CONTRACT_LABEL: Record<ContractStatus, string> = {
  "in-progress": "In progress",
  "ending-soon": "Ending soon",
  "not-started": "Not started",
}

/** The design paints "In progress" with the positive dot (icon/positive
 *  #10b881, sampled off 2730:461223). The other two follow the same
 *  meaning-to-variant mapping the Policies table uses. */
export const CONTRACT_VARIANT: Record<
  ContractStatus,
  "positive" | "warning" | "neutral"
> = {
  "in-progress": "positive",
  "ending-soon": "warning",
  "not-started": "neutral",
}

/**
 * Who has not finished onboarding into the product. The banner beside the
 * table counts 472 pending + 472 uninvited out of 2.714, so most rows are
 * plain `active` and only a few carry a state — the same proportion, at
 * this table's scale.
 */
const ACCESS_OVERRIDES: Record<string, AccessStatus> = {
  "emp-004": "uninvited",
  "emp-011": "uninvited",
  "emp-017": "uninvited",
  "emp-007": "pending",
  "emp-013": "pending",
  "emp-019": "pending",
}

/**
 * Four contracts ending soon — deliberately the same four the Home
 * "Needs you" queue asks you to confirm ("Confirm 4 contract renewals"),
 * so the two surfaces cannot disagree about how many there are.
 */
const CONTRACT_OVERRIDES: Record<string, ContractStatus> = {
  "emp-005": "ending-soon",
  "emp-012": "ending-soon",
  "emp-015": "ending-soon",
  "emp-020": "ending-soon",
}

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000

function tenureYears(hireDate: string): number {
  return (Date.now() - new Date(hireDate).getTime()) / MS_PER_YEAR
}

/** The design's relative phrasing ("4 years ago"), down to months for a
 *  first-year hire and forward-looking for someone not started yet. */
function hiredLabel(years: number): string {
  if (years < 0) return "Starts soon"
  if (years < 1) {
    const months = Math.max(1, Math.round(years * 12))
    return months === 1 ? "1 month ago" : `${months} months ago`
  }
  const whole = Math.floor(years)
  return whole === 1 ? "1 year ago" : `${whole} years ago`
}

function splitName(fullName: string): [string, string] {
  const [first, ...rest] = fullName.split(" ")
  return [first, rest.join(" ")]
}

function row(args: {
  id: string
  fullName: string
  avatar: string
  workplace: string
  hireDate: string
  access: AccessStatus
  contract: ContractStatus
}): PersonRow {
  const [firstName, lastName] = splitName(args.fullName)
  const years = tenureYears(args.hireDate)
  return {
    id: args.id,
    firstName,
    lastName,
    avatar: args.avatar,
    workplace: args.workplace,
    workplaceKey: args.workplace.startsWith("Remote")
      ? "Remote"
      : args.workplace,
    hired: hiredLabel(years),
    tenureYears: years,
    access: args.access,
    contract: args.contract,
  }
}

/** Recent joiners, so "Joiners 122" has faces and every status has a row.
 *  Local to this screen — see the note at the top of the file. */
const JOINERS = [
  {
    id: "emp-101",
    fullName: "Nadia Haddad",
    workplace: "Barcelona",
    hireDate: "2026-08-17",
    access: "pending" as AccessStatus,
    contract: "in-progress" as ContractStatus,
  },
  {
    id: "emp-102",
    fullName: "Tomás Ferreira",
    workplace: "Madrid",
    hireDate: "2026-07-06",
    access: "uninvited" as AccessStatus,
    contract: "in-progress" as ContractStatus,
  },
  {
    id: "emp-103",
    fullName: "Ivy Nakamura",
    workplace: "Remote — Osaka",
    hireDate: "2026-06-01",
    access: "active" as AccessStatus,
    contract: "in-progress" as ContractStatus,
  },
  {
    id: "emp-104",
    fullName: "Samuel Boateng",
    workplace: "Bilbao",
    // Signed, not started — the one row that shows "Not started".
    hireDate: "2026-12-01",
    access: "uninvited" as AccessStatus,
    contract: "not-started" as ContractStatus,
  },
]

export const peopleRows: PersonRow[] = [
  ...employees.map((employee) =>
    row({
      id: employee.id,
      fullName: employee.fullName,
      avatar: employee.avatarUrl,
      workplace: employee.location,
      hireDate: employee.hireDate,
      access: ACCESS_OVERRIDES[employee.id] ?? "active",
      contract:
        CONTRACT_OVERRIDES[employee.id] ??
        (employee.status === "offboarding" ? "ending-soon" : "in-progress"),
    })
  ),
  ...JOINERS.map((joiner) => row({ ...joiner, avatar: avatarFor(joiner.id) })),
]

/** Every workplace in the table, for the filter — normalised, so the six
 *  remote cities offer one "Remote" option rather than six. */
export const WORKPLACE_OPTIONS = [
  ...new Set(peopleRows.map((p) => p.workplaceKey)),
].sort()
