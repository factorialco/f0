import type {
  Holiday,
  TimeOffBalance,
  TimeOffPolicy,
  TimeOffRequest,
} from "./types"

import { employees } from "./employees"
import { addDays } from "./helpers"

export const timeOffPolicies: TimeOffPolicy[] = [
  {
    id: "policy-vacation-eu",
    name: "Vacation (EU)",
    type: "vacation",
    annualDays: 23,
    carryoverDays: 5,
    description: "Standard vacation policy for EU-based employees.",
  },
  {
    id: "policy-vacation-remote",
    name: "Vacation (Remote / international)",
    type: "vacation",
    annualDays: 20,
    carryoverDays: 5,
    description: "Vacation policy for employees outside the EU.",
  },
  {
    id: "policy-sick",
    name: "Sick leave",
    type: "sick",
    annualDays: 30,
    carryoverDays: 0,
    description:
      "Sick leave with medical certificate after 3 consecutive days.",
  },
  {
    id: "policy-parental",
    name: "Parental leave",
    type: "parental",
    annualDays: 120,
    carryoverDays: 0,
    description:
      "Combined maternity / paternity / adoption leave per local law.",
  },
  {
    id: "policy-personal",
    name: "Personal day",
    type: "personal",
    annualDays: 4,
    carryoverDays: 0,
    description: "Discretionary days for personal matters.",
  },
]

export const holidays: Holiday[] = [
  { id: "hol-1", name: "New Year's Day", date: "2026-01-01", country: "ES" },
  { id: "hol-2", name: "Three Kings Day", date: "2026-01-06", country: "ES" },
  { id: "hol-3", name: "Good Friday", date: "2026-04-03", country: "ES" },
  { id: "hol-4", name: "Labor Day", date: "2026-05-01", country: "ES" },
  { id: "hol-5", name: "Sant Joan", date: "2026-06-24", country: "ES-CT" },
  { id: "hol-6", name: "Independence Day", date: "2026-07-04", country: "US" },
  { id: "hol-7", name: "All Saints", date: "2026-11-01", country: "ES" },
  { id: "hol-8", name: "Christmas Day", date: "2026-12-25", country: "ES" },
]

function req(
  employeeId: string,
  type: TimeOffRequest["type"],
  startDate: string,
  workingDays: number,
  status: TimeOffRequest["status"],
  reason?: string
): TimeOffRequest {
  const endDate = addDays(startDate, Math.ceil(workingDays * 1.4))
  return {
    id: `tor-${employeeId}-${startDate}`,
    employeeId,
    type,
    startDate,
    endDate,
    workingDays,
    status,
    reason,
    submittedAt: addDays(startDate, -14),
  }
}

