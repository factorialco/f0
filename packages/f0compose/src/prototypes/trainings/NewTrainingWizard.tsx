import { useEffect, useState } from "react"
import { F0Box, F0Dialog, F0Select, F0Text } from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
  Switch,
  Textarea,
} from "@factorialco/f0-react/dist/experimental"

import {
  trainingCategories,
  trainings,
  type Training,
} from "@/fixtures"

type Props = {
  isOpen: boolean
  onClose: () => void
  onCreated: (training: Training) => void
}

type TrainingType = "internal" | "external"

const externalOptions: { value: TrainingType; label: string }[] = [
  { value: "internal", label: "Internal" },
  { value: "external", label: "External" },
]

const categoryOptions = [
  { value: "", label: "No tag" },
  ...trainingCategories.map((category) => ({
    value: category.id,
    label: category.name,
  })),
]

const validityYearOptions = Array.from({ length: 10 }, (_, index) => {
  const value = String(index + 1)
  return { value, label: value === "1" ? "1 year" : `${value} years` }
})

export function NewTrainingWizard({ isOpen, onClose, onCreated }: Props) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [objectives, setObjectives] = useState("")
  const [year, setYear] = useState<number | null>(new Date().getFullYear())
  const [type, setType] = useState<TrainingType>("internal")
  const [externalProvider, setExternalProvider] = useState("")
  const [code, setCode] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [hours, setHours] = useState<number | null>(0)
  const [minutes, setMinutes] = useState<number | null>(0)
  const [isMandatory, setIsMandatory] = useState(false)
  const [courseValidityEnabled, setCourseValidityEnabled] = useState(false)
  const [validFor, setValidFor] = useState("1")
  const [knowledgeTestRequired, setKnowledgeTestRequired] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    setName("")
    setDescription("")
    setObjectives("")
    setYear(new Date().getFullYear())
    setType("internal")
    setExternalProvider("")
    setCode("")
    setCategoryId("")
    setHours(0)
    setMinutes(0)
    setIsMandatory(false)
    setCourseValidityEnabled(false)
    setValidFor("1")
    setKnowledgeTestRequired(false)
  }, [isOpen])

  const handleCreate = () => {
    const selectedCategories = trainingCategories.filter(
      (category) => category.id === categoryId
    )
    const totalDuration = (hours ?? 0) + (minutes ?? 0) / 60
    const newTraining: Training = {
      id: `trn-${Date.now()}`,
      name: name.trim() || "Untitled training",
      code: code.trim() || null,
      status: "draft",
      type,
      externalProvider:
        type === "external" ? externalProvider.trim() || null : null,
      isMandatory,
      catalog: false,
      year: year ?? new Date().getFullYear(),
      totalDuration,
      totalCost: 0,
      totalSalaryCost: 0,
      totalSubsidizedCost: 0,
      subsidized: false,
      validFor: courseValidityEnabled ? Number(validFor) : null,
      categories: selectedCategories,
      description,
      objectives,
      participantCount: 0,
      expiredParticipantCount: 0,
      groupNames: [],
      participantAvatars: [],
      instructorAvatars: [],
      publishedAsFreeCourse: false,
      isSessionsRequired: false,
      isModulesRequired: false,
      knowledgeTestRequired,
      courseValidityEnabled,
      classes: [],
    }

    trainings.push(newTraining)
    onCreated(newTraining)
  }

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      position="center"
      width="xl"
      title="New course draft"
      description="Create the course draft with the same core information used by the upstream wizard. Groups, sessions and participants can be added from the course detail."
      primaryAction={{
        label: "Create",
        onClick: handleCreate,
        disabled: name.trim() === "",
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="xl">
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Text variant="label" content="Basic information" />
          <Input
            label="Course name"
            value={name}
            onChange={(value) => setName(value ?? "")}
            placeholder="Course name"
          />
          <Textarea
            label="Objectives"
            value={objectives}
            onChange={(value) => setObjectives(value ?? "")}
            rows={3}
          />
          <Textarea
            label="Description"
            value={description}
            onChange={(value) => setDescription(value ?? "")}
            rows={3}
          />
          <F0Box display="grid" columns="2" gap="md">
            <NumberInput
              label="Hours"
              value={hours}
              onChange={setHours}
              locale="en-US"
            />
            <NumberInput
              label="Minutes"
              value={minutes}
              onChange={setMinutes}
              locale="en-US"
            />
          </F0Box>
        </F0Box>

        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Text variant="label" content="Admin information" />
          <F0Box display="grid" columns="2" gap="md">
            <NumberInput
              label="Year"
              value={year}
              onChange={setYear}
              locale="en-US"
            />
            <Input
              label="Internal code"
              value={code}
              onChange={(value) => setCode(value ?? "")}
            />
          </F0Box>
          <F0Box display="grid" columns="2" gap="md">
            <F0Select<TrainingType>
              label="Type"
              value={type}
              onChange={(value: TrainingType) => setType(value)}
              options={externalOptions}
            />
            <F0Select<string>
              label="Tags"
              value={categoryId}
              onChange={(value: string) => setCategoryId(value)}
              options={categoryOptions}
            />
          </F0Box>
          {type === "external" && (
            <Input
              label="External provider"
              value={externalProvider}
              onChange={(value) => setExternalProvider(value ?? "")}
            />
          )}
        </F0Box>

        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Text variant="label" content="Course completion" />
          <F0Box display="flex" flexDirection="column" gap="sm">
            <F0Box display="flex" justifyContent="between" alignItems="center">
              <F0Text variant="body" content="Mandatory course" />
              <Switch
                checked={isMandatory}
                onCheckedChange={setIsMandatory}
              />
            </F0Box>
            <F0Box display="flex" justifyContent="between" alignItems="center">
              <F0Text variant="body" content="Pass the knowledge test" />
              <Switch
                checked={knowledgeTestRequired}
                onCheckedChange={setKnowledgeTestRequired}
              />
            </F0Box>
            <F0Box display="flex" justifyContent="between" alignItems="center">
              <F0Text variant="body" content="Course validity" />
              <Switch
                checked={courseValidityEnabled}
                onCheckedChange={setCourseValidityEnabled}
              />
            </F0Box>
          </F0Box>
          {courseValidityEnabled && (
            <F0Select<string>
              label="Validity period"
              value={validFor}
              onChange={(value: string) => setValidFor(value)}
              options={validityYearOptions}
            />
          )}
        </F0Box>
      </F0Box>
    </F0Dialog>
  )
}
