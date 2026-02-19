import { useCallback, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0Icon } from "@/components/F0Icon"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Card, CardContent, CardFooter } from "@/ui/Card"

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
      <CardContent className="flex flex-col gap-4">
        <h3 className="text-base font-semibold text-f1-foreground">
          {currentStepData.question}
        </h3>
        <div className="flex flex-col gap-3">
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
        </div>
      </CardContent>
      <CardFooter className="-mx-4 -mb-4 mt-4 flex items-center justify-between rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3">
        <div className="flex min-w-[7.5rem] items-center justify-start gap-1">
          {showPagination && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep <= 0}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-f1-foreground-secondary transition-colors hover:bg-f1-background-tertiary hover:text-f1-foreground disabled:pointer-events-none disabled:opacity-50"
                aria-label="Previous"
              >
                <F0Icon icon={ChevronLeft} size="sm" />
              </button>
              <span className="min-w-[2.5rem] text-center text-sm text-f1-foreground-secondary">
                {currentStep + 1}/{totalSteps}
              </span>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentStep >= totalSteps - 1}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-f1-foreground-secondary transition-colors hover:bg-f1-background-tertiary hover:text-f1-foreground disabled:pointer-events-none disabled:opacity-50"
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
            variant="outline"
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
