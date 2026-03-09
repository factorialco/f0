import { useCopilotAction } from "@copilotkit/react-core"
import { useEffect, useRef, useState } from "react"

import type {
  ClarifyingOption,
  ClarifyingQuestion,
} from "@/sds/ai/F0AiChatTextArea/types"

import { useAiChat } from "../providers/AiChatStateProvider"

interface ClarifyingStep {
  question: string
  options: ClarifyingOption[]
}

/**
 * Hook to register the clarifying question copilot action.
 * When the AI backend triggers this action, a multi-step clarifying question
 * appears inline inside the F0AiChatTextArea (the textarea grows upward).
 *
 * The user answers each step with checkboxes or free text. On the last step
 * the confirm button reads "Submit" and sends all selections as a user message
 * to trigger the next workflow turn.
 *
 * **How to call the action from the backend**
 *
 * Single question:
 * @example
 * { "name": "AiWidgets.F0ClarifyingQuestion", "args": {
 *   "steps": [
 *     { "question": "What type of report do you need?",
 *       "options": [
 *         { "id": "attendance", "label": "Attendance & absences" },
 *         { "id": "payroll", "label": "Payroll & compensation" }
 *       ]
 *     }
 *   ]
 * }}
 *
 * Multi-step:
 * @example
 * { "name": "AiWidgets.F0ClarifyingQuestion", "args": {
 *   "steps": [
 *     { "question": "What type of report?", "options": [...] },
 *     { "question": "Which time period?", "options": [...] }
 *   ]
 * }}
 */
export const useClarifyingQuestionAction = () => {
  const { setClarifyingQuestion, sendMessage } = useAiChat()

  useCopilotAction({
    name: "AiWidgets.F0ClarifyingQuestion",
    description:
      "Display a clarifying question inline inside the chat input. The user answers with checkboxes or free text. Use before executing a task to gather the information needed. Each step is shown one at a time. On the last step the confirm button reads Submit and the selections are sent as a user message to trigger the next workflow turn.",
    parameters: [
      {
        name: "steps",
        type: "object[]",
        description:
          "Array of clarifying steps. Each step has a question and a list of checkbox options.",
        required: true,
        attributes: [
          {
            name: "question",
            type: "string",
            description: "The question to ask the user",
            required: true,
          },
          {
            name: "options",
            type: "object[]",
            description: "Checkbox options: { id: string, label: string }[]",
            required: true,
            attributes: [
              { name: "id", type: "string", required: true },
              { name: "label", type: "string", required: true },
            ],
          },
        ],
      },
    ],
    available: "frontend",
    render: (props) => {
      const rawSteps = (props.args as { steps?: ClarifyingStep[] }).steps
      if (!rawSteps || rawSteps.length === 0) return <></>

      return (
        <ClarifyingQuestionController
          rawSteps={rawSteps}
          setClarifyingQuestion={setClarifyingQuestion}
          sendMessage={sendMessage}
        />
      )
    },
  })
}

interface ClarifyingQuestionControllerProps {
  rawSteps: ClarifyingStep[]
  setClarifyingQuestion: React.Dispatch<
    React.SetStateAction<ClarifyingQuestion | undefined>
  >
  sendMessage: (message: string) => void
}

/**
 * Invisible controller component that manages multi-step state and
 * keeps the AiChatStateProvider's clarifyingQuestion in sync.
 *
 * Uses refs to stabilize callbacks so the sync effect only runs when
 * step index, loading state, or selections actually change — not on
 * every re-render from CopilotKit.
 */
function ClarifyingQuestionController({
  rawSteps,
  setClarifyingQuestion,
  sendMessage,
}: ClarifyingQuestionControllerProps) {
  // Stabilize steps: only update the ref when the serialized content changes
  const stepsRef = useRef<ClarifyingStep[]>([])
  const stepsJson = JSON.stringify(rawSteps)
  const stepsJsonRef = useRef(stepsJson)
  if (stepsJsonRef.current !== stepsJson) {
    stepsJsonRef.current = stepsJson
    stepsRef.current = rawSteps.map((s) => ({
      question: s.question,
      options: s.options ?? [],
    }))
  }
  if (stepsRef.current.length === 0) {
    stepsRef.current = rawSteps.map((s) => ({
      question: s.question,
      options: s.options ?? [],
    }))
  }

  const [stepIndex, setStepIndex] = useState(0)
  const [loadingNext, setLoadingNext] = useState(false)
  const [selections, setSelections] = useState<Record<number, string[]>>({})

  // Keep latest values accessible inside callbacks without adding them to
  // the effect dependency array (avoids infinite loops)
  const selectionsRef = useRef(selections)
  selectionsRef.current = selections
  const stepIndexRef = useRef(stepIndex)
  stepIndexRef.current = stepIndex

  // Clear from context on unmount
  useEffect(() => {
    return () => setClarifyingQuestion(undefined)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sync to context whenever step or loading changes
  useEffect(() => {
    const steps = stepsRef.current
    const currentStep = steps[stepIndex]
    if (!currentStep) return

    if (loadingNext) {
      setClarifyingQuestion({
        question: "",
        options: [],
        selectedOptionIds: [],
        onToggleOption: () => {},
        onConfirm: () => {},
        loading: true,
      })
      return
    }

    const isLastStep = stepIndex === steps.length - 1

    const handleToggle = (id: string) => {
      const idx = stepIndexRef.current
      setSelections((prev) => {
        const current = prev[idx] ?? []
        const updated = current.includes(id)
          ? current.filter((o) => o !== id)
          : [...current, id]
        return { ...prev, [idx]: updated }
      })
    }

    const handleConfirm = () => {
      const currentSelections = selectionsRef.current
      const steps = stepsRef.current
      const idx = stepIndexRef.current
      const isLast = idx === steps.length - 1

      if (isLast) {
        setClarifyingQuestion(undefined)
        const parts: string[] = []
        steps.forEach((step, i) => {
          const selected = currentSelections[i] ?? []
          if (selected.length > 0) {
            const labels = step.options
              .filter((o) => selected.includes(o.id))
              .map((o) => o.label)
            parts.push(labels.join(", "))
          }
        })
        sendMessage(parts.join(" | "))
      } else {
        setLoadingNext(true)
        setTimeout(() => {
          setStepIndex((prev) => prev + 1)
          setLoadingNext(false)
        }, 600)
      }
    }

    const handleBack =
      stepIndex > 0 ? () => setStepIndex((prev) => prev - 1) : undefined

    setClarifyingQuestion({
      question: currentStep.question,
      options: currentStep.options,
      selectedOptionIds: selections[stepIndex] ?? [],
      onToggleOption: handleToggle,
      onConfirm: handleConfirm,
      onBack: handleBack,
      confirmLabel: isLastStep ? "Submit" : "Next",
      loading: false,
    })
    // Only re-sync when step navigation or selections change — not on every render.
    // Callbacks are read via refs to avoid stale closures without being dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIndex, loadingNext, selections])

  return null
}
