import { Meta, StoryObj } from "@storybook/react-vite"
import { useRef, useState } from "react"

import type { ClarifyingOption } from "../types"

import { F0AiChatTextArea } from "../F0AiChatTextArea"

const PLACEHOLDERS = [
  "Ask about location, directions, or travel details…",
  "Inquire about pricing, features, or product availability…",
  "Request clarification on tasks, deadlines, or requirements…",
  "Ask for opinions, recommendations, or comparisons…",
  "Provide details about issues, errors, or unexpected behavior…",
]

// Wrapper component to manage state
const ChatTextareaWrapper = ({
  placeholders,
  defaultPlaceholder,
}: {
  placeholders?: string[]
  defaultPlaceholder?: string
}) => {
  const [messages, setMessages] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)

  const handleSend = async (message: string) => {
    setMessages((prev) => [...prev, `User: ${message}`])
    setIsProcessing(true)

    abortControllerRef.current = new AbortController()

    try {
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(resolve, 2000)

        abortControllerRef.current?.signal.addEventListener(
          "abort",
          () => {
            clearTimeout(timeout)
            reject(new Error("Request aborted"))
          },
          { once: true }
        )
      })

      setMessages((prev) => [
        ...prev,
        `AI: This is a mock response after 2 seconds of thinking. I've processed your message: "${message}"`,
      ])
    } catch (error) {
      if (error instanceof Error && error.message === "Request aborted") {
        setMessages((prev) => [...prev, `AI: Request was cancelled by user.`])
      } else {
        setMessages((prev) => [
          ...prev,
          `AI: An error occurred while processing your message.`,
        ])
      }
    } finally {
      setIsProcessing(false)
      abortControllerRef.current = null
    }
  }

  const handleStop = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    setIsProcessing(false)
  }

  return (
    <div className="w-96 space-y-4">
      <div className="bg-gray-50 h-64 overflow-y-auto rounded-lg border p-4">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No messages yet. Type something below to start the conversation.
          </p>
        ) : (
          <div className="space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium">{msg}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <F0AiChatTextArea
        inProgress={isProcessing}
        onSend={handleSend}
        onStop={handleStop}
        placeholders={placeholders}
        defaultPlaceholder={defaultPlaceholder}
      />
    </div>
  )
}

