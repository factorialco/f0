import { RefObject, useCallback, useEffect, useRef, useState } from "react"

import type { F0AudioPlayerProps } from "./types"
import { AudioPlayerControls, useAudioPlayer } from "./useAudioPlayer"

export interface PlayerController extends Omit<
  AudioPlayerControls,
  "play" | "pause"
> {
  audioRef: RefObject<HTMLAudioElement>
  currentSrc: string | undefined
  playbackRates: number[]
}

/**
 * The controller drives a single `<audio>` element, so it takes an already
 * language-resolved source (a URL or a lazy resolver) — not the localizable
 * `Localized<...>` shape. Callers resolve the active language first (see
 * {@link useAudioLanguage}).
 */
type ControllerProps = Omit<F0AudioPlayerProps, "src"> & {
  src: string | (() => Promise<string>)
}

export const usePlayerController = (
  props: ControllerProps
): PlayerController => {
  const {
    src,
    duration,
    playing,
    onPlayingChange,
    playbackRates = [1, 1.5, 2],
    onPlay,
    onPause,
    onSeek,
    onTimeUpdate,
    onEnded,
    onError,
  } = props

  const getSrc = typeof src === "function" ? src : undefined
  const eagerSrc = typeof src === "function" ? undefined : src

  const audioRef = useRef<HTMLAudioElement>(null)
  const [resolvedSrc, setResolvedSrc] = useState(eagerSrc)
  const pendingSeekRef = useRef<number | null>(null)
  const [pendingSeek, setPendingSeek] = useState<number | null>(null)
  const resolvingRef = useRef(false)
  const playAfterResolveRef = useRef(false)
  const refreshedRef = useRef(false)

  const ensureSrc = useCallback(async () => {
    if (!getSrc || resolvingRef.current) return
    resolvingRef.current = true
    try {
      setResolvedSrc(await getSrc())
    } catch {
      playAfterResolveRef.current = false
      onError?.(null)
    } finally {
      resolvingRef.current = false
    }
  }, [getSrc, onError])

  const handlePlay = useCallback(() => {
    refreshedRef.current = false
    onPlay?.()
  }, [onPlay])

  const handleError = useCallback(
    (error: MediaError | null) => {
      onError?.(error)
      if (!getSrc || refreshedRef.current) return
      refreshedRef.current = true
      playAfterResolveRef.current = true
      setResolvedSrc(undefined)
      void ensureSrc()
    },
    [onError, getSrc, ensureSrc]
  )

  const player = useAudioPlayer(
    audioRef,
    {
      onPlay: handlePlay,
      onPause,
      onSeek,
      onTimeUpdate,
      onEnded,
      onError: handleError,
    },
    duration ?? 0
  )

  // `player` is a fresh object on every render; `player.seek` is not. Depend on
  // the callback alone so `seek` keeps a stable identity between source
  // changes — consumers memoise on it.
  const playerSeek = player.seek

  /**
   * Move the playhead, from the scrubber or from a caller that knows a position
   * (a transcript cue). Before metadata there is no timeline to move along —
   * and with a lazy `src` there is no source yet at all — so the position is
   * held and applied on the next `loadedmetadata` instead of being dropped.
   */
  const seek = useCallback(
    (seconds: number) => {
      const audio = audioRef.current
      const target = Math.max(seconds, 0)
      if (audio && resolvedSrc && audio.readyState >= audio.HAVE_METADATA) {
        playerSeek(target)
        return
      }
      pendingSeekRef.current = target
      setPendingSeek(target)
    },
    [playerSeek, resolvedSrc]
  )

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const applyPendingSeek = () => {
      const target = pendingSeekRef.current
      if (target === null) return
      pendingSeekRef.current = null
      setPendingSeek(null)
      playerSeek(target)
    }

    audio.addEventListener("loadedmetadata", applyPendingSeek)
    return () => audio.removeEventListener("loadedmetadata", applyPendingSeek)
  }, [playerSeek])

  useEffect(() => {
    if (eagerSrc !== undefined) setResolvedSrc(eagerSrc)
  }, [eagerSrc])

  useEffect(() => {
    if (!resolvedSrc || !playAfterResolveRef.current) return
    playAfterResolveRef.current = false
    player.play()
  }, [resolvedSrc, player])

  const toggle = useCallback(() => {
    if (!player.isPlaying && !resolvedSrc && getSrc) {
      playAfterResolveRef.current = true
      void ensureSrc()
      return
    }
    player.toggle()
  }, [player, resolvedSrc, getSrc, ensureSrc])

  useEffect(() => {
    if (playing === undefined) return
    if (playing && !player.isPlaying) {
      if (!resolvedSrc && getSrc) {
        playAfterResolveRef.current = true
        void ensureSrc()
      } else {
        player.play()
      }
    } else if (!playing && player.isPlaying) {
      player.pause()
    }
  }, [playing, player, resolvedSrc, getSrc, ensureSrc])

  const reportedPlaying = useRef(player.isPlaying)
  useEffect(() => {
    if (reportedPlaying.current === player.isPlaying) return
    reportedPlaying.current = player.isPlaying
    onPlayingChange?.(player.isPlaying)
  }, [player.isPlaying, onPlayingChange])

  return {
    audioRef,
    currentSrc: resolvedSrc,
    isPlaying: player.isPlaying,
    // A queued position is where playback will resume, so the scrubber and the
    // time readout follow it rather than sitting at the stale one.
    currentTime: pendingSeek ?? player.currentTime,
    duration: player.duration,
    buffered: player.buffered,
    playbackRate: player.playbackRate,
    isLoading: player.isLoading,
    error: player.error,
    toggle,
    seek,
    setPlaybackRate: player.setPlaybackRate,
    playbackRates,
  }
}
