import { zeroRenderHook } from "@/testing/test-utils"
import { act, waitFor } from "@testing-library/react"
import React from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { useDialog } from "../useDialog"
import type { DialogDefinition } from "../../../lib/providers/dialogs/types"

// Mock nanoid
let nanoidCounter = 0
const mockNanoid = vi.fn(() => `mock-id-${++nanoidCounter}`)
vi.mock("nanoid", () => ({
  nanoid: () => mockNanoid(),
}))

// Mock useDialogsLayoutContext
const mockAddDialog = vi.fn()
const mockRemoveDialog = vi.fn()
vi.mock("@/lib/providers/dialogs/DialogsLayoutProvider", () => ({
  useDialogsLayoutContext: () => ({
    addDialog: mockAddDialog,
    removeDialog: mockRemoveDialog,
  }),
}))

// Mock useI18n - partially mock to keep I18nProvider export
vi.mock("@/lib/providers/i18n", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/providers/i18n")>()
  return {
    ...actual,
    useI18n: () => ({
      actions: {
        ok: "OK",
        cancel: "Cancel",
      },
    }),
  }
})

describe("useDialog", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    nanoidCounter = 0
    mockAddDialog.mockClear()
    mockRemoveDialog.mockClear()
  })

  describe("hook initialization", () => {
    it("should initialize and return all methods", () => {
      const { result } = zeroRenderHook(() => useDialog())

      expect(result.current).toHaveProperty("openDialog")
      expect(result.current).toHaveProperty("alert")
      expect(result.current).toHaveProperty("confirm")
      expect(result.current).toHaveProperty("closeDialog")
      expect(typeof result.current.openDialog).toBe("function")
      expect(typeof result.current.alert).toBe("function")
      expect(typeof result.current.confirm).toBe("function")
      expect(typeof result.current.closeDialog).toBe("function")
    })

    it("should not call addDialog on mount", () => {
      zeroRenderHook(() => useDialog())

      // The hook should not add any dialogs on mount
      expect(mockAddDialog).not.toHaveBeenCalled()
    })
  })

  describe("openDialog", () => {
    it("should create dialog with provided definition", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition: Omit<DialogDefinition, "id"> = {
        title: "Test Dialog",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      const promise = result.current.openDialog(definition)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      // Get the dialog that was added
      const addedDialog = mockAddDialog.mock.calls[0][0]
      expect(addedDialog).toMatchObject({
        title: "Test Dialog",
      })

      // Resolve the promise by clicking the action
      act(() => {
        addedDialog.onClickAction(addedDialog.actions.primary, true)
      })

      const value = await promise
      expect(value).toBe(true)
    })

    it("should auto-generate ID when not provided", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition: Omit<DialogDefinition, "id"> = {
        title: "Test Dialog",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      result.current.openDialog(definition)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      expect(mockNanoid).toHaveBeenCalled()
      const addedDialog = mockAddDialog.mock.calls[0][0]
      expect(addedDialog).toMatchObject({
        id: "mock-id-1",
      })
    })

    it("should use provided ID when given", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition: DialogDefinition = {
        id: "custom-id",
        title: "Test Dialog",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      result.current.openDialog(definition)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]
      expect(addedDialog).toMatchObject({
        id: "custom-id",
      })
    })

    it("should return promise that resolves with action value", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition: Omit<DialogDefinition, "id"> = {
        title: "Test Dialog",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: "test-value",
          },
        },
      }

      const promise = result.current.openDialog(definition)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]

      act(() => {
        addedDialog.onClickAction(addedDialog.actions.primary, "test-value")
      })

      const value = await promise
      expect(value).toBe("test-value")
    })

    it("should remove dialog after action unless keepOpen is true", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition: Omit<DialogDefinition, "id"> = {
        title: "Test Dialog",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
            keepOpen: false,
          },
        },
      }

      const promise = result.current.openDialog(definition)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]

      act(() => {
        addedDialog.onClickAction(addedDialog.actions.primary, true)
      })

      await promise

      await waitFor(() => {
        expect(mockRemoveDialog).toHaveBeenCalledWith(addedDialog.id)
      })
    })

    it("should keep dialog open when action has keepOpen: true", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition: Omit<DialogDefinition, "id"> = {
        title: "Test Dialog",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
            keepOpen: true,
          },
        },
      }

      const promise = result.current.openDialog(definition)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]

      act(() => {
        addedDialog.onClickAction(addedDialog.actions.primary, true)
      })

      await promise

      // Dialog should not be removed when keepOpen is true
      await waitFor(() => {
        expect(mockRemoveDialog).not.toHaveBeenCalled()
      })
    })

    it("should handle multiple dialogs simultaneously", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition1: Omit<DialogDefinition, "id"> = {
        title: "Dialog 1",
        content: <div>Content 1</div>,
        actions: {
          primary: {
            label: "OK",
            value: "value1",
          },
        },
      }

      const definition2: Omit<DialogDefinition, "id"> = {
        title: "Dialog 2",
        content: <div>Content 2</div>,
        actions: {
          primary: {
            label: "OK",
            value: "value2",
          },
        },
      }

      const promise1 = result.current.openDialog(definition1)
      const promise2 = result.current.openDialog(definition2)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalledTimes(2)
      })

      const dialog1 = mockAddDialog.mock.calls[0][0]
      const dialog2 = mockAddDialog.mock.calls[1][0]

      expect(dialog1).toMatchObject({ title: "Dialog 1" })
      expect(dialog2).toMatchObject({ title: "Dialog 2" })

      act(() => {
        dialog1.onClickAction(dialog1.actions.primary, "value1")
        dialog2.onClickAction(dialog2.actions.primary, "value2")
      })

      const value1 = await promise1
      const value2 = await promise2

      expect(value1).toBe("value1")
      expect(value2).toBe("value2")
    })

    it("should resolve with undefined when dialog is closed without action", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition: Omit<DialogDefinition, "id"> = {
        title: "Test Dialog",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      const promise = result.current.openDialog(definition)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]

      act(() => {
        addedDialog.onCloseDialog()
      })

      const value = await promise
      expect(value).toBeUndefined()
    })

    it("should handle dialog with array of actions", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition: Omit<DialogDefinition, "id"> = {
        title: "Test Dialog",
        content: <div>Test Content</div>,
        actions: {
          primary: [
            {
              label: "Action 1",
              value: "value1",
            },
            {
              label: "Action 2",
              value: "value2",
            },
          ],
          secondary: [
            {
              label: "Cancel",
              value: false,
            },
          ],
        },
      }

      result.current.openDialog(definition)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]
      expect(addedDialog.actions.primary).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ label: "Action 1" }),
          expect.objectContaining({ label: "Action 2" }),
        ])
      )
      expect(addedDialog.actions.secondary).toEqual(
        expect.arrayContaining([expect.objectContaining({ label: "Cancel" })])
      )
    })
  })

  describe("alert", () => {
    it("should create alert dialog with title and message", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.alert({
        title: "Alert Title",
        message: "Alert Message",
      })

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]
      expect(addedDialog).toMatchObject({
        title: "Alert Title",
      })

      act(() => {
        addedDialog.onClickAction(addedDialog.actions.primary, true)
      })

      const value = await promise
      expect(value).toBe(true)
    })

    it("should use default OK button label from i18n", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      result.current.alert({ title: "Title", message: "Message" })

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]
      expect(addedDialog.actions.primary.label).toBe("OK")
    })

    it("should use custom confirm options when provided", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.alert({
        title: "Title",
        message: "Message",
        confirm: {
          label: "Custom OK",
          value: "custom-value",
        },
      })

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]

      expect(addedDialog.actions.primary.label).toBe("Custom OK")
      expect(addedDialog.actions.primary.value).toBe("custom-value")

      act(() => {
        addedDialog.onClickAction(addedDialog.actions.primary, "custom-value")
      })

      const value = await promise
      expect(value).toBe("custom-value")
    })

    it("should use custom ID when provided", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      result.current.alert({
        title: "Title",
        message: "Message",
        id: "custom-alert-id",
      })

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]
      expect(addedDialog).toMatchObject({
        id: "custom-alert-id",
      })
    })

    it("should return promise with confirm value", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.alert({
        title: "Title",
        message: "Message",
        confirm: {
          value: "alert-result",
        },
      })

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]

      act(() => {
        addedDialog.onClickAction(addedDialog.actions.primary, "alert-result")
      })

      const value = await promise
      expect(value).toBe("alert-result")
    })
  })

  describe("confirm", () => {
    it("should create confirm dialog with title and message", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.confirm({
        title: "Confirm Title",
        message: "Confirm Message",
      })

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]
      expect(addedDialog).toMatchObject({
        title: "Confirm Title",
      })

      act(() => {
        addedDialog.onClickAction(addedDialog.actions.primary, true)
      })

      const value = await promise
      expect(value).toBe(true)
    })

    it("should use default OK and Cancel labels from i18n", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      result.current.confirm({ title: "Title", message: "Message" })

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]

      expect(addedDialog.actions.primary.label).toBe("OK")
      expect(addedDialog.actions.secondary?.label).toBe("Cancel")
    })

    it("should use custom confirm and cancel options when provided", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.confirm({
        title: "Title",
        message: "Message",
        confirm: {
          label: "Yes",
          value: "yes",
        },
        cancel: {
          label: "No",
          value: "no",
        },
      })

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]

      expect(addedDialog.actions.primary.label).toBe("Yes")
      expect(addedDialog.actions.primary.value).toBe("yes")
      expect(addedDialog.actions.secondary?.label).toBe("No")
      expect(addedDialog.actions.secondary?.value).toBe("no")

      act(() => {
        addedDialog.onClickAction(addedDialog.actions.secondary!, "no")
      })

      const value = await promise
      expect(value).toBe("no")
    })

    it("should use custom ID when provided", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      result.current.confirm({
        title: "Title",
        message: "Message",
        id: "custom-confirm-id",
      })

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]
      expect(addedDialog).toMatchObject({
        id: "custom-confirm-id",
      })
    })

    it("should return promise with selected value", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.confirm({
        title: "Title",
        message: "Message",
      })

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]

      act(() => {
        addedDialog.onClickAction(addedDialog.actions.secondary!, false)
      })

      const value = await promise
      expect(value).toBe(false)
    })
  })

  describe("closeDialog", () => {
    it("should remove dialog by ID", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition: DialogDefinition = {
        id: "dialog-to-close",
        title: "Test Dialog",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      result.current.openDialog(definition)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalled()
      })

      act(() => {
        result.current.closeDialog("dialog-to-close")
      })

      await waitFor(() => {
        expect(mockRemoveDialog).toHaveBeenCalledWith("dialog-to-close")
      })
    })

    it("should handle closing non-existent dialog gracefully", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      act(() => {
        result.current.closeDialog("non-existent-id")
      })

      // Should call removeDialog even if dialog doesn't exist
      expect(mockRemoveDialog).toHaveBeenCalledWith("non-existent-id")
    })

    it("should only close the specified dialog when multiple dialogs exist", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition1: DialogDefinition = {
        id: "dialog-1",
        title: "Dialog 1",
        content: <div>Content 1</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      const definition2: DialogDefinition = {
        id: "dialog-2",
        title: "Dialog 2",
        content: <div>Content 2</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      result.current.openDialog(definition1)
      result.current.openDialog(definition2)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalledTimes(2)
      })

      act(() => {
        result.current.closeDialog("dialog-1")
      })

      await waitFor(() => {
        expect(mockRemoveDialog).toHaveBeenCalledWith("dialog-1")
      })

      // Should not remove dialog-2
      expect(mockRemoveDialog).not.toHaveBeenCalledWith("dialog-2")
    })
  })

  describe("useEffect integration", () => {
    it("should add and remove dialogs correctly", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const definition: Omit<DialogDefinition, "id"> = {
        title: "Test Dialog",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      const promise = result.current.openDialog(definition)

      await waitFor(() => {
        expect(mockAddDialog).toHaveBeenCalledTimes(1)
      })

      const addedDialog = mockAddDialog.mock.calls[0][0]

      act(() => {
        addedDialog.onClickAction(addedDialog.actions.primary, true)
      })

      await promise

      await waitFor(() => {
        expect(mockRemoveDialog).toHaveBeenCalledTimes(1)
        expect(mockRemoveDialog).toHaveBeenCalledWith(addedDialog.id)
      })
    })
  })
})
