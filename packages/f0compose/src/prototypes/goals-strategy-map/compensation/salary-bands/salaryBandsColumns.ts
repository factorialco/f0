import type { SalaryBand } from "../compensationFixtures"

function formatEur(n: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)
}

export const salaryBandsColumns = [
  {
    id: "title",
    label: "Role",
    sorting: "title",
    frozen: true,
    render: (item: SalaryBand) => item.title,
  },
  {
    id: "level",
    label: "Level",
    render: (item: SalaryBand) => ({
      type: "tag" as const,
      value: { label: item.level },
    }),
  },
  {
    id: "department",
    label: "Department",
    render: (item: SalaryBand) => item.department,
  },
  {
    id: "min",
    label: "Min",
    sorting: "min",
    align: "right" as const,
    render: (item: SalaryBand) => formatEur(item.minSalary),
  },
  {
    id: "mid",
    label: "Mid",
    align: "right" as const,
    render: (item: SalaryBand) => formatEur(item.midSalary),
  },
  {
    id: "max",
    label: "Max",
    sorting: "max",
    align: "right" as const,
    render: (item: SalaryBand) => formatEur(item.maxSalary),
  },
  {
    id: "average",
    label: "Avg salary",
    align: "right" as const,
    render: (item: SalaryBand) => formatEur(item.averageSalary),
  },
  {
    id: "employees",
    label: "Employees",
    sorting: "employees",
    align: "right" as const,
    render: (item: SalaryBand) => item.employeeCount,
  },
  {
    id: "location",
    label: "Location",
    render: (item: SalaryBand) => item.location,
  },
]
