// ── Types ───────────────────────────────────────────────────────────────

export type IncentivePlanStatus = "active" | "draft" | "archived" | "pending-approval"

export type IncentivePlan = {
  id: string
  name: string
  description: string
  status: IncentivePlanStatus
  type: "commission" | "bonus" | "mbo" | "spiff"
  frequency: "monthly" | "quarterly" | "annual" | "one-time"
  currency: string
  budget: number
  spent: number
  participantCount: number
  ownerId: string
  startDate: string
  endDate: string
  createdAt: string
}

export type SalaryBand = {
  id: string
  title: string
  level: string
  department: string
  location: string
  currency: string
  minSalary: number
  midSalary: number
  maxSalary: number
  employeeCount: number
  averageSalary: number
}

export type CompensationReviewStatus = "draft" | "in-progress" | "completed" | "approved"

export type CompensationReview = {
  id: string
  employeeId: string
  reviewCycle: string
  currentSalary: number
  proposedSalary: number
  increase: number
  increasePercent: number
  status: CompensationReviewStatus
  currency: string
  effectiveDate: string
  managerId: string
  reason: string
}

export type EquityGrantType = "iso" | "nso" | "rsu" | "phantom"
export type EquityGrantStatus = "active" | "fully-vested" | "cancelled" | "pending"

export type EquityGrant = {
  id: string
  employeeId: string
  grantType: EquityGrantType
  status: EquityGrantStatus
  sharesGranted: number
  sharesVested: number
  strikePrice: number
  currentPrice: number
  currency: string
  grantDate: string
  vestingSchedule: string
  cliffDate: string
  fullyVestedDate: string
}

export type BenefitCategory = "health" | "retirement" | "wellness" | "education" | "transport" | "meal"

export type Benefit = {
  id: string
  name: string
  category: BenefitCategory
  provider: string
  monthlyCost: number
  currency: string
  enrolledCount: number
  eligibleCount: number
  status: "active" | "inactive"
  renewalDate: string
}

// ── Fixture data ────────────────────────────────────────────────────────

export const incentivePlans: IncentivePlan[] = [
  {
    id: "ip-001",
    name: "Sales Commission Q2 2026",
    description: "Standard commission plan for all AEs — 10% on new ARR, 5% on expansion.",
    status: "active",
    type: "commission",
    frequency: "quarterly",
    currency: "EUR",
    budget: 450000,
    spent: 187000,
    participantCount: 24,
    ownerId: "emp-014",
    startDate: "2026-04-01",
    endDate: "2026-06-30",
    createdAt: "2026-03-15",
  },
  {
    id: "ip-002",
    name: "Engineering Bonus H1 2026",
    description: "Performance-based bonus pool for engineering tied to OKR completion.",
    status: "active",
    type: "bonus",
    frequency: "annual",
    currency: "EUR",
    budget: 320000,
    spent: 0,
    participantCount: 58,
    ownerId: "emp-001",
    startDate: "2026-01-01",
    endDate: "2026-06-30",
    createdAt: "2025-12-10",
  },
  {
    id: "ip-003",
    name: "MBO Plan — Leadership Team",
    description: "Management by objectives for VP+ roles. Payout tied to company KPIs.",
    status: "active",
    type: "mbo",
    frequency: "annual",
    currency: "EUR",
    budget: 600000,
    spent: 150000,
    participantCount: 8,
    ownerId: "emp-010",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    createdAt: "2025-12-20",
  },
  {
    id: "ip-004",
    name: "Product Launch SPIFF",
    description: "One-time bonus for closing deals with the new Analytics add-on.",
    status: "draft",
    type: "spiff",
    frequency: "one-time",
    currency: "EUR",
    budget: 50000,
    spent: 0,
    participantCount: 12,
    ownerId: "emp-014",
    startDate: "2026-07-01",
    endDate: "2026-09-30",
    createdAt: "2026-05-01",
  },
  {
    id: "ip-005",
    name: "Sales Commission Q1 2026",
    description: "Standard commission plan for Q1 — closed and paid out.",
    status: "archived",
    type: "commission",
    frequency: "quarterly",
    currency: "EUR",
    budget: 420000,
    spent: 398000,
    participantCount: 22,
    ownerId: "emp-014",
    startDate: "2026-01-01",
    endDate: "2026-03-31",
    createdAt: "2025-12-01",
  },
  {
    id: "ip-006",
    name: "CS Retention Bonus Q3 2026",
    description: "Bonus for CS team tied to net retention rate above 95%.",
    status: "pending-approval",
    type: "bonus",
    frequency: "quarterly",
    currency: "EUR",
    budget: 85000,
    spent: 0,
    participantCount: 15,
    ownerId: "emp-008",
    startDate: "2026-07-01",
    endDate: "2026-09-30",
    createdAt: "2026-05-05",
  },
  {
    id: "ip-007",
    name: "Referral SPIFF — Summer 2026",
    description: "Employee referral bonus: €2,000 per successful hire.",
    status: "active",
    type: "spiff",
    frequency: "one-time",
    currency: "EUR",
    budget: 40000,
    spent: 12000,
    participantCount: 180,
    ownerId: "emp-002",
    startDate: "2026-06-01",
    endDate: "2026-08-31",
    createdAt: "2026-05-10",
  },
]

