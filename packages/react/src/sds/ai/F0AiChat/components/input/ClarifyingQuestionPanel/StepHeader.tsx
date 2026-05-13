import { F0Button } from "@/components/F0Button"
import { ChevronLeft, ChevronRight, Cross } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"

interface StepHeaderProps {
  question: string
  stepLabel: string | undefined
  isFirstStep: boolean
  isFinalStep: boolean
  canProceed: boolean
  onBack: () => void
  onNext: () => void
  onCancel: () => void
}

export const StepHeader = ({
  question,
  stepLabel,
  isFirstStep,
  isFinalStep,
  canProceed,
  onBack,
  onNext,
  onCancel,
}: StepHeaderProps) => {
  const translation = useI18n()

  return (
    <div className="flex items-start gap-2 pl-4 pr-3">
      <OneEllipsis
        className="min-w-0 flex-1 text-lg font-semibold text-f1-foreground"
        lines={3}
      >
        {question}
      </OneEllipsis>

      {stepLabel && (
        <div className="flex shrink-0 items-center gap-0.5">
          <F0Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            disabled={isFirstStep}
            label={translation.ai.clarifyingQuestion.back}
            hideLabel
            icon={ChevronLeft}
          />
          <span className="text-sm font-semibold text-f1-foreground-tertiary">
            {stepLabel}
          </span>
          <F0Button
            variant="ghost"
            size="sm"
            onClick={onNext}
            disabled={isFinalStep || !canProceed}
            label={translation.ai.clarifyingQuestion.next}
            hideLabel
            icon={ChevronRight}
          />
        </div>
      )}
      <F0Button
        variant="ghost"
        size="sm"
        onClick={onCancel}
        label={translation.actions.cancel}
        hideLabel
        icon={Cross}
      />
    </div>
  )
}
