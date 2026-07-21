export const playbackRates = [0.5, 0.75, 1, 1.25, 1.5] as const
export type PlaybackRate = (typeof playbackRates)[number]

export const DEFAULT_PLAYBACK_RATE: PlaybackRate = 1

/** Tolerance (seconds) used when comparing playhead positions. */
export const SEEK_EPSILON = 0.25

/** Step (seconds) applied by the ← / → keyboard shortcuts. */
export const SEEK_STEP_SECONDS = 5

/** Step (0–1) applied by the ↑ / ↓ keyboard shortcuts. */
export const VOLUME_STEP = 0.1

/** Diameter (px) of the volume slider thumb. Used to keep the thumb within the slider rect. */
export const VOLUME_SLIDER_THUMB_SIZE = 12

/** Maximum forward delta (seconds) we consider "natural playback progress". */
export const NATURAL_PROGRESS_DELTA = 1

/** Throttle (ms) for `setCurrentTime` updates driven by `timeupdate`. */
export const CURRENT_TIME_THROTTLE_MS = 250

/** Watched-percentage milestones reported through `onMilestone`. */
export const DEFAULT_MILESTONES: readonly number[] = [25, 50, 75]

/** Default tracking heartbeat interval (ms) during continuous playback. */
export const TRACKING_INTERVAL_MS = 5 * 60 * 1000

/**
 * Completion threshold. The video counts as "watched enough" once the remaining
 * time is ≤ `min(COMPLETION_TAIL_SECONDS, duration * COMPLETION_TAIL_RATIO)` —
 * i.e. the later of "last 10s" and "97%". Short videos complete at 97%; long
 * videos complete in their final 10 seconds.
 */
export const COMPLETION_TAIL_SECONDS = 10
export const COMPLETION_TAIL_RATIO = 0.03

export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function formatPlaybackRate(rate: number): string {
  return `${rate}x`
}

/** Runtime guard that narrows an arbitrary number to a supported `PlaybackRate`. */
export function isPlaybackRate(value: number): value is PlaybackRate {
  return (playbackRates as readonly number[]).includes(value)
}
