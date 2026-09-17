export const inputFieldVariantNames = ["field", "inline"] as const
export type InputFieldVariant = (typeof inputFieldVariantNames)[number]

export const inlineDismissReasons = ["blur", "escape", "commit"] as const
export type InlineDismissReason = (typeof inlineDismissReasons)[number]

export const inputFieldStatus = ["default", "warning", "info", "error"] as const
export type InputFieldStatusType = (typeof inputFieldStatus)[number]

export type InputFieldStatus =
  | {
      type: Exclude<InputFieldStatusType, "error">
      message?: string
    }
  | {
      type: "error"
      message?: string
    }
