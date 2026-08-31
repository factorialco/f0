import { useCallback, useEffect, useRef, useState } from "react"

const FALLBACK_REVEAL_MS = 1_000

/** How long the reveal waits for the webfont swap before giving up on it. */
const FONTS_SETTLE_CAP_MS = 300

// Webfont settling, shared per document (fonts load once): the Inter swap
// rewraps every measured row, so the first reveal shouldn't happen mid-swap.
// Settles for good on document.fonts.ready or after the cap — later font
// loads (e.g. lazy-loaded previews) never re-gate the reveal.
let fontsSettled: boolean | null = null
const fontsSettledListeners = new Set<() => void>()

const areFontsSettled = (): boolean => {
  if (fontsSettled !== null) return fontsSettled
  // jsdom has no document.fonts — treat it as settled.
  const fonts: FontFaceSet | undefined =
    typeof document !== "undefined" ? document.fonts : undefined
  if (!fonts?.ready || fonts.status === "loaded") {
    fontsSettled = true
    return true
  }
  fontsSettled = false
  const settle = () => {
    if (fontsSettled) return
    fontsSettled = true
    const listeners = [...fontsSettledListeners]
    fontsSettledListeners.clear()
    listeners.forEach((listener) => listener())
  }
  void fonts.ready.then(settle)
  window.setTimeout(settle, FONTS_SETTLE_CAP_MS)
  return false
}

/**
 * Reveals the transcript only after Virtuoso has finished its provisional
 * entry window and the viewport has held the same size for two paint frames.
 */
export const useTranscriptReadiness = (
  resetKey: string | number
): {
  ready: boolean
  setViewport: (element: HTMLElement | null) => void
  setListVisible: (visible: boolean) => void
} => {
  const [readyKey, setReadyKey] = useState<string | number | null>(null)
  const keyRef = useRef(resetKey)
  const readyRef = useRef(false)
  const viewportRef = useRef<HTMLElement | null>(null)
  const viewportSizeRef = useRef({ width: 0, height: 0 })
  const observerRef = useRef<ResizeObserver | null>(null)
  const listVisibleRef = useRef(false)
  const sizeVersionRef = useRef(0)
  const frameRef = useRef<number | null>(null)
  const secondFrameRef = useRef<number | null>(null)
  const ready = readyKey === resetKey
  if (keyRef.current !== resetKey) {
    keyRef.current = resetKey
    readyRef.current = false
    listVisibleRef.current = false
    sizeVersionRef.current += 1
  } else {
    readyRef.current = ready
  }
  const markReady = useCallback(() => {
    if (readyRef.current) return
    readyRef.current = true
    // Resizes after the reveal are owned by useTranscriptResizeAnchor, which
    // keeps its own observer for the life of the transcript.
    observerRef.current?.disconnect()
    observerRef.current = null
    setReadyKey(resetKey)
  }, [resetKey])

  const cancelFrames = useCallback(() => {
    if (frameRef.current != null) cancelAnimationFrame(frameRef.current)
    if (secondFrameRef.current != null)
      cancelAnimationFrame(secondFrameRef.current)
    frameRef.current = null
    secondFrameRef.current = null
  }, [])

  const scheduleStabilityCheck = useCallback(() => {
    if (readyRef.current || !viewportRef.current || !listVisibleRef.current)
      return
    cancelFrames()
    const version = sizeVersionRef.current
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null
      secondFrameRef.current = requestAnimationFrame(() => {
        secondFrameRef.current = null
        if (
          viewportRef.current &&
          listVisibleRef.current &&
          sizeVersionRef.current === version &&
          areFontsSettled()
        ) {
          markReady()
        }
      })
    })
  }, [cancelFrames, markReady])

  // Re-check once the webfont settles (the stability frames above may have
  // passed while the swap was still pending). The 1s fallback is unaffected.
  useEffect(() => {
    if (areFontsSettled()) return
    const listener = () => scheduleStabilityCheck()
    fontsSettledListeners.add(listener)
    return () => {
      fontsSettledListeners.delete(listener)
    }
  }, [resetKey, scheduleStabilityCheck])

  const setViewport = useCallback(
    (element: HTMLElement | null) => {
      observerRef.current?.disconnect()
      observerRef.current = null
      viewportRef.current = element
      viewportSizeRef.current = {
        width: element?.clientWidth ?? 0,
        height: element?.clientHeight ?? 0,
      }
      sizeVersionRef.current += 1
      cancelFrames()

      if (!element || readyRef.current) return

      if (typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(() => {
          const nextSize = {
            width: element.clientWidth,
            height: element.clientHeight,
          }
          const previousSize = viewportSizeRef.current
          if (
            nextSize.width === previousSize.width &&
            nextSize.height === previousSize.height
          ) {
            return
          }
          viewportSizeRef.current = nextSize
          sizeVersionRef.current += 1
          scheduleStabilityCheck()
        })
        observer.observe(element)
        observerRef.current = observer
      }

      scheduleStabilityCheck()
    },
    [cancelFrames, markReady, scheduleStabilityCheck]
  )

  const setListVisible = useCallback(
    (visible: boolean) => {
      listVisibleRef.current = visible
      if (visible) scheduleStabilityCheck()
      else cancelFrames()
    },
    [cancelFrames, scheduleStabilityCheck]
  )

  useEffect(() => {
    const viewport = viewportRef.current
    if (viewport && !readyRef.current) setViewport(viewport)

    return () => {
      cancelFrames()
      observerRef.current?.disconnect()
      observerRef.current = null
    }
  }, [cancelFrames, resetKey, setViewport])

  useEffect(() => {
    if (readyRef.current) return
    const fallback = window.setTimeout(markReady, FALLBACK_REVEAL_MS)
    return () => window.clearTimeout(fallback)
  }, [markReady, resetKey])

  return { ready, setViewport, setListVisible }
}
