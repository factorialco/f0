import { nanoid } from "nanoid"

import { useToastContext } from "./ToastProvider"
import { ToastId, ToastOptions, UseToastReturn } from "./types"

export const useToast = (): UseToastReturn => {
  const { addToast, removeToast } = useToastContext()

  const toast = (options: ToastOptions): ToastId => {
    const id = options.id || nanoid()

    addToast({
      duration: options.persistent ? undefined : 5000,
      ...options,
      id,
      onClose: () => removeToast(id),
    })

    return id
  }

  return {
    toast,
    removeToast,
  }
}
