import { cva } from "cva"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

import { AudioScrubber } from "./components/AudioScrubber"
import { PlayPauseButton } from "./components/PlayPauseButton"
import type { F0AudioPlayerProps } from "./types"
import { usePlayerController } from "./usePlayerController"
import { formatPlaybackTime } from "./utils"
import { timeVariants } from "./variants"

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
      preload = "metadata",
      autoPlay = false,
      disabled = false,
      ariaLabel,
      size = "md",
      className,
      playbackRates: _playbackRates,
      playing: _playing,
      defaultPlaying: _defaultPlaying,
      onPlayingChange: _onPlayingChange,
      onPlay: _onPlay,
      onPause: _onPause,
      onSeek: _onSeek,
      onTimeUpdate: _onTimeUpdate,
      onEnded: _onEnded,
      onError: _onError,
      ...rest
    } = props

    const controller = usePlayerController(props)

    return (
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel ?? "Audio player"}
        className={cn(containerVariants({ size }), className)}
        {...rest}
      >
        <audio
          ref={controller.audioRef}
          src={src}
          preload={preload}
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

        <span className={timeVariants({ size })}>
          {formatPlaybackTime(controller.currentTime)} /{" "}
          {formatPlaybackTime(controller.duration)}
        </span>
      </div>
    )
  }
)

F0AudioPlayerBase.displayName = "F0AudioPlayer"

export { F0AudioPlayerBase }
