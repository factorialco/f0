import { createElement, StrictMode } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, screen, zeroRender as render } from "@/testing/test-utils"

import {
  createTranscriptHeavyPreviewStore,
  TranscriptHeavyPreviewProvider,
  useTranscriptHeavyPreview,
} from "../useTranscriptHeavyPreview"

describe("createTranscriptHeavyPreviewStore", () => {
  let intersectionCallback: IntersectionObserverCallback
  let frameCallbacks: FrameRequestCallback[]

  beforeEach(() => {
    vi.useFakeTimers()
    frameCallbacks = []
    vi.spyOn(globalThis, "requestAnimationFrame").mockImplementation(
      (callback: FrameRequestCallback) => {
        frameCallbacks.push(callback)
        return frameCallbacks.length
      }
    )
    vi.spyOn(globalThis, "cancelAnimationFrame").mockImplementation(() => {})
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        constructor(callback: IntersectionObserverCallback) {
          intersectionCallback = callback
        }
        observe() {}
        unobserve() {}
        disconnect() {}
      }
    )
    Reflect.deleteProperty(window, "requestIdleCallback")
    Reflect.deleteProperty(window, "cancelIdleCallback")
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  const intersect = (target: Element, isIntersecting = true) => {
    intersectionCallback(
      [{ target, isIntersecting } as IntersectionObserverEntry],
      {} as IntersectionObserver
    )
  }

  const runTurn = async () => {
    vi.advanceTimersByTime(250)
    vi.runOnlyPendingTimers()
    await Promise.resolve()
    await Promise.resolve()
  }

  it("waits for readiness and intersection, then prepares one task at a time", async () => {
    const store = createTranscriptHeavyPreviewStore()
    const viewport = document.createElement("div")
    const first = document.createElement("div")
    const second = document.createElement("div")
    const events: string[] = []

    store.setViewport(viewport)
    store.observe(first, () =>
      store.enqueue(
        async () => events.push("prepare-first"),
        () => events.push("mount-first")
      )
    )
    store.observe(second, () =>
      store.enqueue(
        async () => events.push("prepare-second"),
        () => events.push("mount-second")
      )
    )
    intersect(first)
    intersect(second)

    await runTurn()
    expect(events).toEqual([])

    store.setReady(true)
    await runTurn()
    expect(events).toEqual(["prepare-first", "mount-first"])

    frameCallbacks.shift()?.(0)
    vi.advanceTimersByTime(0)
    await Promise.resolve()
    await Promise.resolve()
    expect(events).toEqual([
      "prepare-first",
      "mount-first",
      "prepare-second",
      "mount-second",
    ])
  })

  it("pauses pending work during scroll and cancels it on dispose", async () => {
    const store = createTranscriptHeavyPreviewStore()
    const target = document.createElement("div")
    const mount = vi.fn()

    store.setViewport(document.createElement("div"))
    store.observe(target, () => store.enqueue(async () => undefined, mount))
    intersect(target)
    store.setReady(true)
    store.setScrolling(true)
    await runTurn()
    expect(mount).not.toHaveBeenCalled()

    store.setScrolling(false)
    store.dispose()
    await runTurn()
    expect(mount).not.toHaveBeenCalled()
  })

  it("mounts a rejected preview and continues with the next task", async () => {
    const store = createTranscriptHeavyPreviewStore()
    const first = document.createElement("div")
    const second = document.createElement("div")
    const events: string[] = []

    store.setViewport(document.createElement("div"))
    store.observe(first, () =>
      store.enqueue(
        () => Promise.reject(new Error("chunk failed")),
        () => events.push("mount-failed")
      )
    )
    store.observe(second, () =>
      store.enqueue(
        async () => events.push("prepare-next"),
        () => events.push("mount-next")
      )
    )
    intersect(first)
    intersect(second)
    store.setReady(true)

    await runTurn()
    expect(events).toEqual(["mount-failed"])
    frameCallbacks.shift()?.(0)
    vi.runOnlyPendingTimers()
    await Promise.resolve()
    await Promise.resolve()
    expect(events).toEqual(["mount-failed", "prepare-next", "mount-next"])
  })

  it("pauses an in-flight preparation and resumes it without preparing twice", async () => {
    const store = createTranscriptHeavyPreviewStore()
    const target = document.createElement("div")
    let resolvePreparation = () => {}
    const prepare = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolvePreparation = resolve
        })
    )
    const mount = vi.fn()

    store.setViewport(document.createElement("div"))
    store.observe(target, () => store.enqueue(prepare, mount))
    intersect(target)
    store.setReady(true)
    await runTurn()
    expect(prepare).toHaveBeenCalledOnce()

    store.setScrolling(true)
    resolvePreparation()
    await Promise.resolve()
    await Promise.resolve()
    expect(mount).not.toHaveBeenCalled()

    store.setScrolling(false)
    await runTurn()
    expect(prepare).toHaveBeenCalledOnce()
    expect(mount).toHaveBeenCalledOnce()
  })

  it("drops an in-flight preparation when the transcript is disposed", async () => {
    const store = createTranscriptHeavyPreviewStore()
    const target = document.createElement("div")
    let resolvePreparation = () => {}
    const mount = vi.fn()

    store.setViewport(document.createElement("div"))
    store.observe(target, () =>
      store.enqueue(
        () =>
          new Promise<void>((resolve) => {
            resolvePreparation = resolve
          }),
        mount
      )
    )
    intersect(target)
    store.setReady(true)
    await runTurn()

    store.dispose()
    resolvePreparation()
    await Promise.resolve()
    await Promise.resolve()
    expect(mount).not.toHaveBeenCalled()
  })

  it("re-registers a preview after StrictMode effect replay", async () => {
    const store = createTranscriptHeavyPreviewStore()
    const prepare = vi.fn(async () => undefined)
    const Preview = () => {
      const { ref, shouldMount } = useTranscriptHeavyPreview(prepare)
      return createElement(
        "div",
        { ref, "data-testid": "strict-preview" },
        shouldMount ? "mounted" : "placeholder"
      )
    }

    store.setViewport(document.createElement("div"))
    render(
      createElement(
        StrictMode,
        null,
        createElement(
          TranscriptHeavyPreviewProvider,
          { store },
          createElement(Preview)
        )
      )
    )
    intersect(screen.getByTestId("strict-preview"))
    store.setReady(true)
    await act(runTurn)

    expect(prepare).toHaveBeenCalledOnce()
    expect(screen.getByTestId("strict-preview")).toHaveTextContent("mounted")
  })
})
