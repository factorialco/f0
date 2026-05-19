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

import {
  competencies,
  trainingAxes,
  trainingCategories,
  trainingProcesses,
  trainings,
  type Training,
} from "@/fixtures"

type Props = {
  isOpen: boolean
  onClose: () => void
  onCreated: (training: Training) => void
}

// ── Static option lists ──────────────────────────────────────────────────────

const externalOptions = [
  { value: "internal", label: "Internal" },
  { value: "external", label: "External" },
] as const

const competencyOptions = competencies.map((c) => ({
  value: c.id,
  label: c.name,
}))

const categoryOptions = trainingCategories.map((c) => ({
  value: c.id,
  label: c.name,
}))

const axisOptions = trainingAxes.map((a) => ({
  value: a.id,
  label: a.name,
}))

const processOptions = trainingProcesses.map((p) => ({
  value: p.id,
  label: p.name,
}))

// ── Step 1: Basic information ────────────────────────────────────────────────
// Upstream key: trainings.trainings_revamp.new_training.wizard.basic_information
// Field order: name → thumbnail → objectives → description → competencies
// → total course duration (hours + minutes) → competencies callout →
// mandatory toggle → course validity (with year selector when toggled on).
// Note: thumbnail/objectives/description are rich-text upstream — sandbox uses
// url+textarea fallbacks. Learning-platform card is rendered in BasicInfoStep
// upstream via a separate Card section (kept here as toggle for fidelity).

const validityYearOptions = Array.from({ length: 10 }, (_, i) => {
  const n = i + 1
  return { value: String(n), label: n === 1 ? "1 year" : `${n} years` }
})

const basicInfoSchema = z.object({
  name: f0FormField.text({
    label: "Course name",
    placeholder: "Course name",
  }),
  thumbnailUrl: f0FormField.url({
    label: "Thumbnail",
    optional: true,
    placeholder: "https://...",
    helpText:
      "Add an image to show as the course thumbnail in the Catalog. Upload .jpeg, .png, or .mov files up to 10MB.",
  }),
  objectives: f0FormField.textarea({
    label: "Objectives",
    optional: true,
    helpText: "Define this course's goals and outcomes.",
  }),
  description: f0FormField.textarea({
    label: "Description",
    optional: true,
    helpText: "Add information about the content and structure of the course.",
  }),
  competencyIds: f0FormField.multiSelect({
    label: "Competencies",
    optional: true,
    helpText: "Select the competencies developed within this course.",
    options: competencyOptions,
  }),
  hours: f0FormField.number({
    label: "Hours",
    row: "duration",
    optional: true,
    isInt: true,
    min: 0,
    placeholder: "0",
  }),
  minutes: f0FormField.number({
    label: "Minutes",
    row: "duration",
    optional: true,
    isInt: true,
    min: 0,
    max: 59,
    placeholder: "0",
  }),
  isMandatory: f0FormField.boolean({
    label: "Mandatory course",
    helpText:
      "Mark this course as mandatory to track completion and meet compliance requirements.",
    optional: true,
  }),
  hasLearningPlatform: f0FormField.boolean({
    label: "Hosted on a learning platform",
    optional: true,
  }),
  learningPlatformName: f0FormField.text({
    label: "Platform name",
    optional: true,
    placeholder: "e.g. Coursera",
    renderIf: { fieldId: "hasLearningPlatform", equalsTo: true },
  }),
  learningPlatformLink: f0FormField.url({
    label: "Platform link",
    optional: true,
    placeholder: "https://...",
    renderIf: { fieldId: "hasLearningPlatform", equalsTo: true },
  }),
  hasCourseValidity: f0FormField.boolean({
    label: "Course validity",
    helpText:
      "This course is valid for a limited time and must be retaken afterward.",
    optional: true,
  }),
  validFor: f0FormField.select({
    label: "Validity period",
    optional: true,
    options: validityYearOptions,
    renderIf: { fieldId: "hasCourseValidity", equalsTo: true },
  }),
})

// ── Step 2: Admin information ────────────────────────────────────────────────
// Upstream key: trainings.trainings_revamp.new_training.wizard.internal_information
// Step renamed upstream to "Admin information" (new_step_title).
// Field order: year → internal code → type → externalProvider (if external) →
// tags → axes (France only) → Fundae card (Spain) / Subsidize card (other) →
// Workflow card.

