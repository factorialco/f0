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

export const usePlayerController = (
  props: F0AudioPlayerProps
): PlayerController => {
  const {
    src,
    getSrc,
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

  const audioRef = useRef<HTMLAudioElement>(null)
  const [resolvedSrc, setResolvedSrc] = useState(src)
  const resolvingRef = useRef(false)
  const playAfterResolveRef = useRef(false)
  const refreshedRef = useRef(false)

  const ensureSrc = useCallback(async () => {
    if (!getSrc || resolvingRef.current) return
    resolvingRef.current = true
    try {
      setResolvedSrc(await getSrc())
    } finally {
      resolvingRef.current = false
    }
  }, [getSrc])

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

  useEffect(() => {
    if (src !== undefined) setResolvedSrc(src)
  }, [src])

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
    currentTime: player.currentTime,
    duration: player.duration,
    buffered: player.buffered,
    playbackRate: player.playbackRate,
    isLoading: player.isLoading,
    error: player.error,
    toggle,
    seek: player.seek,
    setPlaybackRate: player.setPlaybackRate,
    playbackRates,
  }
}
