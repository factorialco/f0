import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"
import { Textarea } from "@/ui/textarea"

interface NpsFeedbackProps {
  value: string
  onChange: (feedback: string) => void
  onSubmit: () => void
  onBack: () => void
  isSubmitting: boolean
}

export function NpsFeedback({
  value,
  onChange,
  onSubmit,
  onBack,
  isSubmitting,
}: NpsFeedbackProps) {
  const t = useI18n()
  return (
    <div className="flex flex-col gap-3">
      <Textarea
        label="Feedback"
        hideLabel
        value={value}
        onChange={onChange}
        placeholder={t.npsWidget.feedbackPlaceholder}
        rows={3}
      />
      <div className="flex justify-end gap-2">
        <F0Button
          label={t.npsWidget.back}
          variant="outline"
          size="md"
          onClick={onBack}
        />
        <F0Button
          label={t.npsWidget.submit}
          variant="default"
          size="md"
          onClick={onSubmit}
          loading={isSubmitting}
        />
      </div>
    </div>
  )
}
