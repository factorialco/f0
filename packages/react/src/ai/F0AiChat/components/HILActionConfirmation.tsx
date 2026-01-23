import { F0Button } from "@/components/F0Button"
import Check from "@/icons/app/Check"

<<<<<<<< HEAD:packages/react/src/sds/ai/F0HILActionConfirmation/F0HILActionConfirmation.tsx
import { F0HILActionConfirmationProps } from "./types"
========
import { HILActionConfirmationProps } from "../types"

export type { HILActionConfirmationProps }
>>>>>>>> 7ba2e4a6e (feat: introduce F0 AI components and refactor existing AI chat structure):packages/react/src/ai/F0AiChat/components/HILActionConfirmation.tsx

export const F0HILActionConfirmation = ({
  text,
  confirmationText,
  onConfirm,
  cancelText,
  onCancel,
}: F0HILActionConfirmationProps) => {
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
