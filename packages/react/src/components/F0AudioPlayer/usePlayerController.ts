import { useControllableState } from "@radix-ui/react-use-controllable-state"
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
    defaultPlaying = false,
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

  const [, setIsPlaying] = useControllableState<boolean>({
    prop: playing,
    defaultProp: defaultPlaying,
    onChange: onPlayingChange,
  })

  const player = useAudioPlayer(audioRef, {
    onPlay: () => {
      setIsPlaying(true)
      onPlay?.()
    },
    onPause: () => {
      setIsPlaying(false)
      onPause?.()
    },
    onSeek,
    onTimeUpdate,
    onEnded,
    onError,
  })

  useEffect(() => {
    if (playing === undefined) return
    if (playing && !player.isPlaying) {
      player.play()
    } else if (!playing && player.isPlaying) {
      player.pause()
    }
  }, [playing, player])

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
