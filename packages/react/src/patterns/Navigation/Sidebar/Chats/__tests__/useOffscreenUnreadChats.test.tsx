import { type ReactNode, useRef } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRender as render } from "@/testing/test-utils"

import { type SidebarChatGroup } from "../types"
import { useOffscreenUnreadChats } from "../useOffscreenUnreadChats"

const groups: SidebarChatGroup[] = [
  {
    id: "messages",
    title: "Messages",
    chats: [{ id: "unread", label: "Unread", unreadCount: 1 }],
  },
]

const observerInstances: IntersectionObserver[] = []
let frameId = 0
let frames: Map<number, FrameRequestCallback>

const Probe = (): ReactNode => {
  const rootRef = useRef<HTMLDivElement>(null)
  useOffscreenUnreadChats({
    rootRef,
    groups,
    shouldReduceMotion: false,
  })

  return (
    <div ref={rootRef} data-testid="sidebar-root">
      <div data-sidebar-tab-panel-searching="false">
        <div data-sidebar-panel-group-id="messages">
          <div data-sidebar-collapsible-open="true">
            <div data-sidebar-chat-id="unread" />
          </div>
        </div>
      </div>
    </div>
  )
}

const runNextFrame = () => {
  const next = frames.entries().next().value as
    | [number, FrameRequestCallback]
    | undefined
  if (!next) throw new Error("No animation frame is pending")
  frames.delete(next[0])
  act(() => next[1](0))
}

beforeEach(() => {
  observerInstances.length = 0
  frames = new Map()
  frameId = 0
  vi.stubGlobal(
    "IntersectionObserver",
    class MockIntersectionObserver {
      readonly root = null
      readonly rootMargin = "0px"
      readonly thresholds = [0]
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
      takeRecords = vi.fn().mockReturnValue([])

      constructor() {
        observerInstances.push(this as unknown as IntersectionObserver)
      }
    }
  )
  vi.spyOn(globalThis, "requestAnimationFrame").mockImplementation(
    (callback) => {
      const id = ++frameId
      frames.set(id, callback)
      return id
    }
  )
  vi.spyOn(globalThis, "cancelAnimationFrame").mockImplementation((id) => {
    frames.delete(id)
  })
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe("useOffscreenUnreadChats cold start", () => {
  it("registers observers only after the sidebar has painted", () => {
    const { getByTestId } = render(
      <div data-scroll-container>
        <Probe />
      </div>
    )

    const root = getByTestId("sidebar-root")
    const viewport = root.closest("[data-scroll-container]")!
    expect(viewport.previousElementSibling).toHaveAttribute(
      "data-sidebar-unread-portal",
      "above"
    )
    expect(viewport.nextElementSibling).toHaveAttribute(
      "data-sidebar-unread-portal",
      "below"
    )

    expect(observerInstances).toHaveLength(0)
    runNextFrame()
    expect(observerInstances).toHaveLength(0)
    runNextFrame()
    expect(observerInstances).toHaveLength(1)
  })

  it("reuses observation after irrelevant DOM mutations", async () => {
    const { getByTestId } = render(
      <div data-scroll-container>
        <Probe />
      </div>
    )
    runNextFrame()
    runNextFrame()
    expect(observerInstances).toHaveLength(1)

    getByTestId("sidebar-root").append(document.createElement("span"))
    await act(async () => Promise.resolve())
    runNextFrame()

    expect(observerInstances).toHaveLength(1)
  })
})
