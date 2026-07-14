import { cva } from "cva"
import { forwardRef } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { AudioScrubber } from "./components/AudioScrubber"
import { PlaybackTime } from "./components/PlaybackTime"
import { PlayPauseButton } from "./components/PlayPauseButton"
import type { F0AudioPlayerProps } from "./types"
import { usePlayerController } from "./usePlayerController"
import { getDataAttributes } from "./utils"

const containerVariants = cva({
  base: "flex w-full items-center",
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-3",
    },
  },
})

const F0AudioPlayerBase = forwardRef<HTMLDivElement, F0AudioPlayerProps>(
  (props, ref) => {
    const {
      src,
      preload,
      autoPlay = false,
      disabled = false,
      ariaLabel,
      size = "md",
      className,
    } = props

    const i18n = useI18n()
    const controller = usePlayerController(props)
    const dataAttributes = getDataAttributes(props)

    return (
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel ?? i18n.audioPlayer.label}
        className={cn(containerVariants({ size }), className)}
        {...dataAttributes}
      >
        <audio
          ref={controller.audioRef}
          src={controller.currentSrc}
          preload={preload ?? (typeof src === "function" ? "none" : "metadata")}
          autoPlay={autoPlay}
        />

        <PlayPauseButton
          isPlaying={controller.isPlaying}
          disabled={disabled}
          size={size}
          onToggle={controller.toggle}
        />

        <AudioScrubber
          currentTime={controller.currentTime}
          duration={controller.duration}
          buffered={controller.buffered}
          disabled={disabled}
          onSeek={controller.seek}
        />

        <PlaybackTime
          currentTime={controller.currentTime}
          duration={controller.duration}
          size={size}
        />
      </div>
    )
  }
)

F0AudioPlayerBase.displayName = "F0AudioPlayer"

export { F0AudioPlayerBase }
