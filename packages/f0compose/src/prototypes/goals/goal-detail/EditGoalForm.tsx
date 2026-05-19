import {
  F0Form,
  f0FormField,
  useF0Form,
  useF0FormDefinition,
} from "@factorialco/f0-react"
import { z } from "zod"

import type { GoalRecord } from "../shared/types"

// ─── Schema ──────────────────────────────────────────────────────────
//
// The "Update goal" form is intentionally simpler than the create form:
// the designer asked for a smaller, quicker action focused on the four
// fields a goal owner actually edits during the lifecycle of a goal.

const editGoalSchema = z.object({
  currentValue: f0FormField.number({
    label: "Current value",
    placeholder: "0",
  }),

  status: f0FormField.select({
    label: "Status",
    options: [
      { value: "on-track", label: "On track" },
      { value: "off-track", label: "Off track" },
      { value: "at-risk", label: "At Risk" },
      { value: "partial", label: "Partial" },
      { value: "achieved", label: "Achieved" },
      { value: "missed", label: "Missed" },
      { value: "cancelled", label: "Canceled" },
    ],
  }),

  dueDate: f0FormField.date({
    label: "Due date",
    optional: true,
  }),

  note: f0FormField.text({
    label: "Update note",
    placeholder: "What changed since last update?",
    optional: true,
  }),
})

type EditGoalData = {
  currentValue: number
  status: GoalRecord["status"]
  dueDate?: Date
  note?: string
}

// ─── Component ───────────────────────────────────────────────────────

type Props = {
  goal: GoalRecord
  onSave: (update: {
    progress: number
    status: GoalRecord["status"]
    dueDate: string
    note?: string
  }) => void
}

export function EditGoalForm({ goal, onSave }: Props) {
  const { formRef } = useF0Form()

  const formDefinition = useF0FormDefinition({
    name: "edit-goal",
    schema: editGoalSchema,
    defaultValues: {
      currentValue: goal.progress,
      status: goal.status,
      dueDate: undefined,
      note: undefined,
    },
    submitConfig: { label: "Update goal" },
    onSubmit: async ({ data }) => {
      const formData = data as EditGoalData
      onSave({
        progress: clampProgress(formData.currentValue),
        status: formData.status,
        dueDate: formData.dueDate
          ? formData.dueDate.toISOString().split("T")[0]
          : goal.dueDate,
        note: formData.note,
      })
      return { success: true, message: "Goal updated!" }
    },
  })

  return <F0Form formRef={formRef} formDefinition={formDefinition} />
}

// ─── Helpers ─────────────────────────────────────────────────────────

function clampProgress(n: number): number {
  if (Number.isNaN(n)) return 0
  if (n < 0) return 0
  if (n > 100) return 100
  return Math.round(n)
}
