import { IconType } from "@/components/F0Icon"

export const modalPositions = ["center", "left", "right", "fullscreen"] as const
export type ModalPosition = (typeof modalPositions)[number]

export const modalWidths = ["sm", "md", "lg"] as const
export type ModalWidth = (typeof modalWidths)[number]

export type F0ModalPrimaryAction = {
  label: string
  icon?: IconType
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export type F0ModalSecondaryAction = {
  label: string
  icon?: IconType
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export type F0ModalActionsProps = {
  primaryAction?: F0ModalPrimaryAction
  secondaryAction?: F0ModalSecondaryAction
}
