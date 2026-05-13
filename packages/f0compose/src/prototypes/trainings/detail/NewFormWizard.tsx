import { useMemo } from "react"
import {
  F0WizardForm,
  f0FormField,
  useF0FormDefinition,
} from "@factorialco/f0-react"
import type {
  F0WizardFormStep,
  F0FormSubmitResult,
} from "@factorialco/f0-react"
import { z } from "zod"

import { surveyTemplates, type SurveyTemplate } from "@/fixtures"

// Mirrors upstream `modules/trainings/components/Revamp/NewFormWizard/`:
//   1. FormTypeStep  — satisfaction | effectiveness | knowledge (radio cards)
//   2. BasicInfoStep — title (required), description, anonymous toggle
//
// Upstream behaviour (verified in source + i18n en.json):
//   • Title is "New survey" when invoked from a training (isTemplate=false)
//     and "New Survey Template" when invoked standalone.
//   • Step 1 title: "Survey type". Step 2 title: "Basic information".
//   • Picking `satisfaction` keeps anonymous toggle visible (default off).
//   • Picking `effectiveness` shows an info Alert ("This survey is intended
//     for the participant's manager or team lead to fill out.") in step 2.
//   • The anonymous toggle is ONLY visible for satisfaction surveys.
//   • Final CTA: `common.save` → "Save".
//
// Local fixture uses SurveyTemplate.category = satisfaction | knowledge |
// feedback. We map `effectiveness → feedback` when persisting.

type Props = {
  isOpen: boolean
  onClose: () => void
  onCreated: (template: SurveyTemplate) => void
}

// Upstream FormTypeStep renders three big radio cards. We surface the same
// three options with their exact i18n copy.
const formTypeOptions = [
  {
    value: "satisfaction",
    label: "Satisfaction survey",
  },
  {
    value: "effectiveness",
    label: "Effectiveness survey",
  },
  {
    value: "knowledge",
    label: "Knowledge Test",
  },
] as const

// ── Step 1: Form type ────────────────────────────────────────────────────────

const formTypeSchema = z.object({
  trainingFormType: f0FormField.select({
    label: "Survey type",
    options: formTypeOptions,
    helpText:
      "Satisfaction surveys assess participants' satisfaction with the course. Effectiveness surveys evaluate whether the course met its goals. Knowledge tests evaluate retention of key concepts.",
  }),
})

// ── Step 2: Basic info ───────────────────────────────────────────────────────

const basicInfoSchema = z.object({
  title: f0FormField.text({
    label: "Survey name",
  }),
  description: f0FormField.textarea({
    label: "Description",
    optional: true,
  }),
  anonymous: f0FormField.boolean({
    label: "Anonymous answers",
    optional: true,
    helpText:
      "Decide whether survey responses will be anonymous. Keep in mind that anonymity can encourage honest feedback.",
    renderIf: { fieldId: "trainingFormType", equalsTo: "satisfaction" },
  }),
})

// ── Combined schema ──────────────────────────────────────────────────────────

const schema = {
  formType: formTypeSchema,
  basicInfo: basicInfoSchema,
}

type Schema = typeof schema

const steps: F0WizardFormStep[] = [
  { title: "Survey type", sectionIds: ["formType"] },
  {
    title: "Basic information",
    sectionIds: ["basicInfo"],
    nextLabel: "Save",
  },
]

const sections = {
  formType: { title: "Survey type" },
  basicInfo: { title: "Basic information" },
}

const defaultValues = {
  formType: {
    trainingFormType: "satisfaction" as const,
  },
  basicInfo: {
    title: "",
    anonymous: false,
  },
}

// ── Component ────────────────────────────────────────────────────────────────

export function NewFormWizard({ isOpen, onClose, onCreated }: Props) {
  const handleSubmit = useMemo(
    () =>
      async (arg: {
        sectionId: keyof Schema
        data: unknown
        fullData: {
          formType: z.infer<typeof formTypeSchema>
          basicInfo: z.infer<typeof basicInfoSchema>
        }
      }): Promise<F0FormSubmitResult> => {
        if (arg.sectionId !== "basicInfo") return { success: true }

        const { formType, basicInfo } = arg.fullData

        // Map upstream FormsTypeEnum → local SurveyTemplate.category.
        const category: SurveyTemplate["category"] =
          formType.trainingFormType === "knowledge"
            ? "knowledge"
            : formType.trainingFormType === "effectiveness"
              ? "feedback"
              : "satisfaction"

        const responseScale: SurveyTemplate["responseScale"] =
          category === "knowledge"
            ? "yes-no"
            : category === "feedback"
              ? "mixed"
              : "1-5"

        const newTemplate: SurveyTemplate = {
          id: `tpl-${Date.now()}`,
          name: basicInfo.title?.trim() || "Untitled survey",
          description: basicInfo.description ?? "",
          questionCount: 10,
          responseScale,
          category,
          createdAt: new Date().toISOString().slice(0, 10),
          active: true,
        }

        surveyTemplates.push(newTemplate)
        onCreated(newTemplate)
        return { success: true }
      },
    [onCreated]
  )

  const formDefinition = useF0FormDefinition({
    name: "new-form-wizard",
    schema,
    sections,
    defaultValues,
    onSubmit: handleSubmit,
  })

  return (
    <F0WizardForm
      isOpen={isOpen}
      title="New survey"
      formDefinition={formDefinition}
      steps={steps}
      onClose={onClose}
      autoCloseOnLastStepSubmit
    />
  )
}
