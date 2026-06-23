import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { F0Dialog as F0DialogComponent } from "./F0Dialog"

import type { Context } from "react"

import { DialogWrapperContext } from "@/components/dialog-alike/common/DialogWrapperProvider"

import type { F0DialogContextType } from "./internal-types"

/**
 * @deprecated These context utilities are re-exported from the dialog-alike
 * implementation. Import them from `@/components/dialog-alike/F0Dialog` instead.
 */
export {
  DialogWrapperProvider as F0DialogProvider,
  useDialogWrapperContext as useF0Dialog,
} from "@/components/dialog-alike/common/DialogWrapperProvider"

/**
 * The dialog-alike context, retyped under the original name so the public
 * `Context<F0DialogContextType>` signature is preserved (the runtime value is
 * the same context the dialog-alike components populate).
 * @deprecated Import `F0DialogContext` from `@/components/dialog-alike/F0Dialog`.
 */
export const F0DialogContext: Context<F0DialogContextType> = DialogWrapperContext
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
