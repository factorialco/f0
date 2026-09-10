import { useCallback, useRef, useState } from "react"
import type { F0WizardStep } from "../types"

interface UseWizardNavigationOptions {
  steps: F0WizardStep[]
  defaultStepIndex?: number
  onSubmit?: () => void | Promise<unknown>
  onStepChanged?: (stepIndex: number) => void
  allowStepSkipping?: boolean
  autoCloseOnLastStepSubmit?: boolean
  onClose?: () => void
}

interface UseWizardNavigationReturn {
  currentStep: number
  loading: boolean
  goToStep: (index: number) => Promise<void>
  goNext: () => Promise<void>
  goPrevious: () => void
}

export function useWizardNavigation({
  steps,
  defaultStepIndex = 0,
  onSubmit,
  onStepChanged,
  allowStepSkipping = false,
  autoCloseOnLastStepSubmit = false,
  onClose,
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

  /**
   * Whether a jump to `index` is on offer at all: the index exists, the current
   * step has no errors, skipping is allowed (or the step is the next one), no
   * step being jumped over has errors, and every step before it is complete.
   */
  const canGoToStep = useCallback(
    (index: number) => {
      if (index < 0 || index >= stepsRef.current.length) {
        return false
      }

      if (stepsRef.current[currentStep]?.hasErrors?.() === true) {
        return false
      }

      if (!allowStepSkipping && index > currentStep + 1) {
        return false
      }

      if (index > currentStep) {
        const intermediateHasErrors = stepsRef.current
          .slice(currentStep, index)
          .some((step) => step.hasErrors?.() === true)
        if (intermediateHasErrors) {
          return false
        }
      }

      return stepsRef.current
        .slice(0, index)
        .every((step) => step.isCompleted?.() !== false)
    },
    [currentStep, allowStepSkipping]
  )

  const goToStep = useCallback(
    async (index: number) => {
      if (!canGoToStep(index)) {
        return
      }

      // The loop stays here rather than in a helper: with no step carrying an
      // `onNext` it runs without awaiting anything, so `changeStep` lands in
      // the same tick as the call — which is what callers (and the tests) get
      // today for a plain jump.
      if (index > currentStep) {
        setLoading(true)
        try {
          for (let i = currentStep; i < index; i++) {
            const step = stepsRef.current[i]
            if (step?.onNext) {
              // oxlint-disable-next-line no-await-in-loop -- steps run onNext in order and a rejection stops the jump
              await step.onNext()
            }
          }
          changeStep(index)
        } catch {
          // An intermediate step's onNext rejected (validation failed) — stay put
        } finally {
          setLoading(false)
        }
        return
      }

      changeStep(index)
    },
    [changeStep, currentStep, canGoToStep]
  )

  const goNext = useCallback(async () => {
    const step = stepsRef.current[currentStep]
    if (!step) {
      return
    }

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
        if (autoCloseOnLastStepSubmit) {
          onClose?.()
        }
      } else {
        changeStep(currentStep + 1)
      }
    } catch {
      // onNext rejected (e.g. form validation failed) — stay on current step
    } finally {
      setLoading(false)
    }
  }, [currentStep, onSubmit, changeStep, autoCloseOnLastStepSubmit, onClose])

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
