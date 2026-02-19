import { nanoid } from "nanoid"
import { useCallback } from "react"

import { useToastContext } from "./ToastProvider"
import { ToastId, ToastOptions, UseToastReturn } from "./types"

export const useToast = (): UseToastReturn => {
  const { addToast, removeToast, clearAll } = useToastContext()

  const toast = useCallback(
    (options: ToastOptions): ToastId => {
      const id = options.id ?? nanoid()

      addToast({
        duration: options.persistent ? undefined : 10000,
        ...options,
        id,
        onClose: () => removeToast(id),
      })

      return id
    },
    [addToast, removeToast]
  )

  return {
    toast,
    removeToast,
    clearAll,
  }
}
