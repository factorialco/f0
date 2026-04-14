import { F0Button } from "@/components/F0Button"
import Check from "@/icons/app/Check"
import Warning from "@/icons/app/Warning"

import { F0HILActionConfirmationProps } from "./types"

export const F0HILActionConfirmation = ({
  text,
  confirmationText,
  onConfirm,
  cancelText,
  onCancel,
  variant = "default",
}: F0HILActionConfirmationProps) => {
  const isDestructive = variant === "destructive"

  return (
    <div className="flex flex-col gap-2">
      {text && <p>{text}</p>}
      <div className="flex gap-2">
        <F0Button
          type="button"
          variant={isDestructive ? "critical" : "outline"}
          size="sm"
          icon={isDestructive ? Warning : Check}
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
