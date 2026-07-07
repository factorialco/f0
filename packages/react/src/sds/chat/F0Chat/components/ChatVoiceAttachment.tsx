import { type ReactNode, useCallback, useEffect, useRef, useState } from "react"

import { useAudioPlayer } from "@/components/F0AudioPlayer"
import { ButtonInternal } from "@/components/F0Button/internal"
import { PauseCircle, SolidPlay } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type F0ChatVoiceAttachment } from "../types"

/** Speed cycle for the pill: tap to advance, wraps around. */
const PLAYBACK_RATES = [1, 1.5, 2, 0.5]
/** Number of waveform bars (WhatsApp-style static shape of the audio). */
const BAR_COUNT = 32
/** Silence still renders as a small dot, not a gap. */
const MIN_LEVEL = 0.12

const formatTime = (seconds: number): string => {
  const whole = Math.max(0, Math.floor(seconds))
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`
}

/** Even fallback shape while the audio decodes (or when decoding isn't possible). */
const FALLBACK_LEVELS = Array.from(
  { length: BAR_COUNT },
  (_, i) => 0.3 + 0.25 * Math.abs(Math.sin(i / 2.4))
)

/**
 * Decode the audio and reduce it to per-bar RMS levels, normalized to [0, 1] —
 * the WhatsApp-style static waveform. Falls back to a neutral shape when the
 * fetch/decoding fails (CORS, unsupported codec, jsdom).
 */
const useVoiceWaveform = (url: string): number[] => {
  const [levels, setLevels] = useState<number[]>(FALLBACK_LEVELS)

  useEffect(() => {
    const AudioCtx =
      typeof window !== "undefined"
        ? (window.AudioContext ??
          (window as { webkitAudioContext?: typeof AudioContext })
            .webkitAudioContext)
        : undefined
    if (!AudioCtx) return

    let cancelled = false
    void (async () => {
      try {
        const response = await fetch(url)
        const buffer = await response.arrayBuffer()
        const ctx = new AudioCtx()
        const audio = await ctx.decodeAudioData(buffer)
        void ctx.close()

        const data = audio.getChannelData(0)
        const bucket = Math.max(1, Math.floor(data.length / BAR_COUNT))
        const raw: number[] = []
        for (let i = 0; i < BAR_COUNT; i++) {
          let sum = 0
          const start = i * bucket
          for (let j = start; j < start + bucket && j < data.length; j++) {
            sum += data[j] * data[j]
          }
          raw.push(Math.sqrt(sum / bucket))
        }
        const max = Math.max(...raw, 0.001)
        if (!cancelled) {
          setLevels(raw.map((v) => Math.max(MIN_LEVEL, v / max)))
        }
      } catch {
        // Keep the fallback shape.
      }
    })()
    return () => {
      cancelled = true
    }
  }, [url])

  return levels
}

/**
 * A voice note (WhatsApp-style): play/pause, the audio's static waveform as
 * vertical bars (click to seek; the played part reads darker), the time and a
 * speed pill cycling 1× → 1.5× → 2× → 0.5×. Styled like the bubble (own
 * messages on the tertiary background, others on the base background with a
 * border) and follows the bubble's chained corners. Kept as its own component
 * so other surfaces can reuse the same voice-note rendering.
 */
export const ChatVoiceAttachment = ({
  voice,
  isMine = false,
  cornerClass = "rounded-xl",
  className,
}: {
  voice: F0ChatVoiceAttachment
  /** Picks the bubble-matching background (mine → tertiary, others → base). */
  isMine?: boolean
  /** Chained-corner classes mirroring the bubble (see `bubbleCornerClass`). */
  cornerClass?: string
  className?: string
}): ReactNode => {
  const i18n = useI18n()
  const audioRef = useRef<HTMLAudioElement>(null)
  const player = useAudioPlayer(audioRef)
  const levels = useVoiceWaveform(voice.url)
  const [rateIndex, setRateIndex] = useState(0)
  const barsRef = useRef<HTMLDivElement>(null)

  const duration =
    player.duration > 0 ? player.duration : (voice.durationSeconds ?? 0)
  const progress = duration > 0 ? Math.min(1, player.currentTime / duration) : 0

  const handleToggle = useCallback(() => {
    if (player.isPlaying) {
      player.pause()
      return
    }
    if (duration > 0 && player.currentTime >= duration) player.seek(0)
    player.play()
  }, [player, duration])

  const handleCycleRate = useCallback(() => {
    const next = (rateIndex + 1) % PLAYBACK_RATES.length
    setRateIndex(next)
    player.setPlaybackRate(PLAYBACK_RATES[next])
  }, [player, rateIndex])

  // Click anywhere on the waveform to seek to that point.
  const handleSeek = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const bars = barsRef.current
      if (!bars || duration <= 0) return
      const rect = bars.getBoundingClientRect()
      const fraction = Math.min(
        1,
        Math.max(0, (event.clientX - rect.left) / rect.width)
      )
      player.seek(fraction * duration)
    },
    [player, duration]
  )

  return (
    <div
      className={cn(
        "flex min-w-54 max-w-full items-center gap-2 border border-solid px-3.5 py-2.5",
        // Bubble-matching surface: mine grey, others white with the border.
        isMine
          ? "border-f1-background bg-f1-background-tertiary"
          : "border-f1-border-secondary bg-f1-background",
        cornerClass,
        className
      )}
      data-testid="chat-voice-attachment"
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption -- voice note */}
      <audio ref={audioRef} src={voice.url} preload="metadata" />

      <div className="shrink-0" data-testid="chat-voice-toggle">
        <ButtonInternal
          variant="outline"
          size="sm"
          hideLabel
          label={
            player.isPlaying ? i18n.audioPlayer.pause : i18n.audioPlayer.play
          }
          icon={player.isPlaying ? PauseCircle : SolidPlay}
          onClick={handleToggle}
        />
      </div>

      <div
        ref={barsRef}
        onClick={handleSeek}
        className="flex h-6 min-w-0 flex-1 cursor-pointer items-center gap-[2px]"
        role="slider"
        aria-label={i18n.audioPlayer.seek}
        aria-valuemin={0}
        aria-valuemax={Math.round(duration)}
        aria-valuenow={Math.round(player.currentTime)}
        data-testid="chat-voice-waveform"
      >
        {levels.map((level, i) => (
          <span
            key={i}
            className={cn(
              "w-0.5 min-w-0.5 shrink rounded-full transition-colors",
              // Played part reads darker, WhatsApp-style.
              i / levels.length <= progress && progress > 0
                ? "bg-f1-foreground"
                : "bg-f1-foreground-tertiary"
            )}
            style={{ height: `${Math.round(level * 100)}%` }}
          />
        ))}
      </div>

      <span className="shrink-0 text-sm tabular-nums text-f1-foreground-secondary">
        {formatTime(
          player.isPlaying || player.currentTime > 0
            ? player.currentTime
            : duration
        )}
      </span>

      <button
        type="button"
        onClick={handleCycleRate}
        aria-label={i18n.audioPlayer.playbackSpeed}
        className="shrink-0 rounded-full bg-f1-background-secondary px-2 py-0.5 text-sm font-medium text-f1-foreground-secondary transition-colors hover:bg-f1-background-hover"
        data-testid="chat-voice-rate"
      >
        {`${PLAYBACK_RATES[rateIndex]}x`}
      </button>
    </div>
  )
}
