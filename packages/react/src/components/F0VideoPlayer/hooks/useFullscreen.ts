import { useCallback, useEffect, useState } from "react"

export interface UseFullscreenOptions {
  targetRef: React.RefObject<HTMLElement | null>
}

export interface UseFullscreenResult {
  isFullscreen: boolean
  toggleFullscreen: () => Promise<void>
}

/**
 * Tracks fullscreen state and exposes a toggle. Fullscreens the target element
 * (the wrapper, not the `<video>`) so the controls and marker stay visible.
 */
export function useFullscreen({
  targetRef,
}: UseFullscreenOptions): UseFullscreenResult {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === targetRef.current)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [targetRef])

  const toggleFullscreen = useCallback(async () => {
    const target = targetRef.current
    if (!target) return
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      } else {
        await target.requestFullscreen()
      }
    } catch {
      // Causes: missing user gesture, transition in flight, iframe without
      // `allowfullscreen`, unsupported browser. All benign — swallow.
    }
  }, [targetRef])

  return { isFullscreen, toggleFullscreen }
}
