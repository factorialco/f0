import { useState } from "react"
import { F0Dialog, F0Select, F0Text } from "@factorialco/f0-react"

import type { GoalLevel, GoalStatus } from "./types"

type NewGoalFormData = {
  title: string
  description: string
  level: GoalLevel
  status: GoalStatus
  dueDate: string
  assignation: string
  measureTarget: number
}

const LEVEL_OPTIONS = [
  { id: "company", label: "Company" },
  { id: "team", label: "Team" },
  { id: "individual", label: "Individual" },
] as const

const STATUS_OPTIONS = [
  { id: "not-started", label: "Not started" },
  { id: "in-progress", label: "In progress" },
  { id: "on-track", label: "On track" },
  { id: "at-risk", label: "At risk" },
] as const

export function NewGoalModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: NewGoalFormData) => void
}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [level, setLevel] = useState<GoalLevel>("team")
  const [status, setStatus] = useState<GoalStatus>("not-started")
  const [dueDate, setDueDate] = useState("")
  const [assignation, setAssignation] = useState("")
  const [measureTarget, setMeasureTarget] = useState(0)

  const handleSubmit = () => {
    onSubmit({
      title,
      description,
      level,
      status,
      dueDate,
      assignation,
      measureTarget,
    })
    // Reset form
    setTitle("")
    setDescription("")
    setLevel("team")
    setStatus("not-started")
    setDueDate("")
    setAssignation("")
    setMeasureTarget(0)
  }

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Create goal"
      description="Define a new goal and assign it to a team or individual."
      position="right"
      width="md"
      primaryAction={{
        label: "Create goal",
        onClick: handleSubmit,
        disabled: !title.trim(),
      }}
      secondaryAction={{
        label: "Cancel",
        onClick: onClose,
      }}
    >
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <F0Text content="Title" variant="label" />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Increase NPS score"
            className="w-full rounded-lg border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none focus:ring-2 focus:ring-f1-border-selected"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <F0Text content="Description" variant="label" />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the goal..."
            rows={3}
            className="w-full rounded-lg border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none focus:ring-2 focus:ring-f1-border-selected resize-none"
          />
        </div>

        {/* Level + Status row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <F0Text content="Level" variant="label" />
            <F0Select
              options={LEVEL_OPTIONS.map((o) => ({
                id: o.id,
                label: o.label,
              }))}
              selectedOption={level}
              onChangeSelectedOption={(opt: { id: string; label: string } | undefined) => {
                if (opt) setLevel(opt.id as GoalLevel)
              }}
              placeholder="Select level"
            />
          </div>
          <div className="flex flex-col gap-1">
            <F0Text content="Status" variant="label" />
            <F0Select
              options={STATUS_OPTIONS.map((o) => ({
                id: o.id,
                label: o.label,
              }))}
              selectedOption={status}
              onChangeSelectedOption={(opt: { id: string; label: string } | undefined) => {
                if (opt) setStatus(opt.id as GoalStatus)
              }}
              placeholder="Select status"
            />
          </div>
        </div>

        {/* Assignation */}
        <div className="flex flex-col gap-1">
          <F0Text content="Assignation" variant="label" />
          <input
            type="text"
            value={assignation}
            onChange={(e) => setAssignation(e.target.value)}
            placeholder="e.g. Product team"
            className="w-full rounded-lg border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none focus:ring-2 focus:ring-f1-border-selected"
          />
        </div>

        {/* Due date + Target row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <F0Text content="Due date" variant="label" />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full rounded-lg border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground focus:outline-none focus:ring-2 focus:ring-f1-border-selected"
            />
          </div>
          <div className="flex flex-col gap-1">
            <F0Text content="Target value" variant="label" />
            <input
              type="number"
              value={measureTarget || ""}
              onChange={(e) => setMeasureTarget(Number(e.target.value))}
              placeholder="e.g. 50000"
              className="w-full rounded-lg border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none focus:ring-2 focus:ring-f1-border-selected"
            />
          </div>
        </div>
      </div>
    </F0Dialog>
  )
}
