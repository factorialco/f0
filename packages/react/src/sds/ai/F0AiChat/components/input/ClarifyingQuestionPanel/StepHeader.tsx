import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

interface StepHeaderProps {
  question: string
  stepLabel: string | undefined
  isFirstStep: boolean
  isFinalStep: boolean
  canProceed: boolean
  onBack: () => void
  onNext: () => void
}

export const StepHeader = ({
  question,
  stepLabel,
  isFirstStep,
  isFinalStep,
  canProceed,
  onBack,
  onNext,
}: StepHeaderProps) => {
  const translation = useI18n()

  return (
    <div className="flex items-start gap-2 px-4">
      <OneEllipsis
        className="min-w-0 flex-1 text-base font-medium text-f1-foreground"
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
          <span className="text-sm text-f1-foreground-secondary">
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
    </div>
  )
}
