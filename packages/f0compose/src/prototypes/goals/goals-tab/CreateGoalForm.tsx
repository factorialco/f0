import {
  F0Form,
  f0FormField,
  useF0Form,
  useF0FormDefinition,
} from "@factorialco/f0-react"
import { z } from "zod"

import { employees } from "@/fixtures"

import type { GoalRecord } from "../shared/types"

// ─── Schema ──────────────────────────────────────────────────────────

const goalSchema = z.object({
  name: f0FormField.text({
    label: "Name",
    placeholder: "Increase revenue by 20%",
  }),

  description: f0FormField.text({
    label: "Description",
    placeholder: "Type a description of the goal",
    optional: true,
  }),

  assignType: f0FormField.select({
    label: "Assign to",
    row: "assign",
    options: [
      { value: "employee", label: "Employee" },
      { value: "team", label: "Team" },
    ],
  }),

  assignee: f0FormField.select({
    label: "Employee",
    row: "assign",
    optional: true,
    placeholder: "Select a employee",
    options: employees.map((e) => ({ value: e.id, label: e.fullName })),
  }),

  dueDate: f0FormField.date({
    label: "Due date",
    optional: true,
  }),

  isPublic: f0FormField.checkbox({
    label: "Mark this goal as public",
    optional: true,
  }),

  measureBy: f0FormField.select({
    label: "Measure by",
    options: [
      { value: "numeric", label: "Numeric" },
      { value: "percentage", label: "Percentage" },
      { value: "currency", label: "Currency" },
      { value: "achieved", label: "Achieved / Not achieved" },
      { value: "sub-goal", label: "Sub-goal progress" },
    ],
  }),

  startValue: f0FormField.number({
    label: "Start value",
    row: "measure-values",
    optional: true,
    placeholder: "0",
  }),

  targetValue: f0FormField.number({
    label: "Target value",
    row: "measure-values",
    optional: true,
    placeholder: "100",
  }),

  unit: f0FormField.select({
    label: "Unit",
    row: "measure-values",
    optional: true,
    placeholder: "Select unit",
    options: [
      { value: "clients", label: "Clients" },
      { value: "leads", label: "Leads" },
      { value: "units", label: "Units" },
      { value: "hours", label: "Hours" },
      { value: "usd", label: "USD" },
      { value: "eur", label: "EUR" },
    ],
  }),
})

const defaultValues = {
  name: "",
  description: undefined,
  assignType: "employee" as const,
  assignee: undefined,
  dueDate: undefined,
  isPublic: false,
  measureBy: "numeric" as const,
  startValue: 0,
  targetValue: undefined,
  unit: undefined,
}

// ─── Component ───────────────────────────────────────────────────────

type Props = {
  onCreateGoal: (goal: GoalRecord) => void
}

let nextId = 300

export function CreateGoalForm({ onCreateGoal }: Props) {
  const { formRef } = useF0Form()

  const formDefinition = useF0FormDefinition({
    name: "create-goal",
    schema: goalSchema,
    defaultValues,
    submitConfig: { label: "Create goal" },
    onSubmit: async ({ data }) => {
      nextId++
      const formData = data as typeof defaultValues
      const newGoal: GoalRecord = {
        id: `g-new-${nextId}`,
        title: formData.name,
        ownerId: formData.assignee ?? "emp-001",
        assignee: {
          type: "individual",
          employeeId: formData.assignee ?? "emp-001",
        },
        status: "on-track",
        measure: buildMeasure(formData),
        progress: 0,
        startDate: new Date().toISOString().split("T")[0],
        dueDate: formData.dueDate
          ? formatDate(formData.dueDate)
          : "—",
        parentId: null,
        childrenIds: [],
        scope: "mine",
      }
      onCreateGoal(newGoal)
      return { success: true, message: "Goal created!" }
    },
  })

  return <F0Form formRef={formRef} formDefinition={formDefinition} />
}

// ─── Helpers ─────────────────────────────────────────────────────────

function formatDate(d: Date): string {
  return d.toISOString().split("T")[0]
}

function buildMeasure(data: typeof defaultValues): string {
  const measure = data.measureBy as string
  const start = data.startValue ?? 0
  const target = data.targetValue ?? 100

  switch (measure) {
    case "numeric":
      return `${start} → ${target}`
    case "percentage":
      return `${start}% → ${target}%`
    case "currency":
      return `${start}€ → ${target}€`
    case "achieved":
      return "Achieved / Not achieved"
    case "sub-goal":
      return "Sub-goal progress"
    default:
      return `${start} → ${target}`
  }
}
