// Multi-step clarifying-question state for the "Creation with AI" co-creation
// story. Adapts a list of `ClarifyingStep`s into the `ClarifyingQuestionState`
// shape the F0ClarifyingPanel expects, tracking the active step and selection.

import { useCallback, useState } from "react"

import type { ClarifyingQuestionState } from "@/sds/ai/F0ClarifyingPanel/types"

import type { ClarifyingStep } from "./tab-configs"

interface StepInteraction {
  selectedIds: string[]
}

const EMPTY_INTERACTION: StepInteraction = { selectedIds: [] }

export function useClarifyingState(
  steps: ClarifyingStep[],
  callbacks: { onResolve: (label: string) => void; onDismiss: () => void }
) {
  const [stepIndex, setStepIndex] = useState(0)
  const [interactions, setInteractions] = useState<
    Record<string, StepInteraction>
  >({})

  const currentStep = steps[stepIndex]
  const interaction = currentStep
    ? (interactions[currentStep.question] ?? EMPTY_INTERACTION)
    : EMPTY_INTERACTION

  const toggleOption = useCallback(
    (optionId: string) => {
      if (!currentStep) return
      setInteractions((prev) => ({
        ...prev,
        [currentStep.question]: { selectedIds: [optionId] },
      }))
    },
    [currentStep]
  )

  const confirm = useCallback(() => {
    if (!currentStep) return
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1)
    } else {
      const selected = currentStep.options.find((o) =>
        interaction.selectedIds.includes(o.id)
      )
      callbacks.onResolve(selected?.label ?? interaction.selectedIds[0] ?? "")
    }
  }, [currentStep, stepIndex, steps.length, interaction, callbacks])

  const cancel = useCallback(() => {
    callbacks.onDismiss()
  }, [callbacks])

  const back = useCallback(() => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1)
  }, [stepIndex])

  const state: ClarifyingQuestionState | null = currentStep
    ? {
        currentStep: {
          question: currentStep.question,
          options: currentStep.options,
          selectionMode: currentStep.selectionMode,
          selectedOptionIds: interaction.selectedIds,
          isCustomAnswerActive: false,
        },
        currentStepIndex: stepIndex,
        totalSteps: steps.length,
        toggleOption,
        confirm,
        skip: cancel,
        cancel,
        back,
        setCustomAnswerText: () => {},
        setCustomAnswerActive: () => {},
        activateCustomAnswer: () => {},
      }
    : null

  return { clarifyingState: state }
}
