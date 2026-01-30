import { act, waitFor } from "@testing-library/react"
import React from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import { DrawerDefinition } from "../types"
import { useDrawer } from "../useDrawer"

// Mock nanoid
let nanoidCounter = 0
const mockNanoid = vi.fn(() => `mock-id-${++nanoidCounter}`)
vi.mock("nanoid", () => ({
  nanoid: () => mockNanoid(),
}))

// Mock useDialogsLayoutContext
const mockAddDialog = vi.fn()
const mockRemoveDialog = vi.fn()
const mockAddDrawer = vi.fn()
const mockRemoveDrawer = vi.fn()
vi.mock("@/lib/providers/dialogs-alike/DialogsAlikeLayoutProvider", () => ({
  useDialogsLayoutContext: () => ({
    addDialog: mockAddDialog,
    removeDialog: mockRemoveDialog,
    addDrawer: mockAddDrawer,
    removeDrawer: mockRemoveDrawer,
  }),
  useDialogsAlikeLayoutContext: () => ({
    addDialog: mockAddDialog,
    removeDialog: mockRemoveDialog,
    addDrawer: mockAddDrawer,
    removeDrawer: mockRemoveDrawer,
  }),
}))

describe("useDrawer", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    nanoidCounter = 0
    mockAddDialog.mockClear()
    mockRemoveDialog.mockClear()
  })

  describe("hook initialization", () => {
    it("should initialize and return all methods", () => {
      const { result } = zeroRenderHook(() => useDrawer())

      expect(result.current).toHaveProperty("openDrawer")
      expect(result.current).toHaveProperty("closeDrawer")
      expect(typeof result.current.openDrawer).toBe("function")
      expect(typeof result.current.closeDrawer).toBe("function")
    })

    it("should not call addDialog on mount", () => {
      zeroRenderHook(() => useDrawer())

      // The hook should not add any dialogs on mount
      expect(mockAddDrawer).not.toHaveBeenCalled()
    })
  })

  describe("openDrawer", () => {
    it("should create drawer with provided definition", async () => {
      const { result } = zeroRenderHook(() => useDrawer())

      const definition: Omit<DrawerDefinition, "id"> = {
        title: "Test Drawer",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      const promise = result.current.openDrawer(definition)

      await waitFor(() => {
        expect(mockAddDrawer).toHaveBeenCalled()
      })

      // Get the drawer that was added
      const addedDrawer = mockAddDrawer.mock.calls[0][0]
      expect(addedDrawer).toMatchObject({
        title: "Test Drawer",
        variant: "drawer",
      })

      // Resolve the promise by clicking the action
      act(() => {
        addedDrawer.onClickAction(addedDrawer.actions.primary, true)
      })

      const value = await promise
      expect(value).toBe(true)
    })

    it("should auto-generate ID when not provided", async () => {
      const { result } = zeroRenderHook(() => useDrawer())

      const definition: Omit<DrawerDefinition, "id"> = {
        title: "Test Drawer",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      result.current.openDrawer(definition)

      await waitFor(() => {
        expect(mockAddDrawer).toHaveBeenCalled()
      })

      expect(mockNanoid).toHaveBeenCalled()
      const addedDrawer = mockAddDrawer.mock.calls[0][0]
      expect(addedDrawer).toMatchObject({
        id: "mock-id-1",
      })
    })

    it("should use provided ID when given", async () => {
      const { result } = zeroRenderHook(() => useDrawer())

      const definition: DrawerDefinition = {
        id: "custom-id",
        title: "Test Drawer",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      result.current.openDrawer(definition)

      await waitFor(() => {
        expect(mockAddDrawer).toHaveBeenCalled()
      })

      const addedDrawer = mockAddDrawer.mock.calls[0][0]
      expect(addedDrawer).toMatchObject({
        id: "custom-id",
      })
    })

    it("should return promise that resolves with action value", async () => {
      const { result } = zeroRenderHook(() => useDrawer())

      const definition: Omit<DrawerDefinition, "id"> = {
        title: "Test Drawer",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: "test-value",
          },
        },
      }

      const promise = result.current.openDrawer(definition)

      await waitFor(() => {
        expect(mockAddDrawer).toHaveBeenCalled()
      })

      const addedDrawer = mockAddDrawer.mock.calls[0][0]

      act(() => {
        addedDrawer.onClickAction(addedDrawer.actions.primary, "test-value")
      })

      const value = await promise
      expect(value).toBe("test-value")
    })

    it("should remove drawer after action unless keepOpen is true", async () => {
      const { result } = zeroRenderHook(() => useDrawer())

      const definition: Omit<DrawerDefinition, "id"> = {
        title: "Test Drawer",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
            keepOpen: false,
          },
        },
      }

      const promise = result.current.openDrawer(definition)

      await waitFor(() => {
        expect(mockAddDrawer).toHaveBeenCalled()
      })

      const addedDrawer = mockAddDrawer.mock.calls[0][0]

      act(() => {
        addedDrawer.onClickAction(addedDrawer.actions.primary, true)
      })

      await promise

      await waitFor(() => {
        expect(mockRemoveDrawer).toHaveBeenCalledWith(addedDrawer.id)
      })
    })

    it("should keep drawer open when action has keepOpen: true", async () => {
      const { result } = zeroRenderHook(() => useDrawer())

      const definition: Omit<DrawerDefinition, "id"> = {
        title: "Test Drawer",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
            keepOpen: true,
          },
        },
      }

      const promise = result.current.openDrawer(definition)

      await waitFor(() => {
        expect(mockAddDrawer).toHaveBeenCalled()
      })

      const addedDrawer = mockAddDrawer.mock.calls[0][0]

      act(() => {
        addedDrawer.onClickAction(addedDrawer.actions.primary, true)
      })

      await promise

      // Drawer should not be removed when keepOpen is true
      await waitFor(() => {
        expect(mockRemoveDrawer).not.toHaveBeenCalled()
      })
    })

    it("should resolve with undefined when drawer is closed without action", async () => {
      const { result } = zeroRenderHook(() => useDrawer())

      const definition: Omit<DrawerDefinition, "id"> = {
        title: "Test Drawer",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      const promise = result.current.openDrawer(definition)

      await waitFor(() => {
        expect(mockAddDrawer).toHaveBeenCalled()
      })

      const addedDrawer = mockAddDrawer.mock.calls[0][0]

      act(() => {
        addedDrawer.onCloseDialog()
      })

      const value = await promise
      expect(value).toBeUndefined()
    })
  })

  describe("closeDrawer", () => {
    it("should remove drawer by ID", async () => {
      const { result } = zeroRenderHook(() => useDrawer())

      const definition: DrawerDefinition = {
        id: "drawer-to-close",
        title: "Test Drawer",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      result.current.openDrawer(definition)

      await waitFor(() => {
        expect(mockAddDrawer).toHaveBeenCalled()
      })

      act(() => {
        result.current.closeDrawer("drawer-to-close")
      })

      await waitFor(() => {
        expect(mockRemoveDrawer).toHaveBeenCalledWith("drawer-to-close")
      })
    })

    it("should resolve the promise when closeDrawer is called programmatically", async () => {
      const { result } = zeroRenderHook(() => useDrawer())

      const definition: Omit<DrawerDefinition, "id"> = {
        title: "Test Drawer",
        content: <div>Test Content</div>,
        actions: {
          primary: {
            label: "OK",
            value: true,
          },
        },
      }

      const promise = result.current.openDrawer(definition)

      await waitFor(() => {
        expect(mockAddDrawer).toHaveBeenCalled()
      })

      const addedDrawer = mockAddDrawer.mock.calls[0][0]

      act(() => {
        result.current.closeDrawer(addedDrawer.id)
      })

      // The promise should resolve with undefined when closed programmatically
      const value = await promise
      expect(value).toBeUndefined()

      await waitFor(() => {
        expect(mockRemoveDrawer).toHaveBeenCalledWith(addedDrawer.id)
      })
    })
  })
})
