import { type ReactNode, useCallback, useEffect, useRef, useState } from "react"

import { useAudioPlayer } from "@/components/F0AudioPlayer"
import { ButtonInternal } from "@/components/F0Button/internal"
import { SolidPause, SolidPlay } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { useChatSurface } from "../providers/ChatSurfaceProvider"
import {
  useF0ChatEmit,
  useF0ChatVoicePlayLog,
} from "../providers/F0ChatProvider"
import { type F0ChatVoiceAttachment } from "../types"
import { CHAT_MEDIA_WIDTH_CLASS } from "../utils/media-layout"

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

const waveformCache = new Map<string, number[]>()
const waveformRequests = new Map<string, Promise<number[]>>()
let waveformDecodeTail: Promise<void> = Promise.resolve()

const enqueueWaveformDecode = <Result,>(
  decode: () => Promise<Result>
): Promise<Result> => {
  const result = waveformDecodeTail.then(decode, decode)
  waveformDecodeTail = result.then(
    () => undefined,
    () => undefined
  )
  return result
}

const loadVoiceWaveform = (url: string): Promise<number[]> => {
  const cached = waveformCache.get(url)
  if (cached) return Promise.resolve(cached)

  const pending = waveformRequests.get(url)
  if (pending) return pending

  const AudioCtx =
    typeof window !== "undefined"
      ? (window.AudioContext ??
        (window as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext)
      : undefined
  if (!AudioCtx) return Promise.resolve(FALLBACK_LEVELS)

  const request = (async () => {
    const response = await fetch(url)
    const buffer = await response.arrayBuffer()
    return enqueueWaveformDecode(async () => {
      const ctx = new AudioCtx()
      try {
        const audio = await ctx.decodeAudioData(buffer)
        const data = audio.getChannelData(0)
        const bucket = Math.max(1, Math.floor(data.length / BAR_COUNT))
        const raw: number[] = []

        for (let i = 0; i < BAR_COUNT; i++) {
          let sum = 0
          let samples = 0
          const start = i * bucket
          // A visual waveform does not need every PCM sample. Bounding the
          // work prevents long voice notes from monopolizing the main thread.
          const stride = Math.max(1, Math.floor(bucket / 256))
          for (
            let j = start;
            j < start + bucket && j < data.length;
            j += stride
          ) {
            sum += data[j] * data[j]
            samples += 1
          }
          raw.push(Math.sqrt(sum / Math.max(samples, 1)))
        }

        const max = Math.max(...raw, 0.001)
        return raw.map((value) => Math.max(MIN_LEVEL, value / max))
      } finally {
        void ctx.close()
      }
    })
  })()
    .then((levels) => {
      waveformCache.set(url, levels)
      return levels
    })
    .catch(() => FALLBACK_LEVELS)
    .finally(() => waveformRequests.delete(url))

  waveformRequests.set(url, request)
  return request
}

/**
 * Decode the audio and reduce it to per-bar RMS levels, normalized to [0, 1] —
 * the WhatsApp-style static waveform. Falls back to a neutral shape when the
 * fetch/decoding fails (CORS, unsupported codec, jsdom).
 */
const useVoiceWaveform = (url: string): number[] => {
  const [levels, setLevels] = useState<number[]>(
    () => waveformCache.get(url) ?? FALLBACK_LEVELS
  )

  useEffect(() => {
    const cached = waveformCache.get(url)
    if (cached) {
      setLevels(cached)
      return
    }

    let cancelled = false
    void loadVoiceWaveform(url).then((nextLevels) => {
      if (!cancelled) setLevels(nextLevels)
    })
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
const ChatVoiceAttachmentContent = ({
  voice,
  isMine = false,
  cornerClass = "rounded-xl",
  className,
  surfaceClassName,
}: {
  voice: F0ChatVoiceAttachment
  /** Picks the bubble-matching background (mine → tertiary, others → base). */
  isMine?: boolean
  /** Chained-corner classes mirroring the bubble (see `bubbleCornerClass`). */
  cornerClass?: string
  className?: string
  /** Sender-aware surface supplied by a transcript message. */
  surfaceClassName?: string
}): ReactNode => {
  const i18n = useI18n()
  const audioRef = useRef<HTMLAudioElement>(null)
  const player = useAudioPlayer(audioRef)
  const levels = useVoiceWaveform(voice.url)
  const [rateIndex, setRateIndex] = useState(0)
  const barsRef = useRef<HTMLDivElement>(null)
  const emit = useF0ChatEmit()
  const surface = useChatSurface()
  const voicePlayLog = useF0ChatVoicePlayLog()

  const duration =
    player.duration > 0 ? player.duration : (voice.durationSeconds ?? 0)
  const progress = duration > 0 ? Math.min(1, player.currentTime / duration) : 0

  const handleToggle = useCallback(() => {
    if (player.isPlaying) {
      player.pause()
      return
    }
    // Once per note, not once per mount: Virtuoso unmounts offscreen rows, so
    // a component-local flag would re-report the same note on every scroll back.
    // Resuming after a pause is the same listen. Draft notes are not consumption.
    if (surface === "transcript" && !voicePlayLog.hasReported(voice.url)) {
      voicePlayLog.markReported(voice.url)
      emit.onVoiceNotePlayed({ durationSeconds: voice.durationSeconds })
    }
    if (duration > 0 && player.currentTime >= duration) player.seek(0)
    player.play()
  }, [
    player,
    duration,
    emit,
    surface,
    voicePlayLog,
    voice.url,
    voice.durationSeconds,
  ])

  const handleCycleRate = useCallback(() => {
    const next = (rateIndex + 1) % PLAYBACK_RATES.length
    setRateIndex(next)
    player.setPlaybackRate(PLAYBACK_RATES[next])
    if (surface === "transcript") {
      emit.onVoicePlaybackRateChanged({ rate: PLAYBACK_RATES[next] })
    }
  }, [player, rateIndex, emit, surface])

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

  const handleSeekKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (duration <= 0) return
      const step = Math.max(1, duration / BAR_COUNT)
      let nextTime: number

      switch (event.key) {
        case "ArrowLeft":
        case "ArrowDown":
          nextTime = player.currentTime - step
          break
        case "ArrowRight":
        case "ArrowUp":
          nextTime = player.currentTime + step
          break
        case "Home":
          nextTime = 0
          break
        case "End":
          nextTime = duration
          break
        default:
          return
      }

      event.preventDefault()
      player.seek(Math.min(duration, Math.max(0, nextTime)))
    },
    [duration, player]
  )

  return (
    <div
      className={cn(
        // The shared media width, not `w-full`: a waveform reads better wide
        // and shouldn't look like a stray chip next to an album, but sizing it
        // off the column made the column stretch. The fixed height is also used
        // by the deferred placeholder.
        "group/voice flex h-[58px] min-w-0 items-center gap-2 border border-solid border-f1-border-secondary p-3",
        CHAT_MEDIA_WIDTH_CLASS,
        // Carries the message's own bubble colour, so a voice note reads as
        // part of the conversation rather than a neutral attachment.
        isMine ? "bg-f1-background-tertiary" : "bg-f1-background",
        cornerClass,
        className,
        surfaceClassName
      )}
      data-testid="chat-voice-attachment"
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption -- voice note */}
      <audio ref={audioRef} src={voice.url} preload="metadata" />

      <div className="shrink-0" data-testid="chat-voice-toggle">
        <ButtonInternal
          variant="outline"
          size="md"
          hideLabel
          label={
            player.isPlaying ? i18n.audioPlayer.pause : i18n.audioPlayer.play
          }
          icon={player.isPlaying ? SolidPause : SolidPlay}
          onClick={handleToggle}
        />
      </div>

      <div
        ref={barsRef}
        onClick={handleSeek}
        onKeyDown={handleSeekKeyDown}
        // justify-between spreads the fixed set of bars across whatever width
        // the card gets, so the waveform stays proportioned at any size.
        className={cn(
          "flex h-8 min-w-0 flex-1 cursor-pointer items-center justify-between gap-0.5 overflow-hidden rounded-sm",
          focusRing("focus-visible:ring-inset")
        )}
        role="slider"
        tabIndex={0}
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
              "w-0.5 min-w-px shrink rounded-full transition-colors",
              // Played part reads darker, WhatsApp-style.
              i / levels.length <= progress && progress > 0
                ? "bg-f1-foreground"
                : "bg-f1-foreground-tertiary"
            )}
            style={{ height: `${Math.round(level * 100)}%` }}
          />
        ))}
      </div>

      {/* The duration and the speed pill share the trailing slot: hovering the
          card (or tabbing into it) swaps the time for the speed control. Both
          have the same FIXED width so neither the ticking time ("0:04" → "0:12")
          nor the cycling rate ("1x" → "1.5x") resizes the waveform. */}
      <div className="relative w-12 shrink-0" data-testid="chat-voice-trailing">
        <span
          className="inline-block w-full pr-2 text-end text-base font-medium tabular-nums text-f1-foreground-secondary group-focus-within/voice:invisible group-hover/voice:invisible"
          data-testid="chat-voice-time"
        >
          {formatTime(
            player.isPlaying || player.currentTime > 0
              ? player.currentTime
              : duration
          )}
        </span>

        <div className="pointer-events-none absolute inset-0 flex justify-end opacity-0 transition-opacity group-focus-within/voice:pointer-events-auto group-focus-within/voice:opacity-100 group-hover/voice:pointer-events-auto group-hover/voice:opacity-100 motion-reduce:transition-none">
          <ButtonInternal
            variant="ghost"
            size="sm"
            label={`${PLAYBACK_RATES[rateIndex]}x`}
            aria-label={`${i18n.audioPlayer.playbackSpeed}: ${PLAYBACK_RATES[rateIndex]}x`}
            onClick={handleCycleRate}
            data-testid="chat-voice-rate"
          />
        </div>
      </div>
    </div>
  )
}

export const ChatVoiceAttachment = ({
  voice,
  isMine = false,
  cornerClass = "rounded-xl",
  className,
  surfaceClassName,
}: {
  voice: F0ChatVoiceAttachment
  isMine?: boolean
  cornerClass?: string
  className?: string
  /** Sender-aware surface supplied by a transcript message. */
  surfaceClassName?: string
}): ReactNode => {
  // Mounts with its row. The card has no chunk to fetch — the waveform decode
  // it used to wait for is already serialized globally and cached per URL — so
  // deferring it only ever showed a grey bar where the player was about to be.
  // The card's own h-[58px] is what reserves the row now.
  return (
    <div
      data-testid="chat-voice-attachment-shell"
      className={cn("flex w-full flex-col gap-1 bg-f1-background", cornerClass)}
    >
      <ChatVoiceAttachmentContent
        voice={voice}
        isMine={isMine}
        cornerClass={cornerClass}
        className={className}
        surfaceClassName={surfaceClassName}
      />
    </div>
  )
}
