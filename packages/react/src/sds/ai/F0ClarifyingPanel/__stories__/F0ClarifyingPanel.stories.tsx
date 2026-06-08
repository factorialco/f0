import { Meta, StoryObj } from "@storybook/react-vite"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useMemo, useState } from "react"

import { F0ClarifyingPanel } from "../F0ClarifyingPanel"
import type { ClarifyingQuestionState, ClarifyingSelectionMode } from "../types"

// ---------------------------------------------------------------------------
// Story state primitives — all local. The panel is agnostic to F0AiChat;
// these stories prove it by managing state with plain useState, no provider.
// ---------------------------------------------------------------------------

interface StoryStep {
  question: string
  options: Array<{ id: string; label: string }>
  selectionMode: ClarifyingSelectionMode
  optional?: boolean
  allowCustomAnswer?: boolean
}

interface StepInteraction {
  selectedIds: string[]
  customText: string
  isCustomActive: boolean
}

const EMPTY_INTERACTION: StepInteraction = {
  selectedIds: [],
  customText: "",
  isCustomActive: false,
}

function getInteraction(
  map: Record<string, StepInteraction>,
  question: string
): StepInteraction {
  return map[question] ?? EMPTY_INTERACTION
}

// ---------------------------------------------------------------------------
// Shared option sets
// ---------------------------------------------------------------------------

const MULTIPLE_OPTIONS = [
  { id: "vacation", label: "Vacation days" },
  { id: "sick", label: "Sick leave" },
  { id: "personal", label: "Personal days" },
  { id: "parental", label: "Parental leave" },
  { id: "bereavement", label: "Bereavement leave" },
]

const SINGLE_OPTIONS = [
  { id: "this-month", label: "This month" },
  { id: "last-month", label: "Last month" },
  { id: "this-quarter", label: "This quarter" },
  { id: "this-year", label: "This year" },
]

const FORMAT_OPTIONS = [
  { id: "pdf", label: "PDF" },
  { id: "csv", label: "CSV" },
  { id: "excel", label: "Excel" },
]

// ---------------------------------------------------------------------------
// Shared local controller — builds a ClarifyingQuestionState from useState.
// Mirrors what a real consumer (e.g. factorial) would do, but with zero
// dependency on F0AiChat / useAiChat.
// ---------------------------------------------------------------------------

