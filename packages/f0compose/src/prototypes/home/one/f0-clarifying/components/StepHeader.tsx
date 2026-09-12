// Vendored F0 component; provenance and bounded compatibility changes: REFERENCE.md.
import { F0Button } from "@factorialco/f0-react"
import {
  ChevronLeft,
  ChevronRight,
  Cross,
} from "@factorialco/f0-react/icons/app"
import { OneEllipsis } from "@factorialco/f0-react"
import { useI18n } from "@factorialco/f0-react/dist/ai"

interface StepHeaderProps {
  question: string
  stepLabel: string | undefined
  isFirstStep: boolean
  isFinalStep: boolean
  canProceed: boolean
  onBack: () => void
  onNext: () => void
  hideCancel?: boolean
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
  hideCancel,
}: StepHeaderProps) => {
  const translation = useI18n()

  return (
    <div className="flex items-start gap-0.5 pl-4 pr-3">
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
      {!hideCancel && (
        <F0Button
          variant="ghost"
          size="sm"
          onClick={onCancel}
          label={translation.actions.cancel}
          hideLabel
          icon={Cross}
        />
      )}
    </div>
  )
}
