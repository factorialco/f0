import { forwardRef } from "react"

import { cn } from "@/lib/utils"

import { AudioScrubber } from "./components/AudioScrubber"
import { PlaybackMenu } from "./components/PlaybackMenu"
import { PlayPauseButton } from "./components/PlayPauseButton"
import type { F0AudioPlayerCardProps } from "./types"
import { usePlayerController } from "./usePlayerController"
import { formatPlaybackTime } from "./utils"
import { timeVariants } from "./variants"

const F0AudioPlayerCardBase = forwardRef<
  HTMLDivElement,
  F0AudioPlayerCardProps
>((props, ref) => {
  const {
    title,
    subtitle,
    actions,
    className,
    src,
    preload = "metadata",
    autoPlay = false,
    disabled = false,
    ariaLabel,
    size = "md",
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
      className={cn(
        "flex flex-col gap-2.5 rounded-2xl border border-solid border-f1-border bg-f1-background p-3",
        className
      )}
      {...rest}
    >
      <audio
        ref={controller.audioRef}
        src={src}
        preload={preload}
        autoPlay={autoPlay}
      />

      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <PlayPauseButton
            isPlaying={controller.isPlaying}
            disabled={disabled}
            size={size}
            onToggle={controller.toggle}
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-medium text-f1-foreground">
              {title}
            </span>
            {subtitle && (
              <span className="truncate text-sm text-f1-foreground-secondary">
                {subtitle}
              </span>
            )}
          </div>
        </div>
        {(controller.playbackRates.length > 0 || actions) && (
          <div className="shrink-0">
            <PlaybackMenu
              playbackRate={controller.playbackRate}
              playbackRates={controller.playbackRates}
              onRateChange={controller.setPlaybackRate}
              disabled={disabled}
              extraItems={actions}
            />
          </div>
        )}
      </div>

      <div className="flex w-full items-center gap-2">
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
    </div>
  )
})

F0AudioPlayerCardBase.displayName = "F0AudioPlayerCard"

export { F0AudioPlayerCardBase }