function useLocalClarifyingState(steps: StoryStep[]) {
  const [resolved, setResolved] = useState<string[]>([])
  const [stepIndex, setStepIndex] = useState(0)
  const [dismissed, setDismissed] = useState(false)
  const [interactions, setInteractions] = useState<
    Record<string, StepInteraction>
  >({})

  const currentStep = steps[stepIndex]
  const interaction = currentStep
    ? getInteraction(interactions, currentStep.question)
    : EMPTY_INTERACTION
  const mode = currentStep?.selectionMode

  const updateInteraction = useCallback(
    (patch: Partial<StepInteraction>) => {
      if (!currentStep) return
      setInteractions((prev) => ({
        ...prev,
        [currentStep.question]: {
          ...getInteraction(prev, currentStep.question),
          ...patch,
        },
      }))
    },
    [currentStep]
  )

  const toggleOption = useCallback(
    (optionId: string) => {
      if (!currentStep) return
      if (mode === "single") {
        updateInteraction({ selectedIds: [optionId] })
      } else {
        setInteractions((prev) => {
          const current = getInteraction(prev, currentStep.question).selectedIds
          const next = current.includes(optionId)
            ? current.filter((id) => id !== optionId)
            : [...current, optionId]
          return {
            ...prev,
            [currentStep.question]: {
              ...getInteraction(prev, currentStep.question),
              selectedIds: next,
            },
          }
        })
      }
    },
    [mode, currentStep, updateInteraction]
  )

  const setCustomAnswerText = useCallback(
    (text: string) => updateInteraction({ customText: text }),
    [updateInteraction]
  )

  const setCustomAnswerActive = useCallback(
    (active: boolean) => updateInteraction({ isCustomActive: active }),
    [updateInteraction]
  )

  const activateCustomAnswer = useCallback(() => {
    const patch: Partial<StepInteraction> = { isCustomActive: true }
    if (mode === "single") patch.selectedIds = []
    updateInteraction(patch)
  }, [mode, updateInteraction])

  const buildSummary = useCallback(() => {
    return steps
      .map((step) => {
        const inter = getInteraction(interactions, step.question)
        const labels = step.options
          .filter(({ id }) => inter.selectedIds.includes(id))
          .map(({ label }) => label)
        const isSingle = (step.selectionMode ?? "single") === "single"
        const includeCustom = isSingle
          ? inter.selectedIds.length === 0 && inter.customText.trim().length > 0
          : inter.isCustomActive && inter.customText.trim().length > 0
        if (includeCustom)
          labels.push(`(own response) ${inter.customText.trim()}`)
        return labels.length > 0
          ? `${step.question} → ${labels.join(", ")}`
          : `${step.question} → (skipped)`
      })
      .join("\n")
  }, [steps, interactions])

  const confirm = useCallback(() => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1)
    } else {
      setResolved((prev) => [...prev, buildSummary()])
      setStepIndex(0)
      setInteractions({})
      setDismissed(true)
    }
  }, [stepIndex, steps.length, buildSummary])

  const skip = useCallback(() => {
    if (!currentStep?.optional) return
    updateInteraction(EMPTY_INTERACTION)
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1)
    } else {
      setResolved((prev) => [...prev, "(skipped)"])
      setStepIndex(0)
      setInteractions({})
      setDismissed(true)
    }
  }, [currentStep?.optional, stepIndex, steps.length, updateInteraction])

  const cancel = useCallback(() => {
    setStepIndex(0)
    setInteractions({})
    setDismissed(true)
  }, [])

  const back = useCallback(() => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1)
  }, [stepIndex])

  const reset = useCallback(() => {
    setStepIndex(0)
    setInteractions({})
    setDismissed(false)
  }, [])

  const state: ClarifyingQuestionState | null = dismissed
    ? null
    : currentStep
      ? {
          currentStep: {
            question: currentStep.question,
            options: currentStep.options,
            selectionMode: currentStep.selectionMode,
            optional: currentStep.optional,
            allowCustomAnswer: currentStep.allowCustomAnswer,
            selectedOptionIds: interaction.selectedIds,
            customAnswerText: interaction.customText || undefined,
            isCustomAnswerActive: interaction.isCustomActive,
          },
          currentStepIndex: stepIndex,
          totalSteps: steps.length,
          toggleOption,
          confirm,
          skip,
          cancel,
          back,
          setCustomAnswerText,
          setCustomAnswerActive,
          activateCustomAnswer,
        }
      : null

  return { state, resolved, reset }
}

// ---------------------------------------------------------------------------
// Story shell — renders the panel plus a "resolved" log. No F0AiChat anywhere.
// ---------------------------------------------------------------------------

