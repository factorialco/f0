import { describe, expect, it, vi } from "vitest"

import { createMeetingSignalStore } from "../providers/MeetingSignalStore"

describe("createMeetingSignalStore", () => {
  it("returns a stable snapshot identity while nothing changes", () => {
    const store = createMeetingSignalStore()
    // Required by useSyncExternalStore: a fresh object every call is an
    // infinite render loop.
    expect(store.getSnapshot("a")).toBe(store.getSnapshot("a"))

    store.setAudioLevel("a", 0.5)
    const snapshot = store.getSnapshot("a")
    expect(store.getSnapshot("a")).toBe(snapshot)
  })

  it("quantizes audio levels so tiny fluctuations do not notify", () => {
    const store = createMeetingSignalStore()
    const listener = vi.fn()
    store.subscribe("a", listener)

    store.setAudioLevel("a", 0.5)
    expect(listener).toHaveBeenCalledTimes(1)

    // Same quantized bucket: no notification.
    store.setAudioLevel("a", 0.51)
    expect(listener).toHaveBeenCalledTimes(1)

    store.setAudioLevel("a", 0.8)
    expect(listener).toHaveBeenCalledTimes(2)
  })

  it("only notifies speaker subscribers when the set changes", () => {
    const store = createMeetingSignalStore()
    const listener = vi.fn()
    store.subscribeSpeakers(listener)

    store.setSpeaking(["a", "b"])
    expect(listener).toHaveBeenCalledTimes(1)

    store.setSpeaking(["b", "a"])
    expect(listener).toHaveBeenCalledTimes(1)

    store.setSpeaking(["a"])
    expect(listener).toHaveBeenCalledTimes(2)
  })

  it("flips isSpeaking on the participants that entered or left the set", () => {
    const store = createMeetingSignalStore()
    store.setSpeaking(["a"])
    expect(store.getSnapshot("a").isSpeaking).toBe(true)
    expect(store.getSnapshot("b").isSpeaking).toBe(false)

    store.setSpeaking(["b"])
    expect(store.getSnapshot("a").isSpeaking).toBe(false)
    expect(store.getSnapshot("b").isSpeaking).toBe(true)
  })

  it("does not notify one participant's listener for another's signal", () => {
    const store = createMeetingSignalStore()
    const listenerA = vi.fn()
    const listenerB = vi.fn()
    store.subscribe("a", listenerA)
    store.subscribe("b", listenerB)

    store.setAudioLevel("a", 0.9)
    expect(listenerA).toHaveBeenCalledTimes(1)
    expect(listenerB).not.toHaveBeenCalled()
  })

  it("stops notifying after unsubscribe", () => {
    const store = createMeetingSignalStore()
    const listener = vi.fn()
    const unsubscribe = store.subscribe("a", listener)
    unsubscribe()
    store.setAudioLevel("a", 0.9)
    expect(listener).not.toHaveBeenCalled()
  })

  it("drops a participant that left the room", () => {
    const store = createMeetingSignalStore()
    store.setSpeaking(["a"])
    store.remove("a")
    expect(store.getSpeakers()).not.toContain("a")
    expect(store.getSnapshot("a").isSpeaking).toBe(false)
  })
})
