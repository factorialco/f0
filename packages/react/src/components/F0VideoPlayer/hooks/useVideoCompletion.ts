import { useEffect, useRef } from "react"

import { COMPLETION_TAIL_RATIO, COMPLETION_TAIL_SECONDS } from "../utils"

export interface UseVideoCompletionOptions {
  /** The media element to observe (null before mount). */
  video: HTMLVideoElement | null
  /** Called once when the video is "watched enough". */
  onComplete?: (video: HTMLVideoElement) => void
  /** Resets the fired flag whenever this value changes (e.g. `src`). */
  resetKey?: unknown
}

/** Time (seconds) at/after which the video counts as completed. */
export function completionThreshold(duration: number): number {
  const tail = Math.min(
    COMPLETION_TAIL_SECONDS,
    duration * COMPLETION_TAIL_RATIO
  )
  return duration - tail
}

/**
 * Fires `onComplete` once when the remaining time drops to
 * `min(10s, 3% of duration)` — the later of "last 10s" and "97%". Short videos
 * complete at 97%; long videos complete in their final 10 seconds.
 */
export function useVideoCompletion({
  video,
  onComplete,
  resetKey,
}: UseVideoCompletionOptions): void {
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete
  const firedRef = useRef(false)
  const enabled = !!onComplete

  useEffect(() => {
    firedRef.current = false
  }, [resetKey])

  useEffect(() => {
    if (!video || !enabled) return

    const handleTimeUpdate = () => {
      if (firedRef.current || !video.duration) return
      if (video.currentTime >= completionThreshold(video.duration)) {
        firedRef.current = true
        onCompleteRef.current?.(video)
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleTimeUpdate)
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleTimeUpdate)
    }
  }, [video, enabled])
}
