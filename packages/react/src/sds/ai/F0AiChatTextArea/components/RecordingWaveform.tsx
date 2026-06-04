import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const BAR_WIDTH = 2 // px
const BAR_GAP = 3 // px
/** How often a new amplitude sample is appended to the timeline. */
const SAMPLE_MS = 70
/** Resting height fraction so silent moments render as small dots. */
const MIN_SCALE = 0.08
/** Gain applied to RMS so normal speech uses a good chunk of the height. */
const LEVEL_GAIN = 3

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
}

/**
 * Scrolling amplitude timeline (à la Claude/voice memos): every `SAMPLE_MS` a
 * new bar is appended whose height is the current mic loudness. Bars are
 * right-anchored, so the newest sample sits at the right edge and the line
 * builds up right→left as seconds pass, scrolling once it fills the width.
 * Degrades to an empty track where Web Audio is missing (SSR / tests).
 */
export const RecordingWaveform = ({
  stream,
  className,
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
      const level = Math.min(1, rms * LEVEL_GAIN)
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

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex h-6 items-center justify-end overflow-hidden",
        className
      )}
      style={{ gap: `${BAR_GAP}px` }}
      aria-hidden="true"
    >
      {levels.map((level, i) => (
        <span
          key={i}
          className="shrink-0 rounded-full bg-f1-foreground-secondary"
          style={{
            width: `${BAR_WIDTH}px`,
            height: `${(MIN_SCALE + level * (1 - MIN_SCALE)) * 100}%`,
          }}
        />
      ))}
    </div>
  )
}