const meta = {
  title: "AI/F0AiChatTextArea",
  component: ChatTextareaWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChatTextareaWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithMultiplePlaceholders: Story = {
  args: {
    placeholders: PLACEHOLDERS,
  },
}

export const WithSinglePlaceholder: Story = {
  args: {
    placeholders: [PLACEHOLDERS[0]],
  },
}

export const WithCustomDefaultPlaceholder: Story = {
  args: {
    defaultPlaceholder: "Type your question here...",
  },
}

// Standalone component stories for specific states
const SubmitLabelExample = () => {
  const [isProcessing, setIsProcessing] = useState(false)

  return (
    <div className="w-96">
      <F0AiChatTextArea
        inProgress={isProcessing}
        onSend={() => {
          setIsProcessing(true)
          setTimeout(() => setIsProcessing(false), 2000)
        }}
        onStop={() => setIsProcessing(false)}
        submitLabel="Send"
      />
    </div>
  )
}

export const WithSubmitLabel: Story = {
  render: () => <SubmitLabelExample />,
}

export const InProgress: Story = {
  render: () => (
    <div className="w-96">
      <F0AiChatTextArea
        inProgress={true}
        onSend={() => {}}
        onStop={() => alert("Stopped!")}
      />
    </div>
  ),
}

// --- WithClarifyingQuestions ---

interface ClarifyingStep {
  question: string
  options: ClarifyingOption[]
}

const CLARIFYING_STEPS: ClarifyingStep[] = [
  {
    question: "What type of report do you need?",
    options: [
      { id: "attendance", label: "Attendance & absences" },
      { id: "payroll", label: "Payroll & compensation" },
      { id: "performance", label: "Performance & goals" },
      { id: "headcount", label: "Headcount & turnover" },
    ],
  },
  {
    question: "Which time period should it cover?",
    options: [
      { id: "30d", label: "Last 30 days" },
      { id: "quarter", label: "Last quarter" },
      { id: "ytd", label: "Year to date" },
      { id: "custom", label: "Custom range" },
    ],
  },
  {
    question: "Who should be included?",
    options: [
      { id: "all", label: "All employees" },
      { id: "active", label: "Active employees only" },
      { id: "dept", label: "A specific department" },
      { id: "direct", label: "Direct reports only" },
    ],
  },
]

const ClarifyingQuestionsWrapper = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [stepIndex, setStepIndex] = useState<number | null>(null)
  const [loadingQuestion, setLoadingQuestion] = useState(false)
  const [selections, setSelections] = useState<Record<number, string[]>>({})
  const abortControllerRef = useRef<AbortController | null>(null)

  const currentStep = stepIndex !== null ? CLARIFYING_STEPS[stepIndex] : null
  const currentSelections =
    stepIndex !== null ? (selections[stepIndex] ?? []) : []
  const isLastStep = stepIndex === CLARIFYING_STEPS.length - 1

  const toggleOption = (id: string) => {
    if (stepIndex === null) return
    setSelections((prev) => {
      const current = prev[stepIndex] ?? []
      const updated = current.includes(id)
        ? current.filter((o) => o !== id)
        : [...current, id]
      return { ...prev, [stepIndex]: updated }
    })
  }

  const handleNext = () => {
    if (stepIndex === null) return
    if (isLastStep) {
      setStepIndex(null)
      setIsProcessing(true)

      abortControllerRef.current = new AbortController()
      const timeout = setTimeout(() => {
        setIsProcessing(false)
        abortControllerRef.current = null
      }, 2000)

      abortControllerRef.current.signal.addEventListener(
        "abort",
        () => {
          clearTimeout(timeout)
          setIsProcessing(false)
        },
        { once: true }
      )
    } else {
      // Simulate loading the next question
      setLoadingQuestion(true)
      setTimeout(() => {
        setStepIndex((prev) => (prev !== null ? prev + 1 : 0))
        setLoadingQuestion(false)
      }, 800)
    }
  }

  const handleBack = () => {
    setStepIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : null))
  }

  const handleSend = async (_message: string) => {
    setIsProcessing(true)

    abortControllerRef.current = new AbortController()

    try {
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(resolve, 1500)
        abortControllerRef.current?.signal.addEventListener(
          "abort",
          () => {
            clearTimeout(timeout)
            reject(new Error("aborted"))
          },
          { once: true }
        )
      })
      setSelections({})
      // Show skeleton briefly before revealing the first question
      setLoadingQuestion(true)
      setStepIndex(0)
      setTimeout(() => setLoadingQuestion(false), 1000)
    } catch {
      // aborted — nothing to do
    } finally {
      setIsProcessing(false)
      abortControllerRef.current = null
    }
  }

  const handleStop = () => {
    abortControllerRef.current?.abort()
    setIsProcessing(false)
  }

  return (
    <div className="w-96">
      <F0AiChatTextArea
        inProgress={isProcessing}
        onSend={handleSend}
        onStop={handleStop}
        defaultPlaceholder="Ask me to generate a report…"
        clarifyingQuestion={
          currentStep
            ? {
                question: currentStep.question,
                options: currentStep.options,
                selectedOptionIds: currentSelections,
                onToggleOption: toggleOption,
                onConfirm: handleNext,
                onBack:
                  stepIndex !== null && stepIndex > 0 ? handleBack : undefined,
                confirmLabel: isLastStep ? "Submit" : "Next",
                loading: loadingQuestion,
              }
            : loadingQuestion
              ? {
                  question: "",
                  options: [],
                  selectedOptionIds: [],
                  onToggleOption: () => {},
                  onConfirm: () => {},
                  loading: true,
                }
              : undefined
        }
      />
    </div>
  )
}

export const WithClarifyingQuestions: Story = {
  render: () => <ClarifyingQuestionsWrapper />,
}
