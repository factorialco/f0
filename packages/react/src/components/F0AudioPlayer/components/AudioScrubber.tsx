import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { Slider, SliderThumb, SliderTrack } from "@/ui/slider"

import { formatPlaybackTime } from "../utils"

interface AudioScrubberProps {
  currentTime: number
  duration: number
  buffered?: number
  disabled?: boolean
  onSeek: (seconds: number) => void
}

export const AudioScrubber = ({
  currentTime,
  duration,
  buffered = 0,
  disabled,
  onSeek,
}: AudioScrubberProps) => {
  const [dragValue, setDragValue] = useState<number | null>(null)

  const max = duration > 0 ? duration : 0
  const value = dragValue ?? currentTime
  const clamped = Math.min(Math.max(value, 0), max)
  const percent = max > 0 ? (clamped / max) * 100 : 0
  const bufferedPercent = max > 0 ? Math.min((buffered / max) * 100, 100) : 0
  const isDisabled = disabled || max === 0

  const trackRef = useRef<HTMLSpanElement>(null)
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const update = () => setTrackWidth(el.clientWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const knobLeft =
    trackWidth > 0
      ? `${Math.round((trackWidth * percent) / 100)}px`
      : `${percent}%`

  const handleValueChange = useCallback((next: number[]) => {
    const [first] = next
    if (first === undefined) return
    setDragValue(first)
  }, [])

  const handleValueCommit = useCallback(
    (next: number[]) => {
      const [first] = next
      setDragValue(null)
      if (first === undefined) return
      onSeek(first)
    },
    [onSeek]
  )

  return (
    <Slider
      value={[value]}
      onValueChange={handleValueChange}
      onValueCommit={handleValueCommit}
      min={0}
      max={max || 1}
      step={1}
      disabled={isDisabled}
      aria-label="Seek"
      aria-valuetext={`${formatPlaybackTime(value)} of ${formatPlaybackTime(max)}`}
      className={cn(
        "group relative flex w-full touch-none select-none items-center py-2",
        disabled && "opacity-50"
      )}
    >
      <SliderTrack
        ref={trackRef}
        className="relative h-2 grow overflow-hidden rounded bg-f1-background-tertiary"
      >
        <span
          aria-hidden
          className="absolute h-full bg-f1-background-secondary"
          style={{ width: `${bufferedPercent}%` }}
        />
        <span
          aria-hidden
          className="absolute h-full bg-f1-background-selected-bold"
          style={{ width: `${percent}%` }}
        />
      </SliderTrack>
      {!isDisabled && (
        <span
          aria-hidden
          style={{ left: knobLeft }}
          className={cn(
            "pointer-events-none absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-f1-background-selected-bold opacity-0 transition-opacity",
            "group-hover:opacity-100 group-has-[:focus-visible]:opacity-100",
            "group-has-[:focus-visible]:ring-1 group-has-[:focus-visible]:ring-f1-special-ring group-has-[:focus-visible]:ring-offset-1"
          )}
        />
      )}

      <SliderThumb
        aria-label="Seek"
        className="block size-3 opacity-0 focus-visible:outline-none"
      />
    </Slider>
  )
}
