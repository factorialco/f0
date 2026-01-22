import { experimentalComponent } from "@/lib/experimental"

import { F0Dialog as F0DialogComponent } from "./F0Dialog"

export {
  F0DialogContext,
  F0DialogProvider,
  useF0Dialog,
} from "./components/F0DialogProvider"
export type { DialogSize, F0DialogActionsProps, F0DialogAction } from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const F0Dialog = experimentalComponent("F0Dialog", F0DialogComponent)

export { F0Dialog }
