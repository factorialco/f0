import { F0CardRow } from "@/experimental/F0CardRow"

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
    <F0CardRow
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