export const salaryBands: SalaryBand[] = [
  { id: "sb-001", title: "Software Engineer", level: "IC1", department: "Engineering", location: "Barcelona", currency: "EUR", minSalary: 35000, midSalary: 42000, maxSalary: 50000, employeeCount: 22, averageSalary: 41500 },
  { id: "sb-002", title: "Senior Software Engineer", level: "IC2", department: "Engineering", location: "Barcelona", currency: "EUR", minSalary: 50000, midSalary: 62000, maxSalary: 75000, employeeCount: 18, averageSalary: 60000 },
  { id: "sb-003", title: "Staff Engineer", level: "IC3", department: "Engineering", location: "Barcelona", currency: "EUR", minSalary: 72000, midSalary: 85000, maxSalary: 100000, employeeCount: 6, averageSalary: 84000 },
  { id: "sb-004", title: "Engineering Manager", level: "M1", department: "Engineering", location: "Barcelona", currency: "EUR", minSalary: 65000, midSalary: 78000, maxSalary: 92000, employeeCount: 8, averageSalary: 76000 },
  { id: "sb-005", title: "Product Designer", level: "IC1", department: "Design", location: "Barcelona", currency: "EUR", minSalary: 34000, midSalary: 40000, maxSalary: 48000, employeeCount: 10, averageSalary: 39000 },
  { id: "sb-006", title: "Senior Product Designer", level: "IC2", department: "Design", location: "Barcelona", currency: "EUR", minSalary: 48000, midSalary: 58000, maxSalary: 68000, employeeCount: 5, averageSalary: 56000 },
  { id: "sb-007", title: "Account Executive", level: "IC1", department: "Sales", location: "Barcelona", currency: "EUR", minSalary: 30000, midSalary: 38000, maxSalary: 45000, employeeCount: 14, averageSalary: 37000 },
  { id: "sb-008", title: "Senior Account Executive", level: "IC2", department: "Sales", location: "Barcelona", currency: "EUR", minSalary: 42000, midSalary: 52000, maxSalary: 65000, employeeCount: 8, averageSalary: 51000 },
  { id: "sb-009", title: "Product Manager", level: "IC2", department: "Product", location: "Barcelona", currency: "EUR", minSalary: 50000, midSalary: 60000, maxSalary: 72000, employeeCount: 7, averageSalary: 59000 },
  { id: "sb-010", title: "VP Engineering", level: "E1", department: "Engineering", location: "Barcelona", currency: "EUR", minSalary: 100000, midSalary: 120000, maxSalary: 145000, employeeCount: 2, averageSalary: 118000 },
]

