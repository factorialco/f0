import { createContext, useContext } from "react"

import { F0Toast } from "@/ui/Toast/F0Toast"

import { ToastProviderItem } from "./types"

/**
 * True while the sonner stack is hovered or being swiped. F0Toast owns the
 * auto-dismiss countdown (sonner never auto-closes our toasts), so this mirrors
 * sonner's own "pause all timers while interacting with the stack" behavior.
 */
export const ToastTimerPauseContext = createContext(false)

export const ToastItem = (props: ToastProviderItem) => {
  const paused = useContext(ToastTimerPauseContext)
  return <F0Toast {...props} forcePauseTimer={paused} />
}
