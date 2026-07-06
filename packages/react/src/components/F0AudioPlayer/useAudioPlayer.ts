import { RefObject, useCallback, useEffect, useRef, useState } from "react"

interface UseAudioPlayerCallbacks {
  onPlay?: () => void
  onPause?: () => void
  onSeek?: (seconds: number) => void
  onTimeUpdate?: (seconds: number) => void
  onEnded?: () => void
  onError?: (error: MediaError | null) => void
}

export interface AudioPlayerState {
  isPlaying: boolean
  currentTime: number
  duration: number
  buffered: number
  playbackRate: number
  isLoading: boolean
  error: MediaError | null
}

export interface AudioPlayerControls extends AudioPlayerState {
  play: () => void
  pause: () => void
  toggle: () => void
  seek: (seconds: number) => void
  setPlaybackRate: (rate: number) => void
}

export const useAudioPlayer = (
  audioRef: RefObject<HTMLAudioElement>,
  callbacks: UseAudioPlayerCallbacks = {}
): AudioPlayerControls => {
  const callbacksRef = useRef(callbacks)
  callbacksRef.current = callbacks

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [playbackRate, setPlaybackRateState] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<MediaError | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0)
      setIsLoading(false)
    }
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
      callbacksRef.current.onTimeUpdate?.(audio.currentTime)
    }
    const handlePlay = () => {
      setIsPlaying(true)
      callbacksRef.current.onPlay?.()
    }
    const handlePause = () => {
      setIsPlaying(false)
      callbacksRef.current.onPause?.()
    }
    const handleEnded = () => {
      setIsPlaying(false)
      callbacksRef.current.onEnded?.()
    }
    const handleProgress = () => {
      if (audio.buffered.length > 0) {
        setBuffered(audio.buffered.end(audio.buffered.length - 1))
      }
    }
    const handleWaiting = () => setIsLoading(true)
    const handleCanPlay = () => setIsLoading(false)
    const handleRateChange = () => setPlaybackRateState(audio.playbackRate)
    const handleError = () => {
      setError(audio.error)
      setIsLoading(false)
      callbacksRef.current.onError?.(audio.error)
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("progress", handleProgress)
    audio.addEventListener("waiting", handleWaiting)
    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("ratechange", handleRateChange)
    audio.addEventListener("error", handleError)

    if (audio.readyState >= 1) {
      handleLoadedMetadata()
    }

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("progress", handleProgress)
      audio.removeEventListener("waiting", handleWaiting)
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("ratechange", handleRateChange)
      audio.removeEventListener("error", handleError)
    }
  }, [audioRef])

  const play = useCallback(() => {
    audioRef.current?.play().catch(() => {})
  }, [audioRef])

  const pause = useCallback(() => {
    audioRef.current?.pause()
  }, [audioRef])

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }, [isPlaying, play, pause])

  const seek = useCallback(
    (seconds: number) => {
      const audio = audioRef.current
      if (!audio) return
      const max = Number.isFinite(audio.duration) ? audio.duration : seconds
      const clamped = Math.min(Math.max(seconds, 0), max)
      audio.currentTime = clamped
      setCurrentTime(clamped)
      callbacksRef.current.onSeek?.(clamped)
    },
    [audioRef]
  )

  const setPlaybackRate = useCallback(
    (rate: number) => {
      const audio = audioRef.current
      if (!audio) return
      audio.playbackRate = rate
      setPlaybackRateState(rate)
    },
    [audioRef]
  )

  return {
    isPlaying,
    currentTime,
    duration,
    buffered,
    playbackRate,
    isLoading,
    error,
    play,
    pause,
    toggle,
    seek,
    setPlaybackRate,
  }
}
