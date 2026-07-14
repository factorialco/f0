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
// (not in a React ref) so `dialogs.close(id)` / `drawers.close(id)` work from
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
    warnIfNoProvider("dialogs.open()")
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
    warnIfNoProvider("drawers.open()")
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
// Public imperative API. The `dialogs` and `drawers` namespaces open/close
// dialogs and drawers from anywhere — including outside React. They require
// `<F0Provider>` (which mounts `DialogsAlikeLayoutProvider`) to be present in
// the tree.
// -----------------------------------------------------------------------------

const notification = (
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

// Notification dialog with confirm + cancel actions (defaults to Ok/Cancel).
// Module-level so it can be exposed both as `confirmation` and the back-compat
// `confirm` alias below.
const confirmation = (
  options: ConfirmDialogOptions
): Promise<DialogActionValue> => {
  const labels = dialogsAlikeStore.getDefaultActionLabels()
  return notification({
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

/**
 * Imperative API for centered dialogs. Requires `<F0Provider>` (which mounts
 * `DialogsAlikeLayoutProvider`) to be present in the tree.
 *
 * @example
 * import { dialogs } from "@factorialco/f0-react"
 *
 * const result = await dialogs.open({ title, content, actions: { primary: { label: "OK", value: true } } })
 */
export const dialogs = {
  /** Open a dialog. Resolves with the value of the action the user picked. */
  open: (definition: Optional<DialogDefinition, "id">) =>
    openDialogInternal({ ...definition, variant: "default" }),

  /** Open a notification-style dialog (info/warning/critical/positive). */
  notification,

  /** Notification dialog with a single confirm action (defaults to "Ok"). */
  alert: (options: AlertDialogOptions): Promise<DialogActionValue> => {
    const labels = dialogsAlikeStore.getDefaultActionLabels()
    return notification({
      ...options,
      actions: {
        primary: {
          value: options.confirm?.value ?? true,
          label: options.confirm?.label || labels.ok,
        },
      },
    })
  },

  /** Notification dialog with confirm + cancel actions (defaults to Ok/Cancel). */
  confirmation,

  /**
   * Back-compat alias for {@link confirmation} — the v3 `dialog.confirm(...)`.
   * Same options shape (`type`, `title`, `msg`, `confirm`, `cancel`), so legacy
   * call sites keep working through the `dialogs as dialog` re-export.
   * @deprecated Use `confirmation` instead.
   */
  confirm: confirmation,

  /** Programmatically close a dialog by id (resolves its promise with undefined). */
  close,
}

/**
 * Imperative API for side drawers. Requires `<F0Provider>` to be present.
 *
 * @example
 * import { drawers } from "@factorialco/f0-react"
 *
 * const result = await drawers.open({ title, content, actions: { primary: { label: "Save", value: "save" } } })
 */
export const drawers = {
  /** Open a drawer. Resolves with the value of the action the user picked. */
  open: (definition: Optional<DrawerDefinition, "id">) =>
    openDrawerInternal({ ...definition, variant: "drawer" }),

  /** Programmatically close a drawer by id (resolves its promise with undefined). */
  close,
}
