import { useEffect, useState } from "react"
import { F0Box, F0Dialog, F0Text } from "@factorialco/f0-react"
import { Input, NumberInput, Textarea } from "@factorialco/f0-react/dist/experimental"

import { trainings, type TrainingClass } from "@/fixtures"

type Props = {
  trainingId: string
  isOpen: boolean
  onClose: () => void
  onCreated: (klass: TrainingClass) => void
}

export function NewClassWizard({
  trainingId,
  isOpen,
  onClose,
  onCreated,
}: Props) {
  const [name, setName] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [directCost, setDirectCost] = useState<number | null>(0)
  const [indirectCost, setIndirectCost] = useState<number | null>(0)
  const [salaryCost, setSalaryCost] = useState<number | null>(0)

  useEffect(() => {
    if (!isOpen) return
    setName("")
    setStartDate("")
    setEndDate("")
    setDescription("")
    setDirectCost(0)
    setIndirectCost(0)
    setSalaryCost(0)
  }, [isOpen])

  const handleCreate = () => {
    const training = trainings.find((item) => item.id === trainingId)
    if (!training) return

    const newClass: TrainingClass = {
      id: `cls-${Date.now()}`,
      trainingId,
      name: name.trim() || "Untitled group",
      startDate: startDate || null,
      endDate: endDate || null,
      sessionCount: 0,
      participantCount: 0,
      completedAttendancesCount: 0,
      totalAttendancesCount: 0,
      cost: String(directCost ?? 0),
      indirectCost: String(indirectCost ?? 0),
      salaryCost: String(salaryCost ?? 0),
      participants: [],
    }

    training.classes.push(newClass)
    void description
    onCreated(newClass)
  }

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      position="center"
      width="md"
      title="Create new group"
      description="Create a training group with its dates and initial cost values. Sessions and participants can be added from the group detail."
      primaryAction={{
        label: "Create group",
        onClick: handleCreate,
        disabled: name.trim() === "",
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="md">
        <Input
          label="Group name"
          value={name}
          onChange={(value) => setName(value ?? "")}
          placeholder="e.g. Group C - Q3"
        />

        <F0Box display="grid" columns="2" gap="md">
          <Input
            label="Start date"
            type="date"
            value={startDate}
            onChange={(value) => setStartDate(value ?? "")}
          />
          <Input
            label="End date"
            type="date"
            value={endDate}
            onChange={(value) => setEndDate(value ?? "")}
          />
        </F0Box>

        <Textarea
          label="Description"
          value={description}
          onChange={(value) => setDescription(value ?? "")}
          rows={3}
        />

        <F0Text variant="label" content="Initial costs" />
        <F0Box display="grid" columns="3" gap="md">
          <NumberInput
            label="Direct cost"
            value={directCost}
            onChange={setDirectCost}
            locale="en-US"
            units="EUR"
          />
          <NumberInput
            label="Indirect cost"
            value={indirectCost}
            onChange={setIndirectCost}
            locale="en-US"
            units="EUR"
          />
          <NumberInput
            label="Salary cost"
            value={salaryCost}
            onChange={setSalaryCost}
            locale="en-US"
            units="EUR"
          />
        </F0Box>
      </F0Box>
    </F0Dialog>
  )
}
