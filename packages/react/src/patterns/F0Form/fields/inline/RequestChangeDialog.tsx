import { useEffect, useState } from "react"
import { F0TextAreaInput } from "@/components/F0TextAreaInput"
import { F0TextInput } from "@/components/F0TextInput"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"
import type { F0FieldChangeRequest } from "./types"

type RequestChangeDialogProps = {
  isOpen: boolean
  onClose: () => void
  label: string
  /** The value as the row reads it, which is what the request is measured against. */
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
  label,
  current,
  onSubmit,
}: RequestChangeDialogProps) {
  const { t, forms, actions } = useI18n()
  const [to, setTo] = useState("")
  const [reason, setReason] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Reopening asks about the value as it stands now, not the one the last ask
  // was written against.
  useEffect(() => {
    if (isOpen) {
      setTo("")
      setReason("")
    }
  }, [isOpen])

  // Nothing to send until the reader has written something, and something
  // other than what the record already says.
  const canSubmit = to.trim() !== "" && to.trim() !== current

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await onSubmit({
        from: current,
        to: to.trim(),
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
      title={t("forms.requestChange.title", { label })}
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
        <F0TextInput
          label={forms.requestChange.newLabel}
          placeholder={current}
          value={to}
          onChange={setTo}
          clearable
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
