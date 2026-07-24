import { useEffect, useRef } from "react"

import { TRACKING_INTERVAL_MS } from "../utils"

export interface UseVideoTrackingOptions {
  /** The media element to observe (null before mount). */
  video: HTMLVideoElement | null
  /** Called on play, on pause and every `TRACKING_INTERVAL_MS` during playback. */
  onTrackAction?: () => void
}

/**
 * Fires `onTrackAction` on play, on pause, and on a recurring interval while the
 * video keeps playing. Inert when no callback is provided.
 */
export function useVideoTracking({
  video,
  onTrackAction,
}: UseVideoTrackingOptions): void {
  const onTrackActionRef = useRef(onTrackAction)
  onTrackActionRef.current = onTrackAction
  const enabled = !!onTrackAction

  useEffect(() => {
    if (!video || !enabled) return

    let trackingInterval: ReturnType<typeof setInterval> | null = null
    const clearTrackingInterval = () => {
      if (trackingInterval) {
        clearInterval(trackingInterval)
        trackingInterval = null
      }
    }

    const handlePlay = () => {
      onTrackActionRef.current?.()
      clearTrackingInterval()
      trackingInterval = setInterval(() => {
        onTrackActionRef.current?.()
      }, TRACKING_INTERVAL_MS)
    }

    const handlePause = () => {
      onTrackActionRef.current?.()
      clearTrackingInterval()
    }

    const handleEnded = () => clearTrackingInterval()

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)

    return () => {
      clearTrackingInterval()
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
    }
  }, [video, enabled])
}
