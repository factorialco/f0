import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0Dialog as F0DialogComponent } from "./F0Dialog"

/**
 * @deprecated These context utilities are re-exported from the dialog-alike
 * implementation. Import them from `@/components/dialog-alike/F0Dialog` instead.
 */
export {
  DialogWrapperContext as F0DialogContext,
  DialogWrapperProvider as F0DialogProvider,
  useDialogWrapperContext as useF0Dialog,
} from "@/components/dialog-alike/common/DialogWrapperProvider"
/**
 * @deprecated Use the types from `@/components/dialog-alike/F0Dialog`
 * (`F0DialogSize`, `F0DialogAction`, `F0DialogActionsProps`) or
 * `@/components/dialog-alike/F0Drawer` instead.
 */
export type {
  DialogControls,
  DialogPosition,
  DialogWidth,
  F0DialogActionsProps,
  F0DialogPrimaryAction,
  F0DialogPrimaryActionItem,
  F0DialogSecondaryAction,
  F0DialogSecondaryActionItem,
} from "./types"

/**
 * @deprecated Use `F0Dialog` from `@/components/dialog-alike/F0Dialog` for
 * center/fullscreen dialogs, or `F0Drawer` from
 * `@/components/dialog-alike/F0Drawer` for side panels. This is a
 * backward-compatible shim that maps the legacy props onto those components.
 */
const F0Dialog = withDataTestId(
  experimentalComponent("F0Dialog", F0DialogComponent)
)

export { F0Dialog }
