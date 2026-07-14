import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import type { DialogDefinitionProviderItem } from "../internal-types"
import { dialogsAlikeStore } from "../store"

// Minimal item — the store only cares about `id`.
const makeItem = (id: string): DialogDefinitionProviderItem =>
  ({ id }) as unknown as DialogDefinitionProviderItem

describe("dialogsAlikeStore", () => {
  beforeEach(() => {
    dialogsAlikeStore.clear()
    dialogsAlikeStore.setDefaultActionLabels({ ok: "Ok", cancel: "Cancel" })
  })

  describe("items", () => {
    it("starts empty", () => {
      expect(dialogsAlikeStore.getSnapshot()).toEqual([])
    })

    it("addItem appends and notifies subscribers", () => {
      const listener = vi.fn()
      const unsubscribe = dialogsAlikeStore.subscribe(listener)

      dialogsAlikeStore.addItem(makeItem("a"))
      dialogsAlikeStore.addItem(makeItem("b"))

      expect(dialogsAlikeStore.getSnapshot().map((i) => i.id)).toEqual([
        "a",
        "b",
      ])
      expect(listener).toHaveBeenCalledTimes(2)
      unsubscribe()
    })

    it("returns a new array reference on mutation (snapshot stability)", () => {
      const before = dialogsAlikeStore.getSnapshot()
      dialogsAlikeStore.addItem(makeItem("a"))
      const after = dialogsAlikeStore.getSnapshot()
      expect(after).not.toBe(before)
    })

    it("removeItem removes the matching id and notifies", () => {
      const listener = vi.fn()
      dialogsAlikeStore.addItem(makeItem("a"))
      dialogsAlikeStore.addItem(makeItem("b"))
      dialogsAlikeStore.subscribe(listener)

      dialogsAlikeStore.removeItem("a")

      expect(dialogsAlikeStore.getSnapshot().map((i) => i.id)).toEqual(["b"])
      expect(listener).toHaveBeenCalledTimes(1)
    })

    it("removeItem is a no-op (no notification) when id is absent", () => {
      const listener = vi.fn()
      dialogsAlikeStore.addItem(makeItem("a"))
      dialogsAlikeStore.subscribe(listener)

      dialogsAlikeStore.removeItem("does-not-exist")

      expect(dialogsAlikeStore.getSnapshot().map((i) => i.id)).toEqual(["a"])
      expect(listener).not.toHaveBeenCalled()
    })

    it("clear empties the store and notifies once", () => {
      const listener = vi.fn()
      dialogsAlikeStore.addItem(makeItem("a"))
      dialogsAlikeStore.addItem(makeItem("b"))
      dialogsAlikeStore.subscribe(listener)

      dialogsAlikeStore.clear()

      expect(dialogsAlikeStore.getSnapshot()).toEqual([])
      expect(listener).toHaveBeenCalledTimes(1)
    })

    it("clear is a no-op (no notification) when already empty", () => {
      const listener = vi.fn()
      dialogsAlikeStore.subscribe(listener)
      dialogsAlikeStore.clear()
      expect(listener).not.toHaveBeenCalled()
    })

    it("subscribe returns an unsubscribe that stops notifications", () => {
      const listener = vi.fn()
      const unsubscribe = dialogsAlikeStore.subscribe(listener)
      unsubscribe()
      dialogsAlikeStore.addItem(makeItem("a"))
      expect(listener).not.toHaveBeenCalled()
    })

    it("getServerSnapshot returns a stable empty array", () => {
      dialogsAlikeStore.addItem(makeItem("a"))
      // The server snapshot is always empty regardless of client items.
      expect(dialogsAlikeStore.getServerSnapshot()).toEqual([])
      expect(dialogsAlikeStore.getServerSnapshot()).toBe(
        dialogsAlikeStore.getServerSnapshot()
      )
    })
  })

  describe("default action labels", () => {
    it("defaults to Ok / Cancel", () => {
      expect(dialogsAlikeStore.getDefaultActionLabels()).toEqual({
        ok: "Ok",
        cancel: "Cancel",
      })
    })

    it("setDefaultActionLabels overrides them (for i18n)", () => {
      dialogsAlikeStore.setDefaultActionLabels({
        ok: "Aceptar",
        cancel: "Cancelar",
      })
      expect(dialogsAlikeStore.getDefaultActionLabels()).toEqual({
        ok: "Aceptar",
        cancel: "Cancelar",
      })
    })
  })

  describe("renderer election", () => {
    // Release everything we acquire so the singleton is clean for other suites.
    const acquired: Array<{ release: () => void }> = []
    const acquire = () => {
      const handle = dialogsAlikeStore.acquireRenderer()
      acquired.push(handle)
      return handle
    }
    afterEach(() => {
      while (acquired.length) acquired.pop()!.release()
    })

    it("reports no provider until one is acquired", () => {
      expect(dialogsAlikeStore.hasProvider()).toBe(false)
      expect(dialogsAlikeStore.getActiveRendererId()).toBeNull()
    })

    it("acquireRenderer assigns increasing ids and tracks mounted state", () => {
      const a = acquire()
      const b = acquire()
      expect(b.id).toBeGreaterThan(a.id)
      expect(dialogsAlikeStore.hasProvider()).toBe(true)
    })

    it("elects the lowest mounted id as the active renderer", () => {
      const a = acquire()
      acquire()
      expect(dialogsAlikeStore.getActiveRendererId()).toBe(a.id)
    })

    it("hands election to the next lowest when the leader releases", () => {
      const a = acquire()
      const b = acquire()
      expect(dialogsAlikeStore.getActiveRendererId()).toBe(a.id)

      a.release()
      expect(dialogsAlikeStore.getActiveRendererId()).toBe(b.id)
    })

    it("notifies renderer subscribers on acquire and release", () => {
      const listener = vi.fn()
      const unsubscribe = dialogsAlikeStore.subscribeRenderer(listener)

      const a = acquire()
      expect(listener).toHaveBeenCalledTimes(1)

      a.release()
      expect(listener).toHaveBeenCalledTimes(2)
      unsubscribe()
    })

    it("returns null again once all renderers release", () => {
      const a = acquire()
      a.release()
      expect(dialogsAlikeStore.getActiveRendererId()).toBeNull()
      expect(dialogsAlikeStore.hasProvider()).toBe(false)
    })
  })
})