export const compensationReviews: CompensationReview[] = [
  { id: "cr-001", employeeId: "emp-003", reviewCycle: "Annual 2026", currentSalary: 82000, proposedSalary: 90000, increase: 8000, increasePercent: 9.8, status: "approved", currency: "EUR", effectiveDate: "2026-07-01", managerId: "emp-001", reason: "Promotion to Staff Engineer" },
  { id: "cr-002", employeeId: "emp-005", reviewCycle: "Annual 2026", currentSalary: 58000, proposedSalary: 64000, increase: 6000, increasePercent: 10.3, status: "in-progress", currency: "EUR", effectiveDate: "2026-07-01", managerId: "emp-004", reason: "Market adjustment + strong performance" },
  { id: "cr-003", employeeId: "emp-007", reviewCycle: "Annual 2026", currentSalary: 45000, proposedSalary: 50000, increase: 5000, increasePercent: 11.1, status: "in-progress", currency: "EUR", effectiveDate: "2026-07-01", managerId: "emp-008", reason: "Exceeds expectations in onboarding redesign" },
  { id: "cr-004", employeeId: "emp-009", reviewCycle: "Annual 2026", currentSalary: 72000, proposedSalary: 72000, increase: 0, increasePercent: 0, status: "completed", currency: "EUR", effectiveDate: "2026-07-01", managerId: "emp-010", reason: "No change — recently promoted" },
  { id: "cr-005", employeeId: "emp-013", reviewCycle: "Annual 2026", currentSalary: 38000, proposedSalary: 42000, increase: 4000, increasePercent: 10.5, status: "draft", currency: "EUR", effectiveDate: "2026-07-01", managerId: "emp-014", reason: "Performance improvement plan completed" },
  { id: "cr-006", employeeId: "emp-006", reviewCycle: "Annual 2026", currentSalary: 55000, proposedSalary: 60000, increase: 5000, increasePercent: 9.1, status: "approved", currency: "EUR", effectiveDate: "2026-07-01", managerId: "emp-004", reason: "Strong delivery on payroll editor" },
  { id: "cr-007", employeeId: "emp-011", reviewCycle: "Annual 2026", currentSalary: 40000, proposedSalary: 43000, increase: 3000, increasePercent: 7.5, status: "draft", currency: "EUR", effectiveDate: "2026-07-01", managerId: "emp-002", reason: "Standard annual increase" },
  { id: "cr-008", employeeId: "emp-015", reviewCycle: "Annual 2026", currentSalary: 68000, proposedSalary: 74000, increase: 6000, increasePercent: 8.8, status: "in-progress", currency: "EUR", effectiveDate: "2026-07-01", managerId: "emp-010", reason: "Retention risk — below market midpoint" },
]

