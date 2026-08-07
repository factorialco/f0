import { createElement, type ReactNode } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  zeroRender as render,
  zeroRenderHook as renderHook,
} from "@/testing/test-utils"

import {
  ChatScrollActivityProvider,
  createChatScrollActivityStore,
} from "../useChatScrollActivity"
import { useDeferredHeavyMount } from "../useDeferredHeavyMount"

let idleCallbacks: Array<() => void>
let frameCallbacks: FrameRequestCallback[]

beforeEach(() => {
  idleCallbacks = []
  frameCallbacks = []
  vi.stubGlobal("requestIdleCallback", (callback: () => void) => {
    idleCallbacks.push(callback)
    return idleCallbacks.length
  })
  vi.stubGlobal("cancelIdleCallback", vi.fn())
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    frameCallbacks.push(callback)
    return frameCallbacks.length
  })
  vi.stubGlobal("cancelAnimationFrame", vi.fn())
})

afterEach(() => vi.unstubAllGlobals())

describe("useDeferredHeavyMount", () => {
  it("waits for scrolling to settle before mounting", () => {
    const { result, rerender } = renderHook(
      ({ defer }) => useDeferredHeavyMount(true, defer),
      { initialProps: { defer: true } }
    )

    expect(result.current).toBe(false)

    rerender({ defer: false })

    expect(result.current).toBe(true)
  })

  it("keeps content mounted through later scroll gestures", () => {
    const { result, rerender } = renderHook(
      ({ defer }) => useDeferredHeavyMount(true, defer),
      { initialProps: { defer: false } }
    )

    expect(result.current).toBe(true)

    rerender({ defer: true })

    expect(result.current).toBe(true)
  })

  it("waits until content becomes eligible", () => {
    const { result, rerender } = renderHook(
      ({ eligible }) => useDeferredHeavyMount(eligible, false),
      { initialProps: { eligible: false } }
    )

    expect(result.current).toBe(false)

    rerender({ eligible: true })

    expect(result.current).toBe(true)
  })

  it("mounts queued previews one per idle frame after scrolling", () => {
    const store = createChatScrollActivityStore()
    store.setScrolling(true)

    const Probe = ({ id }: { id: string }): ReactNode => {
      const mounted = useDeferredHeavyMount(true, false)
      return createElement("span", { "data-testid": id }, String(mounted))
    }

    const { getByTestId } = render(
      createElement(
        ChatScrollActivityProvider,
        { store },
        createElement(Probe, { id: "first" }),
        createElement(Probe, { id: "second" })
      )
    )

    expect(getByTestId("first")).toHaveTextContent("false")
    expect(getByTestId("second")).toHaveTextContent("false")

    act(() => store.setScrolling(false))
    expect(idleCallbacks).toHaveLength(1)

    act(() => idleCallbacks.shift()?.())
    expect(
      [getByTestId("first"), getByTestId("second")].filter(
        (probe) => probe.textContent === "true"
      )
    ).toHaveLength(1)
    expect(frameCallbacks).toHaveLength(1)

    act(() => frameCallbacks.shift()?.(0))
    expect(idleCallbacks).toHaveLength(1)
    act(() => idleCallbacks.shift()?.())

    expect(getByTestId("first")).toHaveTextContent("true")
    expect(getByTestId("second")).toHaveTextContent("true")
  })

  it("pauses queued mounts when scrolling restarts", () => {
    const store = createChatScrollActivityStore()
    store.setScrolling(true)

    const Probe = ({ id }: { id: string }): ReactNode => {
      const mounted = useDeferredHeavyMount(true, false)
      return createElement("span", { "data-testid": id }, String(mounted))
    }

    const { getByTestId } = render(
      createElement(
        ChatScrollActivityProvider,
        { store },
        createElement(Probe, { id: "first" }),
        createElement(Probe, { id: "second" })
      )
    )

    act(() => store.setScrolling(false))
    const cancelledIdle = idleCallbacks.shift()
    act(() => store.setScrolling(true))

    expect(cancelIdleCallback).toHaveBeenCalledOnce()
    act(() => cancelledIdle?.())
    expect(getByTestId("first")).toHaveTextContent("false")
    expect(getByTestId("second")).toHaveTextContent("false")

    act(() => store.setScrolling(false))
    act(() => idleCallbacks.shift()?.())
    expect(
      [getByTestId("first"), getByTestId("second")].filter(
        (probe) => probe.textContent === "true"
      )
    ).toHaveLength(1)

    const cancelledFrame = frameCallbacks.shift()
    act(() => store.setScrolling(true))
    expect(cancelAnimationFrame).toHaveBeenCalledOnce()
    act(() => cancelledFrame?.(0))
    expect(
      [getByTestId("first"), getByTestId("second")].filter(
        (probe) => probe.textContent === "true"
      )
    ).toHaveLength(1)

    act(() => store.setScrolling(false))
    act(() => idleCallbacks.shift()?.())
    expect(getByTestId("first")).toHaveTextContent("true")
    expect(getByTestId("second")).toHaveTextContent("true")
  })
})
