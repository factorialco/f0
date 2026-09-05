import { cn } from "@/lib/utils"

import { useMeetingSignal } from "../../providers/useMeetingSignal"

const BAR_WEIGHTS = [0.45, 0.8, 1, 0.8, 0.45]

/** Resting height, so a silent indicator still reads as five bars. */
const MIN_BAR = 4
const MAX_BAR = 24
const COMPACT_MAX_BAR = 14

/**
 * Speech RMS sits low in the 0..1 range and loudness is perceived
 * logarithmically, so a linear mapping leaves the bars nearly flat while
 * someone is clearly talking. The curve lifts normal speech into the top half
 * of the range, where the movement is actually legible at tile size.
 */
const amplitudeFor = (level: number): number =>
  Math.sqrt(Math.min(1, Math.max(0, level) * 1.6))

/**
 * A LEAF that subscribes to the signal store on its own. Audio levels arrive
 * ~10 times a second; keeping the subscription here means a burst repaints five
 * `<div>`s instead of the tile, the grid and the control bar.
 */
export const SpeakingIndicator = ({
  participantId,
  compact = false,
}: {
  participantId: string
  /** Thumbnails get a shorter meter; it still has to fit in their chip. */
  compact?: boolean
}) => {
  const { audioLevel, isSpeaking } = useMeetingSignal(participantId)
  const amplitude = isSpeaking ? amplitudeFor(audioLevel) : 0
  const max = compact ? COMPACT_MAX_BAR : MAX_BAR

  return (
    <div
      className="flex items-center gap-[2px]"
      style={{ height: `${max}px` }}
      aria-hidden
      data-testid="meeting-speaking-indicator"
    >
      {BAR_WEIGHTS.map((weight, index) => (
        <div
          key={index}
          className={cn(
            "rounded-full bg-f1-foreground-selected transition-[height] duration-100 ease-out",
            compact ? "w-[3px]" : "w-1"
          )}
          style={{
            height: `${MIN_BAR + amplitude * weight * (max - MIN_BAR)}px`,
          }}
        />
      ))}
    </div>
  )
}
