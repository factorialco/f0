import { useEffect, useState } from "react"
import { F0Alert, F0Box, F0Dialog, F0Select, F0Text } from "@factorialco/f0-react"
import { Input, Switch, Textarea } from "@factorialco/f0-react/dist/experimental"

import { surveyTemplates, type SurveyTemplate } from "@/fixtures"

type Props = {
  isOpen: boolean
  onClose: () => void
  onCreated: (template: SurveyTemplate) => void
}

type TrainingFormType = "satisfaction" | "effectiveness" | "knowledge"

const formTypeOptions: { value: TrainingFormType; label: string }[] = [
  { value: "satisfaction", label: "Satisfaction survey" },
  { value: "effectiveness", label: "Effectiveness survey" },
  { value: "knowledge", label: "Knowledge Test" },
]

export function NewFormWizard({ isOpen, onClose, onCreated }: Props) {
  const [trainingFormType, setTrainingFormType] =
    useState<TrainingFormType>("satisfaction")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [anonymous, setAnonymous] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    setTrainingFormType("satisfaction")
    setTitle("")
    setDescription("")
    setAnonymous(false)
  }, [isOpen])

  const handleCreate = () => {
    const category: SurveyTemplate["category"] =
      trainingFormType === "knowledge"
        ? "knowledge"
        : trainingFormType === "effectiveness"
          ? "feedback"
          : "satisfaction"

    const responseScale: SurveyTemplate["responseScale"] =
      category === "knowledge" ? "yes-no" : category === "feedback" ? "mixed" : "1-5"

    const newTemplate: SurveyTemplate = {
      id: `tpl-${Date.now()}`,
      name: title.trim() || "Untitled survey",
      description,
      questionCount: 10,
      responseScale,
      category,
      createdAt: new Date().toISOString().slice(0, 10),
      active: true,
    }

    void anonymous
    surveyTemplates.push(newTemplate)
    onCreated(newTemplate)
  }

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      position="center"
      width="md"
      title="New survey"
      description="Create a survey template for this training. You can edit questions after saving it."
      primaryAction={{
        label: "Save",
        onClick: handleCreate,
        disabled: title.trim() === "",
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="md">
        <F0Select<TrainingFormType>
          label="Survey type"
          value={trainingFormType}
          onChange={(value: TrainingFormType) => setTrainingFormType(value)}
          options={formTypeOptions}
        />
        {trainingFormType === "effectiveness" && (
          <F0Alert
            variant="info"
            title="Effectiveness survey"
            description="This survey is intended for the participant's manager or team lead to fill out."
          />
        )}
        <Input
          label="Survey name"
          value={title}
          onChange={(value) => setTitle(value ?? "")}
        />
        <Textarea
          label="Description"
          value={description}
          onChange={(value) => setDescription(value ?? "")}
          rows={3}
        />
        {trainingFormType === "satisfaction" && (
          <F0Box display="flex" justifyContent="between" alignItems="center">
            <F0Text variant="body" content="Anonymous answers" />
            <Switch checked={anonymous} onCheckedChange={setAnonymous} />
          </F0Box>
        )}
      </F0Box>
    </F0Dialog>
  )
}
