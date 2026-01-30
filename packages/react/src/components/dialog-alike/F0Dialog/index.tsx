import { experimentalComponent } from "@/lib/experimental"

import { F0Dialog as F0DialogComponent } from "./F0Dialog"

export {
  DialogWrapperContext as F0DialogContext,
  DialogWrapperProvider as F0DialogProvider,
  useDialogWrapperContext as useF0Dialog,
} from "../common/DialogWrapperProvider"
export type {
  F0DialogSize,
  F0DialogActionsProps,
  F0DialogAction,
} from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const F0Dialog = experimentalComponent("F0Dialog", F0DialogComponent)

export { F0Dialog }
