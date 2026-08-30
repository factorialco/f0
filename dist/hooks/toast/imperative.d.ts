import { ToastId, ToastOptions } from './types';
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
export declare const toasts: {
    /**
     * Show a toast.
     * @param options The options for the toast
     * @returns The id of the created toast (pass it to `toasts.close` to dismiss it)
     */
    open: (options: ToastOptions) => ToastId;
    /**
     * Dismiss a toast by id.
     * @param id The id returned by `toasts.open`
     */
    close: (id: ToastId) => void;
    /** Dismiss every open toast. */
    closeAll: () => void;
};
