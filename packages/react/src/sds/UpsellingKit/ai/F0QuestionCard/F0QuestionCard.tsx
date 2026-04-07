import { useCallback, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0Icon } from "@/components/F0Icon"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Card, CardContent, CardFooter, CardHeader } from "@/ui/Card"

import { F0QuestionCardMultiStepProps, F0QuestionCardOption } from "./types"

export const F0QuestionCardMultiStep = ({
  steps,
  onComplete,
  onSkip,
  sendAsMessage = false,
  onSendMessage,
}: F0QuestionCardMultiStepProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<Record<number, string[]>>({})
  const translations = useI18n()
  const totalSteps = steps.length
  const currentStepData = steps[currentStep]
  const selectedIds = selections[currentStep] ?? []

  const handleToggle = useCallback(
    (optionId: string, checked: boolean) => {
      setSelections((prev) => {
        const currentSelection = prev[currentStep] ?? []
        const newSelection = checked
          ? [...currentSelection, optionId]
          : currentSelection.filter((id) => id !== optionId)
        return { ...prev, [currentStep]: newSelection }
      })
    },
    [currentStep]
  )

  const handlePrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }, [currentStep])

  const handleNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      // Go to next step
      setCurrentStep((prev) => prev + 1)
    } else {
      // Last step - complete
      if (sendAsMessage && onSendMessage) {
        // Build message from all selections
        const allSelectedLabels = Object.entries(selections)
          .map(([stepIndex, ids]) => {
            const step = steps[parseInt(stepIndex)]
            return step.options
              .filter((o) => ids.includes(o.id))
              .map((o) => o.label)
          })
          .flat()

        if (allSelectedLabels.length > 0) {
          onSendMessage(allSelectedLabels.join(", "))
        }
      }
      onComplete?.(selections)
    }
  }, [
    currentStep,
    totalSteps,
    sendAsMessage,
    onSendMessage,
    selections,
    steps,
    onComplete,
  ])

  const isLastStep = currentStep === totalSteps - 1
  const showPagination = totalSteps > 1
  const showSkip = onSkip != null

  if (totalSteps === 0 || !currentStepData) {
    return null
  }

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="relative -mx-4 -mt-4 mb-4 border-0 border-b border-solid border-b-f1-border-secondary p-4">
        <h3 className="text-lg font-semibold leading-6 text-f1-foreground">
          {currentStepData.question}
        </h3>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 p-0 pb-4">
        {currentStepData.options.map((option: F0QuestionCardOption) => (
          <div key={option.id} className="flex items-center gap-2.5">
            <F0Checkbox
              id={option.id}
              title={option.label}
              checked={selectedIds.includes(option.id)}
              onCheckedChange={(checked) =>
                handleToggle(option.id, checked === true)
              }
            />
          </div>
        ))}
      </CardContent>
      <CardFooter className="relative -mx-4 mt-0 flex items-center justify-between border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4">
        <div className="flex items-center gap-1">
          {showPagination && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep <= 0}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-f1-foreground-secondary transition-colors hover:bg-f1-background-tertiary hover:text-f1-foreground disabled:pointer-events-none disabled:opacity-50"
                aria-label="Previous"
              >
                <F0Icon icon={ChevronLeft} size="sm" />
              </button>
              <span className="text-center text-sm text-f1-foreground-secondary">
                {currentStep + 1}/{totalSteps}
              </span>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentStep >= totalSteps - 1}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-f1-foreground-secondary transition-colors hover:bg-f1-background-tertiary hover:text-f1-foreground disabled:pointer-events-none disabled:opacity-50"
                aria-label="Next"
              >
                <F0Icon icon={ChevronRight} size="sm" />
              </button>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          {showSkip && (
            <F0Button
              type="button"
              variant="ghost"
              size="md"
              label={
                translations?.ai?.growth?.questionCard?.skipLabel ?? "Skip"
              }
              onClick={onSkip}
            />
          )}
          <F0Button
            type="button"
            variant={isLastStep ? "default" : "outline"}
            size="md"
            label={
              isLastStep
                ? (translations?.ai?.growth?.questionCard?.sendLabel ?? "Send")
                : (translations?.ai?.growth?.questionCard?.actionLabel ??
                  "Next")
            }
            onClick={handleNext}
          />
        </div>
      </CardFooter>
    </Card>
  )
}
