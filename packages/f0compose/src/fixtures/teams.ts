import type { Team } from "./types"

export const teams: Team[] = [
  {
    id: "team-eng-leadership",
    name: "Engineering Leadership",
    description: "Engineering management and architecture",
    departmentId: "dept-eng",
    leadId: "emp-001",
    memberIds: ["emp-001"],
    color: "info",
  },
  {
    id: "team-platform",
    name: "Platform",
    description: "Shared services, infrastructure, observability",
    departmentId: "dept-eng",
    leadId: "emp-003",
    memberIds: ["emp-003"],
    color: "info",
  },
  {
    id: "team-payroll",
    name: "Payroll",
    description: "Payroll calculation, periods, payslips",
    departmentId: "dept-eng",
    leadId: "emp-004",
    memberIds: ["emp-004", "emp-005", "emp-006"],
    color: "info",
  },
  {
    id: "team-time-off",
    name: "Time Off",
    description: "Time off requests, balances, calendars",
    departmentId: "dept-eng",
    leadId: "emp-017",
    memberIds: ["emp-017"],
    color: "info",
  },
  {
    id: "team-people-ops",
    name: "People Operations",
    description: "People processes, onboarding, employee experience",
    departmentId: "dept-people",
    leadId: "emp-002",
    memberIds: ["emp-002", "emp-011"],
    color: "accent",
  },
  {
    id: "team-recruiting",
    name: "Recruiting",
    description: "Talent acquisition and hiring pipeline",
    departmentId: "dept-people",
    leadId: "emp-012",
    memberIds: ["emp-012"],
    color: "accent",
  },
  {
    id: "team-design-product",
    name: "Product Design",
    description: "End-to-end product design across modules",
    departmentId: "dept-design",
    leadId: "emp-008",
    memberIds: ["emp-007", "emp-008"],
    color: "positive",
  },
  {
    id: "team-design-systems",
    name: "Design Systems",
    description: "f0 components, tokens, foundations",
    departmentId: "dept-design",
    leadId: "emp-018",
    memberIds: ["emp-018"],
    color: "positive",
  },
]

export function findTeam(id: string): Team | undefined {
  return teams.find((t) => t.id === id)
}
