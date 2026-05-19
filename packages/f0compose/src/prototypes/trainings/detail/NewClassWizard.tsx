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

import { trainings, employees, type TrainingClass } from "@/fixtures"

// Mirrors upstream `modules/trainings/components/Revamp/NewClassWizard/`.
//
// Upstream step order (from useNewClassWizardSteps + step files):
//   1. BasicInformationStep — name, startDate/endDate (row), FUNDAE code
//                             (only if training.fundaeSubsidized), description
//   2. EventDataStep        — sidebar title "Sessions"; list of trainingSessions
//                             built via EventBox; we capture an optional
//                             kickoff session as a sandbox shortcut.
//   3. EmployeeSelectorStep — sidebar title "Participants"; just an employee
//                             multi-picker (EmployeeSelectorV2 multi).
//   4. CostsStep            — Budget → Direct cost → Indirect cost → Salary
//                             cost (+ salary hint Alert) → Subsidiary cost.
//   5. AttachmentsStep      — "Attach group resource"; upload files via
//                             NewFileModal. Sandbox uses a textarea fallback.
//
// All labels below are the resolved i18n strings from
// `frontend/src/translations/en.json`.

type Props = {
  trainingId: string
  isOpen: boolean
  onClose: () => void
  onCreated: (klass: TrainingClass) => void
}

// ── Option lists ─────────────────────────────────────────────────────────────

const participantOptions = employees.map((e) => ({
  value: e.id,
  label: e.fullName,
}))

const budgetOptions = [
  { value: "bdg-l-d", label: "L&D 2026 (EUR)" },
  { value: "bdg-eng", label: "Engineering training (EUR)" },
  { value: "bdg-sales", label: "Sales enablement (EUR)" },
] as const

// ── Step 1: Details (BasicInformationStep) ──────────────────────────────────
// Upstream sidebar title is "Details", step title also "Details".

const basicInfoSchema = z.object({
  name: f0FormField.text({
    label: "Group name",
    placeholder: "Up to 140 characters",
  }),
  startDate: f0FormField.date({
    label: "Start date",
    row: "dates",
  }),
  endDate: f0FormField.date({
    label: "End date",
    row: "dates",
  }),
  codigoGrupo: f0FormField.text({
    label: "Group code",
    optional: true,
    placeholder: "00001",
    helpText:
      "5-digit code used to register the group in FUNDAE. Group code is mandatory if you want to subsidize the course through FUNDAE.",
  }),
  description: f0FormField.textarea({
    label: "Description",
    optional: true,
  }),
})

// ── Step 2: Sessions (EventDataStep) ────────────────────────────────────────
// Upstream sidebar title "Sessions". Description: "Add sessions for this
// group of participants to attend, such as lectures, discussions, or
// activities, each with a designated time slot."
//
// Upstream renders an empty state + "Add session" button that opens an
// EventBox. The sandbox prototype captures a single optional kickoff
// session as a text shortcut. Use the class detail Sessions tab to add
// more after creation.

const sessionsSchema = z.object({
  kickoffSessionName: f0FormField.text({
    label: "Kickoff session name",
    optional: true,
    placeholder: "e.g. Kickoff & expectations",
    helpText:
      "Optional. If provided, a single kickoff session is created on the group start date. Add more sessions from the Sessions tab after creation.",
  }),
  kickoffLocation: f0FormField.text({
    label: "Location or online link",
    optional: true,
    placeholder: "Room 4B · HQ Madrid · https://meet.factorialhr.com/…",
  }),
})

// ── Step 3: Participants (EmployeeSelectorStep) ─────────────────────────────
// Upstream title "Participants" + description "Select employess to
// participate in this group" (typo present upstream — kept verbatim).

const participantsSchema = z.object({
  participantIds: f0FormField.multiSelect({
    label: "Participants",
    optional: true,
    options: participantOptions,
    placeholder: "Search employees…",
  }),
})

// ── Step 4: Costs ────────────────────────────────────────────────────────────
// Upstream order: Budget → Direct cost → Indirect cost → Salary cost (+
// salary hint Alert) → Subsidiary cost. All fields stacked vertically.

const costsSchema = z.object({
  budgetId: f0FormField.select({
    label: "Budget",
    optional: true,
    options: budgetOptions,
    placeholder: "No budget linked",
    helpText:
      "Link this group to a training budget. Group costs will be reflected in the budget consumption.",
  }),
  cost: f0FormField.number({
    label: "Direct cost",
    optional: true,
    min: 0,
    placeholder: "0.00",
    helpText:
      "Training-related expenses, such as instructor fees, materials, venue, and logistics.",
  }),
  indirectCost: f0FormField.number({
    label: "Indirect cost",
    optional: true,
    min: 0,
    placeholder: "0.00",
    helpText:
      "General business expenses related to training, such as utilities and administrative fees.",
  }),
  salaryCost: f0FormField.number({
    label: "Salary cost",
    optional: true,
    min: 0,
    placeholder: "0.00",
    helpText:
      "Cost of all employees' time spent on the course. Formula: (Annual salary / Annual working hours) × Total course hours.",
  }),
  subsidizedCost: f0FormField.number({
    label: "Subsidiary cost",
    optional: true,
    min: 0,
    placeholder: "0.00",
    helpText:
      "Amount of training expenses covered by financial aid or subsidies for this group.",
  }),
})

