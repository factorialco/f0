import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const BAR_WIDTH = 2 // px
const BAR_GAP = 2 // px
/** How often a new amplitude sample is appended to the timeline. */
const SAMPLE_MS = 70
/** Resting height fraction so silent moments render as small dots. */
const MIN_SCALE = 0.08
/** Gain applied to RMS so normal speech uses a good chunk of the height. */
const LEVEL_GAIN = 6
/**
 * Perceptual curve (<1) applied after the gain: lifts quiet/medium speech
 * toward the top so you don't have to shout for tall bars, while loud peaks
 * still clamp at the max. 1 would be the old linear response.
 */
const LEVEL_CURVE = 0.6

type WindowWithWebkitAudio = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext
  }

const getAudioContextCtor = (): typeof AudioContext | undefined => {
  if (typeof window === "undefined") return undefined
  const w = window as WindowWithWebkitAudio
  return w.AudioContext ?? w.webkitAudioContext
}

type RecordingWaveformProps = {
  /** Live mic stream. Drives the timeline via a Web Audio analyser. */
  stream: MediaStream | null
  className?: string
  /**
   * Which edge the newest sample sits at, so the timeline grows away from the
   * recording controls: "right" in the chat textarea (controls on the right),
   * "left" in the rich text editor footer (controls on the left).
   */
  anchor?: "left" | "right"
}

/**
 * Scrolling amplitude timeline (à la Claude/voice memos): every `SAMPLE_MS` a
 * new bar is appended whose height is the current mic loudness. Bars are
 * anchored to one edge (`anchor`), so the newest sample sits at that edge and
 * the line builds up away from it as seconds pass, scrolling once it fills
 * the width. Degrades to an empty track where Web Audio is missing
 * (SSR / tests).
 */
export const RecordingWaveform = ({
  stream,
  className,
  anchor = "right",
}: RecordingWaveformProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [capacity, setCapacity] = useState(0)
  const [levels, setLevels] = useState<number[]>([])

  // Capacity = how many bars fit the current width (timeline scrolls past it).
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = () => {
      const width = el.clientWidth
      setCapacity(
        Math.max(1, Math.floor((width + BAR_GAP) / (BAR_WIDTH + BAR_GAP)))
      )
    }
    measure()
    if (typeof ResizeObserver === "undefined") return
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const AudioCtx = getAudioContextCtor()
    if (!stream || !AudioCtx || capacity === 0) {
      setLevels([])
      return
    }

    const ctx = new AudioCtx()
    const source = ctx.createMediaStreamSource(stream)
    const analyser = ctx.createAnalyser()
    analyser.fftSize = 1024
    source.connect(analyser)
    const data = new Uint8Array(analyser.fftSize)

    const id = setInterval(() => {
      analyser.getByteTimeDomainData(data)
      let sum = 0
      for (let i = 0; i < data.length; i++) {
        const deviation = (data[i] - 128) / 128
        sum += deviation * deviation
      }
      const rms = Math.sqrt(sum / data.length)
      const level = Math.min(1, Math.pow(rms * LEVEL_GAIN, LEVEL_CURVE))
      setLevels((prev) => {
        const next =
          prev.length >= capacity
            ? prev.slice(prev.length - capacity + 1)
            : prev.slice()
        next.push(level)
        return next
      })
    }, SAMPLE_MS)

    return () => {
      clearInterval(id)
      source.disconnect()
      analyser.disconnect()
      void ctx.close()
      setLevels([])
    }
  }, [stream, capacity])

  // Levels are stored oldest→newest; flip them for a left anchor so the
  // newest bar renders at the left edge and history flows right.
  const bars = anchor === "left" ? [...levels].reverse() : levels

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex h-6 items-center overflow-hidden gap-0.5",
        anchor === "left" ? "justify-start" : "justify-end",
        className
      )}
      aria-hidden="true"
    >
      {bars.map((level, i) => (
        <span
          key={i}
          className="shrink-0 rounded-full bg-f1-foreground-secondary w-0.5"
          style={{ height: `${(MIN_SCALE + level * (1 - MIN_SCALE)) * 100}%` }}
        />
      ))}
    </div>
  )
}
