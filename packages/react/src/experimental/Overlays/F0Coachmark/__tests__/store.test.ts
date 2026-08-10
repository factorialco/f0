import { afterEach, describe, expect, it, vi } from "vitest"

import { coachmarkStore } from "../store"
import type { CoachmarkItem } from "../types"

const makeItem = (
  id: string,
  overrides: Partial<CoachmarkItem> = {}
): CoachmarkItem => ({
  id,
  steps: [{ title: id, targetElement: `#${id}` }],
  ...overrides,
})

describe("coachmarkStore", () => {
  afterEach(() => {
    coachmarkStore.clear()
  })

  describe("queue", () => {
    it("starts empty", () => {
      expect(coachmarkStore.getSnapshot()).toEqual([])
    })

    it("queues items in insertion order, so the head is the oldest", () => {
      coachmarkStore.addItem(makeItem("a"))
      coachmarkStore.addItem(makeItem("b"))

      expect(coachmarkStore.getSnapshot().map((item) => item.id)).toEqual([
        "a",
        "b",
      ])
    })

    // Guards the "an effect that runs twice shows one coachmark" promise, and
    // keeps a replacement from jumping the queue.
    it("replaces an item with the same id in place", () => {
      coachmarkStore.addItem(makeItem("a", { steps: [{ title: "First" }] }))
      coachmarkStore.addItem(makeItem("b"))
      coachmarkStore.addItem(makeItem("a", { steps: [{ title: "Second" }] }))

      const items = coachmarkStore.getSnapshot()
      expect(items.map((item) => item.id)).toEqual(["a", "b"])
      expect(items[0].steps[0].title).toBe("Second")
    })

    it("removes a single item and ignores an unknown id", () => {
      coachmarkStore.addItem(makeItem("a"))
      coachmarkStore.addItem(makeItem("b"))

      coachmarkStore.removeItem("a")
      expect(coachmarkStore.getSnapshot().map((item) => item.id)).toEqual(["b"])

      const before = coachmarkStore.getSnapshot()
      coachmarkStore.removeItem("nope")
      expect(coachmarkStore.getSnapshot()).toBe(before)
    })

    it("clears every item", () => {
      coachmarkStore.addItem(makeItem("a"))
      coachmarkStore.addItem(makeItem("b"))

      coachmarkStore.clear()

      expect(coachmarkStore.getSnapshot()).toEqual([])
    })
  })

  describe("subscribers", () => {
    it("notifies on add, remove and clear, but not on a no-op", () => {
      const listener = vi.fn()
      const unsubscribe = coachmarkStore.subscribe(listener)

      coachmarkStore.addItem(makeItem("a"))
      expect(listener).toHaveBeenCalledTimes(1)

      coachmarkStore.removeItem("unknown")
      expect(listener).toHaveBeenCalledTimes(1)

      coachmarkStore.removeItem("a")
      expect(listener).toHaveBeenCalledTimes(2)

      coachmarkStore.clear()
      expect(listener).toHaveBeenCalledTimes(2)

      coachmarkStore.addItem(makeItem("b"))
      coachmarkStore.clear()
      expect(listener).toHaveBeenCalledTimes(4)

      unsubscribe()
      coachmarkStore.addItem(makeItem("c"))
      expect(listener).toHaveBeenCalledTimes(4)
    })

    it("returns a stable empty snapshot on the server", () => {
      expect(coachmarkStore.getServerSnapshot()).toEqual([])
    })
  })

  // Without this, two mounted providers would each render the head — two panels
  // stacked on the same target.
  describe("renderer election", () => {
    it("elects the lowest mounted id and hands over on release", () => {
      expect(coachmarkStore.getActiveRendererId()).toBe(null)
      expect(coachmarkStore.hasProvider()).toBe(false)

      const first = coachmarkStore.acquireRenderer()
      const second = coachmarkStore.acquireRenderer()

      expect(coachmarkStore.hasProvider()).toBe(true)
      expect(coachmarkStore.getActiveRendererId()).toBe(first.id)
      expect(second.id).toBeGreaterThan(first.id)

      first.release()
      expect(coachmarkStore.getActiveRendererId()).toBe(second.id)

      second.release()
      expect(coachmarkStore.getActiveRendererId()).toBe(null)
      expect(coachmarkStore.hasProvider()).toBe(false)
    })

    it("notifies renderer subscribers when the set changes", () => {
      const listener = vi.fn()
      const unsubscribe = coachmarkStore.subscribeRenderer(listener)

      const renderer = coachmarkStore.acquireRenderer()
      expect(listener).toHaveBeenCalledTimes(1)

      renderer.release()
      expect(listener).toHaveBeenCalledTimes(2)

      unsubscribe()
      coachmarkStore.acquireRenderer().release()
      expect(listener).toHaveBeenCalledTimes(2)
    })
  })
})
