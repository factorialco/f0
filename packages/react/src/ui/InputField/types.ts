export const inputFieldStatus = ["default", "warning", "info", "error"] as const
export type InputFieldStatusType = (typeof inputFieldStatus)[number]

export type InputFieldStatus =
  | {
      type: Exclude<InputFieldStatusType, "error">
      message: string
    }
  | {
      type: "error"
      message?: string
    }
