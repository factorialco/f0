import { useCallback, useState } from "react"

import type { FlatQuestion } from "../types"

export function useStepper(questions: FlatQuestion[]) {
  const [currentStep, setCurrentStep] = useState(0)

  const totalSteps = questions.length
  const progress = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0
  const currentQuestion = questions[currentStep] as FlatQuestion | undefined
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === totalSteps - 1

  const goToNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1))
  }, [totalSteps])

  const goToPrevious = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }, [])

  const reset = useCallback(() => {
    setCurrentStep(0)
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
  }
}
