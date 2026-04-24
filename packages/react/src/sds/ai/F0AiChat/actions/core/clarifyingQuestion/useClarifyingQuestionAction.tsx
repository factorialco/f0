import {
  useCopilotAction,
  useCopilotChatInternal,
  useCopilotContext,
} from "@copilotkit/react-core"
import { useEffect, useRef, useState } from "react"

import { useI18n } from "@/lib/providers/i18n"

import type {
  ClarifyingQuestionState,
  ClarifyingSelectionMode,
  ClarifyingStepData,
  ResolvedStepAnswer,
} from "./types"

import { useToolCallId } from "../../../components/messages/AssistantMessage"
import { useAiChat } from "../../../providers/AiChatStateProvider"
import { buildSummaryMessage } from "./buildSummaryMessage"
import { persistClarifyingResolution } from "./persistClarifyingResolution"

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
// Locally-resolved tool calls
// ---------------------------------------------------------------------------

/**
 * Tracks toolCallIds the user has already resolved this session. The backend
 * PATCH that persists `isResolved: true` may not round-trip before CopilotKit
 * re-runs the render (e.g. after sendMessage causes a re-render), so without
 * this cache the panel would briefly re-appear from step 0 before
 * vanishing again.
 */
const locallyResolvedToolCallIds = new Set<string>()

// ---------------------------------------------------------------------------
// Per-step interaction state
// ---------------------------------------------------------------------------

interface StepInteraction {
  selectedIds: string[]
  customText: string
  isCustomActive: boolean
  skipped: boolean
}