const StoryShell = ({
  steps,
  isSubmitDisabled,
}: {
  steps: StoryStep[]
  isSubmitDisabled?: boolean
}) => {
  const { state, resolved, reset } = useLocalClarifyingState(steps)

  return (
    <div className="w-[360px] space-y-3">
      <div className="overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background">
        <AnimatePresence initial={false}>
          {state ? (
            <motion.div
              key="panel"
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <F0ClarifyingPanel
                clarifyingQuestion={state}
                isSubmitDisabled={isSubmitDisabled}
              />
            </motion.div>
          ) : (
            <motion.div
              key="resolved"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex flex-col gap-2 p-4">
                <div className="text-sm font-medium text-f1-foreground">
                  Resolved:
                </div>
                <pre className="whitespace-pre-wrap text-sm text-f1-foreground-secondary">
                  {resolved.join("\n\n") || "(no responses yet)"}
                </pre>
                <button
                  className="self-start rounded-md border border-solid border-f1-border px-3 py-1 text-sm text-f1-foreground hover:bg-f1-background-secondary"
                  onClick={reset}
                >
                  Restart
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Meta + story exports
// ---------------------------------------------------------------------------

const meta = {
  title: "AI/F0ClarifyingPanel",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SingleSelect: Story = {
  render: () => {
    const steps = useMemo<StoryStep[]>(
      () => [
        {
          question: "What time period should the report cover?",
          options: SINGLE_OPTIONS,
          selectionMode: "single",
        },
      ],
      []
    )
    return <StoryShell steps={steps} />
  },
}

export const MultipleSelect: Story = {
  render: () => {
    const steps = useMemo<StoryStep[]>(
      () => [
        {
          question:
            "Which leave types would you like to include in the report?",
          options: MULTIPLE_OPTIONS,
          selectionMode: "multiple",
        },
      ],
      []
    )
    return <StoryShell steps={steps} />
  },
}

export const MultiStep: Story = {
  render: () => {
    const steps = useMemo<StoryStep[]>(
      () => [
        {
          question:
            "Which leave types would you like to include in the report?",
          options: MULTIPLE_OPTIONS,
          selectionMode: "multiple",
        },
        {
          question: "What time period should the report cover?",
          options: SINGLE_OPTIONS,
          selectionMode: "single",
          optional: true,
          allowCustomAnswer: true,
        },
        {
          question: "What format do you want for the export?",
          options: FORMAT_OPTIONS,
          selectionMode: "single",
        },
      ],
      []
    )
    return <StoryShell steps={steps} />
  },
}

export const CustomAnswerSingle: Story = {
  render: () => {
    const steps = useMemo<StoryStep[]>(
      () => [
        {
          question: "What time period should the report cover?",
          options: SINGLE_OPTIONS,
          selectionMode: "single",
          allowCustomAnswer: true,
        },
      ],
      []
    )
    return <StoryShell steps={steps} />
  },
}

export const CustomAnswerMultiple: Story = {
  render: () => {
    const steps = useMemo<StoryStep[]>(
      () => [
        {
          question:
            "Which leave types would you like to include in the report?",
          options: MULTIPLE_OPTIONS,
          selectionMode: "multiple",
          allowCustomAnswer: true,
        },
      ],
      []
    )
    return <StoryShell steps={steps} />
  },
}

/**
 * Simulates the assistant still streaming a response: submission (final-step
 * confirm, Enter on the custom answer, and Skip) is disabled until the toggle
 * is turned off, while option selection and step navigation stay interactive.
 */
export const SubmitDisabled: Story = {
  render: () => {
    const [isResponding, setIsResponding] = useState(true)
    const steps = useMemo<StoryStep[]>(
      () => [
        {
          question: "What time period should the report cover?",
          options: SINGLE_OPTIONS,
          selectionMode: "single",
          optional: true,
          allowCustomAnswer: true,
        },
      ],
      []
    )
    return (
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm text-f1-foreground">
          <input
            type="checkbox"
            checked={isResponding}
            onChange={(e) => setIsResponding(e.target.checked)}
          />
          Assistant is responding (submit disabled)
        </label>
        <StoryShell steps={steps} isSubmitDisabled={isResponding} />
      </div>
    )
  },
}

export const OptionalWithSkip: Story = {
  render: () => {
    const steps = useMemo<StoryStep[]>(
      () => [
        {
          question: "Any specific employee group to include? (optional)",
          options: [
            { id: "engineering", label: "Engineering" },
            { id: "sales", label: "Sales" },
            { id: "marketing", label: "Marketing" },
          ],
          selectionMode: "single",
          optional: true,
        },
      ],
      []
    )
    return <StoryShell steps={steps} />
  },
}