export const timeOffRequests: TimeOffRequest[] = [
  req("emp-001", "vacation", "2026-01-05", 5, "approved", "Family ski trip"),
  req("emp-001", "vacation", "2026-08-03", 14, "approved", "Summer holiday"),
  req("emp-001", "remote", "2026-05-11", 3, "approved", "Working from coast"),
  req("emp-002", "vacation", "2026-04-13", 4, "approved", "Easter break"),
  req("emp-002", "vacation", "2026-07-27", 10, "pending", "Summer holiday"),
  req("emp-002", "personal", "2026-05-15", 1, "approved"),
  req("emp-003", "vacation", "2026-02-23", 3, "approved", "Long weekend"),
  req("emp-003", "remote", "2026-05-04", 5, "approved", "Conference travel"),
  req("emp-003", "vacation", "2026-09-07", 7, "pending"),
  req("emp-004", "vacation", "2026-01-19", 5, "approved", "Skiing"),
  req("emp-004", "sick", "2026-03-16", 2, "approved", "Flu"),
  req("emp-004", "vacation", "2026-08-10", 12, "approved", "Summer"),
  req("emp-005", "vacation", "2026-02-09", 7, "approved", "Lunar New Year"),
  req("emp-005", "remote", "2026-04-20", 14, "approved", "Visiting family"),
  req("emp-005", "vacation", "2026-10-05", 7, "pending"),
  req("emp-006", "personal", "2026-03-02", 1, "approved", "Doctor"),
  req(
    "emp-006",
    "vacation",
    "2026-05-25",
    10,
    "approved",
    "Wedding & honeymoon"
  ),
  req("emp-006", "sick", "2026-04-10", 1, "approved"),
  req("emp-007", "vacation", "2026-04-13", 5, "approved", "Easter"),
  req("emp-007", "vacation", "2026-08-17", 14, "pending", "Summer in India"),
  req("emp-008", "vacation", "2026-02-16", 5, "approved"),
  req(
    "emp-008",
    "remote",
    "2026-05-18",
    5,
    "approved",
    "Working from Copenhagen"
  ),
  req("emp-008", "vacation", "2026-07-13", 14, "approved", "Summer"),
  req("emp-009", "vacation", "2026-04-06", 5, "approved"),
  req("emp-009", "personal", "2026-05-22", 1, "pending"),
  req("emp-009", "vacation", "2026-08-24", 7, "approved"),
  req("emp-010", "vacation", "2026-01-12", 4, "approved"),
  req("emp-010", "vacation", "2026-08-03", 14, "approved", "Family holiday"),
  req("emp-011", "vacation", "2026-03-30", 5, "approved", "Easter"),
  req("emp-011", "vacation", "2026-07-20", 10, "pending"),
  req("emp-012", "vacation", "2026-02-09", 5, "approved", "Stockholm visit"),
  req("emp-012", "remote", "2026-05-04", 5, "approved"),
  req("emp-012", "vacation", "2026-06-29", 14, "pending", "Midsummer"),
  req("emp-013", "personal", "2026-04-27", 1, "approved"),
  req(
    "emp-013",
    "vacation",
    "2026-07-13",
    10,
    "rejected",
    "Conflicts with end of quarter"
  ),
  req("emp-013", "vacation", "2026-09-14", 7, "pending"),
  req("emp-014", "vacation", "2026-04-20", 5, "approved"),
  req("emp-014", "vacation", "2026-08-10", 10, "pending"),
  req("emp-015", "vacation", "2026-05-04", 5, "approved", "Golden Week"),
  req("emp-015", "remote", "2026-06-15", 21, "approved", "Working from Tokyo"),
  req("emp-015", "personal", "2026-04-15", 1, "approved"),
  req("emp-016", "vacation", "2026-04-13", 5, "approved", "Easter"),
  req("emp-016", "vacation", "2026-08-17", 14, "approved"),
  req("emp-017", "vacation", "2026-12-21", 10, "pending", "Family Christmas"),
  req("emp-017", "personal", "2026-05-12", 1, "pending"),
  req("emp-018", "parental", "2026-03-01", 120, "approved", "Maternity leave"),
  req("emp-019", "vacation", "2026-03-09", 7, "approved", "Visiting family"),
  req(
    "emp-019",
    "remote",
    "2026-05-04",
    21,
    "approved",
    "Working from Bangalore"
  ),
  req("emp-019", "vacation", "2026-10-19", 10, "pending", "Diwali"),
  req("emp-020", "personal", "2026-05-08", 2, "approved", "Apartment hunting"),
  req(
    "emp-020",
    "vacation",
    "2026-05-25",
    5,
    "cancelled",
    "Cancelled — leaving company"
  ),
]

export const timeOffBalances: TimeOffBalance[] = employees.map((emp) => {
  const taken = timeOffRequests
    .filter(
      (r) =>
        r.employeeId === emp.id &&
        r.type === "vacation" &&
        r.status === "approved"
    )
    .reduce((acc, r) => acc + r.workingDays, 0)
  const pending = timeOffRequests
    .filter(
      (r) =>
        r.employeeId === emp.id &&
        r.type === "vacation" &&
        r.status === "pending"
    )
    .reduce((acc, r) => acc + r.workingDays, 0)
  const total = emp.location.startsWith("Remote") ? 20 : 23
  const remaining = Math.max(total - taken - pending, 0)
  return {
    employeeId: emp.id,
    policyId: emp.location.startsWith("Remote")
      ? "policy-vacation-remote"
      : "policy-vacation-eu",
    total,
    taken,
    pending,
    remaining,
  }
})
