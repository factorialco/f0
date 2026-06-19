import { nanoid } from "nanoid"

import { toastStore } from "./store"
import { ToastId, ToastOptions } from "./types"

// Default lifetime for a non-persistent toast (ms).
const DEFAULT_DURATION = 10000

const warnIfNoProvider = (method: string) => {
  if (process.env.NODE_ENV !== "production" && !toastStore.hasProvider()) {
    console.warn(
      `[f0] ${method} was called but no <F0Provider> is mounted, so the toast will not render. ` +
        `Make sure your app is wrapped in <F0Provider>.`
    )
  }
}

/**
 * Imperatively show a toast. Can be called from anywhere — no hook required —
 * as long as `<F0Provider>` (which mounts `ToastProvider`) is in the tree.
 *
 * @param options The options for the toast
 * @returns The id of the created toast (pass it to `closeToast` to dismiss it)
 *
 * @example
 * const id = openToast({ title: "Saved", variant: "success" })
 * closeToast(id)
 */
export const openToast = (options: ToastOptions): ToastId => {
  const id = options.id ?? nanoid()

  warnIfNoProvider("openToast()")

  toastStore.addItem({
    duration: options.persistent ? undefined : DEFAULT_DURATION,
    ...options,
    id,
    onClose: () => toastStore.removeItem(id),
  })

  return id
}

/**
 * Dismiss a toast by id.
 * @param id The id returned by `openToast`
 */
export const closeToast = (id: ToastId): void => {
  toastStore.removeItem(id)
}

/**
 * Dismiss every open toast.
 */
export const closeAllToasts = (): void => {
  toastStore.clear()
}
