import { F0CardOneLiner } from "@/components/F0Card"
import Check from "@/icons/app/Check"

import { F0HILActionConfirmationProps } from "./types"

export const F0HILActionConfirmation = ({
  text,
  confirmationText,
  onConfirm,
  cancelText,
  onCancel,
}: F0HILActionConfirmationProps) => {
  return (
    <F0CardOneLiner
      title={text}
      primaryAction={{
        label: confirmationText,
        icon: Check,
        onClick: onConfirm,
      }}
      secondaryActions={[
        {
          label: cancelText,
          onClick: onCancel,
        },
      ]}
    />
  )
}
