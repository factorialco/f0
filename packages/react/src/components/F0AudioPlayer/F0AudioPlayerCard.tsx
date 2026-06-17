import { forwardRef } from "react"

import { cn } from "@/lib/utils"

import { AudioScrubber } from "./components/AudioScrubber"
import { PlaybackMenu } from "./components/PlaybackMenu"
import { PlaybackTime } from "./components/PlaybackTime"
import { PlayPauseButton } from "./components/PlayPauseButton"
import type { F0AudioPlayerCardProps } from "./types"
import { usePlayerController } from "./usePlayerController"
import { getDataAttributes } from "./utils"

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
  } = props

  const controller = usePlayerController(props)
  const dataAttributes = getDataAttributes(props)

  return (
    <div
      ref={ref}
      role="group"
      aria-label={ariaLabel ?? title}
      className={cn(
        "flex flex-col gap-2.5 rounded-2xl border border-solid border-f1-border bg-f1-background p-3",
        className
      )}
      {...dataAttributes}
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

        <PlaybackTime
          currentTime={controller.currentTime}
          duration={controller.duration}
          size={size}
        />
      </div>
    </div>
  )
})

F0AudioPlayerCardBase.displayName = "F0AudioPlayerCard"

export { F0AudioPlayerCardBase }
