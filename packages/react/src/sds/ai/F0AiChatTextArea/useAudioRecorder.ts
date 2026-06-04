import { useCallback, useEffect, useRef, useState } from "react"

import { type TranscribeFn } from "../F0AiChat/types"

export type RecorderStatus = "idle" | "recording" | "transcribing"

export type RecorderError =
  | "permission-denied"
  | "device-error"
  | "transcription-failed"

/** Browser chunk interval — small enough to allow future request streaming. */
const TIMESLICE_MS = 250
/** Hard cap so a forgotten recording can't balloon cost/payload. */
const DEFAULT_MAX_DURATION_MS = 120_000

type UseAudioRecorderParams = {
  onTranscribe: TranscribeFn | undefined
  /** Cumulative partial transcript — drives live textarea fill. */
  onPartial: (text: string) => void
  /** Final transcript once transcription resolves. */
  onFinal: (text: string) => void
  onError: (error: RecorderError) => void
  maxDurationMs?: number
}

const checkSupport = (): boolean =>
  typeof navigator !== "undefined" &&
  !!navigator.mediaDevices?.getUserMedia &&
  typeof MediaRecorder !== "undefined"

/**
 * Records microphone audio and pipes it through a transcription function.
 * The recorder owns mic permission, the MediaRecorder lifecycle, a duration
 * timer and a max-duration auto-stop; transcription streaming is delegated to
 * `onTranscribe` (which reports partials via `onPartial`).
 */
export function useAudioRecorder({
  onTranscribe,
  onPartial,
  onFinal,
  onError,
  maxDurationMs = DEFAULT_MAX_DURATION_MS,
}: UseAudioRecorderParams) {
  const [status, setStatus] = useState<RecorderStatus>("idle")
  const [durationMs, setDurationMs] = useState(0)
  const [isSupported] = useState(checkSupport)
  // Live mic stream while recording — consumed by the waveform visualizer.
  const [stream, setStream] = useState<MediaStream | null>(null)

  const recorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const abortRef = useRef<AbortController | null>(null)
  const canceledRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const maxTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const startedAtRef = useRef(0)

  // Keep the latest callbacks in refs so the MediaRecorder.onstop closure
  // (captured at start time) always calls the current ones.
  const cbRef = useRef({ onTranscribe, onPartial, onFinal, onError })
  cbRef.current = { onTranscribe, onPartial, onFinal, onError }

  const releaseDevice = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop())
    streamRef.current = null
    recorderRef.current = null
    setStream(null)
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    if (maxTimeoutRef.current) {
      clearTimeout(maxTimeoutRef.current)
      maxTimeoutRef.current = null
    }
  }, [])

  const transcribe = useCallback(async () => {
    const { onTranscribe, onPartial, onFinal, onError } = cbRef.current
    const chunks = chunksRef.current
    chunksRef.current = []

    if (chunks.length === 0 || !onTranscribe) {
      setStatus("idle")
      setDurationMs(0)
      return
    }

    const blob = new Blob(chunks, { type: chunks[0]?.type || "audio/webm" })
    const controller = new AbortController()
    abortRef.current = controller
    setStatus("transcribing")

    try {
      const finalText = await onTranscribe(blob, {
        onPartial,
        signal: controller.signal,
      })
      if (!controller.signal.aborted) onFinal(finalText)
    } catch {
      if (!controller.signal.aborted) onError("transcription-failed")
    } finally {
      abortRef.current = null
      setStatus("idle")
      setDurationMs(0)
    }
  }, [])

  const stop = useCallback(() => {
    const recorder = recorderRef.current
    if (recorder && recorder.state !== "inactive") recorder.stop()
  }, [])

  const start = useCallback(async () => {
    if (status !== "idle" || !onTranscribe || !isSupported) return
    canceledRef.current = false
    chunksRef.current = []

    let stream: MediaStream
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch (err) {
      onError(
        err instanceof DOMException && err.name === "NotAllowedError"
          ? "permission-denied"
          : "device-error"
      )
      return
    }

    streamRef.current = stream
    setStream(stream)
    const recorder = new MediaRecorder(stream)
    recorderRef.current = recorder

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data)
    }
    recorder.onstop = () => {
      releaseDevice()
      if (canceledRef.current) {
        chunksRef.current = []
        setStatus("idle")
        setDurationMs(0)
        return
      }
      void transcribe()
    }

    recorder.start(TIMESLICE_MS)
    startedAtRef.current = Date.now()
    setStatus("recording")
    setDurationMs(0)
    timerRef.current = setInterval(() => {
      setDurationMs(Date.now() - startedAtRef.current)
    }, 200)
    maxTimeoutRef.current = setTimeout(stop, maxDurationMs)
  }, [
    status,
    onTranscribe,
    isSupported,
    onError,
    releaseDevice,
    transcribe,
    stop,
    maxDurationMs,
  ])

  const cancel = useCallback(() => {
    if (status === "recording") {
      canceledRef.current = true
      stop()
    } else if (status === "transcribing") {
      abortRef.current?.abort()
      abortRef.current = null
      setStatus("idle")
      setDurationMs(0)
    }
  }, [status, stop])

  useEffect(
    () => () => {
      canceledRef.current = true
      abortRef.current?.abort()
      const recorder = recorderRef.current
      if (recorder && recorder.state !== "inactive") recorder.stop()
      releaseDevice()
    },
    [releaseDevice]
  )

  return { status, durationMs, isSupported, stream, start, stop, cancel }
}
