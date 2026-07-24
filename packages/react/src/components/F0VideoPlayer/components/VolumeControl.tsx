import { useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { VolumeHigh, VolumeMid, VolumeMuted } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { VOLUME_SLIDER_THUMB_SIZE, VOLUME_STEP } from "../utils"

export interface VolumeControlProps {
  volume: number
  isMuted: boolean
  onToggleMute: () => void
  onVolumeChange: (value: number) => void
}

/** Picks the volume icon by range: muted (0), mid (1–50%), high (51–100%). */
export function volumeIcon(volume: number, muted: boolean) {
  if (muted || volume === 0) return VolumeMuted
  if (volume <= 0.5) return VolumeMid
  return VolumeHigh
}

export function VolumeControl({
  volume,
  isMuted,
  onToggleMute,
  onVolumeChange,
}: VolumeControlProps) {
  const { t } = useI18n()
  const muted = isMuted || volume === 0

  return (
    <div className="flex items-center gap-1">
      <F0Button
        variant="ghost"
        size="sm"
        hideLabel
        icon={volumeIcon(volume, muted)}
        label={muted ? t("videoPlayer.unmute") : t("videoPlayer.mute")}
        onClick={onToggleMute}
      />
      <VolumeSlider value={muted ? 0 : volume} onChange={onVolumeChange} />
    </div>
  )
}

interface VolumeSliderProps {
  value: number
  onChange: (value: number) => void
}

/**
 * Custom volume slider built on the same primitives as the seekbar so the
 * thumb/track sizes stay consistent across browsers. The thumb is positioned so
 * its center maps to `value`, and neither thumb nor progress overflow the rect.
 */
function VolumeSlider({ value, onChange }: VolumeSliderProps) {
  const { t } = useI18n()
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const clampedValue = Math.max(0, Math.min(1, value))

  const fractionFromPointer = (clientX: number): number => {
    const track = trackRef.current
    if (!track) return 0
    const rect = track.getBoundingClientRect()
    const usable = rect.width - VOLUME_SLIDER_THUMB_SIZE
    if (usable <= 0) return 0
    return Math.max(
      0,
      Math.min(1, (clientX - rect.left - VOLUME_SLIDER_THUMB_SIZE / 2) / usable)
    )
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    setIsDragging(true)
    onChange(fractionFromPointer(event.clientX))
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    onChange(fractionFromPointer(event.clientX))
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setIsDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    let next: number | null = null
    switch (event.key) {
      case "ArrowRight":
      case "ArrowUp":
        next = Math.min(1, clampedValue + VOLUME_STEP)
        break
      case "ArrowLeft":
      case "ArrowDown":
        next = Math.max(0, clampedValue - VOLUME_STEP)
        break
      case "Home":
        next = 0
        break
      case "End":
        next = 1
        break
      default:
        return
    }
    event.preventDefault()
    // Prevent the wrapper's global shortcut handler from also reacting.
    event.stopPropagation()
    onChange(next)
  }

  return (
    <div
      ref={trackRef}
      className={cn(
        "relative flex h-4 w-[60px] items-center rounded-sm",
        "cursor-pointer touch-none",
        focusRing()
      )}
      role="slider"
      tabIndex={0}
      aria-label={t("videoPlayer.volume")}
      aria-valuemin={0}
      aria-valuemax={1}
      aria-valuenow={Number(clampedValue.toFixed(2))}
      aria-valuetext={`${Math.round(clampedValue * 100)}%`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onLostPointerCapture={() => setIsDragging(false)}
      onKeyDown={handleKeyDown}
    >
      <div className="absolute inset-x-0 h-1 rounded-sm bg-f1-foreground/30" />
      <div
        className="pointer-events-none absolute left-0 h-1 rounded-sm bg-f1-foreground"
        style={{
          width: `calc(${VOLUME_SLIDER_THUMB_SIZE}px + (100% - ${VOLUME_SLIDER_THUMB_SIZE}px) * ${clampedValue})`,
        }}
      />
      <div
        className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 rounded-full bg-f1-foreground shadow-[0_0_4px_rgba(0,0,0,0.4)]"
        style={{
          left: `calc(${VOLUME_SLIDER_THUMB_SIZE / 2}px + (100% - ${VOLUME_SLIDER_THUMB_SIZE}px) * ${clampedValue})`,
        }}
      />
    </div>
  )
}
