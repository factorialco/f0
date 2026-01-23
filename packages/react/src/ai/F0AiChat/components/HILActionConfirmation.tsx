import { F0Button } from "@/components/F0Button"
import Check from "@/icons/app/Check"

import { HILActionConfirmationProps } from "../types"

export type { HILActionConfirmationProps }

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
        <F0Button
          type="button"
          variant="outline"
          size="sm"
          icon={Check}
          onClick={onConfirm}
          label={confirmationText}
        />
        <F0Button
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
