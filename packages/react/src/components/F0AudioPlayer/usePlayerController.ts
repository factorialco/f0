import { RefObject, useEffect, useRef } from "react"

import type { F0AudioPlayerProps } from "./types"
import { AudioPlayerControls, useAudioPlayer } from "./useAudioPlayer"

export interface PlayerController extends Omit<
  AudioPlayerControls,
  "play" | "pause"
> {
  audioRef: RefObject<HTMLAudioElement>
  playbackRates: number[]
}

export const usePlayerController = (
  props: F0AudioPlayerProps
): PlayerController => {
  const {
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

  const player = useAudioPlayer(audioRef, {
    onPlay,
    onPause,
    onSeek,
    onTimeUpdate,
    onEnded,
    onError,
  })

  // Drive the element from the controlled `playing` prop.
  useEffect(() => {
    if (playing === undefined) return
    if (playing && !player.isPlaying) {
      player.play()
    } else if (!playing && player.isPlaying) {
      player.pause()
    }
  }, [playing, player])

  // `player.isPlaying` (from the audio element events) is the single source of
  // truth. Notify the consumer only when it actually changes — including
  // changes the consumer didn't initiate (e.g. autoplay blocked, playback
  // ended) so a controlled parent never gets stuck out of sync.
  const reportedPlaying = useRef(player.isPlaying)
  useEffect(() => {
    if (reportedPlaying.current === player.isPlaying) return
    reportedPlaying.current = player.isPlaying
    onPlayingChange?.(player.isPlaying)
  }, [player.isPlaying, onPlayingChange])

  return {
    audioRef,
    isPlaying: player.isPlaying,
    currentTime: player.currentTime,
    duration: player.duration,
    buffered: player.buffered,
    playbackRate: player.playbackRate,
    isLoading: player.isLoading,
    error: player.error,
    toggle: player.toggle,
    seek: player.seek,
    setPlaybackRate: player.setPlaybackRate,
    playbackRates,
  }
}
