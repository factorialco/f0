import { nanoid } from "nanoid"

import { toastStore } from "./store"
import { ToastId, ToastOptions } from "./types"

// Default lifetime for a non-persistent toast (ms). Toasts with an action get a
// longer window so there's time to read, decide and reach the button (e.g. Undo).
const DEFAULT_DURATION = 5000
const ACTION_DURATION = 10000

const warnIfNoProvider = (method: string) => {
  if (process.env.NODE_ENV !== "production" && !toastStore.hasProvider()) {
    console.warn(
      `[f0] ${method} was called but no <F0Provider> is mounted, so the toast will not render. ` +
        `Make sure your app is wrapped in <F0Provider>.`
    )
  }
}

const open = (options: ToastOptions): ToastId => {
  const id = options.id ?? nanoid()

  warnIfNoProvider("toasts.open()")

  const hasAction = options.actions != null
  toastStore.addItem({
    duration: options.persistent ? undefined : hasAction ? ACTION_DURATION : DEFAULT_DURATION,
    ...options,
    id,
    onClose: () => toastStore.removeItem(id),
  })

  return id
}

const close = (id: ToastId): void => {
  toastStore.removeItem(id)
}

const closeAll = (): void => {
  toastStore.clear()
}

/**
 * Imperative API for toast notifications. Can be called from anywhere — no hook
 * required — as long as `<F0Provider>` (which mounts `ToastProvider`) is in the
 * tree.
 *
 * @example
 * import { toasts } from "@factorialco/f0-react"
 *
 * const id = toasts.open({ title: "Saved", variant: "success" })
 * toasts.close(id)
 * toasts.closeAll()
 */
export const toasts = {
  /**
   * Show a toast.
   * @param options The options for the toast
   * @returns The id of the created toast (pass it to `toasts.close` to dismiss it)
   */
  open,
  /**
   * Dismiss a toast by id.
   * @param id The id returned by `toasts.open`
   */
  close,
  /** Dismiss every open toast. */
  closeAll,
}
