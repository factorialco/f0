import { F0Button } from "@/components/F0Button"
import {
  Download,
  Maximize,
  Minimize,
  SolidPause,
  SolidPlay,
} from "@/icons/app"
import { type LanguageOption } from "@/lib/localized"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { PlaybackRate, formatTime } from "../utils"
import {
  AudioDescriptionFilledIcon,
  AudioDescriptionLineIcon,
} from "./AudioDescriptionToggleIcons"
import { CaptionsFilledIcon, CaptionsLineIcon } from "./CaptionsToggleIcons"
import { PlaybackRateMenu } from "./PlaybackRateMenu"
import { hasSettingsMenu, SettingsMenu } from "./SettingsMenu"
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
  /** Whether captions can be shown (passed or embedded in the file). */
  captionsAvailable: boolean
  /** Whether captions are currently displayed. */
  captionsOn: boolean
  /** Whether audio description is offered (described source or descriptions track). */
  audioDescriptionAvailable: boolean
  /** Whether audio description is currently on. */
  audioDescriptionOn: boolean
  /** The video has no audio (declared `silent`) — show a muted, disabled volume cue. */
  silent: boolean
  /** Keep the controls visible during playback instead of auto-hiding them. */
  persist: boolean
  /**
   * Language dimensions. Each is offered as an on/off toggle in the bar when it
   * has a single language, or moved into the settings gear (with the others)
   * when it has several. The audio track has no on/off — only a language.
   */
  audioLanguages: LanguageOption[]
  audioLanguage: string | undefined
  onAudioLanguageChange: (locale: string) => void
  captionLanguages: LanguageOption[]
  captionLanguage: string | undefined
  /** Select a caption language (also turns captions on) — used by the gear. */
  onCaptionLanguageChange: (locale: string) => void
  /** Turn captions off — used by the gear's "Off" row. */
  onCaptionsOff: () => void
  audioDescriptionLanguages: LanguageOption[]
  audioDescriptionLanguage: string | undefined
  /** Select an audio-description language (also turns it on) — used by the gear. */
  onAudioDescriptionLanguageChange: (locale: string) => void
  /** Turn audio description off — used by the gear's "Off" row. */
  onAudioDescriptionOff: () => void
  onTogglePlay: () => void
  onToggleMute: () => void
  onVolumeChange: (value: number) => void
  onPlaybackRateChange: (rate: PlaybackRate) => void
  onToggleFullscreen: () => void
  /** Toggle captions on/off — used by the bar toggle (single-language case). */
  onToggleCaptions: () => void
  /** Toggle audio description on/off — used by the bar toggle (single-language case). */
  onToggleAudioDescription: () => void
  onSeek: (time: number) => void
  download?: {
    label: string
    onClick: () => void
  }
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
  captionsAvailable,
  captionsOn,
  audioDescriptionAvailable,
  audioDescriptionOn,
  silent,
  persist,
  audioLanguages,
  audioLanguage,
  onAudioLanguageChange,
  captionLanguages,
  captionLanguage,
  onCaptionLanguageChange,
  onCaptionsOff,
  audioDescriptionLanguages,
  audioDescriptionLanguage,
  onAudioDescriptionLanguageChange,
  onAudioDescriptionOff,
  onTogglePlay,
  onToggleMute,
  onVolumeChange,
  onPlaybackRateChange,
  onToggleFullscreen,
  onToggleCaptions,
  onToggleAudioDescription,
  onSeek,
  download,
}: ControlsProps) {
  const { t } = useI18n()

  // A single-language feature keeps its own on/off toggle in the bar; once it's
  // offered in several languages the toggle moves into the settings gear (where
  // picking a language turns it on and an "Off" row turns it off), so the bar
  // isn't cluttered with a toggle *and* a language picker for the same feature.
  const captionsInBar = captionsAvailable && captionLanguages.length <= 1
  const audioDescriptionInBar =
    audioDescriptionAvailable && audioDescriptionLanguages.length <= 1
  const showSettings = hasSettingsMenu({
    audioLanguages: audioLanguages.length,
    captionLanguages: captionLanguages.length,
    audioDescriptionLanguages: audioDescriptionLanguages.length,
  })

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
        "transition-opacity duration-200 motion-reduce:transition-none",
        // Always visible while paused (a paused video should look controllable,
        // not like a still image) or when `persist` is set; otherwise they
        // auto-hide during playback and reveal on hover or keyboard focus.
        !isPlaying || persist
          ? "opacity-100"
          : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
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
        silent={silent}
      />

      <PlaybackRateMenu
        value={playbackRate}
        onChange={onPlaybackRateChange}
        containerRef={containerRef}
      />

      {captionsInBar && (
        // Filled glyph when captions are on, line glyph when off; `aria-pressed`
        // conveys the state to assistive tech (the label stays stable).
        <F0Button
          variant="ghost"
          size="sm"
          hideLabel
          icon={captionsOn ? CaptionsFilledIcon : CaptionsLineIcon}
          label={t("videoPlayer.captions")}
          aria-pressed={captionsOn}
          onClick={onToggleCaptions}
        />
      )}

      {audioDescriptionInBar && (
        // Filled "AD" badge when on, line badge when off — the same on/off
        // language as captions, legible over video. `hideLabel` gives the
        // captions-style tooltip from the label; `aria-pressed` conveys state.
        <F0Button
          variant="ghost"
          size="sm"
          hideLabel
          icon={
            audioDescriptionOn
              ? AudioDescriptionFilledIcon
              : AudioDescriptionLineIcon
          }
          label={t("videoPlayer.audioDescription")}
          aria-pressed={audioDescriptionOn}
          onClick={onToggleAudioDescription}
        />
      )}

      {showSettings && (
        <SettingsMenu
          containerRef={containerRef}
          audioLanguages={audioLanguages}
          audioLanguage={audioLanguage}
          onAudioLanguageChange={onAudioLanguageChange}
          captionLanguages={captionLanguages}
          captionLanguage={captionLanguage}
          captionsOn={captionsOn}
          onCaptionLanguageChange={onCaptionLanguageChange}
          onCaptionsOff={onCaptionsOff}
          audioDescriptionLanguages={audioDescriptionLanguages}
          audioDescriptionLanguage={audioDescriptionLanguage}
          audioDescriptionOn={audioDescriptionOn}
          onAudioDescriptionLanguageChange={onAudioDescriptionLanguageChange}
          onAudioDescriptionOff={onAudioDescriptionOff}
        />
      )}

      {download && (
        <F0Button
          variant="ghost"
          size="sm"
          hideLabel
          icon={Download}
          label={download.label}
          onClick={download.onClick}
        />
      )}

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
