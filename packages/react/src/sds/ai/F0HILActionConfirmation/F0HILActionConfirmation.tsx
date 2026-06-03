import { F0Card } from "@/components/F0Card"
import Check from "@/icons/app/Check"
import Cross from "@/icons/app/Cross"

import { F0HILActionConfirmationProps } from "./types"

export const F0HILActionConfirmation = ({
  text,
  confirmationText,
  onConfirm,
  cancelText,
  onCancel,
}: F0HILActionConfirmationProps) => {
  return (
    <F0Card
      oneLiner
      title={text}
      primaryAction={{
        label: confirmationText,
        icon: Check,
        hideLabel: true,
        onClick: onConfirm,
      }}
      secondaryActions={[
        {
          label: cancelText,
          icon: Cross,
          hideLabel: true,
          onClick: onCancel,
        },
      ]}
    />
  )
}
