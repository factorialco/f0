import { DialogAlikeAction, DialogAlikeActionsProps } from "../common/types"

export const drawerPositions = ["left", "right"] as const
export type F0DrawerPosition = (typeof drawerPositions)[number]

export const drawerSizes = ["md"] as const
export type DrawerSize = (typeof drawerSizes)[number]

export type F0DrawerAction = DialogAlikeAction

export type F0DrawerActionsProps = DialogAlikeActionsProps
