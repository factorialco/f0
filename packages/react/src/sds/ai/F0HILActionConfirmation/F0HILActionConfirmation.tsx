import { F0CardHorizontal } from "@/components/F0Card"

import { F0HILActionConfirmationProps } from "./types"

export const F0HILActionConfirmation = ({
  text,
  description,
  avatar,
  confirmationText,
  onConfirm,
  cancelText,
  onCancel,
  stackAt = "sm",
}: F0HILActionConfirmationProps) => {
  return (
    <F0CardHorizontal
      title={text}
      description={description}
      avatar={avatar}
      stackAt={stackAt}
      confirmAction={{
        label: confirmationText,
        onClick: onConfirm,
      }}
      rejectAction={{
        label: cancelText,
        onClick: onCancel,
      }}
    />
  )
}
