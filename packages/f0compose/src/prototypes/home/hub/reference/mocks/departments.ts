import type { Department } from "./types"

export const departments: Department[] = [
  {
    id: "dept-eng",
    name: "Engineering",
    headId: "emp-001",
    headcount: 6,
    color: "info",
  },
  {
    id: "dept-people",
    name: "People",
    headId: "emp-002",
    headcount: 3,
    color: "accent",
  },
  {
    id: "dept-design",
    name: "Design",
    headId: "emp-008",
    headcount: 3,
    color: "positive",
  },
  {
    id: "dept-product",
    name: "Product",
    headId: "emp-010",
    headcount: 3,
    color: "warning",
  },
  {
    id: "dept-sales",
    name: "Sales",
    headId: "emp-014",
    headcount: 3,
    color: "critical",
  },
  {
    id: "dept-cs",
    name: "Customer Success",
    headId: "emp-016",
    headcount: 2,
    color: "neutral",
  },
]

export function findDepartment(id: string): Department | undefined {
  return departments.find((d) => d.id === id)
}