export const equityGrants: EquityGrant[] = [
  { id: "eq-001", employeeId: "emp-001", grantType: "iso", status: "active", sharesGranted: 15000, sharesVested: 9375, strikePrice: 2.50, currentPrice: 8.20, currency: "EUR", grantDate: "2023-06-01", vestingSchedule: "4y / 1y cliff", cliffDate: "2024-06-01", fullyVestedDate: "2027-06-01" },
  { id: "eq-002", employeeId: "emp-003", grantType: "iso", status: "active", sharesGranted: 8000, sharesVested: 4000, strikePrice: 3.00, currentPrice: 8.20, currency: "EUR", grantDate: "2024-01-01", vestingSchedule: "4y / 1y cliff", cliffDate: "2025-01-01", fullyVestedDate: "2028-01-01" },
  { id: "eq-003", employeeId: "emp-004", grantType: "rsu", status: "active", sharesGranted: 10000, sharesVested: 5000, strikePrice: 0, currentPrice: 8.20, currency: "EUR", grantDate: "2024-03-01", vestingSchedule: "4y / 1y cliff", cliffDate: "2025-03-01", fullyVestedDate: "2028-03-01" },
  { id: "eq-004", employeeId: "emp-010", grantType: "iso", status: "active", sharesGranted: 50000, sharesVested: 37500, strikePrice: 1.80, currentPrice: 8.20, currency: "EUR", grantDate: "2022-09-01", vestingSchedule: "4y / 1y cliff", cliffDate: "2023-09-01", fullyVestedDate: "2026-09-01" },
  { id: "eq-005", employeeId: "emp-008", grantType: "rsu", status: "active", sharesGranted: 6000, sharesVested: 1500, strikePrice: 0, currentPrice: 8.20, currency: "EUR", grantDate: "2025-01-01", vestingSchedule: "4y / 1y cliff", cliffDate: "2026-01-01", fullyVestedDate: "2029-01-01" },
  { id: "eq-006", employeeId: "emp-014", grantType: "phantom", status: "active", sharesGranted: 12000, sharesVested: 6000, strikePrice: 4.00, currentPrice: 8.20, currency: "EUR", grantDate: "2024-06-01", vestingSchedule: "4y / 1y cliff", cliffDate: "2025-06-01", fullyVestedDate: "2028-06-01" },
  { id: "eq-007", employeeId: "emp-005", grantType: "iso", status: "pending", sharesGranted: 5000, sharesVested: 0, strikePrice: 7.50, currentPrice: 8.20, currency: "EUR", grantDate: "2026-07-01", vestingSchedule: "4y / 1y cliff", cliffDate: "2027-07-01", fullyVestedDate: "2030-07-01" },
  { id: "eq-008", employeeId: "emp-002", grantType: "nso", status: "fully-vested", sharesGranted: 20000, sharesVested: 20000, strikePrice: 1.20, currentPrice: 8.20, currency: "EUR", grantDate: "2021-01-01", vestingSchedule: "4y / 1y cliff", cliffDate: "2022-01-01", fullyVestedDate: "2025-01-01" },
]

export const benefits: Benefit[] = [
  { id: "bn-001", name: "Private Health Insurance", category: "health", provider: "Sanitas", monthlyCost: 120, currency: "EUR", enrolledCount: 145, eligibleCount: 180, status: "active", renewalDate: "2027-01-01" },
  { id: "bn-002", name: "Dental Plan", category: "health", provider: "Sanitas", monthlyCost: 25, currency: "EUR", enrolledCount: 98, eligibleCount: 180, status: "active", renewalDate: "2027-01-01" },
  { id: "bn-003", name: "Pension Plan", category: "retirement", provider: "VidaCaixa", monthlyCost: 200, currency: "EUR", enrolledCount: 110, eligibleCount: 180, status: "active", renewalDate: "2026-12-31" },
  { id: "bn-004", name: "Gym Membership", category: "wellness", provider: "Gympass", monthlyCost: 40, currency: "EUR", enrolledCount: 72, eligibleCount: 180, status: "active", renewalDate: "2026-09-01" },
  { id: "bn-005", name: "Learning Budget", category: "education", provider: "Internal", monthlyCost: 80, currency: "EUR", enrolledCount: 55, eligibleCount: 180, status: "active", renewalDate: "2027-01-01" },
  { id: "bn-006", name: "Transport Card", category: "transport", provider: "Cobee", monthlyCost: 50, currency: "EUR", enrolledCount: 88, eligibleCount: 180, status: "active", renewalDate: "2026-12-31" },
  { id: "bn-007", name: "Meal Vouchers", category: "meal", provider: "Cobee", monthlyCost: 150, currency: "EUR", enrolledCount: 130, eligibleCount: 180, status: "active", renewalDate: "2026-12-31" },
  { id: "bn-008", name: "Mental Health Support", category: "wellness", provider: "Oliva", monthlyCost: 35, currency: "EUR", enrolledCount: 42, eligibleCount: 180, status: "inactive", renewalDate: "2026-06-30" },
]
