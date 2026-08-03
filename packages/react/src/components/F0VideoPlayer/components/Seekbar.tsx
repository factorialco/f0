import { useRef, useState } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { SEEK_EPSILON, SEEK_STEP_SECONDS, formatTime } from "../utils"

export interface SeekbarProps {
  currentTime: number
  duration: number
  /** Optional marker position (seconds). Pure presentation. */
  markerTime?: number
  /** When true, shows a "blocked" cursor when hovering past `markerTime`. */
  blockSeekPastMarker?: boolean
  onSeek: (time: number) => void
}

/**
 * Interactive seekbar. Reports pointer events; any clamp lives upstream (wired
 * through `onSeek`). `markerTime` is used only for presentation (marker
 * visibility, blocked-cursor hint).
 */
export function Seekbar({
  currentTime,
  duration,
  markerTime,
  blockSeekPastMarker = false,
  onSeek,
}: SeekbarProps) {
  const { t } = useI18n()
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [hoveredFraction, setHoveredFraction] = useState<number | null>(null)

  const progressFraction =
    duration > 0 ? Math.min(1, currentTime / duration) : 0
  const markerFraction =
    markerTime !== undefined && duration > 0
      ? Math.min(1, markerTime / duration)
      : 0
  const showMarker =
    markerTime !== undefined &&
    duration > 0 &&
    markerTime > 0 &&
    markerTime < duration - SEEK_EPSILON &&
    currentTime < markerTime - SEEK_EPSILON

  const fractionFromPointer = (clientX: number): number => {
    const track = trackRef.current
    if (!track) return 0
    const rect = track.getBoundingClientRect()
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
  }

  const seekFromPointer = (clientX: number) => {
    if (!duration) return
    onSeek(fractionFromPointer(clientX) * duration)
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!duration) return
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    setIsDragging(true)
    seekFromPointer(event.clientX)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!duration) return
    setHoveredFraction(fractionFromPointer(event.clientX))
    if (isDragging) seekFromPointer(event.clientX)
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setIsDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const isHoveringBlocked =
    hoveredFraction !== null &&
    blockSeekPastMarker &&
    markerTime !== undefined &&
    hoveredFraction > markerFraction

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!duration) return
    let target: number | null = null
    switch (event.key) {
      case "ArrowLeft":
        target = Math.max(0, currentTime - SEEK_STEP_SECONDS)
        break
      case "ArrowRight":
        target = Math.min(duration, currentTime + SEEK_STEP_SECONDS)
        break
      case "Home":
        target = 0
        break
      case "End":
        target = duration
        break
      default:
        return
    }
    event.preventDefault()
    // Stop the wrapper's global shortcut handler from also seeking.
    event.stopPropagation()
    onSeek(target)
  }

  return (
    <div
      ref={trackRef}
      className={cn(
        "relative flex h-4 flex-1 items-center rounded-sm",
        "cursor-pointer touch-none",
        focusRing()
      )}
      role="slider"
      tabIndex={0}
      aria-label={t("videoPlayer.seekLabel")}
      aria-valuemin={0}
      aria-valuemax={duration || 0}
      aria-valuenow={currentTime}
      aria-valuetext={t("videoPlayer.timeProgress", {
        current: formatTime(currentTime),
        total: formatTime(duration),
      })}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onLostPointerCapture={() => setIsDragging(false)}
      onPointerLeave={() => setHoveredFraction(null)}
      onKeyDown={handleKeyDown}
    >
      <div className="absolute inset-x-0 h-1 rounded-sm bg-f1-foreground/30" />
      <div
        className="pointer-events-none absolute left-0 h-1 rounded-sm bg-f1-foreground"
        style={{ width: `${progressFraction * 100}%` }}
      />
      {showMarker && (
        <div
          className="pointer-events-none absolute z-[1] h-2.5 w-0.5 -translate-x-px bg-f1-foreground/95"
          style={{ left: `${markerFraction * 100}%` }}
          aria-hidden="true"
        />
      )}
      <div
        className="pointer-events-none absolute z-[2] h-3 w-3 -translate-x-1/2 rounded-full bg-f1-foreground shadow-[0_0_4px_rgba(0,0,0,0.4)]"
        style={{ left: `${progressFraction * 100}%` }}
      />
      {isHoveringBlocked && (
        <div className="absolute inset-0 cursor-not-allowed" />
      )}
    </div>
  )
}
