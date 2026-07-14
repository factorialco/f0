import { afterEach, describe, expect, it, vi } from "vitest"

import { toastStore } from "../store"
import type { ToastProviderItem } from "../types"

const makeItem = (
  id: string,
  overrides: Partial<ToastProviderItem> = {}
): ToastProviderItem => ({
  id,
  onClose: vi.fn(),
  ...overrides,
})

describe("toastStore", () => {
  afterEach(() => {
    toastStore.clear()
  })

  describe("items", () => {
    it("starts empty", () => {
      expect(toastStore.getSnapshot()).toEqual([])
    })

    it("appends items in insertion order", () => {
      toastStore.addItem(makeItem("a"))
      toastStore.addItem(makeItem("b"))

      expect(toastStore.getSnapshot().map((i) => i.id)).toEqual(["a", "b"])
    })

    it("replaces an item with the same id in place (no duplicate)", () => {
      toastStore.addItem(makeItem("a", { title: "First" }))
      toastStore.addItem(makeItem("b"))
      toastStore.addItem(makeItem("a", { title: "Second" }))

      const items = toastStore.getSnapshot()
      expect(items.map((i) => i.id)).toEqual(["a", "b"])
      expect(items[0].title).toBe("Second")
    })

    it("removes an item by id", () => {
      toastStore.addItem(makeItem("a"))
      toastStore.addItem(makeItem("b"))

      toastStore.removeItem("a")

      expect(toastStore.getSnapshot().map((i) => i.id)).toEqual(["b"])
    })

    it("clear() empties the store", () => {
      toastStore.addItem(makeItem("a"))
      toastStore.addItem(makeItem("b"))

      toastStore.clear()

      expect(toastStore.getSnapshot()).toEqual([])
    })

    it("returns a stable empty snapshot from getServerSnapshot", () => {
      expect(toastStore.getServerSnapshot()).toEqual([])
    })
  })

  describe("subscriptions", () => {
    it("notifies subscribers on add, remove, and clear", () => {
      const listener = vi.fn()
      const unsubscribe = toastStore.subscribe(listener)

      toastStore.addItem(makeItem("a"))
      toastStore.removeItem("a")
      toastStore.addItem(makeItem("b"))
      toastStore.clear()

      expect(listener).toHaveBeenCalledTimes(4)
      unsubscribe()
    })

    it("stops notifying after unsubscribe", () => {
      const listener = vi.fn()
      const unsubscribe = toastStore.subscribe(listener)

      toastStore.addItem(makeItem("a"))
      unsubscribe()
      toastStore.addItem(makeItem("b"))

      expect(listener).toHaveBeenCalledTimes(1)
    })

    it("does not notify when removing an unknown id", () => {
      const listener = vi.fn()
      const unsubscribe = toastStore.subscribe(listener)

      toastStore.removeItem("does-not-exist")

      expect(listener).not.toHaveBeenCalled()
      unsubscribe()
    })

    it("does not notify when clearing an already-empty store", () => {
      const listener = vi.fn()
      const unsubscribe = toastStore.subscribe(listener)

      toastStore.clear()

      expect(listener).not.toHaveBeenCalled()
      unsubscribe()
    })
  })

  describe("renderer election", () => {
    it("reports whether any provider is mounted", () => {
      expect(toastStore.hasProvider()).toBe(false)

      const renderer = toastStore.acquireRenderer()
      expect(toastStore.hasProvider()).toBe(true)

      renderer.release()
      expect(toastStore.hasProvider()).toBe(false)
    })

    it("elects the lowest mounted id as the active renderer", () => {
      const first = toastStore.acquireRenderer()
      const second = toastStore.acquireRenderer()

      // Lowest id wins, regardless of acquisition order.
      const expectedActive = Math.min(first.id, second.id)
      expect(toastStore.getActiveRendererId()).toBe(expectedActive)

      first.release()
      expect(toastStore.getActiveRendererId()).toBe(second.id)

      second.release()
      expect(toastStore.getActiveRendererId()).toBeNull()
    })

    it("notifies renderer subscribers on acquire and release", () => {
      const listener = vi.fn()
      const unsubscribe = toastStore.subscribeRenderer(listener)

      const renderer = toastStore.acquireRenderer()
      renderer.release()

      expect(listener).toHaveBeenCalledTimes(2)
      unsubscribe()
    })
  })
})
