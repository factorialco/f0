import type { PayrollLine, PayrollPeriod } from "./types"

import { employees } from "./employees"

export const payrollPeriods: PayrollPeriod[] = [
  {
    id: "period-2025-12",
    label: "December 2025",
    startDate: "2025-12-01",
    endDate: "2025-12-31",
    payDate: "2026-01-05",
    status: "paid",
    totalGross: 168_400,
    totalNet: 122_900,
    employeeCount: 19,
  },
  {
    id: "period-2026-01",
    label: "January 2026",
    startDate: "2026-01-01",
    endDate: "2026-01-31",
    payDate: "2026-02-05",
    status: "paid",
    totalGross: 172_100,
    totalNet: 125_800,
    employeeCount: 19,
  },
  {
    id: "period-2026-02",
    label: "February 2026",
    startDate: "2026-02-01",
    endDate: "2026-02-28",
    payDate: "2026-03-05",
    status: "paid",
    totalGross: 174_900,
    totalNet: 127_500,
    employeeCount: 20,
  },
  {
    id: "period-2026-03",
    label: "March 2026",
    startDate: "2026-03-01",
    endDate: "2026-03-31",
    payDate: "2026-04-05",
    status: "paid",
    totalGross: 175_800,
    totalNet: 128_200,
    employeeCount: 20,
  },
  {
    id: "period-2026-04",
    label: "April 2026",
    startDate: "2026-04-01",
    endDate: "2026-04-30",
    payDate: "2026-05-05",
    status: "in-review",
    totalGross: 178_500,
    totalNet: 130_100,
    employeeCount: 20,
  },
  {
    id: "period-2026-05",
    label: "May 2026",
    startDate: "2026-05-01",
    endDate: "2026-05-31",
    payDate: "2026-06-05",
    status: "open",
    totalGross: 0,
    totalNet: 0,
    employeeCount: 20,
  },
]

const grossByRole: Record<string, number> = {
  "VP of Engineering": 11_500,
  "VP of Product": 11_200,
  "Head of Sales": 9_800,
  "Head of People": 9_500,
  "Head of Design": 9_400,
  "Head of Customer Success": 8_900,
  "Engineering Manager": 8_700,
  "Senior Frontend Engineer": 7_800,
  "Senior Product Designer": 7_400,
  "Senior Product Manager": 7_600,
  "Staff Engineer": 8_900,
  "Backend Engineer": 6_500,
  "Junior Frontend Engineer": 4_200,
  "Product Manager": 6_400,
  "Product Designer": 6_100,
  "Account Executive": 5_900,
  "Customer Success Manager": 5_600,
  "Talent Acquisition Lead": 6_200,
  "People Partner": 5_400,
  "Sales Development Rep": 4_300,
}

function roleGross(role: string): number {
  return grossByRole[role] ?? 5_000
}

export const payrollLines: PayrollLine[] = (() => {
  const out: PayrollLine[] = []
  for (const period of payrollPeriods) {
    if (period.status === "open") continue
    for (const emp of employees) {
      const gross = roleGross(emp.role)
      const deductions = Math.round(gross * 0.27)
      const bonus = period.label.startsWith("December")
        ? Math.round(gross * 0.5)
        : 0
      const net = gross - deductions + bonus
      out.push({
        id: `${period.id}-${emp.id}`,
        periodId: period.id,
        employeeId: emp.id,
        grossSalary: gross,
        deductions,
        netSalary: net,
        bonus,
        status: period.status === "in-review" ? "pending" : "paid",
      })
    }
  }
  return out
})()
