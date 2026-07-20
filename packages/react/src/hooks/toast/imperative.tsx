import { nanoid } from "nanoid"
import { toast as sonnerToast } from "sonner"

import { toastStore } from "./store"
import { ToastItem } from "./ToastItem"
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

const open = (options: ToastOptions): ToastId => {
  const id = options.id ?? nanoid()

  warnIfNoProvider("toasts.open()")

  // F0Toast owns the countdown (it drives the progress bar), so sonner never
  // auto-dismisses: F0Toast calls onClose when its timer runs out.
  const duration = options.persistent
    ? undefined
    : (options.duration ?? DEFAULT_DURATION)

  sonnerToast.custom(
    (sonnerId) => (
      <ToastItem
        id={id}
        title={options.title}
        description={options.description}
        variant={options.variant}
        actions={options.actions}
        duration={duration}
        onClose={() => sonnerToast.dismiss(sonnerId)}
      />
    ),
    { id, duration: Infinity }
  )

  return id
}

const close = (id: ToastId): void => {
  sonnerToast.dismiss(id)
}

const closeAll = (): void => {
  sonnerToast.dismiss()
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
