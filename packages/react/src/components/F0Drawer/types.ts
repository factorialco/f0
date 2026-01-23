import { IconType } from "@/components/F0Icon"

export const dialogPositions = [
  "center",
  "left",
  "right",
  "fullscreen",
] as const
export type DialogPosition = (typeof dialogPositions)[number]

export const dialogSizes = ["sm", "md", "lg", "xl", "fullscreen"] as const
export type DialogSize = (typeof dialogSizes)[number]

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

/**
 * The levels of the alert.
 */
export const dialogNotificationTypes = [
  "info",
  "warning",
  "critical",
  "positive",
] as const
export type DialogNotificationType = (typeof dialogNotificationTypes)[number]
