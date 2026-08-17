import { useCallback, useEffect, useRef, useState } from "react"

import { NATURAL_PROGRESS_DELTA, SEEK_EPSILON } from "../utils"

export interface UseRestrictForwardSeekOptions {
  /** The media element to observe (null before mount). */
  video: HTMLVideoElement | null
  /** Whether the restriction is active. */
  enabled: boolean
  /** Max-watched is cleared whenever this value changes (e.g. `src`). */
  resetKey?: unknown
}

export interface UseRestrictForwardSeekResult {
  /** Furthest position reached during natural playback (seconds). */
  maxWatchedTime: number
  /** Clamps a target time to the allowed range; identity when disabled. */
  clampSeek: (target: number) => number
}

/**
 * Tracks the furthest naturally-watched position and (when `enabled`) prevents
 * seeking past it. The clamp is enforced both proactively (via `clampSeek`) and
 * reactively (via native `seeking`/`seeked` listeners). Internal building block
 * of `F0VideoPlayer`.
 */
export function useRestrictForwardSeek({
  video,
  enabled,
  resetKey,
}: UseRestrictForwardSeekOptions): UseRestrictForwardSeekResult {
  const maxWatchedTimeRef = useRef(0)
  const lastTimeRef = useRef(0)
  const enabledRef = useRef(enabled)
  enabledRef.current = enabled

  const [maxWatchedTime, setMaxWatchedTime] = useState(0)

  useEffect(() => {
    maxWatchedTimeRef.current = 0
    lastTimeRef.current = 0
    setMaxWatchedTime(0)
  }, [resetKey])

  useEffect(() => {
    if (!video) return

    const enforceClamp = () => {
      if (!enabledRef.current) return
      if (video.currentTime > maxWatchedTimeRef.current + SEEK_EPSILON) {
        video.currentTime = maxWatchedTimeRef.current
      }
    }

    // ~1s resolution is enough for the marker; avoids re-rendering on every
    // `timeupdate` (4–60 Hz) during playback.
    const syncStateFromRef = () => {
      setMaxWatchedTime((prev) => {
        const next = maxWatchedTimeRef.current
        return next - prev >= 1 ? next : prev
      })
    }

    // Discrete user actions (pause / seek / ended) need the exact value.
    const flushStateFromRef = () => {
      setMaxWatchedTime((prev) => Math.max(prev, maxWatchedTimeRef.current))
    }

    const handleTimeUpdate = () => {
      const delta = video.currentTime - lastTimeRef.current
      const isNaturalProgress = delta >= 0 && delta < NATURAL_PROGRESS_DELTA
      if (isNaturalProgress && video.currentTime > maxWatchedTimeRef.current) {
        maxWatchedTimeRef.current = video.currentTime
        syncStateFromRef()
      }
      enforceClamp()
      lastTimeRef.current = video.currentTime
    }

    const handleSeekingOrSeeked = () => {
      enforceClamp()
      flushStateFromRef()
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("seeking", handleSeekingOrSeeked)
    video.addEventListener("seeked", handleSeekingOrSeeked)
    video.addEventListener("pause", flushStateFromRef)
    video.addEventListener("ended", flushStateFromRef)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("seeking", handleSeekingOrSeeked)
      video.removeEventListener("seeked", handleSeekingOrSeeked)
      video.removeEventListener("pause", flushStateFromRef)
      video.removeEventListener("ended", flushStateFromRef)
    }
  }, [video])

  const clampSeek = useCallback((target: number): number => {
    if (!enabledRef.current) return target
    return Math.min(target, maxWatchedTimeRef.current)
  }, [])

  return { maxWatchedTime, clampSeek }
}
