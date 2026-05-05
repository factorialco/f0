import type { Category } from "@/prototypes/types"

export type CategoryDef = {
  id: Category
  label: string
  description: string
  emoji: string
}

export const categories: CategoryDef[] = [
  {
    id: "People",
    label: "People",
    description: "Employees, teams, organization",
    emoji: "👥",
  },
  {
    id: "Payroll",
    label: "Payroll",
    description: "Periods, concepts, payslips",
    emoji: "💸",
  },
  {
    id: "Time",
    label: "Time",
    description: "Time off, attendance, calendar",
    emoji: "🌴",
  },
  {
    id: "Talent",
    label: "Talent",
    description: "Recruiting, performance, onboarding",
    emoji: "🌱",
  },
  {
    id: "Documents",
    label: "Documents",
    description: "Contracts, payslips, policies",
    emoji: "📄",
  },
  {
    id: "Settings",
    label: "Settings",
    description: "Admin and configuration",
    emoji: "⚙️",
  },
  {
    id: "Other",
    label: "Other",
    description: "Experiments and misc",
    emoji: "✨",
  },
]
