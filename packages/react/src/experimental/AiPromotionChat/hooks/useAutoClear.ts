import { useEffect, useRef } from "react"

interface UseAutoClearOptions {
  autoClearMinutes: number | null
  reset: () => void
  isOpen: boolean
}

/**
 * Custom hook that handles auto-clearing chat messages after a period of inactivity when chat is closed.
 *
 * @param autoClearMinutes - Number of minutes of inactivity before auto-clearing, or null to disable
 * @param reset - Function to call when auto-clearing should occur
 * @param isOpen - Whether the chat is currently open or closed
 */
export const useAutoClear = ({ autoClearMinutes, reset, isOpen }: UseAutoClearOptions) => {
  const closedTimer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isOpen) {
      if (closedTimer.current) {
        clearTimeout(closedTimer.current)
        closedTimer.current = null
      }
    } else {
      if (autoClearMinutes !== null) {
        closedTimer.current = setTimeout(
          () => {
            reset()
          },
          autoClearMinutes * 60 * 1000
        )
      }
    }

    return () => {
      if (closedTimer.current) {
        clearTimeout(closedTimer.current)
        closedTimer.current = null
      }
    }
  }, [reset, isOpen, autoClearMinutes])
}
