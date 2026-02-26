import { useCallback, useRef, useState } from "react"

import type { F0WizardStep } from "../types"

interface UseWizardNavigationOptions {
  steps: F0WizardStep[]
  defaultStepIndex?: number
  onSubmit?: () => void | Promise<unknown>
  onStepChanged?: (stepIndex: number) => void
}

interface UseWizardNavigationReturn {
  currentStep: number
  loading: boolean
  goToStep: (index: number) => void
  goNext: () => Promise<void>
  goPrevious: () => void
}

export function useWizardNavigation({
  steps,
  defaultStepIndex = 0,
  onSubmit,
  onStepChanged,
}: UseWizardNavigationOptions): UseWizardNavigationReturn {
  const [currentStep, setCurrentStep] = useState(defaultStepIndex)
  const [loading, setLoading] = useState(false)
  const stepsRef = useRef(steps)
  stepsRef.current = steps

  const changeStep = useCallback(
    (index: number) => {
      setCurrentStep(index)
      onStepChanged?.(index)
    },
    [onStepChanged]
  )

  const goToStep = useCallback(
    (index: number) => {
      if (index < 0 || index >= stepsRef.current.length) return

      if (stepsRef.current[currentStep]?.hasErrors?.() === true) return

      const canJump = stepsRef.current
        .slice(0, index)
        .every((step) => step.isCompleted?.() !== false)

      if (canJump) {
        changeStep(index)
      }
    },
    [changeStep, currentStep]
  )

  const goNext = useCallback(async () => {
    const step = stepsRef.current[currentStep]
    if (!step) return

    setLoading(true)
    try {
      if (step.onNext) {
        await step.onNext()
      }

      const isLastStep = currentStep === stepsRef.current.length - 1
      if (isLastStep) {
        if (onSubmit) {
          await onSubmit()
        }
      } else {
        changeStep(currentStep + 1)
      }
    } catch {
      // onNext rejected (e.g. form validation failed) — stay on current step
    } finally {
      setLoading(false)
    }
  }, [currentStep, onSubmit, changeStep])

  const goPrevious = useCallback(() => {
    if (currentStep > 0) {
      changeStep(currentStep - 1)
    }
  }, [currentStep, changeStep])

  return {
    currentStep,
    loading,
    goToStep,
    goNext,
    goPrevious,
  }
}
