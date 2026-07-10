import { experimentalComponent } from "@/lib/experimental"

import { F0Drawer as F0DrawerComponent } from "./F0Drawer"

export {
  DialogWrapperContext as F0DialogAlikeContext,
  DialogWrapperProvider as F0DialogAlikeProvider,
  useDialogWrapperContext as useF0DialogAlikeContext,
} from "../common/DialogWrapperProvider"
export type {
  F0DrawerPosition,
  F0DrawerActionsProps,
  F0DrawerAction,
} from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const F0Drawer = experimentalComponent("F0Drawer", F0DrawerComponent)

export { F0Drawer }
