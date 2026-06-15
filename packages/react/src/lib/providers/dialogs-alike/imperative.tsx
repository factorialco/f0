import { nanoid } from "nanoid"

import { Optional } from "@/lib/typescript-utils/optional"

import { DialogDefinitionProviderItem } from "./internal-types"
import { dialogsAlikeStore } from "./store"
import {
  AlertDialogOptions,
  ConfirmDialogOptions,
  DialogAction,
  DialogActionValue,
  DialogActionValuePrimitive,
  DialogDefinition,
  DialogDefinitionInternal,
  DialogId,
  DrawerDefinition,
  DrawerDefinitionInternal,
  NotificationDialogOptions,
} from "./types"

// Programmatic-close callbacks, keyed by dialog/drawer id. Kept at module level
// (not in a React ref) so `closeDialog(id)` / `closeDrawer(id)` work from
// anywhere.
const closeCallbacks = new Map<DialogId, () => void>()

const warnIfNoProvider = (method: string) => {
  if (
    process.env.NODE_ENV !== "production" &&
    !dialogsAlikeStore.hasProvider()
  ) {
    console.warn(
      `[f0] ${method} was called but no <F0Provider> is mounted, so the dialog/drawer will not render. ` +
        `Make sure your app is wrapped in <F0Provider>.`
    )
  }
}

const makeActionHandler =
  (id: DialogId, resolve: (value: DialogActionValue) => void) =>
  (
    action: DialogAction | undefined,
    value: DialogActionValuePrimitive | undefined
  ) => {
    resolve(value ?? undefined)
    if (action?.keepOpen) return
    closeCallbacks.delete(id)
    dialogsAlikeStore.removeItem(id)
  }

const openDialogInternal = (
  definition: Optional<DialogDefinitionInternal, "id">
): Promise<DialogActionValue> => {
  return new Promise((resolve) => {
    const id = definition.id || nanoid()
    const handleAction = makeActionHandler(id, resolve)
    const onCloseDialog = () => handleAction(undefined, undefined)

    const base = {
      id,
      actions: definition.actions,
      onCloseDialog,
      onClickAction: (
        action: DialogAction,
        value: DialogActionValuePrimitive
      ) => handleAction(action, value),
    }

    let item: DialogDefinitionProviderItem
    if (definition.variant === "notification") {
      if (!definition.type || definition.type === "default") {
        throw new Error("Notification dialog must have a type")
      }
      item = {
        ...definition,
        ...base,
        variant: "notification",
        type: definition.type,
      }
    } else {
      item = { ...definition, ...base, variant: "default", type: undefined }
    }

    closeCallbacks.set(id, onCloseDialog)
    warnIfNoProvider("openDialog()")
    dialogsAlikeStore.addItem(item)
  })
}

const openDrawerInternal = (
  definition: Optional<DrawerDefinitionInternal, "id">
): Promise<DialogActionValue> => {
  return new Promise((resolve) => {
    const id = definition.id || nanoid()
    const handleAction = makeActionHandler(id, resolve)
    const onCloseDialog = () => handleAction(undefined, undefined)

    const item: DialogDefinitionProviderItem = {
      ...definition,
      id,
      onCloseDialog,
      onClickAction: (
        action: DialogAction,
        value: DialogActionValuePrimitive
      ) => handleAction(action, value),
    }

    closeCallbacks.set(id, onCloseDialog)
    warnIfNoProvider("openDrawer()")
    dialogsAlikeStore.addItem(item)
  })
}

const close = (id: DialogId) => {
  const callback = closeCallbacks.get(id)
  if (callback) {
    callback()
  } else {
    dialogsAlikeStore.removeItem(id)
  }
}

// -----------------------------------------------------------------------------
// Public imperative API. These free functions open/close dialogs and drawers
// from anywhere — including outside React. They require `<F0Provider>` (which
// mounts `DialogsAlikeLayoutProvider`) to be present in the tree.
// -----------------------------------------------------------------------------

/**
 * Open a dialog. Resolves with the value of the action the user picked.
 *
 * @example
 * const result = await openDialog({ title, content, actions: { primary: { label: "OK", value: true } } })
 */
export const openDialog = (definition: Optional<DialogDefinition, "id">) =>
  openDialogInternal({ ...definition, variant: "default" })

/** Open a notification-style dialog (info/warning/critical/positive). */
export const notifyDialog = (
  options: NotificationDialogOptions
): Promise<DialogActionValue> =>
  openDialogInternal({
    type: options.type ?? "info",
    variant: "notification",
    description: options.msg,
    id: options.id || nanoid(),
    title: options.title,
    content: <></>,
    actions: options.actions,
  })

/** Notification dialog with a single confirm action (defaults to "Ok"). */
export const alertDialog = (
  options: AlertDialogOptions
): Promise<DialogActionValue> => {
  const labels = dialogsAlikeStore.getDefaultActionLabels()
  return notifyDialog({
    ...options,
    actions: {
      primary: {
        value: options.confirm?.value ?? true,
        label: options.confirm?.label || labels.ok,
      },
    },
  })
}

/** Notification dialog with confirm + cancel actions (defaults to Ok/Cancel). */
export const confirmDialog = (
  options: ConfirmDialogOptions
): Promise<DialogActionValue> => {
  const labels = dialogsAlikeStore.getDefaultActionLabels()
  return notifyDialog({
    ...options,
    actions: {
      primary: {
        value: options.confirm?.value ?? true,
        label: options.confirm?.label || labels.ok,
      },
      secondary: {
        value: options.cancel?.value ?? false,
        label: options.cancel?.label || labels.cancel,
      },
    },
  })
}

/** Programmatically close a dialog by id (resolves its promise with undefined). */
export const closeDialog = (id: DialogId) => close(id)

/**
 * Open a drawer. Resolves with the value of the action the user picked.
 *
 * @example
 * const result = await openDrawer({ title, content, actions: { primary: { label: "Save", value: "save" } } })
 */
export const openDrawer = (definition: Optional<DrawerDefinition, "id">) =>
  openDrawerInternal({ ...definition, variant: "drawer" })

/** Programmatically close a drawer by id (resolves its promise with undefined). */
export const closeDrawer = (id: DialogId) => close(id)
