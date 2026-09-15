import { useEffect, useState } from "react"
import { F0TextAreaInput } from "@/components/F0TextAreaInput"
import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { F0Dialog } from "@/patterns/F0Dialog"
import { F0FormField } from "@/patterns/F0FormField"
import type { F0Field } from "../types"
import { formatFieldValue } from "./formatFieldValue"
import type { F0FieldChangeRequest } from "./types"

type RequestChangeDialogProps = {
  isOpen: boolean
  onClose: () => void
  field: F0Field
  /** The current value as the row reads it, which is what the request is measured against. */
  current: string
  onSubmit: (change: F0FieldChangeRequest) => void | Promise<void>
}

/**
 * Where a reader who may not change the value says what it should say instead.
 * The request goes to whoever administers the record; this is only the asking.
 */
export function RequestChangeDialog({
  isOpen,
  onClose,
  field,
  current,
  onSubmit,
}: RequestChangeDialogProps) {
  const i18n = useI18n()
  const { t, forms, actions } = i18n
  const { locale } = useL10n()
  const [to, setTo] = useState<unknown>(undefined)
  const [reason, setReason] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Reopening asks about the value as it stands now, not the one the last ask
  // was written against.
  useEffect(() => {
    if (isOpen) {
      setTo(undefined)
      setReason("")
    }
  }, [isOpen])

  // The request carries the same text the row would print, so what the asker
  // picked and what the record says are compared as one kind of thing.
  const toText = formatFieldValue(field, to, i18n, locale)

  // Nothing to send until the reader has chosen something, and something other
  // than what the record already says.
  const canSubmit = toText !== "" && toText !== current

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await onSubmit({
        from: current,
        to: toText,
        reason: reason.trim() || undefined,
      })
      onClose()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={t("forms.requestChange.title", { label: field.label })}
      description={forms.requestChange.description}
      width="sm"
      primaryAction={{
        label: forms.requestChange.submit,
        onClick: handleSubmit,
        disabled: !canSubmit,
        loading: isSubmitting,
      }}
      secondaryAction={{ label: actions.cancel, onClick: onClose }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-f1-foreground-secondary">
            {forms.requestChange.currentLabel}
          </span>
          <span className="font-medium text-f1-foreground">{current}</span>
        </div>
        {/* The field's own editor, not a text box: asking for a date should
            open a calendar, and asking for an option should offer the options.
            `inline` is dropped so the editor wears its full field chrome here —
            this is a form, not a row. */}
        <F0FormField
          field={
            {
              ...field,
              label: forms.requestChange.newLabel,
              placeholder: current,
              inline: undefined,
            } as never
          }
          value={to}
          onChange={setTo}
        />
        <F0TextAreaInput
          label={forms.requestChange.reasonLabel}
          placeholder={forms.requestChange.reasonPlaceholder}
          value={reason}
          onChange={setReason}
          rows={3}
        />
      </div>
    </F0Dialog>
  )
}
