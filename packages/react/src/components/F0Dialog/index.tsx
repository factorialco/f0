import { experimentalComponent } from "@/lib/experimental"

import { F0Dialog as F0DialogComponent } from "./F0Dialog"

export {
  F0DialogContext,
  F0DialogProvider,
  useF0Dialog,
} from "./components/F0DialogProvider"
export type {
  DialogPosition,
  DialogWidth,
  F0DialogActionsProps,
  F0DialogPrimaryAction,
  F0DialogPrimaryActionItem,
  F0DialogSecondaryAction,
} from "./types"
// Re-export WizardStepItem for convenience when using F0Dialog with steps
export type { WizardStepItem } from "@/experimental/Navigation/WizardStepper"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const F0Dialog = experimentalComponent("F0Dialog", F0DialogComponent)

export { F0Dialog }
