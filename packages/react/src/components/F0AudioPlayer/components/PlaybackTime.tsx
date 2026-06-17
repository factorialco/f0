import { cva } from "cva"

import type { F0AudioPlayerSize } from "../types"
import { formatPlaybackTime } from "../utils"

const timeVariants = cva({
  base: "shrink-0 font-medium tabular-nums text-f1-foreground-secondary",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
    },
  },
})

interface PlaybackTimeProps {
  currentTime: number
  duration: number
  size?: F0AudioPlayerSize
}

export const PlaybackTime = ({
  currentTime,
  duration,
  size = "md",
}: PlaybackTimeProps) => (
  <span className={timeVariants({ size })}>
    {formatPlaybackTime(currentTime)} / {formatPlaybackTime(duration)}
  </span>
)
