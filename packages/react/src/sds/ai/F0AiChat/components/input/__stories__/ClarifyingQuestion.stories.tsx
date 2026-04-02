import { Markdown } from "@copilotkit/react-ui"
import { Meta, StoryObj } from "@storybook/react-vite"
import { useCallback, useEffect, useMemo, useState } from "react"

import type {
  ClarifyingQuestionState,
  ClarifyingSelectionMode,
} from "../../../actions/core/clarifyingQuestion/types"

import { F0AiChatProvider, useAiChat } from "../../.."
import { buildSummaryMessage } from "../../../actions/core/clarifyingQuestion/buildSummaryMessage"
import { markdownRenderers } from "../../markdownRenderers"
import { ChatTextarea } from "../ChatTextarea"

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
// Step configuration type used by the shared story hook
// ---------------------------------------------------------------------------

interface StoryStep {
  question: string
  options: Array<{ id: string; label: string }>
  selectionMode: ClarifyingSelectionMode
  optional?: boolean
  allowCustomAnswer?: boolean
}

// ---------------------------------------------------------------------------
// Per-step interaction state
// ---------------------------------------------------------------------------

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
// Shared hook: encapsulates all clarifying-question state management
// so individual story examples stay minimal.
// ---------------------------------------------------------------------------

function useClarifyingQuestionStory(steps: StoryStep[]) {
  const { setClarifyingQuestion } = useAiChat()
  const [messages, setMessages] = useState<string[]>([])
  const [stepIndex, setStepIndex] = useState(0)
  const [interactions, setInteractions] = useState<
    Record<string, StepInteraction>
  >({})

  const currentStep = steps[stepIndex]
  const interaction = getInteraction(interactions, currentStep.question)
  const mode = currentStep.selectionMode

  const updateInteraction = useCallback(
    (patch: Partial<StepInteraction>) => {
      setInteractions((prev) => ({
        ...prev,
        [currentStep.question]: {
          ...getInteraction(prev, currentStep.question),
          ...patch,
        },
      }))
    },
    [currentStep.question]
  )

  const toggleOption = useCallback(
    (optionId: string) => {
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
    [mode, currentStep.question, updateInteraction]
  )

  const setCustomAnswerText = useCallback(
    (text: string) => {
      updateInteraction({ customText: text })
    },
    [updateInteraction]
  )

  const setCustomAnswerActive = useCallback(
    (active: boolean) => {
      updateInteraction({ isCustomActive: active })
    },
    [updateInteraction]
  )

  const activateCustomAnswer = useCallback(() => {
    const patch: Partial<StepInteraction> = { isCustomActive: true }
    if (mode === "single") {
      patch.selectedIds = []
    }
    updateInteraction(patch)
  }, [mode, updateInteraction])

  const confirm = useCallback(() => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1)
    } else {
      // Final step — build summary and reset
      const message = buildSummaryMessage(
        steps.map((step) => {
          const inter = getInteraction(interactions, step.question)
          return {
            question: step.question,
            options: step.options,
            selectionMode: step.selectionMode,
            selectedIds: inter.selectedIds,
            customText: inter.customText,
            isCustomActive: inter.isCustomActive,
          }
        }),
        { custom: "custom", skipped: "skipped" }
      )
      setMessages((prev) => [...prev, message])
      setClarifyingQuestion(null)
      setStepIndex(0)
      setInteractions({})
    }
  }, [stepIndex, steps, interactions, setClarifyingQuestion])

  const back = useCallback(() => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1)
    }
  }, [stepIndex])

  // Sync clarifying question state into the AiChat context
  useEffect(() => {
    const state: ClarifyingQuestionState = {
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
      back,
      setCustomAnswerText,
      setCustomAnswerActive,
      activateCustomAnswer,
    }
    setClarifyingQuestion(state)
  }, [
    currentStep,
    interaction,
    stepIndex,
    steps.length,
    toggleOption,
    confirm,
    back,
    setCustomAnswerText,
    setCustomAnswerActive,
    activateCustomAnswer,
    setClarifyingQuestion,
  ])

  return { messages }
}

