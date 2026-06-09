import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { dialog, drawer } from "../imperative"
import { dialogsAlikeStore } from "../store"

// The imperative API stores raw items in the module store and exposes
// `onClickAction` / `onCloseDialog` callbacks on each item. The real renderer
// invokes these; here we call them directly to simulate user interaction.
const currentItem = () => {
  const items = dialogsAlikeStore.getSnapshot()
  return items[items.length - 1] as any
}

describe("imperative dialog / drawer API", () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    dialogsAlikeStore.clear()
    dialogsAlikeStore.setDefaultActionLabels({ ok: "Ok", cancel: "Cancel" })
    // No <F0Provider> is mounted in these unit tests, so the imperative
    // functions warn. Silence it (one dedicated test asserts the warning).
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
  })

  afterEach(() => {
    warnSpy.mockRestore()
  })

  describe("dialog.open", () => {
    it("adds a default-variant item to the store", () => {
      dialog.open({
        id: "d1",
        title: "Title",
        description: "Desc",
        content: "content",
        actions: { primary: { value: "ok", label: "OK" } },
      })

      const item = currentItem()
      expect(dialogsAlikeStore.getSnapshot()).toHaveLength(1)
      expect(item.id).toBe("d1")
      expect(item.variant).toBe("default")
      expect(item.title).toBe("Title")
    })

    it("resolves with the clicked action value and removes the item", async () => {
      const promise = dialog.open({
        id: "d1",
        title: "Title",
        content: "content",
        actions: { primary: { value: "saved", label: "Save" } },
      })

      const item = currentItem()
      item.onClickAction(item.actions.primary, "saved")

      await expect(promise).resolves.toBe("saved")
      expect(dialogsAlikeStore.getSnapshot()).toHaveLength(0)
    })

    it("resolves undefined and removes the item when closed (overlay/esc)", async () => {
      const promise = dialog.open({
        id: "d1",
        title: "Title",
        content: "content",
        actions: { primary: { value: "ok", label: "OK" } },
      })

      currentItem().onCloseDialog()

      await expect(promise).resolves.toBeUndefined()
      expect(dialogsAlikeStore.getSnapshot()).toHaveLength(0)
    })

    it("keeps the item open after a keepOpen action (but still resolves)", async () => {
      const promise = dialog.open({
        id: "d1",
        title: "Title",
        content: "content",
        actions: {
          primary: { value: "applied", label: "Apply", keepOpen: true },
        },
      })

      const item = currentItem()
      item.onClickAction(item.actions.primary, "applied")

      await expect(promise).resolves.toBe("applied")
      // keepOpen → the dialog stays on screen.
      expect(dialogsAlikeStore.getSnapshot()).toHaveLength(1)
    })

    it("auto-generates an id when none is provided", () => {
      dialog.open({
        title: "Title",
        content: "content",
        actions: { primary: { value: "ok", label: "OK" } },
      })
      expect(currentItem().id).toEqual(expect.any(String))
      expect(currentItem().id.length).toBeGreaterThan(0)
    })
  })

  describe("dialog.close", () => {
    it("closes an open dialog by id and resolves its promise with undefined", async () => {
      const promise = dialog.open({
        id: "d1",
        title: "Title",
        content: "content",
        actions: { primary: { value: "ok", label: "OK" } },
      })

      dialog.close("d1")

      await expect(promise).resolves.toBeUndefined()
      expect(dialogsAlikeStore.getSnapshot()).toHaveLength(0)
    })

    it("falls back to removing the item if no close callback is registered", () => {
      dialogsAlikeStore.addItem({ id: "orphan" } as any)
      dialog.close("orphan")
      expect(dialogsAlikeStore.getSnapshot()).toHaveLength(0)
    })
  })

  describe("dialog.notification", () => {
    it("adds a notification-variant item defaulting to type 'info'", () => {
      dialog.notification({
        title: "Heads up",
        msg: "Something happened",
        actions: { primary: { value: "ok", label: "OK" } },
      })

      const item = currentItem()
      expect(item.variant).toBe("notification")
      expect(item.type).toBe("info")
      expect(item.description).toBe("Something happened")
    })

    it("honors an explicit type", () => {
      dialog.notification({
        title: "Careful",
        msg: "Warning",
        type: "warning",
        actions: { primary: { value: "ok", label: "OK" } },
      })
      expect(currentItem().type).toBe("warning")
    })
  })

  describe("dialog.alert", () => {
    it("builds a single primary action with the default 'ok' label", () => {
      dialog.alert({ title: "Done", msg: "Saved" })
      const item = currentItem()
      expect(item.variant).toBe("notification")
      expect(item.actions.primary.label).toBe("Ok")
      expect(item.actions.primary.value).toBe(true)
      expect(item.actions.secondary).toBeUndefined()
    })

    it("uses the registered i18n default label", () => {
      dialogsAlikeStore.setDefaultActionLabels({
        ok: "Aceptar",
        cancel: "Cancelar",
      })
      dialog.alert({ title: "Done", msg: "Saved" })
      expect(currentItem().actions.primary.label).toBe("Aceptar")
    })

    it("resolves with the confirm value when clicked", async () => {
      const promise = dialog.alert({ title: "Done", msg: "Saved" })
      const item = currentItem()
      item.onClickAction(item.actions.primary, true)
      await expect(promise).resolves.toBe(true)
    })
  })

  describe("dialog.confirm", () => {
    it("builds primary + secondary actions with default ok/cancel labels", () => {
      dialog.confirm({ title: "Sure?", msg: "Confirm this" })
      const item = currentItem()
      expect(item.actions.primary.label).toBe("Ok")
      expect(item.actions.primary.value).toBe(true)
      expect(item.actions.secondary.label).toBe("Cancel")
      expect(item.actions.secondary.value).toBe(false)
    })

    it("resolves false when the cancel action is clicked", async () => {
      const promise = dialog.confirm({ title: "Sure?", msg: "Confirm this" })
      const item = currentItem()
      item.onClickAction(item.actions.secondary, false)
      await expect(promise).resolves.toBe(false)
    })

    it("supports custom confirm value and label", () => {
      dialog.confirm({
        title: "Delete?",
        msg: "This cannot be undone",
        confirm: { value: "deleted", label: "Delete" },
      })
      const item = currentItem()
      expect(item.actions.primary.value).toBe("deleted")
      expect(item.actions.primary.label).toBe("Delete")
    })
  })

  describe("drawer.open", () => {
    it("adds a drawer-variant item to the store", () => {
      drawer.open({
        id: "dr1",
        title: "Edit",
        content: "form",
        actions: { primary: { value: "save", label: "Save" } },
      })
      const item = currentItem()
      expect(item.variant).toBe("drawer")
      expect(item.id).toBe("dr1")
    })

    it("resolves with the clicked value and removes the item", async () => {
      const promise = drawer.open({
        id: "dr1",
        title: "Edit",
        content: "form",
        actions: { primary: { value: "save", label: "Save" } },
      })
      const item = currentItem()
      item.onClickAction(item.actions.primary, "save")
      await expect(promise).resolves.toBe("save")
      expect(dialogsAlikeStore.getSnapshot()).toHaveLength(0)
    })

    it("can be closed programmatically with drawer.close", async () => {
      const promise = drawer.open({
        id: "dr1",
        title: "Edit",
        content: "form",
        actions: { primary: { value: "save", label: "Save" } },
      })
      drawer.close("dr1")
      await expect(promise).resolves.toBeUndefined()
      expect(dialogsAlikeStore.getSnapshot()).toHaveLength(0)
    })
  })

  describe("provider warning", () => {
    it("warns when no <F0Provider> is mounted", () => {
      dialog.open({
        title: "Title",
        content: "content",
        actions: { primary: { value: "ok", label: "OK" } },
      })
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining("no <F0Provider>")
      )
    })

    it("does not warn when a renderer is mounted", () => {
      const handle = dialogsAlikeStore.acquireRenderer()
      dialog.open({
        title: "Title",
        content: "content",
        actions: { primary: { value: "ok", label: "OK" } },
      })
      expect(warnSpy).not.toHaveBeenCalled()
      handle.release()
    })
  })
})
