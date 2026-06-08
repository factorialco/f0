import {
  DialogAlikeAction,
  DialogAlikeActionsProps,
  dialogAlikeSizes,
} from "../common/types"

export type F0DialogAction = DialogAlikeAction

export type F0DialogActionsProps = DialogAlikeActionsProps

export const dialogSizes = dialogAlikeSizes
export type F0DialogSize = (typeof dialogSizes)[number]

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
