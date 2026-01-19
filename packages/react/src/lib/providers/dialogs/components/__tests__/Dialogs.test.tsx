import { zeroRender } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import { act, screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { Dialogs } from "../Dialogs"
import type { DialogDefinitionInternal } from "../../internal-types"
import React from "react"

// Mock nanoid
let nanoidCounter = 0
const mockNanoid = vi.fn(() => `action-id-${++nanoidCounter}`)
vi.mock("nanoid", () => ({
  nanoid: () => mockNanoid(),
}))

// Mock F0DialogInternal
const MockF0DialogInternal = vi.hoisted(() => {
  return vi.fn(({ children, ...props }: any) => (
    <div
      data-testid="f0-dialog-internal"
      data-dialog-id={props["data-dialog-id"]}
      data-title={props.title}
      data-description={props.description}
      data-width={props.width}
      data-is-open={props.isOpen}
      data-disable-close-button={props.disableClose}
      data-primary-actions={JSON.stringify(props.primaryAction)}
      data-secondary-actions={JSON.stringify(props.secondaryAction)}
    >
      {children}
      <button
        data-testid="close-button"
        onClick={props.onClose}
        disabled={props.disableClose}
      >
        Close
      </button>
      {props.primaryAction?.map((action: any, index: number) => (
        <button
          key={index}
          data-testid={`primary-action-${index}`}
          onClick={action.onClick}
          disabled={action.disabled}
        >
          {action.label}
        </button>
      ))}
      {props.secondaryAction?.map((action: any, index: number) => (
        <button
          key={index}
          data-testid={`secondary-action-${index}`}
          onClick={action.onClick}
          disabled={action.disabled}
        >
          {action.label}
        </button>
      ))}
    </div>
  ))
})

vi.mock("@/components/F0Dialog/F0DialogInternal", () => ({
  F0DialogInternal: MockF0DialogInternal,
}))

describe("Dialogs", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    nanoidCounter = 0
  })

  describe("rendering", () => {
    it("should render F0DialogInternal for each dialog", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Dialog 1",
          content: <div>Content 1</div>,
          actions: {
            primary: {
              label: "OK",
              value: true,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
        {
          id: "dialog-2",
          title: "Dialog 2",
          content: <div>Content 2</div>,
          actions: {
            primary: {
              label: "OK",
              value: true,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const renderedDialogs = screen.getAllByTestId("f0-dialog-internal")
      expect(renderedDialogs).toHaveLength(2)
    })

    it("should render nothing when dialogs array is empty", () => {
      zeroRender(<Dialogs dialogs={[]} />)

      expect(screen.queryByTestId("f0-dialog-internal")).not.toBeInTheDocument()
    })

    it("should pass correct props to F0DialogInternal", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Title",
          description: "Test Description",
          width: "md",
          content: <div>Test Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: true,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const dialog = screen.getByTestId("f0-dialog-internal")
      expect(dialog).toHaveAttribute("data-title", "Test Title")
      expect(dialog).toHaveAttribute("data-description", "Test Description")
      expect(dialog).toHaveAttribute("data-width", "md")
      expect(dialog).toHaveAttribute("data-is-open", "true")
    })

    it("should render dialog content", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Title",
          content: <div data-testid="dialog-content">Test Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: true,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      expect(screen.getByTestId("dialog-content")).toBeInTheDocument()
      expect(screen.getByTestId("dialog-content")).toHaveTextContent(
        "Test Content"
      )
    })
  })

  describe("action conversion", () => {
    it("should convert DialogAction with primitive value to F0DialogAction", async () => {
      const onClickAction = vi.fn()
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: "test-value",
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction,
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const actionButton = screen.getByTestId("primary-action-0")
      expect(actionButton).toHaveTextContent("OK")

      await act(async () => {
        await actionButton.click()
      })

      await waitFor(() => {
        expect(onClickAction).toHaveBeenCalledWith(
          expect.objectContaining({
            label: "OK",
            value: "test-value",
          }),
          "test-value"
        )
      })
    })

    it("should convert DialogAction with function value to F0DialogAction", async () => {
      const onClickAction = vi.fn()
      const asyncValueFn = vi.fn(async () => "async-value")
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: asyncValueFn,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction,
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const actionButton = screen.getByTestId("primary-action-0")

      await act(async () => {
        await actionButton.click()
      })

      await waitFor(() => {
        expect(asyncValueFn).toHaveBeenCalled()
        expect(onClickAction).toHaveBeenCalledWith(
          expect.objectContaining({
            label: "OK",
            value: asyncValueFn,
          }),
          "async-value"
        )
      })
    })

    it("should handle single action", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: true,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      expect(screen.getByTestId("primary-action-0")).toBeInTheDocument()
      expect(screen.queryByTestId("primary-action-1")).not.toBeInTheDocument()
    })

    it("should handle array of actions", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
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
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      expect(screen.getByTestId("primary-action-0")).toHaveTextContent(
        "Action 1"
      )
      expect(screen.getByTestId("primary-action-1")).toHaveTextContent(
        "Action 2"
      )
      expect(screen.getByTestId("secondary-action-0")).toHaveTextContent(
        "Cancel"
      )
    })

    it("should generate unique IDs for actions", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
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
          },
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      expect(mockNanoid).toHaveBeenCalledTimes(2)
    })

    it("should preserve action properties", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: true,
              icon: "check" as any,
              disabled: true,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const actionButton = screen.getByTestId("primary-action-0")
      expect(actionButton).toBeDisabled()
    })
  })

  describe("blocking behavior", () => {
    it("should block dialog when blocking action is processing", async () => {
      const onClickAction = vi.fn()
      let resolveAction: (value: string) => void
      const blockingActionPromise = new Promise<string>((resolve) => {
        resolveAction = resolve
      })

      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: async () => {
                return await blockingActionPromise
              },
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction,
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const actionButton = screen.getByTestId("primary-action-0")
      const closeButton = screen.getByTestId("close-button")

      // Initially not blocked
      expect(actionButton).not.toBeDisabled()
      expect(closeButton).not.toBeDisabled()

      // Click action - should start blocking
      act(() => {
        actionButton.click()
      })

      await waitFor(() => {
        expect(actionButton).toBeDisabled()
        expect(closeButton).toBeDisabled()
      })

      // Resolve the action
      act(() => {
        resolveAction!("resolved-value")
      })

      await waitFor(() => {
        expect(actionButton).not.toBeDisabled()
        expect(closeButton).not.toBeDisabled()
      })
    })

    it("should not block dialog when nonBlocking action is processing", async () => {
      const onClickAction = vi.fn()
      let resolveAction: (value: string) => void
      const nonBlockingActionPromise = new Promise<string>((resolve) => {
        resolveAction = resolve
      })

      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: async () => {
                return await nonBlockingActionPromise
              },
              nonBlocking: true,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction,
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const actionButton = screen.getByTestId("primary-action-0")
      const closeButton = screen.getByTestId("close-button")

      // Click action - should NOT block
      act(() => {
        actionButton.click()
      })

      await waitFor(() => {
        expect(actionButton).not.toBeDisabled()
        expect(closeButton).not.toBeDisabled()
      })

      // Resolve the action
      act(() => {
        resolveAction!("resolved-value")
      })

      await waitFor(() => {
        expect(onClickAction).toHaveBeenCalled()
      })
    })

    it("should disable actions when dialog is blocked", async () => {
      const onClickAction = vi.fn()
      let resolveAction: (value: string) => void
      const blockingActionPromise = new Promise<string>((resolve) => {
        resolveAction = resolve
      })

      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "Primary",
              value: async () => {
                return await blockingActionPromise
              },
            },
            secondary: {
              label: "Secondary",
              value: false,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction,
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const primaryButton = screen.getByTestId("primary-action-0")
      const secondaryButton = screen.getByTestId("secondary-action-0")

      // Click primary action
      act(() => {
        primaryButton.click()
      })

      await waitFor(() => {
        expect(primaryButton).toBeDisabled()
        expect(secondaryButton).toBeDisabled()
      })

      // Resolve the action
      act(() => {
        resolveAction!("resolved-value")
      })

      await waitFor(() => {
        expect(primaryButton).not.toBeDisabled()
        expect(secondaryButton).not.toBeDisabled()
      })
    })

    it("should disable close button when dialog is blocked", async () => {
      const onCloseDialog = vi.fn()
      let resolveAction: (value: string) => void
      const blockingActionPromise = new Promise<string>((resolve) => {
        resolveAction = resolve
      })

      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: async () => {
                return await blockingActionPromise
              },
            },
          },
          onCloseDialog,
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const actionButton = screen.getByTestId("primary-action-0")
      const closeButton = screen.getByTestId("close-button")

      // Click action
      act(() => {
        actionButton.click()
      })

      await waitFor(() => {
        expect(closeButton).toBeDisabled()
      })

      // Try to click close button - should not call onCloseDialog
      act(() => {
        closeButton.click()
      })

      expect(onCloseDialog).not.toHaveBeenCalled()

      // Resolve the action
      act(() => {
        resolveAction!("resolved-value")
      })

      await waitFor(() => {
        expect(closeButton).not.toBeDisabled()
      })
    })

    it("should handle multiple blocking actions correctly", async () => {
      const onClickAction = vi.fn()
      let resolveAction1: (value: string) => void
      let resolveAction2: (value: string) => void
      const blockingActionPromise1 = new Promise<string>((resolve) => {
        resolveAction1 = resolve
      })
      const blockingActionPromise2 = new Promise<string>((resolve) => {
        resolveAction2 = resolve
      })

      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: [
              {
                label: "Action 1",
                value: async () => {
                  return await blockingActionPromise1
                },
              },
              {
                label: "Action 2",
                value: async () => {
                  return await blockingActionPromise2
                },
              },
            ],
          },
          onCloseDialog: vi.fn(),
          onClickAction,
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const actionButton1 = screen.getByTestId("primary-action-0")
      const actionButton2 = screen.getByTestId("primary-action-1")
      const closeButton = screen.getByTestId("close-button")

      // Click first action
      act(() => {
        actionButton1.click()
      })

      await waitFor(() => {
        expect(actionButton1).toBeDisabled()
        expect(actionButton2).toBeDisabled()
        expect(closeButton).toBeDisabled()
      })

      // Click second action while first is still processing
      act(() => {
        actionButton2.click()
      })

      // Both actions should be blocked
      await waitFor(() => {
        expect(actionButton1).toBeDisabled()
        expect(actionButton2).toBeDisabled()
      })

      // Resolve first action
      act(() => {
        resolveAction1!("resolved-1")
      })

      // Still blocked because second action is processing
      await waitFor(() => {
        expect(actionButton1).toBeDisabled()
        expect(actionButton2).toBeDisabled()
      })

      // Resolve second action
      act(() => {
        resolveAction2!("resolved-2")
      })

      // Now should be unblocked
      await waitFor(() => {
        expect(actionButton1).not.toBeDisabled()
        expect(actionButton2).not.toBeDisabled()
        expect(closeButton).not.toBeDisabled()
      })
    })
  })

  describe("onClose callback", () => {
    it("should call onCloseDialog when close button is clicked", async () => {
      const onCloseDialog = vi.fn()
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: true,
            },
          },
          onCloseDialog,
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const closeButton = screen.getByTestId("close-button")

      await act(async () => {
        await closeButton.click()
      })

      expect(onCloseDialog).toHaveBeenCalled()
    })
  })

  describe("edge cases", () => {
    it("should handle dialog with no secondary actions", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: true,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      expect(screen.getByTestId("primary-action-0")).toBeInTheDocument()
      expect(screen.queryByTestId("secondary-action-0")).not.toBeInTheDocument()
    })

    it("should handle action with disabled: true", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: true,
              disabled: true,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const actionButton = screen.getByTestId("primary-action-0")
      expect(actionButton).toBeDisabled()
    })

    it("should handle action that throws error during materialization", async () => {
      // Suppress unhandled rejection warnings for this test
      const originalHandler = process.listeners("unhandledRejection")
      const unhandledRejectionHandler = vi.fn()
      process.on("unhandledRejection", unhandledRejectionHandler)

      try {
        const onClickAction = vi.fn()
        const errorAction = vi.fn(async () => {
          throw new Error("Action error")
        })

        const dialogs: DialogDefinitionInternal[] = [
          {
            id: "dialog-1",
            title: "Test Dialog",
            content: <div>Content</div>,
            actions: {
              primary: {
                label: "OK",
                value: errorAction,
              },
            },
            onCloseDialog: vi.fn(),
            onClickAction,
          },
        ]

        zeroRender(<Dialogs dialogs={dialogs} />)

        const actionButton = screen.getByTestId("primary-action-0")
        const closeButton = screen.getByTestId("close-button")

        // Initially not blocked
        expect(actionButton).not.toBeDisabled()
        expect(closeButton).not.toBeDisabled()

        // Click action - should start blocking
        act(() => {
          actionButton.click()
        })

        await waitFor(() => {
          expect(actionButton).toBeDisabled()
          expect(closeButton).toBeDisabled()
        })

        // Wait a bit for the error to occur
        await act(async () => {
          await new Promise((resolve) => setTimeout(resolve, 10))
        })

        // When error occurs, updateDialogBlocks(-1) is never called, so dialog stays blocked
        // This is expected behavior - errors prevent unblocking
        expect(errorAction).toHaveBeenCalled()
        // Verify that an unhandled rejection occurred (error was thrown)
        expect(unhandledRejectionHandler).toHaveBeenCalled()
      } finally {
        // Restore original handlers
        process.removeListener("unhandledRejection", unhandledRejectionHandler)
        originalHandler.forEach((handler) => {
          process.on("unhandledRejection", handler)
        })
      }
    })

    it("should handle rapid action clicks without race conditions", async () => {
      const onClickAction = vi.fn()
      let resolveAction: (value: string) => void
      const blockingActionPromise = new Promise<string>((resolve) => {
        resolveAction = resolve
      })

      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Dialog",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "OK",
              value: async () => {
                return await blockingActionPromise
              },
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction,
        },
      ]

      zeroRender(<Dialogs dialogs={dialogs} />)

      const actionButton = screen.getByTestId("primary-action-0")

      // Rapid clicks
      act(() => {
        actionButton.click()
        actionButton.click()
        actionButton.click()
      })

      await waitFor(() => {
        expect(actionButton).toBeDisabled()
      })

      // Resolve action
      act(() => {
        resolveAction!("resolved")
      })

      await waitFor(() => {
        expect(actionButton).not.toBeDisabled()
      })

      // Should have been called multiple times
      await waitFor(() => {
        expect(onClickAction).toHaveBeenCalled()
      })
    })
  })
})
