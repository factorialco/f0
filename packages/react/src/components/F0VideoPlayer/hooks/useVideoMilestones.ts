import { useEffect, useRef } from "react"

import { DEFAULT_MILESTONES } from "../utils"

export interface UseVideoMilestonesOptions {
  /** The media element to observe (null before mount). */
  video: HTMLVideoElement | null
  /** Called once when each milestone (watched %) is first reached. */
  onMilestone?: (milestone: number, video: HTMLVideoElement) => void
  /** Resets the fired-milestone set whenever this value changes (e.g. `src`). */
  resetKey?: unknown
}

/**
 * Fires `onMilestone` each time the watched percentage first crosses a default
 * threshold (`25`, `50`, `75`). Inert when no callback is provided. Attaches its
 * own `timeupdate` listener so it runs on every tick.
 */
export function useVideoMilestones({
  video,
  onMilestone,
  resetKey,
}: UseVideoMilestonesOptions): void {
  const onMilestoneRef = useRef(onMilestone)
  onMilestoneRef.current = onMilestone
  const firedRef = useRef<Set<number>>(new Set())
  const enabled = !!onMilestone

  useEffect(() => {
    firedRef.current.clear()
  }, [resetKey])

  useEffect(() => {
    if (!video || !enabled) return

    const handleTimeUpdate = () => {
      if (!video.duration) return
      const progress = Math.round((video.currentTime / video.duration) * 100)
      for (const milestone of DEFAULT_MILESTONES) {
        if (firedRef.current.has(milestone)) continue
        if (progress >= milestone) {
          firedRef.current.add(milestone)
          onMilestoneRef.current?.(milestone, video)
        }
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [video, enabled])
}
