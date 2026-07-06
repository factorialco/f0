import { act, fireEvent, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useAudioPlayer } from "../useAudioPlayer"

const makeRef = () => ({ current: document.createElement("audio") })

describe("useAudioPlayer", () => {
  beforeEach(() => {
    vi.spyOn(HTMLMediaElement.prototype, "play").mockImplementation(() =>
      Promise.resolve()
    )
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("starts loading and not playing", () => {
    const ref = makeRef()
    const { result } = renderHook(() => useAudioPlayer(ref))
    expect(result.current.isPlaying).toBe(false)
    expect(result.current.currentTime).toBe(0)
    expect(result.current.isLoading).toBe(true)
  })

  it("tracks play and pause events", () => {
    const ref = makeRef()
    const onPlay = vi.fn()
    const onPause = vi.fn()
    const { result } = renderHook(() =>
      useAudioPlayer(ref, { onPlay, onPause })
    )

    act(() => fireEvent.play(ref.current))
    expect(result.current.isPlaying).toBe(true)
    expect(onPlay).toHaveBeenCalledOnce()

    act(() => fireEvent.pause(ref.current))
    expect(result.current.isPlaying).toBe(false)
    expect(onPause).toHaveBeenCalledOnce()
  })

  it("tracks the current time on timeupdate", () => {
    const ref = makeRef()
    const onTimeUpdate = vi.fn()
    const { result } = renderHook(() => useAudioPlayer(ref, { onTimeUpdate }))

    ref.current.currentTime = 12
    act(() => fireEvent.timeUpdate(ref.current))

    expect(result.current.currentTime).toBe(12)
    expect(onTimeUpdate).toHaveBeenCalledWith(12)
  })

  it("toggles playback", () => {
    const ref = makeRef()
    const { result } = renderHook(() => useAudioPlayer(ref))

    act(() => result.current.toggle())
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledOnce()
  })

  it("seeks and fires onSeek", () => {
    const ref = makeRef()
    const onSeek = vi.fn()
    const { result } = renderHook(() => useAudioPlayer(ref, { onSeek }))

    act(() => result.current.seek(30))
    expect(ref.current.currentTime).toBe(30)
    expect(onSeek).toHaveBeenCalledWith(30)
    expect(result.current.currentTime).toBe(30)
  })

  it("sets the playback rate", () => {
    const ref = makeRef()
    const { result } = renderHook(() => useAudioPlayer(ref))

    act(() => result.current.setPlaybackRate(1.5))
    expect(ref.current.playbackRate).toBe(1.5)
    expect(result.current.playbackRate).toBe(1.5)
  })

  it("captures media errors", () => {
    const ref = makeRef()
    const onError = vi.fn()
    const { result } = renderHook(() => useAudioPlayer(ref, { onError }))

    act(() => fireEvent.error(ref.current))
    expect(result.current.isLoading).toBe(false)
    expect(onError).toHaveBeenCalledOnce()
  })
})
