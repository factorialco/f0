import { Meta, StoryObj } from "@storybook/react-vite"
import { useCallback, useEffect, useMemo, useState } from "react"

import type {
  ClarifyingQuestion,
  ClarifyingSelectionMode,
} from "../../../../actions/core/clarifyingQuestion/types"
import { F0AiChatProvider, useAiChat } from "../../../.."
import { ChatTextarea } from "../../ChatTextarea"

// ---------------------------------------------------------------------------
// Shared option sets
// ---------------------------------------------------------------------------

const CHECKBOX_OPTIONS = [
  { id: "vacation", label: "Vacation days" },
  { id: "sick", label: "Sick leave" },
  { id: "personal", label: "Personal days" },
  { id: "parental", label: "Parental leave" },
  { id: "bereavement", label: "Bereavement leave" },
]

const RADIO_OPTIONS = [
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
// Shared hook: encapsulates all clarifying-question state management
// so individual story examples stay minimal.
// ---------------------------------------------------------------------------

function useClarifyingQuestionStory(steps: StoryStep[]) {
  const { setClarifyingQuestion } = useAiChat()
  const [messages, setMessages] = useState<string[]>([])
  const [stepIndex, setStepIndex] = useState(0)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [customText, setCustomText] = useState("")
  const [isCustomActive, setIsCustomActive] = useState(false)
  const [allSelections, setAllSelections] = useState<Record<string, string[]>>(
    {}
  )
  const [allCustomTexts, setAllCustomTexts] = useState<Record<string, string>>(
    {}
  )
  const [allCustomActives, setAllCustomActives] = useState<
    Record<string, boolean>
  >({})

  const currentStep = steps[stepIndex]

  const toggleOption = useCallback(
    (optionId: string) => {
      if (currentStep.selectionMode === "radio") {
        setSelectedIds([optionId])
      } else {
        setSelectedIds((prev) =>
          prev.includes(optionId)
            ? prev.filter((id) => id !== optionId)
            : [...prev, optionId]
        )
      }
    },
    [currentStep.selectionMode]
  )

  const setCustomAnswerText = useCallback((text: string) => {
    setCustomText(text)
  }, [])

  const activateCustomAnswer = useCallback(() => {
    if (currentStep.selectionMode === "radio") {
      setSelectedIds([])
    }
    setIsCustomActive(true)
  }, [currentStep.selectionMode])

  const confirm = useCallback(() => {
    const updatedSelections = {
      ...allSelections,
      [currentStep.question]: selectedIds,
    }
    const updatedCustomTexts = {
      ...allCustomTexts,
      [currentStep.question]: customText,
    }
    const updatedCustomActives = {
      ...allCustomActives,
      [currentStep.question]: isCustomActive,
    }
    setAllSelections(updatedSelections)
    setAllCustomTexts(updatedCustomTexts)
    setAllCustomActives(updatedCustomActives)

    if (stepIndex < steps.length - 1) {
      const nextStep = steps[stepIndex + 1]
      setStepIndex(stepIndex + 1)
      setSelectedIds(updatedSelections[nextStep.question] ?? [])
      setCustomText(updatedCustomTexts[nextStep.question] ?? "")
      setIsCustomActive(updatedCustomActives[nextStep.question] ?? false)
    } else {
      // Final step — build summary and reset
      const summaryLines = steps.map((step) => {
        const stepSelections = updatedSelections[step.question] ?? []
        const stepCustom = updatedCustomTexts[step.question] ?? ""
        const stepCustomActive = updatedCustomActives[step.question] ?? false
        const labels = step.options
          .filter((o) => stepSelections.includes(o.id))
          .map((o) => o.label)
        const isRadio = step.selectionMode === "radio"
        const includeCustom = isRadio
          ? stepSelections.length === 0 && !!stepCustom
          : stepCustomActive && !!stepCustom
        if (includeCustom) {
          labels.push(`(custom) ${stepCustom}`)
        }
        return `${step.question} → ${labels.length > 0 ? labels.join(", ") : "(skipped)"}`
      })
      setMessages((prev) => [...prev, ...summaryLines])
      setClarifyingQuestion(null)
      setStepIndex(0)
      setSelectedIds([])
      setCustomText("")
      setIsCustomActive(false)
      setAllSelections({})
      setAllCustomTexts({})
      setAllCustomActives({})
    }
  }, [
    stepIndex,
    steps,
    currentStep,
    selectedIds,
    customText,
    isCustomActive,
    allSelections,
    allCustomTexts,
    allCustomActives,
    setClarifyingQuestion,
  ])

  const back = useCallback(() => {
    if (stepIndex > 0) {
      const updatedSelections = {
        ...allSelections,
        [currentStep.question]: selectedIds,
      }
      const updatedCustomTexts = {
        ...allCustomTexts,
        [currentStep.question]: customText,
      }
      const updatedCustomActives = {
        ...allCustomActives,
        [currentStep.question]: isCustomActive,
      }
      setAllSelections(updatedSelections)
      setAllCustomTexts(updatedCustomTexts)
      setAllCustomActives(updatedCustomActives)

      const prevStep = steps[stepIndex - 1]
      setStepIndex(stepIndex - 1)
      setSelectedIds(updatedSelections[prevStep.question] ?? [])
      setCustomText(updatedCustomTexts[prevStep.question] ?? "")
      setIsCustomActive(updatedCustomActives[prevStep.question] ?? false)
    }
  }, [
    stepIndex,
    steps,
    currentStep,
    selectedIds,
    customText,
    isCustomActive,
    allSelections,
    allCustomTexts,
    allCustomActives,
  ])

  // Sync clarifying question state into the AiChat context
  useEffect(() => {
    const question: ClarifyingQuestion = {
      question: currentStep.question,
      options: currentStep.options,
      selectedOptionIds: selectedIds,
      loading: false,
      selectionMode: currentStep.selectionMode,
      optional: currentStep.optional,
      allowCustomAnswer: currentStep.allowCustomAnswer,
      currentStepIndex: stepIndex,
      totalSteps: steps.length,
      customAnswerText: customText,
      isCustomAnswerActive: isCustomActive,
      setCustomAnswerText,
      setCustomAnswerActive: setIsCustomActive,
      activateCustomAnswer,
      toggleOption,
      confirm,
      back,
    }
    setClarifyingQuestion(question)
  }, [
    currentStep,
    selectedIds,
    customText,
    isCustomActive,
    stepIndex,
    steps.length,
    toggleOption,
    setCustomAnswerText,
    activateCustomAnswer,
    confirm,
    back,
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
  <div className="w-96 space-y-4">
    <div className="bg-gray-50 h-32 overflow-y-auto rounded-lg border p-4">
      {messages.length === 0 ? (
        <p className="text-gray-500 text-sm">{description}</p>
      ) : (
        <div className="space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className="text-sm font-medium">
              {msg}
            </div>
          ))}
        </div>
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

const ClarifyingCheckboxExample = () => {
  const steps = useMemo<StoryStep[]>(
    () => [
      {
        question: "Which leave types would you like to include in the report?",
        options: CHECKBOX_OPTIONS,
        selectionMode: "checkbox",
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

const ClarifyingRadioExample = () => {
  const steps = useMemo<StoryStep[]>(
    () => [
      {
        question: "What time period should the report cover?",
        options: RADIO_OPTIONS,
        selectionMode: "radio",
      },
    ],
    []
  )
  const { messages } = useClarifyingQuestionStory(steps)
  return (
    <StoryShell
      description="Radio-style clarifying question. Only one option can be selected."
      messages={messages}
    />
  )
}

const ClarifyingMultiStepExample = () => {
  const steps = useMemo<StoryStep[]>(
    () => [
      {
        question: "Which leave types would you like to include in the report?",
        options: CHECKBOX_OPTIONS,
        selectionMode: "checkbox",
      },
      {
        question: "What time period should the report cover?",
        options: RADIO_OPTIONS,
        selectionMode: "radio",
        optional: true,
        allowCustomAnswer: true,
      },
      {
        question: "What format do you want for the export?",
        options: FORMAT_OPTIONS,
        selectionMode: "radio",
      },
    ],
    []
  )
  const { messages } = useClarifyingQuestionStory(steps)
  return (
    <StoryShell
      description="Multi-step clarifying question. Step 1 (required, checkbox), step 2 (optional, radio, custom answer enabled), step 3 (required, radio)."
      messages={messages}
    />
  )
}

const ClarifyingCustomAnswerRadioExample = () => {
  const steps = useMemo<StoryStep[]>(
    () => [
      {
        question: "What time period should the report cover?",
        options: RADIO_OPTIONS,
        selectionMode: "radio",
        allowCustomAnswer: true,
      },
    ],
    []
  )
  const { messages } = useClarifyingQuestionStory(steps)
  return (
    <StoryShell
      description='Radio mode with custom answer. Selecting "Something else" clears the predefined option. Selecting a predefined option preserves custom text for reuse.'
      messages={messages}
    />
  )
}

const ClarifyingCustomAnswerCheckboxExample = () => {
  const steps = useMemo<StoryStep[]>(
    () => [
      {
        question: "Which leave types would you like to include in the report?",
        options: CHECKBOX_OPTIONS,
        selectionMode: "checkbox",
        allowCustomAnswer: true,
      },
    ],
    []
  )
  const { messages } = useClarifyingQuestionStory(steps)
  return (
    <StoryShell
      description="Checkbox mode with custom answer. Custom text coexists with checkbox selections — user can check options AND type a custom answer."
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

export const Checkbox: Story = {
  name: "Checkbox",
  render: () => <ClarifyingCheckboxExample />,
}

export const Radio: Story = {
  name: "Radio",
  render: () => <ClarifyingRadioExample />,
}

export const MultiStep: Story = {
  name: "Multi-Step",
  render: () => <ClarifyingMultiStepExample />,
}

export const CustomAnswerRadio: Story = {
  name: "Custom Answer — Radio",
  render: () => <ClarifyingCustomAnswerRadioExample />,
}

export const CustomAnswerCheckbox: Story = {
  name: "Custom Answer — Checkbox",
  render: () => <ClarifyingCustomAnswerCheckboxExample />,
}
