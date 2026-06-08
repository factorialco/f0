import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"

interface ConfirmFooterProps {
  canProceed: boolean
  /** Disables both submit actions (confirm and skip), e.g. while the assistant is still responding */
  submitDisabled?: boolean
  label: string
  onConfirm: () => void
  onSkip?: () => void
  /** Whether a Skip button should be shown (step is optional + no selection) */
  showSkip?: boolean
}

export const ConfirmFooter = ({
  canProceed,
  submitDisabled,
  label,
  onConfirm,
  onSkip,
  showSkip,
}: ConfirmFooterProps) => {
  const translation = useI18n()

  return (
    <div className="flex items-center justify-end gap-3 p-3">
      <div className="flex items-center">
        {showSkip && onSkip && (
          <F0Button
            variant="outline"
            label={translation.ai.clarifyingQuestion.skip}
            onClick={onSkip}
            disabled={submitDisabled}
          />
        )}
      </div>
      <F0Button
        disabled={!canProceed || submitDisabled}
        variant={"default"}
        label={label}
        onClick={onConfirm}
      />
    </div>
  )
}
