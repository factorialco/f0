import { F0CardHorizontal } from "@/experimental/F0CardHorizontal"

import { F0HILActionConfirmationProps } from "./types"

/**
 * @deprecated Being replaced by `F0CardHorizontal` (`@/experimental/F0CardHorizontal`),
 * which this component already wraps. Use `F0CardHorizontal` directly: `confirmAction` /
 * `rejectAction` for the pending state, `status` for the resolved outcome, and
 * `secondaryActions` for a single CTA. The co-creation flow no longer uses this component —
 * don't add new usages.
 */
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