const internalInfoSchema = z.object({
  year: f0FormField.number({
    label: "Year",
    isInt: true,
    min: 2000,
    placeholder: String(new Date().getFullYear()),
  }),
  code: f0FormField.text({
    label: "Internal code",
    optional: true,
    placeholder: "Internal code",
    helpText:
      "If you use an internal code in other applications or files, add it here as well.",
  }),
  external: f0FormField.select({
    label: "Type",
    options: externalOptions,
  }),
  externalProvider: f0FormField.text({
    label: "External provider",
    optional: true,
    placeholder: "External provider",
    renderIf: { fieldId: "external", equalsTo: "external" },
  }),
  categoryIds: f0FormField.multiSelect({
    label: "Tags",
    optional: true,
    helpText:
      "Adding tags facilitates the process of identifying and filtering course.",
    options: categoryOptions,
  }),
  axeIds: f0FormField.multiSelect({
    label: "Axes",
    optional: true,
    helpText:
      "Axes help classify trainings for French regulatory reporting.",
    options: axisOptions,
  }),
  fundaeSubsidized: f0FormField.boolean({
    label: "Subsidized by FUNDAE",
    helpText:
      "Activate this feature to enter information regarding the subsidization process.",
    optional: true,
  }),
  codigoCurso: f0FormField.text({
    label: "Course code",
    helpText: "4-digit code used to register the course in FUNDAE.",
    optional: true,
    placeholder: "00001",
    renderIf: { fieldId: "fundaeSubsidized", equalsTo: true },
  }),
  perfil: f0FormField.select({
    label: "Profile",
    helpText: "Type of company used to access FUNDAE.",
    optional: true,
    options: [
      { value: "Empresa Bonificada", label: "Empresa Bonificada" },
      { value: "Organizadora", label: "Organizadora" },
      { value: "Grupo de Empresa", label: "Grupo de Empresa" },
    ],
    renderIf: { fieldId: "fundaeSubsidized", equalsTo: true },
  }),
  expediente: f0FormField.text({
    label: "File",
    helpText: "Company registration code in FUNDAE.",
    optional: true,
    placeholder: "B238888AC",
    renderIf: { fieldId: "fundaeSubsidized", equalsTo: true },
  }),
  subsidized: f0FormField.boolean({
    label: "Subsidize this course",
    helpText: "Mark it as eligible for a subsidy.",
    optional: true,
  }),
  workflowStatus: f0FormField.boolean({
    label: "Link this course with Workflows",
    helpText:
      "Use our Workflows solution to automate actions such as generating course certificates or sending questionnaires.",
    optional: true,
  }),
  processId: f0FormField.select({
    label: "Select a workflow",
    optional: true,
    placeholder: "Select a workflow",
    options: processOptions,
    renderIf: { fieldId: "workflowStatus", equalsTo: true },
  }),
})

// ── Step 3: Course completion ────────────────────────────────────────────────
// Upstream key: trainings.trainings_revamp.new_training.wizard.completion_configuration
// Step title: "Course completion". Description: "Define the conditions
// participants must meet to complete the course." Each rule is a toggle that
// reveals a percentage field (default 100) or boolean state.

const completionSchema = z.object({
  moduleCompletionEnabled: f0FormField.boolean({
    label: "Complete all LMS modules",
    helpText:
      "Participants must complete all course modules and pass every quiz.",
    optional: true,
  }),
  moduleCompletedPercentage: f0FormField.number({
    label: "Minimum module completion (%)",
    optional: true,
    isInt: true,
    min: 0,
    max: 100,
    placeholder: "100",
    renderIf: { fieldId: "moduleCompletionEnabled", equalsTo: true },
  }),
  attendanceEnabled: f0FormField.boolean({
    label: "Attend sessions",
    helpText:
      "Set the minimum percentage of sessions in this course each participant needs to attend.",
    optional: true,
  }),
  attendancePercentage: f0FormField.number({
    label: "Minimum attendance",
    optional: true,
    isInt: true,
    min: 0,
    max: 100,
    placeholder: "100",
    renderIf: { fieldId: "attendanceEnabled", equalsTo: true },
  }),
  knowledgeTestRequired: f0FormField.boolean({
    label: "Pass the knowledge test",
    helpText:
      "Participants must pass a test that assesses their understanding of this course's content.",
    optional: true,
  }),
})

