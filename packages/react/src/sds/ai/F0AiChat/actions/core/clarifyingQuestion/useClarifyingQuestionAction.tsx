import { useCopilotAction } from "@copilotkit/react-core"
import { useCallback, useEffect, useRef, useState } from "react"

import { useAiChat } from "../../../providers/AiChatStateProvider"
import type { ClarifyingQuestion, ClarifyingSelectionMode } from "./types"

/**
 * Shape of a single step as provided by the AI backend via CopilotKit action args.
 */
interface RawStep {
  question: string
  options: Array<{ id: string; label: string }>
  selectionMode?: ClarifyingSelectionMode
  optional?: boolean
  allowCustomAnswer?: boolean
}

/**
 * Internal component rendered by CopilotKit's `render` prop.
 * Renders nothing visible — it exists solely to manage multi-step state
 * and push the current `ClarifyingQuestion` into the AiChat context.
 *
 * Uses refs to stabilize callbacks and avoid infinite render loops
 * caused by CopilotKit re-rendering the `render` prop on every state change.
 */
function ClarifyingQuestionController({ steps }: { steps: RawStep[] }) {
  const { sendMessage, setClarifyingQuestion } = useAiChat()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [customAnswerText, setCustomAnswerTextState] = useState("")
  const [isCustomAnswerActive, setIsCustomAnswerActive] = useState(false)
  const [allSelections, setAllSelections] = useState<Record<string, string[]>>(
    {}
  )
  const [allCustomTexts, setAllCustomTexts] = useState<Record<string, string>>(
    {}
  )
  const [allCustomActives, setAllCustomActives] = useState<
    Record<string, boolean>
  >({})

  // Refs to stabilize callbacks across CopilotKit re-renders
  const currentStepIndexRef = useRef(currentStepIndex)
  currentStepIndexRef.current = currentStepIndex
  const selectedIdsRef = useRef(selectedIds)
  selectedIdsRef.current = selectedIds
  const customAnswerTextRef = useRef(customAnswerText)
  customAnswerTextRef.current = customAnswerText
  const isCustomAnswerActiveRef = useRef(isCustomAnswerActive)
  isCustomAnswerActiveRef.current = isCustomAnswerActive
  const allSelectionsRef = useRef(allSelections)
  allSelectionsRef.current = allSelections
  const allCustomTextsRef = useRef(allCustomTexts)
  allCustomTextsRef.current = allCustomTexts
  const allCustomActivesRef = useRef(allCustomActives)
  allCustomActivesRef.current = allCustomActives
  const stepsRef = useRef(steps)
  stepsRef.current = steps

  // Track previous steps JSON to reset state when AI sends new steps
  const prevStepsJsonRef = useRef<string>("")

  // Reset when AI sends a completely new set of steps
  useEffect(() => {
    const json = JSON.stringify(steps)
    if (json !== prevStepsJsonRef.current) {
      prevStepsJsonRef.current = json
      setCurrentStepIndex(0)
      setSelectedIds([])
      setCustomAnswerTextState("")
      setIsCustomAnswerActive(false)
      setAllSelections({})
      setAllCustomTexts({})
      setAllCustomActives({})
    }
  }, [steps])

  const toggleOption = useCallback((optionId: string) => {
    const currentStep = stepsRef.current[currentStepIndexRef.current]
    const mode = currentStep?.selectionMode ?? "checkbox"

    if (mode === "radio") {
      // Radio: replace selection entirely (custom text is preserved for reuse)
      setSelectedIds([optionId])
    } else {
      // Checkbox: toggle
      setSelectedIds((prev) =>
        prev.includes(optionId)
          ? prev.filter((id) => id !== optionId)
          : [...prev, optionId]
      )
    }
  }, [])

  const setCustomAnswerText = useCallback((text: string) => {
    setCustomAnswerTextState(text)
  }, [])

  /**
   * Explicitly activates the custom answer input.
   * In radio mode, this clears predefined selections (mutual exclusivity).
   * In checkbox mode, this is a no-op for selections since custom text coexists.
   * Always marks the custom answer as active (included in submission).
   */
  const activateCustomAnswer = useCallback(() => {
    const currentStep = stepsRef.current[currentStepIndexRef.current]
    if ((currentStep?.selectionMode ?? "checkbox") === "radio") {
      setSelectedIds([])
    }
    setIsCustomAnswerActive(true)
  }, [])

  const confirm = useCallback(() => {
    const idx = currentStepIndexRef.current
    const currentStep = stepsRef.current[idx]
    const selected = selectedIdsRef.current
    const currentCustomText = customAnswerTextRef.current
    const currentCustomActive = isCustomAnswerActiveRef.current

    // Save selections, custom text, and custom active state for current step
    const updatedSelections = {
      ...allSelectionsRef.current,
      [currentStep.question]: selected,
    }
    setAllSelections(updatedSelections)

    const updatedCustomTexts = {
      ...allCustomTextsRef.current,
      [currentStep.question]: currentCustomText,
    }
    setAllCustomTexts(updatedCustomTexts)

    const updatedCustomActives = {
      ...allCustomActivesRef.current,
      [currentStep.question]: currentCustomActive,
    }
    setAllCustomActives(updatedCustomActives)

    const isLastStep = idx >= stepsRef.current.length - 1

    if (isLastStep) {
      // Build a structured user message so the AI knows each answer per question
      const parts: string[] = []
      for (const step of stepsRef.current) {
        const stepSelected = updatedSelections[step.question] ?? []
        const stepCustom = updatedCustomTexts[step.question] ?? ""
        const stepCustomActive = updatedCustomActives[step.question] ?? false
        const labels = step.options
          .filter((o) => stepSelected.includes(o.id))
          .map((o) => o.label)

        // In radio mode, custom text is mutually exclusive with predefined options.
        // Only include custom text when no predefined option is selected.
        // In checkbox mode, include custom text only when explicitly activated.
        const isRadio = (step.selectionMode ?? "checkbox") === "radio"
        const includeCustom = isRadio
          ? stepSelected.length === 0 && stepCustom.trim().length > 0
          : stepCustomActive && stepCustom.trim().length > 0

        if (includeCustom) {
          labels.push(`(custom) ${stepCustom.trim()}`)
        }

        const answer = labels.length > 0 ? labels.join(", ") : "(skipped)"
        parts.push(`${step.question} → ${answer}`)
      }
      const message = parts.join("\n")
      sendMessage(message)
    } else {
      // Move to next step — restore previous selections, custom text, and active state if revisiting
      const nextStep = stepsRef.current[idx + 1]
      const nextSaved = updatedSelections[nextStep.question] ?? []
      const nextCustom = updatedCustomTexts[nextStep.question] ?? ""
      const nextCustomActive = updatedCustomActives[nextStep.question] ?? false
      setCurrentStepIndex(idx + 1)
      setSelectedIds(nextSaved)
      setCustomAnswerTextState(nextCustom)
      setIsCustomAnswerActive(nextCustomActive)
    }
  }, [sendMessage])

  const back = useCallback(() => {
    const idx = currentStepIndexRef.current
    if (idx > 0) {
      const currentStep = stepsRef.current[idx]

      // Save current step state before navigating back
      const updatedSelections = {
        ...allSelectionsRef.current,
        [currentStep.question]: selectedIdsRef.current,
      }
      setAllSelections(updatedSelections)

      const updatedCustomTexts = {
        ...allCustomTextsRef.current,
        [currentStep.question]: customAnswerTextRef.current,
      }
      setAllCustomTexts(updatedCustomTexts)

      const updatedCustomActives = {
        ...allCustomActivesRef.current,
        [currentStep.question]: isCustomAnswerActiveRef.current,
      }
      setAllCustomActives(updatedCustomActives)

      // Restore previous step state
      const prevStep = stepsRef.current[idx - 1]
      const prevSelected = updatedSelections[prevStep.question] ?? []
      const prevCustom = updatedCustomTexts[prevStep.question] ?? ""
      const prevCustomActive = updatedCustomActives[prevStep.question] ?? false
      setCurrentStepIndex(idx - 1)
      setSelectedIds(prevSelected)
      setCustomAnswerTextState(prevCustom)
      setIsCustomAnswerActive(prevCustomActive)
    }
  }, [])

  // Push the current clarifying question state into context
  const currentStep = steps[currentStepIndex]

  useEffect(() => {
    if (!currentStep) {
      setClarifyingQuestion(null)
      return
    }

    const question: ClarifyingQuestion = {
      question: currentStep.question,
      options: currentStep.options,
      selectedOptionIds: selectedIds,
      loading: false,
      selectionMode: currentStep.selectionMode ?? "checkbox",
      optional: currentStep.optional ?? false,
      allowCustomAnswer: currentStep.allowCustomAnswer ?? false,
      customAnswerText,
      isCustomAnswerActive,
      setCustomAnswerText,
      setCustomAnswerActive: setIsCustomAnswerActive,
      activateCustomAnswer,
      currentStepIndex,
      totalSteps: steps.length,
      confirmLabel: undefined,
      toggleOption,
      confirm,
      back,
    }

    setClarifyingQuestion(question)
  }, [
    currentStep,
    selectedIds,
    customAnswerText,
    isCustomAnswerActive,
    currentStepIndex,
    steps.length,
    toggleOption,
    setCustomAnswerText,
    activateCustomAnswer,
    confirm,
    back,
    setClarifyingQuestion,
  ])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      setClarifyingQuestion(null)
    }
  }, [setClarifyingQuestion])

  return null
}

/**
 * Hook that registers the "clarifyingQuestion" CopilotKit action.
 * When the AI backend invokes this action, it triggers a multi-step
 * question panel in the chat textarea for structured user input.
 */
export const useClarifyingQuestionAction = () => {
  useCopilotAction({
    name: "AiWidgets.F0ClarifyingQuestion",
    description:
      "Present a clarifying question to the user with selectable options. " +
      "Supports multi-step flows with checkbox (multi-select) or radio (single-select) modes.",
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
              'Selection mode: "checkbox" for multi-select, "radio" for single-select. Defaults to "checkbox".',
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
    available: "frontend",
    render: (props) => {
      const steps = (props.args.steps ?? []) as Array<{
        question: string
        options: Array<{ id: string; label: string }>
        selectionMode?: string
        optional?: boolean
        allowCustomAnswer?: boolean
      }>

      const rawSteps: RawStep[] = steps.map((step) => ({
        ...step,
        selectionMode: step.selectionMode === "radio" ? "radio" : "checkbox",
        optional: step.optional ?? false,
        allowCustomAnswer: step.allowCustomAnswer ?? false,
      }))

      if (rawSteps.length === 0) return <></>

      return <ClarifyingQuestionController steps={rawSteps} />
    },
  })
}
