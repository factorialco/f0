import { IconType } from "@/components/F0Icon"

export const dialogPositions = [
  "center",
  "left",
  "right",
  "fullscreen",
] as const
export type DialogPosition = (typeof dialogPositions)[number]

export const dialogWidths = ["sm", "md", "lg", "xl"] as const
export type DialogWidth = (typeof dialogWidths)[number]

export type F0DialogAction = {
  value?: string
  label: string
  icon?: IconType
  onClick: () => void | Promise<void>
  disabled?: boolean
  loading?: boolean
}

export type F0DialogActionsProps = {
  primaryAction?: F0DialogAction | F0DialogAction[]
  secondaryAction?: F0DialogAction | F0DialogAction[]
}