// ── Combined schema ──────────────────────────────────────────────────────────

const schema = {
  basicInfo: basicInfoSchema,
  internalInfo: internalInfoSchema,
  completion: completionSchema,
}

type Schema = typeof schema

const steps: F0WizardFormStep[] = [
  { title: "Basic information", sectionIds: ["basicInfo"] },
  { title: "Admin information", sectionIds: ["internalInfo"] },
  {
    title: "Course completion",
    sectionIds: ["completion"],
    nextLabel: "Create",
  },
]

const sections = {
  basicInfo: { title: "Basic information" },
  internalInfo: { title: "Admin information" },
  completion: { title: "Course completion" },
}

const defaultValues = {
  basicInfo: {
    name: "",
    isMandatory: false,
    hasLearningPlatform: false,
    hasCourseValidity: false,
    // Pre-seed conditional selects so they render with a real option the moment
    // the gating flag is toggled on. Avoids empty-state Radix Select issues.
    validFor: "1",
  },
  internalInfo: {
    year: new Date().getFullYear(),
    external: "internal" as const,
    fundaeSubsidized: false,
    subsidized: false,
    workflowStatus: false,
    perfil: "Empresa Bonificada",
    processId: trainingProcesses[0]?.id ?? "",
  },
  completion: {
    moduleCompletionEnabled: false,
    attendanceEnabled: false,
    knowledgeTestRequired: false,
  },
}

// ── Component ────────────────────────────────────────────────────────────────

export function NewTrainingWizard({ isOpen, onClose, onCreated }: Props) {
  const handleSubmit = useMemo(
    () =>
      async (arg: {
        sectionId: keyof Schema
        data: unknown
        fullData: {
          basicInfo: z.infer<typeof basicInfoSchema>
          internalInfo: z.infer<typeof internalInfoSchema>
          completion: z.infer<typeof completionSchema>
        }
      }): Promise<F0FormSubmitResult> => {
        if (arg.sectionId !== "completion") return { success: true }

        const { basicInfo, internalInfo, completion } = arg.fullData
        const id = `trn-${Date.now()}`
        const selectedCategories = trainingCategories.filter((c) =>
          (internalInfo.categoryIds ?? []).includes(c.id)
        )
        const totalDuration =
          (basicInfo.hours ?? 0) + (basicInfo.minutes ?? 0) / 60

        const newTraining: Training = {
          id,
          name: basicInfo.name ?? "Untitled training",
          code: internalInfo.code ?? null,
          status: "draft",
          type: internalInfo.external === "external" ? "external" : "internal",
          externalProvider: internalInfo.externalProvider ?? null,
          isMandatory: basicInfo.isMandatory ?? false,
          catalog: false,
          year: internalInfo.year ?? new Date().getFullYear(),
          totalDuration,
          totalCost: 0,
          totalSalaryCost: 0,
          totalSubsidizedCost: 0,
          subsidized:
            (internalInfo.fundaeSubsidized ?? false) ||
            (internalInfo.subsidized ?? false),
          validFor: basicInfo.hasCourseValidity
            ? basicInfo.validFor
              ? Number(basicInfo.validFor)
              : null
            : null,
          categories: selectedCategories,
          description: basicInfo.description ?? "",
          objectives: basicInfo.objectives ?? "",
          participantCount: 0,
          expiredParticipantCount: 0,
          groupNames: [],
          participantAvatars: [],
          instructorAvatars: [],
          publishedAsFreeCourse: false,
          isSessionsRequired: false,
          isModulesRequired: false,
          knowledgeTestRequired: completion.knowledgeTestRequired ?? false,
          courseValidityEnabled: basicInfo.hasCourseValidity ?? false,
          classes: [],
        }

        trainings.push(newTraining)
        onCreated(newTraining)
        return { success: true }
      },
    [onCreated]
  )

  const formDefinition = useF0FormDefinition({
    name: "new-training-wizard",
    schema,
    sections,
    defaultValues,
    onSubmit: handleSubmit,
  })

  return (
    <F0WizardForm
      isOpen={isOpen}
      title="New course draft"
      formDefinition={formDefinition}
      steps={steps}
      onClose={onClose}
      autoCloseOnLastStepSubmit
    />
  )
}
