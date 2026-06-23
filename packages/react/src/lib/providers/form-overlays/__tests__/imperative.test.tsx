import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { mountFormOverlay, unmountFormOverlay } from "../imperative"
import { formOverlaysStore } from "../store"

const currentItem = () => {
  const items = formOverlaysStore.getSnapshot()
  return items[items.length - 1]
}

const noopRender = () => null

describe("form overlays imperative API", () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    formOverlaysStore.clear()
    // No <F0Provider> is mounted in these unit tests, so the imperative
    // functions warn. Silence it (one dedicated test asserts the warning).
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
  })

  afterEach(() => {
    warnSpy.mockRestore()
  })

  describe("mountFormOverlay", () => {
    it("adds an overlay item to the store and returns its id", () => {
      const id = mountFormOverlay({ id: "o1", render: noopRender })

      expect(id).toBe("o1")
      expect(formOverlaysStore.getSnapshot()).toHaveLength(1)
      expect(currentItem().id).toBe("o1")
      expect(typeof currentItem().render).toBe("function")
    })

    it("auto-generates an id when none is provided", () => {
      const id = mountFormOverlay({ render: noopRender })
      expect(id).toEqual(expect.any(String))
      expect(id.length).toBeGreaterThan(0)
      expect(currentItem().id).toBe(id)
    })

    it("renders with isOpen derived from the caller", () => {
      const render = vi.fn(noopRender)
      mountFormOverlay({ id: "o1", render })
      // The provider drives `isOpen`; here we just confirm the render fn is
      // stored and callable with the api shape.
      currentItem().render({ isOpen: true })
      expect(render).toHaveBeenCalledWith({ isOpen: true })
    })
  })

  describe("unmountFormOverlay", () => {
    it("runs onDismiss and removes the overlay by id", () => {
      const onDismiss = vi.fn()
      mountFormOverlay({ id: "o1", render: noopRender, onDismiss })

      unmountFormOverlay("o1")

      expect(onDismiss).toHaveBeenCalledTimes(1)
      expect(formOverlaysStore.getSnapshot()).toHaveLength(0)
    })

    it("is idempotent (onDismiss fires at most once)", () => {
      const onDismiss = vi.fn()
      mountFormOverlay({ id: "o1", render: noopRender, onDismiss })

      unmountFormOverlay("o1")
      unmountFormOverlay("o1")

      expect(onDismiss).toHaveBeenCalledTimes(1)
      expect(formOverlaysStore.getSnapshot()).toHaveLength(0)
    })

    it("falls back to removing the item if no dismiss callback is registered", () => {
      formOverlaysStore.addItem({ id: "orphan", render: noopRender })
      unmountFormOverlay("orphan")
      expect(formOverlaysStore.getSnapshot()).toHaveLength(0)
    })
  })

  describe("provider warning", () => {
    it("warns when no <F0Provider> is mounted", () => {
      mountFormOverlay({ render: noopRender })
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining("no <F0Provider>")
      )
    })

    it("does not warn when a renderer is mounted", () => {
      const handle = formOverlaysStore.acquireRenderer()
      mountFormOverlay({ render: noopRender })
      expect(warnSpy).not.toHaveBeenCalled()
      handle.release()
    })
  })
})
