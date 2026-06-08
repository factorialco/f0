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

export type F0DialogPrimaryAction = {
  label: string
  icon?: IconType
  iconPosition?: "left" | "right"
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export type F0DialogSecondaryAction = {
  label: string
  icon?: IconType
  iconPosition?: "left" | "right"
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

// Shared base for action items used in multi-action dropdowns.
// Note: disabled/loading on items are reserved for future use —
// F0ButtonDropdown does not yet support per-item disabled/loading states.
type F0DialogActionItem = {
  value: string
  label: string
  icon?: IconType
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export type F0DialogPrimaryActionItem = F0DialogActionItem
export type F0DialogSecondaryActionItem = F0DialogActionItem

// An additional footer action rendered between the secondary and primary
// buttons. Same shape as the secondary action (single button, no dropdown).
export type F0DialogTertiaryAction = F0DialogSecondaryAction

export type F0DialogActionsProps = {
  primaryAction?: F0DialogPrimaryAction | F0DialogPrimaryActionItem[]
  secondaryAction?: F0DialogSecondaryAction | F0DialogSecondaryActionItem[]
  tertiaryAction?: F0DialogTertiaryAction
}
