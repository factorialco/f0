import { zeroRender, zeroRenderHook } from "@/testing/test-utils"
import { act, waitFor } from "@testing-library/react"
import React from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { useDialog } from "../useDialog"
import type { DialogDefinition } from "../types"

// Mock nanoid
let nanoidCounter = 0
const mockNanoid = vi.fn(() => `mock-id-${++nanoidCounter}`)
vi.mock("nanoid", () => ({
  nanoid: () => mockNanoid(),
}))

// Mock useDialogsLayoutContext
const mockSetDialogsLayoutChildren = vi.fn()
vi.mock("@/lib/providers/dialogsLayout/DialogsLayoutProvider", () => ({
  useDialogsLayoutContext: () => ({
    setDialogsLayoutChildren: mockSetDialogsLayoutChildren,
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

// Mock Dialogs component
const MockDialogs = vi.hoisted(() =>
  vi.fn(() => <div data-testid="dialogs-component" />)
)
vi.mock("../components/Dialogs", () => ({
  Dialogs: MockDialogs,
}))

describe("useDialog", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    nanoidCounter = 0
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

    it("should call setDialogsLayoutChildren with Dialogs component on mount", async () => {
      zeroRenderHook(() => useDialog())

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      // Verify that Dialogs was called with empty array
      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]

      // Render the element to verify it's the Dialogs component
      zeroRender(dialogsElement as React.ReactElement)
      expect(MockDialogs).toHaveBeenCalledWith(
        { dialogs: [] },
        expect.anything()
      )
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      // Render the element to trigger MockDialogs
      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      expect(MockDialogs).toHaveBeenCalledWith(
        expect.objectContaining({
          dialogs: expect.arrayContaining([
            expect.objectContaining({
              title: "Test Dialog",
            }),
          ]),
        }),
        expect.anything()
      )

      // Resolve the promise by clicking the action
      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]
      act(() => {
        dialog.onClickAction(dialog.actions.primary, true)
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      expect(mockNanoid).toHaveBeenCalled()
      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      expect(MockDialogs).toHaveBeenCalledWith(
        expect.objectContaining({
          dialogs: expect.arrayContaining([
            expect.objectContaining({
              id: "mock-id-1",
            }),
          ]),
        }),
        expect.anything()
      )
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      expect(MockDialogs).toHaveBeenCalledWith(
        expect.objectContaining({
          dialogs: expect.arrayContaining([
            expect.objectContaining({
              id: "custom-id",
            }),
          ]),
        }),
        expect.anything()
      )
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      act(() => {
        dialog.onClickAction(dialog.actions.primary, "test-value")
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall1 =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement1 = lastCall1[0]
      zeroRender(dialogsElement1 as React.ReactElement)

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      act(() => {
        dialog.onClickAction(dialog.actions.primary, true)
      })

      await promise

      await waitFor(() => {
        const lastCall2 =
          mockSetDialogsLayoutChildren.mock.calls[
            mockSetDialogsLayoutChildren.mock.calls.length - 1
          ]
        const dialogsElement2 = lastCall2[0]
        zeroRender(dialogsElement2 as React.ReactElement)
        expect(MockDialogs).toHaveBeenCalledWith(
          expect.objectContaining({
            dialogs: [],
          }),
          expect.anything()
        )
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall1 =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement1 = lastCall1[0]
      zeroRender(dialogsElement1 as React.ReactElement)

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      act(() => {
        dialog.onClickAction(dialog.actions.primary, true)
      })

      await promise

      await waitFor(() => {
        const lastCall2 =
          mockSetDialogsLayoutChildren.mock.calls[
            mockSetDialogsLayoutChildren.mock.calls.length - 1
          ]
        const dialogsElement2 = lastCall2[0]
        zeroRender(dialogsElement2 as React.ReactElement)
        expect(MockDialogs).toHaveBeenCalledWith(
          expect.objectContaining({
            dialogs: expect.arrayContaining([
              expect.objectContaining({
                id: dialog.id,
              }),
            ]),
          }),
          expect.anything()
        )
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      expect(MockDialogs).toHaveBeenCalledWith(
        expect.objectContaining({
          dialogs: expect.arrayContaining([
            expect.objectContaining({
              title: "Dialog 1",
            }),
            expect.objectContaining({
              title: "Dialog 2",
            }),
          ]),
        }),
        expect.anything()
      )

      const dialogs = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs

      act(() => {
        dialogs[0].onClickAction(dialogs[0].actions.primary, "value1")
        dialogs[1].onClickAction(dialogs[1].actions.primary, "value2")
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      act(() => {
        dialog.onCloseDialog()
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      expect(MockDialogs).toHaveBeenCalledWith(
        expect.objectContaining({
          dialogs: expect.arrayContaining([
            expect.objectContaining({
              actions: expect.objectContaining({
                primary: expect.arrayContaining([
                  expect.objectContaining({ label: "Action 1" }),
                  expect.objectContaining({ label: "Action 2" }),
                ]),
                secondary: expect.arrayContaining([
                  expect.objectContaining({ label: "Cancel" }),
                ]),
              }),
            }),
          ]),
        }),
        expect.anything()
      )
    })
  })

  describe("alert", () => {
    it("should create alert dialog with title and message", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.alert("Alert Title", "Alert Message")

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      expect(MockDialogs).toHaveBeenCalledWith(
        expect.objectContaining({
          dialogs: expect.arrayContaining([
            expect.objectContaining({
              title: "Alert Title",
            }),
          ]),
        }),
        expect.anything()
      )

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      act(() => {
        dialog.onClickAction(dialog.actions.primary, true)
      })

      const value = await promise
      expect(value).toBe(true)
    })

    it("should use default OK button label from i18n", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      result.current.alert("Title", "Message")

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      await waitFor(() => {
        expect(MockDialogs).toHaveBeenCalled()
      })

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      expect(dialog.actions.primary.label).toBe("OK")
    })

    it("should use custom confirm options when provided", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.alert("Title", "Message", {
        confirm: {
          label: "Custom OK",
          value: "custom-value",
        },
      })

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      expect(dialog.actions.primary.label).toBe("Custom OK")
      expect(dialog.actions.primary.value).toBe("custom-value")

      act(() => {
        dialog.onClickAction(dialog.actions.primary, "custom-value")
      })

      const value = await promise
      expect(value).toBe("custom-value")
    })

    it("should use custom ID when provided", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      result.current.alert("Title", "Message", {
        id: "custom-alert-id",
      })

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      expect(MockDialogs).toHaveBeenCalledWith(
        expect.objectContaining({
          dialogs: expect.arrayContaining([
            expect.objectContaining({
              id: "custom-alert-id",
            }),
          ]),
        }),
        expect.anything()
      )
    })

    it("should return promise with confirm value", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.alert("Title", "Message", {
        confirm: {
          value: "alert-result",
        },
      })

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      act(() => {
        dialog.onClickAction(dialog.actions.primary, "alert-result")
      })

      const value = await promise
      expect(value).toBe("alert-result")
    })
  })

  describe("confirm", () => {
    it("should create confirm dialog with title and message", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.confirm("Confirm Title", "Confirm Message")

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      expect(MockDialogs).toHaveBeenCalledWith(
        expect.objectContaining({
          dialogs: expect.arrayContaining([
            expect.objectContaining({
              title: "Confirm Title",
            }),
          ]),
        }),
        expect.anything()
      )

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      act(() => {
        dialog.onClickAction(dialog.actions.primary, true)
      })

      const value = await promise
      expect(value).toBe(true)
    })

    it("should use default OK and Cancel labels from i18n", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      result.current.confirm("Title", "Message")

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      expect(dialog.actions.primary.label).toBe("OK")
      expect(dialog.actions.secondary?.label).toBe("Cancel")
    })

    it("should use custom confirm and cancel options when provided", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.confirm("Title", "Message", {
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      expect(dialog.actions.primary.label).toBe("Yes")
      expect(dialog.actions.primary.value).toBe("yes")
      expect(dialog.actions.secondary?.label).toBe("No")
      expect(dialog.actions.secondary?.value).toBe("no")

      act(() => {
        dialog.onClickAction(dialog.actions.secondary!, "no")
      })

      const value = await promise
      expect(value).toBe("no")
    })

    it("should use custom ID when provided", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      result.current.confirm("Title", "Message", {
        id: "custom-confirm-id",
      })

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      expect(MockDialogs).toHaveBeenCalledWith(
        expect.objectContaining({
          dialogs: expect.arrayContaining([
            expect.objectContaining({
              id: "custom-confirm-id",
            }),
          ]),
        }),
        expect.anything()
      )
    })

    it("should return promise with selected value", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      const promise = result.current.confirm("Title", "Message")

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      act(() => {
        dialog.onClickAction(dialog.actions.secondary!, false)
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      act(() => {
        result.current.closeDialog("dialog-to-close")
      })

      await waitFor(() => {
        const lastCall =
          mockSetDialogsLayoutChildren.mock.calls[
            mockSetDialogsLayoutChildren.mock.calls.length - 1
          ]
        const dialogsElement = lastCall[0]
        zeroRender(dialogsElement as React.ReactElement)
        expect(MockDialogs).toHaveBeenCalledWith(
          expect.objectContaining({
            dialogs: [],
          }),
          expect.anything()
        )
      })
    })

    it("should handle closing non-existent dialog gracefully", async () => {
      const { result } = zeroRenderHook(() => useDialog())

      act(() => {
        result.current.closeDialog("non-existent-id")
      })

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      const lastCall =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement = lastCall[0]
      zeroRender(dialogsElement as React.ReactElement)

      expect(MockDialogs).toHaveBeenCalledWith(
        expect.objectContaining({
          dialogs: [],
        }),
        expect.anything()
      )
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalled()
      })

      act(() => {
        result.current.closeDialog("dialog-1")
      })

      await waitFor(() => {
        const lastCall =
          mockSetDialogsLayoutChildren.mock.calls[
            mockSetDialogsLayoutChildren.mock.calls.length - 1
          ]
        const dialogsElement = lastCall[0]
        zeroRender(dialogsElement as React.ReactElement)
        expect(MockDialogs).toHaveBeenCalledWith(
          expect.objectContaining({
            dialogs: expect.arrayContaining([
              expect.objectContaining({
                id: "dialog-2",
              }),
            ]),
          }),
          expect.anything()
        )
      })
    })
  })

  describe("useEffect integration", () => {
    it("should update dialogs layout children when dialogs change", async () => {
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
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalledTimes(2) // Initial + dialog added
      })

      const lastCall1 =
        mockSetDialogsLayoutChildren.mock.calls[
          mockSetDialogsLayoutChildren.mock.calls.length - 1
        ]
      const dialogsElement1 = lastCall1[0]
      zeroRender(dialogsElement1 as React.ReactElement)

      const dialog = (
        MockDialogs.mock.calls[MockDialogs.mock.calls.length - 1] as any
      )[0].dialogs[0]

      act(() => {
        dialog.onClickAction(dialog.actions.primary, true)
      })

      await waitFor(() => {
        expect(mockSetDialogsLayoutChildren).toHaveBeenCalledTimes(3) // + dialog removed
      })
    })
  })
})
