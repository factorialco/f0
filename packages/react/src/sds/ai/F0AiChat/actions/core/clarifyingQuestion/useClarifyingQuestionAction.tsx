import { useCopilotAction } from "@copilotkit/react-core"
import { useEffect, useRef, useState } from "react"

import { useI18n } from "@/lib/providers/i18n"

import type {
  ClarifyingQuestionState,
  ClarifyingSelectionMode,
  ClarifyingStepData,
} from "./types"

import { useAiChat } from "../../../providers/AiChatStateProvider"

// ---------------------------------------------------------------------------
// Normalize raw args from the AI backend
// ---------------------------------------------------------------------------

interface RawStep {
  question: string
  options: Array<{ id: string; label: string }>
  selectionMode?: string
  optional?: boolean
  allowCustomAnswer?: boolean
}

function normalizeSelectionMode(
  raw?: string
): ClarifyingSelectionMode | undefined {
  if (raw === "single" || raw === "radio") return "single"
  if (raw === "multiple" || raw === "checkbox") return "multiple"
  return undefined
}

function normalizeSteps(raw: RawStep[]): ClarifyingStepData[] {
  return raw.map((step) => ({
    question: step.question,
    options: step.options,
    selectionMode: normalizeSelectionMode(step.selectionMode),
    optional: step.optional ?? false,
    allowCustomAnswer: step.allowCustomAnswer ?? false,
  }))
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
// Controller: manages multi-step state and pushes to AiChat context
// ---------------------------------------------------------------------------

function ClarifyingQuestionController({
  steps,
}: {
  steps: ClarifyingStepData[]
}) {
  const translation = useI18n()

  const { sendMessage, setClarifyingQuestion } = useAiChat()

  const [stepIndex, setStepIndex] = useState(0)
  const [interactions, setInteractions] = useState<
    Record<string, StepInteraction>
  >({})

  // Once the user confirms the final step, stop pushing updates to context
  const dismissedRef = useRef(false)

  // Reset when AI sends different steps
  const prevStepsJsonRef = useRef("")
  useEffect(() => {
    const json = JSON.stringify(steps)
    if (json !== prevStepsJsonRef.current) {
      prevStepsJsonRef.current = json
      dismissedRef.current = false
      setStepIndex(0)
      setInteractions({})
    }
  }, [steps])

  const step = steps[stepIndex]
  if (!step) return null

  const mode = step.selectionMode ?? "single"

  // --- Helpers to update the current step's interaction ---

  const updateInteraction = (patch: Partial<StepInteraction>) => {
    setInteractions((prev) => ({
      ...prev,
      [step.question]: { ...getInteraction(prev, step.question), ...patch },
    }))
  }

  const toggleOption = (optionId: string) => {
    if (mode === "single") {
      updateInteraction({ selectedIds: [optionId] })
    } else {
      const current = getInteraction(interactions, step.question).selectedIds
      const next = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId]
      updateInteraction({ selectedIds: next })
    }
  }

  const setCustomAnswerText = (text: string) => {
    updateInteraction({ customText: text })
  }

  const setCustomAnswerActive = (active: boolean) => {
    updateInteraction({ isCustomActive: active })
  }

  const activateCustomAnswer = () => {
    const patch: Partial<StepInteraction> = { isCustomActive: true }
    if (mode === "single") {
      patch.selectedIds = []
    }
    updateInteraction(patch)
  }

  const confirm = () => {
    const isLastStep = stepIndex >= steps.length - 1

    if (isLastStep) {
      // Build structured user message with all answers
      const parts: string[] = []
      for (const s of steps) {
        const inter = getInteraction(interactions, s.question)
        const labels = s.options
          .filter((o) => inter.selectedIds.includes(o.id))
          .map((o) => o.label)

        const isSingle = (s.selectionMode ?? "single") === "single"
        const includeCustom = isSingle
          ? inter.selectedIds.length === 0 && inter.customText.trim().length > 0
          : inter.isCustomActive && inter.customText.trim().length > 0

        if (includeCustom) {
          labels.push(
            `(${translation.ai.clarifyingQuestion.custom}) ${inter.customText.trim()}`
          )
        }

        const answer = labels.length > 0 ? labels.join(", ") : "(skipped)"
        parts.push(`${s.question} → ${answer}`)
      }

      dismissedRef.current = true
      setClarifyingQuestion(null)
      sendMessage(parts.join("\n"))
    } else {
      setStepIndex((i) => i + 1)
    }
  }

  const back = () => {
    setStepIndex((i) => Math.max(0, i - 1))
  }

  // --- Push state to context ---

  useEffect(() => {
    if (dismissedRef.current) return

    const currentStep = steps[stepIndex]
    if (!currentStep) {
      setClarifyingQuestion(null)
      return
    }

    const inter = getInteraction(interactions, currentStep.question)

    const state: ClarifyingQuestionState = {
      currentStep: {
        ...currentStep,
        selectedOptionIds: inter.selectedIds,
        customAnswerText: inter.customText || undefined,
        isCustomAnswerActive: inter.isCustomActive,
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
  })

  // Clean up on unmount
  useEffect(() => {
    return () => {
      setClarifyingQuestion(null)
    }
  }, [setClarifyingQuestion])

  return null
}

// ---------------------------------------------------------------------------
// Render component for CopilotKit action
// ---------------------------------------------------------------------------

/**
 * Stable render component for the CopilotKit action.
 *
 * Defined as a named component outside the hook so that its reference
 * identity is stable across re-renders. CopilotKit uses React.memo with
 * reference equality on RenderComponent — an inline arrow would cause
 * unmount/remount and destroy selection state.
 */
function ClarifyingQuestionRender(props: {
  args: Record<string, unknown>
  status: string
}) {
  const rawSteps = (props.args.steps ?? []) as RawStep[]

  if (rawSteps.length === 0) return <></>

  const steps = normalizeSteps(rawSteps)
  return <ClarifyingQuestionController steps={steps} />
}

// ---------------------------------------------------------------------------
// Hook: registers the CopilotKit action
// ---------------------------------------------------------------------------

/**
 * Hook that registers the "ClarifyingQuestion" CopilotKit action.
 * When the AI backend invokes this action, it triggers a multi-step
 * question panel in the chat textarea for structured user input.
 */
export const useClarifyingQuestionAction = () => {
  useCopilotAction({
    name: "ClarifyingQuestion",
    description:
      "Present a clarifying question to the user with selectable options. " +
      "Supports multi-step flows with single-select or multiple-select modes.",
    parameters: [
      {
        name: "steps",
        type: "object[]",
        description:
          "Array of question steps. Each step has a question, options, and optional selectionMode.",
        required: true,
        attributes: [
          {
            name: "question",
            type: "string",
            description: "The question text to display",
            required: true,
          },
          {
            name: "selectionMode",
            type: "string",
            description:
              'Selection mode: "single" for single-select, "multiple" for multi-select. Defaults to "single".',
            required: false,
          },
          {
            name: "optional",
            type: "boolean",
            description:
              "Whether the user can skip this step without selecting any option. Defaults to false.",
            required: false,
          },
          {
            name: "allowCustomAnswer",
            type: "boolean",
            description:
              "Whether the user can type a free-text custom answer instead of (or in addition to) selecting predefined options. Defaults to false.",
            required: false,
          },
          {
            name: "options",
            type: "object[]",
            description: "The selectable options",
            required: true,
            attributes: [
              {
                name: "id",
                type: "string",
                description: "Unique identifier for the option",
                required: true,
              },
              {
                name: "label",
                type: "string",
                description: "Display label for the option",
                required: true,
              },
            ],
          },
        ],
      },
    ],
    handler: async () => {
      /* no-op — the action is dispatched from the backend via emitFrontendTool */
    },
    followUp: false,
    render: ClarifyingQuestionRender,
  })
}
