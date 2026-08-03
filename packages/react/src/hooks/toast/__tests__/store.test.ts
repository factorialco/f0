import { describe, expect, it, vi } from "vitest"

import { toastStore } from "../store"

describe("toastStore", () => {
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