// ── Step 5: Attachments ──────────────────────────────────────────────────────
// Upstream title "Attach group resource", description "Add documents,
// including internal files and useful links, enhancing the learning
// experience.", primary action button "Upload file" (icon paperclip)
// opening a NewFileModal.

const attachmentsSchema = z.object({
  attachmentNames: f0FormField.textarea({
    label: "Materials",
    optional: true,
    placeholder: "agenda.pdf, pre-read.pdf, certificate-template.docx",
    helpText:
      "Optional. One filename per line or comma-separated. Real file upload is available from the class detail Documents tab.",
  }),
})

// ── Combined schema ──────────────────────────────────────────────────────────

const schema = {
  basicInfo: basicInfoSchema,
  participants: participantsSchema,
  sessions: sessionsSchema,
  costs: costsSchema,
  attachments: attachmentsSchema,
}

type Schema = typeof schema

const steps: F0WizardFormStep[] = [
  { title: "Details", sectionIds: ["basicInfo"] },
  { title: "Sessions", sectionIds: ["sessions"] },
  { title: "Participants", sectionIds: ["participants"] },
  { title: "Costs", sectionIds: ["costs"] },
  {
    title: "Attach group resource",
    sectionIds: ["attachments"],
    nextLabel: "Save",
  },
]

const sections = {
  basicInfo: { title: "Details" },
  sessions: { title: "Sessions" },
  participants: { title: "Participants" },
  costs: { title: "Costs" },
  attachments: { title: "Attach group resource" },
}

const defaultValues = {
  basicInfo: {
    name: "",
  },
  participants: {
    participantIds: [] as string[],
  },
  sessions: {},
  costs: {
    budgetId: "bdg-l-d",
  },
  attachments: {},
}

// ── Component ────────────────────────────────────────────────────────────────

export function NewClassWizard({
  trainingId,
  isOpen,
  onClose,
  onCreated,
}: Props) {
  const handleSubmit = useMemo(
    () =>
      async (arg: {
        sectionId: keyof Schema
        data: unknown
        fullData: {
          basicInfo: z.infer<typeof basicInfoSchema>
          participants: z.infer<typeof participantsSchema>
          sessions: z.infer<typeof sessionsSchema>
          costs: z.infer<typeof costsSchema>
          attachments: z.infer<typeof attachmentsSchema>
        }
      }): Promise<F0FormSubmitResult> => {
        if (arg.sectionId !== "attachments") return { success: true }

        const training = trainings.find((t) => t.id === trainingId)
        if (!training) return { success: false }

        const { basicInfo, participants, sessions, attachments } = arg.fullData

        const participantIds = participants.participantIds ?? []

        const participantList = participantIds
          .map((id) => employees.find((e) => e.id === id))
          .filter((e): e is NonNullable<typeof e> => Boolean(e))
          .map((e) => {
            const [firstName, ...rest] = e.fullName.split(" ")
            return {
              firstName: firstName ?? e.fullName,
              lastName: rest.join(" "),
              src: e.avatarUrl ?? "",
            }
          })

        const sessionCount = sessions.kickoffSessionName ? 1 : 0
        const attachmentText = attachments.attachmentNames ?? ""
        // attachments captured for completeness; the fixture TrainingClass
        // shape doesn't store them, but we keep parity with upstream by
        // accepting them in the wizard.
        void attachmentText

        const toIsoDate = (d: Date | null | undefined): string | null => {
          if (!d) return null
          const v = d instanceof Date ? d : new Date(d)
          return Number.isNaN(v.getTime()) ? null : v.toISOString().slice(0, 10)
        }

        const newClass: TrainingClass = {
          id: `cls-${Date.now()}`,
          trainingId,
          name: basicInfo.name?.trim() || "Untitled group",
          startDate: toIsoDate(basicInfo.startDate),
          endDate: toIsoDate(basicInfo.endDate),
          sessionCount,
          participantCount: participantList.length,
          completedAttendancesCount: 0,
          totalAttendancesCount: 0,
          participants: participantList,
        }

        training.classes.push(newClass)
        onCreated(newClass)
        return { success: true }
      },
    [trainingId, onCreated]
  )

  const formDefinition = useF0FormDefinition({
    name: "new-class-wizard",
    schema,
    sections,
    defaultValues,
    onSubmit: handleSubmit,
  })

  return (
    <F0WizardForm
      isOpen={isOpen}
      title="Create new group"
      formDefinition={formDefinition}
      steps={steps}
      onClose={onClose}
      autoCloseOnLastStepSubmit
    />
  )
}
