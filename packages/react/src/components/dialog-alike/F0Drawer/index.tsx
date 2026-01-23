import { experimentalComponent } from "@/lib/experimental"

import { F0Drawer as F0DrawerComponent } from "./F0Drawer"

export {
  DialogWrapperContext as F0DialogContext,
  DialogWrapperProvider as F0DialogProvider,
  useDialogWrapperContext as useF0Dialog,
} from "../common/DialogWrapperProvider"
export type { DialogSize, F0DialogActionsProps, F0DialogAction } from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const F0Drawer = experimentalComponent("F0Drawer", F0DrawerComponent)

export { F0Drawer }
