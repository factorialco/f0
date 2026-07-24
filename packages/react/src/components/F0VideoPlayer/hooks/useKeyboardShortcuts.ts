import { useCallback } from "react"

import { SEEK_STEP_SECONDS, VOLUME_STEP } from "../utils"

export interface UseKeyboardShortcutsOptions {
  videoRef: React.RefObject<HTMLVideoElement | null>
  /** Seeks to an absolute time (seconds); already applies any clamp. */
  seek: (time: number) => void
  togglePlay: () => void
  toggleMute: () => void
  toggleFullscreen: () => Promise<void> | void
  setVolume: (value: number) => void
}

/**
 * Player keyboard shortcuts (active while the wrapper or a non-input descendant
 * holds focus):
 *
 *   Space    → play/pause
 *   ← / →    → seek ±SEEK_STEP_SECONDS (forward seek runs through `seek`'s clamp)
 *   ↑ / ↓    → volume ±VOLUME_STEP
 *   M        → mute/unmute
 *   F        → toggle fullscreen
 */
export function useKeyboardShortcuts({
  videoRef,
  seek,
  togglePlay,
  toggleMute,
  toggleFullscreen,
  setVolume,
}: UseKeyboardShortcutsOptions) {
  return useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      const target = event.target
      if (target instanceof HTMLElement) {
        const tag = target.tagName
        if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable)
          return
        // Inside a menu, let the menu own its keys (Arrow/Space/Enter).
        if (target.closest('[role="menu"], [role^="menuitem"]')) return
        // Custom sliders (seekbar, volume) own their own keyboard handling.
        if (target.getAttribute("role") === "slider") return
      }

      const video = videoRef.current
      if (!video) return

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key

      switch (key) {
        case " ":
          event.preventDefault()
          togglePlay()
          return
        case "ArrowLeft":
          event.preventDefault()
          seek(Math.max(0, video.currentTime - SEEK_STEP_SECONDS))
          return
        case "ArrowRight": {
          event.preventDefault()
          const max = video.duration || video.currentTime + SEEK_STEP_SECONDS
          seek(Math.min(max, video.currentTime + SEEK_STEP_SECONDS))
          return
        }
        case "ArrowUp":
          event.preventDefault()
          setVolume(Math.min(1, video.volume + VOLUME_STEP))
          return
        case "ArrowDown":
          event.preventDefault()
          setVolume(Math.max(0, video.volume - VOLUME_STEP))
          return
        case "m":
          event.preventDefault()
          toggleMute()
          return
        case "f":
          event.preventDefault()
          void toggleFullscreen()
          return
        default:
          return
      }
    },
    [videoRef, seek, togglePlay, toggleMute, toggleFullscreen, setVolume]
  )
}
