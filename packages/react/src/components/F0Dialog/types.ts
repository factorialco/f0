import { IconType } from "@/components/F0Icon"

export const dialogPositions = [
  "center",
  "left",
  "right",
  "fullscreen",
] as const
export type DialogPosition = (typeof dialogPositions)[number]

export const dialogWidths = ["sm", "md", "lg"] as const
export type DialogWidth = (typeof dialogWidths)[number]

export type F0DialogPrimaryAction = {
  label: string
  icon?: IconType
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export type F0DialogPrimaryActionItem = {
  value: string
  label: string
  icon?: IconType
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export type F0DialogSecondaryAction = {
  label: string
  icon?: IconType
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export type F0DialogActionsProps = {
  primaryAction?: F0DialogPrimaryAction | F0DialogPrimaryActionItem[]
  secondaryAction?: F0DialogSecondaryAction
}
