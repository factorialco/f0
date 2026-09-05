import { cn } from "@/lib/utils"

import { useMeetingSignal } from "../../providers/useMeetingSignal"
import { type F0MeetingConnectionQuality } from "../../types"

const LEVELS: Record<F0MeetingConnectionQuality, number> = {
  excellent: 3,
  good: 2,
  poor: 1,
  lost: 0,
}

const HEIGHTS = ["h-1", "h-2", "h-3"]

/** Another leaf reader of the signal store — see {@link SpeakingIndicator}. */
export const ConnectionQualityBars = ({
  participantId,
  label,
}: {
  participantId: string
  label: string
}) => {
  const { quality } = useMeetingSignal(participantId)
  const level = LEVELS[quality]

  if (quality === "excellent") return null

  return (
    <div className="flex items-end gap-[2px]" role="img" aria-label={label}>
      {HEIGHTS.map((height, index) => (
        <div
          key={height}
          className={cn(
            // Inherits the tile's colour: white over video, dark over the
            // avatar placeholder, where white bars would vanish.
            "w-1 rounded-full bg-current",
            height,
            index < level ? "opacity-100" : "opacity-30"
          )}
        />
      ))}
    </div>
  )
}
