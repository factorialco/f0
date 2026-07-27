import { useCallback, useEffect, useRef, useState } from "react"

import {
  CURRENT_TIME_THROTTLE_MS,
  DEFAULT_PLAYBACK_RATE,
  PlaybackRate,
  isPlaybackRate,
} from "../utils"

export interface UseVideoStateResult {
  /** Stable ref to the media element (set synchronously during commit). */
  videoRef: React.RefObject<HTMLVideoElement | null>
  /** The media element as state, so dependent effects re-run when it mounts. */
  videoElement: HTMLVideoElement | null
  /** Callback ref to attach to the `<video>`; keeps `videoRef` and state in sync. */
  setVideoNode: (node: HTMLVideoElement | null) => void
  videoLoaded: boolean
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isMuted: boolean
  playbackRate: PlaybackRate
  setVideoLoaded: (loaded: boolean) => void
  togglePlay: () => void
  toggleMute: () => void
  setVolume: (value: number) => void
  setPlaybackRate: (rate: PlaybackRate) => void
  seekTo: (time: number) => void
}

/**
 * Owns the `<video>` element, its native listeners and the derived player state.
 * The element is stored both in a ref (read synchronously) and in state (so the
 * tracking / milestone / completion effects re-run once the element mounts).
 */
export function useVideoState(src: string): UseVideoStateResult {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(
    null
  )
  const lastTimeUpdateAtRef = useRef(0)

  const setVideoNode = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node
    setVideoElement(node)
  }, [])

  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRateState] = useState<PlaybackRate>(
    DEFAULT_PLAYBACK_RATE
  )

  useEffect(() => {
    lastTimeUpdateAtRef.current = 0
    // Some browsers preserve `playbackRate` across `src` changes.
    if (videoRef.current) videoRef.current.playbackRate = DEFAULT_PLAYBACK_RATE
    setVideoLoaded(false)
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
    setPlaybackRateState(DEFAULT_PLAYBACK_RATE)
  }, [src])

  // Attach listeners once the element mounts.
  useEffect(() => {
    const video = videoElement
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    const handleVolumeChange = () => {
      setVolumeState(video.volume)
      setIsMuted(video.muted)
    }

    const handleLoadedMetadata = () => setDuration(video.duration || 0)

    const handleRateChange = () => {
      if (isPlaybackRate(video.playbackRate)) {
        setPlaybackRateState(video.playbackRate)
      }
    }

    const handleTimeUpdate = () => {
      const now = performance.now()
      if (now - lastTimeUpdateAtRef.current >= CURRENT_TIME_THROTTLE_MS) {
        lastTimeUpdateAtRef.current = now
        setCurrentTime(video.currentTime)
      }
    }

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)
    video.addEventListener("volumechange", handleVolumeChange)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("ratechange", handleRateChange)
    video.addEventListener("timeupdate", handleTimeUpdate)

    // Seed duration if `loadedmetadata` fired before this effect (StrictMode, HMR).
    if (video.readyState >= 1 && video.duration) {
      setDuration(video.duration)
    }

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
      video.removeEventListener("volumechange", handleVolumeChange)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("ratechange", handleRateChange)
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [videoElement])

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.paused || video.ended) {
      // Autoplay-policy and interrupted-play rejections are benign; swallow them.
      void video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [])

  const toggleMute = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
  }, [])

  const setVolume = useCallback((value: number) => {
    const video = videoRef.current
    if (!video) return
    const clamped = Math.max(0, Math.min(1, value))
    video.volume = clamped
    video.muted = clamped === 0
  }, [])

  const setPlaybackRate = useCallback((rate: PlaybackRate) => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = rate
  }, [])

  const seekTo = useCallback((time: number) => {
    const video = videoRef.current
    if (!video) return
    const clamped = Math.max(0, Math.min(time, video.duration || time))
    video.currentTime = clamped
    setCurrentTime(clamped)
  }, [])

  return {
    videoRef,
    videoElement,
    setVideoNode,
    videoLoaded,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    playbackRate,
    setVideoLoaded,
    togglePlay,
    toggleMute,
    setVolume,
    setPlaybackRate,
    seekTo,
  }
}
