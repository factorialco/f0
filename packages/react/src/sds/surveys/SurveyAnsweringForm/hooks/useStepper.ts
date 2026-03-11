import { useCallback, useState } from "react"

import type { FlatQuestion } from "../types"

export function useStepper(questions: FlatQuestion[]) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progressOverride, setProgressOverride] = useState<number | null>(null)

  const totalSteps = questions.length
  const computedProgress = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0
  const progress = progressOverride ?? computedProgress
  const currentQuestion = questions[currentStep] as FlatQuestion | undefined
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === totalSteps - 1

  const goToNext = useCallback(() => {
    setProgressOverride(null)
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1))
  }, [totalSteps])

  const goToPrevious = useCallback(() => {
    setProgressOverride(null)
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }, [])

  const reset = useCallback(() => {
    setProgressOverride(null)
    setCurrentStep(0)
  }, [])

  const setProgress = useCallback((value: number | null) => {
    setProgressOverride(value)
  }, [])

  return {
    currentStep,
    totalSteps,
    progress,
    currentQuestion,
    isFirstStep,
    isLastStep,
    goToNext,
    goToPrevious,
    reset,
    setProgress,
  }
}