// ---------------------------------------------------------------------------
// Story shell — renders message log + ChatTextarea
// ---------------------------------------------------------------------------

const StoryShell = ({
  description,
  messages,
}: {
  description: string
  messages: string[]
}) => (
  <div className="w-[360px] space-y-4">
    <div className="overflow-y-auto rounded-lg border p-4">
      {messages.length === 0 ? (
        <Markdown content={description} components={markdownRenderers} />
      ) : (
        <Markdown
          content={messages.map((msg) => msg).join(" ")}
          components={markdownRenderers}
        />
      )}
    </div>
    <ChatTextarea
      inProgress={false}
      onSend={async () => ({
        id: "",
        role: "assistant" as const,
        content: "",
      })}
      onStop={() => undefined}
    />
  </div>
)

// ---------------------------------------------------------------------------
// Story examples
// ---------------------------------------------------------------------------

const ClarifyingMultipleExample = () => {
  const steps = useMemo<StoryStep[]>(
    () => [
      {
        question: "Which leave types would you like to include in the report?",
        options: MULTIPLE_OPTIONS,
        selectionMode: "multiple",
      },
    ],
    []
  )
  const { messages } = useClarifyingQuestionStory(steps)
  return (
    <StoryShell
      description="Clarifying question is shown below. Select options and submit."
      messages={messages}
    />
  )
}

const ClarifyingSingleExample = () => {
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
  const { messages } = useClarifyingQuestionStory(steps)
  return (
    <StoryShell
      description="Single-select clarifying question. Only one option can be selected."
      messages={messages}
    />
  )
}

const ClarifyingMultiStepExample = () => {
  const steps = useMemo<StoryStep[]>(
    () => [
      {
        question: "Which leave types would you like to include in the report?",
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
  const { messages } = useClarifyingQuestionStory(steps)
  return (
    <StoryShell
      description="Multi-step clarifying question. Step 1 (required, multiple), step 2 (optional, single, custom answer enabled), step 3 (required, single)."
      messages={messages}
    />
  )
}

const ClarifyingCustomAnswerSingleExample = () => {
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
  const { messages } = useClarifyingQuestionStory(steps)
  return (
    <StoryShell
      description='Single mode with custom answer. Selecting "Something else" clears the predefined option. Selecting a predefined option preserves custom text for reuse.'
      messages={messages}
    />
  )
}

const ClarifyingCustomAnswerMultipleExample = () => {
  const steps = useMemo<StoryStep[]>(
    () => [
      {
        question: "Which leave types would you like to include in the report?",
        options: MULTIPLE_OPTIONS,
        selectionMode: "multiple",
        allowCustomAnswer: true,
      },
    ],
    []
  )
  const { messages } = useClarifyingQuestionStory(steps)
  return (
    <StoryShell
      description="Multiple mode with custom answer. Custom text coexists with checkbox selections — user can check options AND type a custom answer."
      messages={messages}
    />
  )
}

// ---------------------------------------------------------------------------
// Storybook meta + exports
// ---------------------------------------------------------------------------

const meta = {
  title: "AI/F0AiChat/Input/ChatTextarea/ClarifyingQuestion",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <F0AiChatProvider>
        <Story />
      </F0AiChatProvider>
    ),
  ],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Multiple: Story = {
  name: "Multiple",
  render: () => <ClarifyingMultipleExample />,
}

export const Single: Story = {
  name: "Single",
  render: () => <ClarifyingSingleExample />,
}

export const MultiStep: Story = {
  name: "Multi-Step",
  render: () => <ClarifyingMultiStepExample />,
}

export const CustomAnswerSingle: Story = {
  name: "Custom Answer — Single",
  render: () => <ClarifyingCustomAnswerSingleExample />,
}

export const CustomAnswerMultiple: Story = {
  name: "Custom Answer — Multiple",
  render: () => <ClarifyingCustomAnswerMultipleExample />,
}
