import { F0Button } from "@/components/F0Button"
import { Maximize, Minimize, SolidPause, SolidPlay } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { PlaybackRate, formatTime } from "../utils"
import { PlaybackRateMenu } from "./PlaybackRateMenu"
import { Seekbar } from "./Seekbar"
import { VolumeControl } from "./VolumeControl"

export interface ControlsProps {
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isMuted: boolean
  playbackRate: PlaybackRate
  isFullscreen: boolean
  markerTime?: number
  blockSeekPastMarker: boolean
  containerRef: React.RefObject<HTMLElement | null>
  onTogglePlay: () => void
  onToggleMute: () => void
  onVolumeChange: (value: number) => void
  onPlaybackRateChange: (rate: PlaybackRate) => void
  onToggleFullscreen: () => void
  onSeek: (time: number) => void
}

/** Bottom control bar. Pure presentation; every interaction is delegated up. */
export function Controls({
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  playbackRate,
  isFullscreen,
  markerTime,
  blockSeekPastMarker,
  containerRef,
  onTogglePlay,
  onToggleMute,
  onVolumeChange,
  onPlaybackRateChange,
  onToggleFullscreen,
  onSeek,
}: ControlsProps) {
  const { t } = useI18n()

  return (
    <div
      className={cn(
        // `dark` scopes the on-video controls to white; the playback-speed menu
        // portals to the player root (outside this scope) so it follows the
        // app's real theme — light by default, dark when the app is in dark mode.
        "dark absolute inset-x-0 bottom-0 z-[2] flex select-none items-center gap-2",
        // Plain dark gradient scrim (like the original trainings player). f0's
        // Tailwind palette has no `black`, so the stops use arbitrary hex+alpha.
        // `rounded-b-[inherit]` keeps the bottom corners on the player's radius.
        "rounded-b-[inherit] bg-gradient-to-t from-[#000000f2] via-[#000000b3] to-transparent px-3 py-3",
        // Shadow so the white controls stay legible over light *and* dark frames.
        "[text-shadow:0_1px_2px_rgba(0,0,0,0.55)] [&_svg]:drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]",
        "opacity-0 transition-opacity duration-200 motion-reduce:transition-none",
        "group-hover:opacity-100 group-focus-within:opacity-100"
      )}
    >
      <F0Button
        variant="ghost"
        size="sm"
        hideLabel
        icon={isPlaying ? SolidPause : SolidPlay}
        label={isPlaying ? t("videoPlayer.pause") : t("videoPlayer.play")}
        onClick={onTogglePlay}
      />

      <Seekbar
        currentTime={currentTime}
        duration={duration}
        markerTime={markerTime}
        blockSeekPastMarker={blockSeekPastMarker}
        onSeek={onSeek}
      />

      <span className="min-w-[80px] whitespace-nowrap text-center text-base font-medium tabular-nums text-f1-foreground">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>

      <VolumeControl
        volume={volume}
        isMuted={isMuted}
        onToggleMute={onToggleMute}
        onVolumeChange={onVolumeChange}
      />

      <PlaybackRateMenu
        value={playbackRate}
        onChange={onPlaybackRateChange}
        containerRef={containerRef}
      />

      <F0Button
        variant="ghost"
        size="sm"
        hideLabel
        icon={isFullscreen ? Minimize : Maximize}
        label={
          isFullscreen
            ? t("videoPlayer.exitFullscreen")
            : t("videoPlayer.enterFullscreen")
        }
        onClick={onToggleFullscreen}
      />
    </div>
  )
}