const EMPTY_INTERACTION: StepInteraction = {
  selectedIds: [],
  customText: "",
  isCustomActive: false,
  skipped: false,
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
  rawSteps,
  toolCallId,
}: {
  steps: ClarifyingStepData[]
  rawSteps: RawStep[]
  toolCallId: string | undefined
}) {
  const translation = useI18n()

  const { sendMessage, setClarifyingQuestion } = useAiChat()
  const { threadId } = useCopilotChatInternal()
  const { copilotApiConfig } = useCopilotContext()

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
      const current = getInteraction(interactions, step.question).selectedIds
      const isAlreadySelected = current.length === 1 && current[0] === optionId
      updateInteraction({
        // Clicking the same option deselects it — this lets users clear
        // their choice, which is especially useful on optional steps where
        // "no selection" is a valid state that enables the Skip action.
        selectedIds: isAlreadySelected ? [] : [optionId],
        isCustomActive: false,
        skipped: false,
      })
    } else {
      const current = getInteraction(interactions, step.question).selectedIds
      const next = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId]
      updateInteraction({ selectedIds: next, skipped: false })
    }
  }

  const setCustomAnswerText = (text: string) => {
    updateInteraction({ customText: text, skipped: false })
  }

  const setCustomAnswerActive = (active: boolean) => {
    updateInteraction({ isCustomActive: active, skipped: false })
  }

  const activateCustomAnswer = () => {
    const patch: Partial<StepInteraction> = {
      isCustomActive: true,
      skipped: false,
    }
    if (mode === "single") {
      patch.selectedIds = []
    }
    updateInteraction(patch)
  }

  const buildAnswers = (
    overrideCurrent?: Partial<StepInteraction>
  ): ResolvedStepAnswer[] =>
    steps.map((s, idx) => {
      const baseInter = getInteraction(interactions, s.question)
      const inter =
        idx === stepIndex && overrideCurrent
          ? { ...baseInter, ...overrideCurrent }
          : baseInter

      const customAnswer =
        inter.isCustomActive && inter.customText.trim().length > 0
          ? inter.customText.trim()
          : undefined

      return {
        question: s.question,
        selectedOptionIds: inter.selectedIds,
        customAnswer,
        skipped: inter.skipped || undefined,
      }
    })

  const submitAll = (extraAnswers?: ResolvedStepAnswer[]) => {
    const answers = extraAnswers ?? buildAnswers()

    const message = buildSummaryMessage(
      steps.map((s, idx) => {
        const a = answers[idx]
        return {
          question: s.question,
          options: s.options,
          selectionMode: s.selectionMode,
          selectedIds: a?.selectedOptionIds ?? [],
          customText: a?.customAnswer ?? "",
          isCustomActive: Boolean(a?.customAnswer),
        }
      }),
      {
        custom: translation.ai.clarifyingQuestion.custom,
        skipped: translation.ai.clarifyingQuestion.skipped,
      }
    )

    dismissedRef.current = true
    setClarifyingQuestion(null)
    // Mark this tool call as resolved locally so any subsequent render
    // (before the PATCH round-trip) returns null immediately instead of
    // flashing step 0.
    if (toolCallId) locallyResolvedToolCallIds.add(toolCallId)
    sendMessage(message)

    // Persist resolution so the panel doesn't reappear on history reload.
    if (toolCallId && threadId) {
      void persistClarifyingResolution({
        chatApiEndpoint: copilotApiConfig.chatApiEndpoint,
        headers: copilotApiConfig.headers as Record<string, string> | undefined,
        threadId,
        toolCallId,
        args: {
          steps: rawSteps,
          isResolved: true,
          answers,
        },
      })
    }
  }

  const confirm = () => {
    const isLastStep = stepIndex >= steps.length - 1
    if (isLastStep) {
      submitAll()
    } else {
      setStepIndex((i) => i + 1)
    }
  }

  const skip = () => {
    if (!step.optional) return
    updateInteraction({
      selectedIds: [],
      customText: "",
      isCustomActive: false,
      skipped: true,
    })
    const isLastStep = stepIndex >= steps.length - 1
    if (isLastStep) {
      // Build answers with the skip applied to the current step
      const answers = buildAnswers({
        selectedIds: [],
        customText: "",
        isCustomActive: false,
        skipped: true,
      })
      submitAll(answers)
    } else {
      setStepIndex((i) => i + 1)
    }
  }

  /**
   * Cancel the whole clarifying flow (user pressed Escape).
   *
   * Unlike `skip`, which advances past an optional step and records its
   * explicit skip, `cancel` aborts the entire interaction:
   *   - closes the panel so the textarea is back,
   *   - marks the tool call as resolved locally + in the persisted args
   *     (so the panel doesn't re-appear on history reload),
   *   - and deliberately does **not** send a message to the agent.
   *
   * The ClarifyingQuestion action is a visual frontend-only tool — the
   * backend emits it via `emitFrontendTool` and doesn't await a result —
   * so cancelling silently is safe. The user simply gets their textarea
   * back and can write whatever they want next.
   */
  const cancel = () => {
    if (dismissedRef.current) return
    dismissedRef.current = true
    setClarifyingQuestion(null)

    if (toolCallId) locallyResolvedToolCallIds.add(toolCallId)

    // Every step is marked as `cancelled` so the persisted args carry an
    // unambiguous signal: this tool call was resolved-but-not-completed,
    // distinct from a normal "submitted with skipped step(s)" resolution.
    const answers: ResolvedStepAnswer[] = steps.map((s) => ({
      question: s.question,
      selectedOptionIds: [],
      cancelled: true,
    }))

    if (toolCallId && threadId) {
      void persistClarifyingResolution({
        chatApiEndpoint: copilotApiConfig.chatApiEndpoint,
        headers: copilotApiConfig.headers as Record<string, string> | undefined,
        threadId,
        toolCallId,
        args: {
          steps: rawSteps,
          isResolved: true,
          answers,
          cancelled: true,
        },
      })
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
      skip,
      cancel,
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
  const toolCallId = useToolCallId()

  // Resolved state is persisted back into the args. On history reload the
  // render should be a no-op so the panel doesn't reappear. We also check a
  // local cache for the window between submit and the PATCH round-trip.
  if (props.args.isResolved === true) return <></>
  if (toolCallId && locallyResolvedToolCallIds.has(toolCallId)) return <></>

  const rawSteps = (props.args.steps ?? []) as RawStep[]
  if (rawSteps.length === 0) return <></>

  const steps = normalizeSteps(rawSteps)
  return (
    <ClarifyingQuestionController
      steps={steps}
      rawSteps={rawSteps}
      toolCallId={toolCallId}
    />
  )
}

// ---------------------------------------------------------------------------
// Hook: registers the CopilotKit action
// ---------------------------------------------------------------------------

/**
 * Hook that registers the "ClarifyingQuestion" CopilotKit action.
 *
 * The action is a **visual frontend-only tool** — the backend emits it via
 * `emitFrontendTool` and doesn't await a result. When the user submits,
 * the summary message is sent back via `sendMessage` and the tool-call args
 * are patched with `{ isResolved: true, answers }` so the panel does not
 * re-appear when the thread is reloaded from history.
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
      {
        name: "isResolved",
        type: "boolean",
        description:
          "Internal flag set by the frontend after the user answers. When true, the render is a no-op. Do not set from the backend.",
        required: false,
      },
      {
        name: "answers",
        type: "object[]",
        description:
          "Internal snapshot of the user's answers. Populated by the frontend after resolution.",
        required: false,
      },
    ],
    handler: async () => {
      /* no-op — the action is dispatched from the backend via emitFrontendTool */
    },
    followUp: false,
    render: ClarifyingQuestionRender,
  })
}
