import { Button } from "@/components/Actions/Button"
import Check from "@/icons/app/Check"

export type HILActionConfirmationProps = {
  text?: string
  confirmationText: string
  onConfirm: () => void
  cancelText: string
  onCancel: () => void
}

export const HILActionConfirmation = ({
  text,
  confirmationText,
  onConfirm,
  cancelText,
  onCancel,
}: HILActionConfirmationProps) => {
  return (
    <div className="flex flex-col gap-2">
      {text && <p>{text}</p>}
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          icon={Check}
          onClick={onConfirm}
          label={confirmationText}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onCancel}
          label={cancelText}
        />
      </div>
    </div>
  )
}
