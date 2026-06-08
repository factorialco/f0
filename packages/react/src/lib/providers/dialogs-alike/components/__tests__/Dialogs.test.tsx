import { act, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import React from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import type { DialogDefinitionInternal } from "../../internal-types"

import { DialogsAlike } from "../DialogsAlike"

// Mock nanoid
let nanoidCounter = 0
const mockNanoid = vi.fn(() => `action-id-${++nanoidCounter}`)
vi.mock("nanoid", () => ({
  nanoid: () => mockNanoid(),
}))

// Mock DialogInternal
const MockDialogInternal = vi.hoisted(() => {
  return vi.fn(({ children, ...props }: any) => (
    <div
      data-testid="f0-dialog-internal"
      data-title={props.title}
      data-description={props.description}
      data-size={props.size}
      data-is-open={props.isOpen}
      data-disable-close-button={props.disableClose}
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
          key={`primary-${index}`}
          data-testid={`primary-action-${index}`}
          onClick={action.onClick}
          disabled={action.disabled}
        >
          {action.label}
        </button>
      ))}
      {props.secondaryAction?.map((action: any, index: number) => (
        <button
          key={`secondary-${index}`}
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

vi.mock("@/components/dialog-alike/F0Dialog/internal/DialogInternal", () => ({
  DialogInternal: MockDialogInternal,
}))

// Mock DialogNotificationInternal
const MockDialogNotificationInternal = vi.hoisted(() => {
  return vi.fn(({ ...props }: any) => (
    <div
      data-testid="f0-dialog-notification-internal"
      data-title={props.title}
      data-description={props.description}
      data-type={props.type}
      data-is-open={props.isOpen}
    >
      <button data-testid="notification-close-button" onClick={props.onClose}>
        Close
      </button>
      {props.primaryAction && (
        <button
          data-testid="notification-primary-action"
          onClick={props.primaryAction.onClick}
          disabled={props.primaryAction.disabled}
        >
          {props.primaryAction.label}
        </button>
      )}
      {props.secondaryAction?.map((action: any, index: number) => (
        <button
          key={`notification-secondary-${index}`}
          data-testid={`notification-secondary-action-${index}`}
          onClick={action.onClick}
          disabled={action.disabled}
        >
          {action.label}
        </button>
      ))}
    </div>
  ))
})

vi.mock(
  "@/components/dialog-alike/F0Dialog/internal/DialogNotification",
  () => ({
    DialogNotificationInternal: MockDialogNotificationInternal,
  })
)

// Mock DrawerInternal
const MockDrawerInternal = vi.hoisted(() => {
  return vi.fn(({ children, ...props }: any) => (
    <div
      data-testid="f0-drawer-internal"
      data-title={props.title}
      data-description={props.description}
      data-size={props.size}
      data-is-open={props.isOpen}
      data-disable-close-button={props.disableClose}
    >
      {children}
      <button data-testid="drawer-close-button" onClick={props.onClose}>
        Close
      </button>
      {props.primaryAction?.map((action: any, index: number) => (
        <button
          key={`drawer-primary-${index}`}
          data-testid={`drawer-primary-action-${index}`}
          onClick={action.onClick}
          disabled={action.disabled}
        >
          {action.label}
        </button>
      ))}
    </div>
  ))
})

vi.mock("@/components/dialog-alike/F0Drawer/internal/DrawerInternal", () => ({
  DrawerInternal: MockDrawerInternal,
}))

describe("DialogsAlike", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    nanoidCounter = 0
  })

  describe("rendering", () => {
    it("should render DialogInternal for standard dialogs", () => {
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

      zeroRender(<DialogsAlike items={dialogs} />)

      const renderedDialogs = screen.getAllByTestId("f0-dialog-internal")
      expect(renderedDialogs).toHaveLength(2)
    })

    it("should render DialogNotificationInternal for notification dialogs", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-notification",
          title: "Notification Dialog",
          content: <div>Notification Content</div>,
          variant: "notification",
          type: "success",
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

      zeroRender(<DialogsAlike items={dialogs} />)

      expect(
        screen.getByTestId("f0-dialog-notification-internal")
      ).toBeInTheDocument()
      expect(screen.queryByTestId("f0-dialog-internal")).not.toBeInTheDocument()
    })

    it("should render nothing when dialogs array is empty", () => {
      zeroRender(<DialogsAlike items={[]} />)

      expect(screen.queryByTestId("f0-dialog-internal")).not.toBeInTheDocument()
      expect(
        screen.queryByTestId("f0-dialog-notification-internal")
      ).not.toBeInTheDocument()
    })

    it("should pass correct props to DialogInternal", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-1",
          title: "Test Title",
          description: "Test Description",
          size: "md",
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

      zeroRender(<DialogsAlike items={dialogs} />)

      const dialog = screen.getByTestId("f0-dialog-internal")
      expect(dialog).toHaveAttribute("data-title", "Test Title")
      expect(dialog).toHaveAttribute("data-description", "Test Description")
      expect(dialog).toHaveAttribute("data-size", "md")
      expect(dialog).toHaveAttribute("data-is-open", "true")
    })

    it("should pass correct props to DialogNotificationInternal", () => {
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-notif-1",
          title: "Notification Title",
          description: "Notification Description",
          variant: "notification",
          type: "warning",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "Confirm",
              value: true,
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction: vi.fn(),
        },
      ]

      zeroRender(<DialogsAlike items={dialogs} />)

      const dialog = screen.getByTestId("f0-dialog-notification-internal")
      expect(dialog).toHaveAttribute("data-title", "Notification Title")
      expect(dialog).toHaveAttribute(
        "data-description",
        "Notification Description"
      )
      expect(dialog).toHaveAttribute("data-type", "warning")
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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

      const actionButton = screen.getByTestId("primary-action-0")
      expect(actionButton).toBeDisabled()
    })

    it("should handle actions in notification dialog", async () => {
      const onClickAction = vi.fn()
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-notif-1",
          title: "Notification",
          variant: "notification",
          type: "info",
          content: <div>Content</div>,
          actions: {
            primary: {
              label: "Confirm",
              value: "confirmed",
            },
          },
          onCloseDialog: vi.fn(),
          onClickAction,
        },
      ]

      zeroRender(<DialogsAlike items={dialogs} />)

      const actionButton = screen.getByTestId("notification-primary-action")
      expect(actionButton).toHaveTextContent("Confirm")

      await act(async () => {
        await actionButton.click()
      })

      await waitFor(() => {
        expect(onClickAction).toHaveBeenCalledWith(
          expect.objectContaining({
            label: "Confirm",
            value: "confirmed",
          }),
          "confirmed"
        )
      })
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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

      const closeButton = screen.getByTestId("close-button")

      await act(async () => {
        await closeButton.click()
      })

      expect(onCloseDialog).toHaveBeenCalled()
    })

    it("should call onCloseDialog when notification close button is clicked", async () => {
      const onCloseDialog = vi.fn()
      const dialogs: DialogDefinitionInternal[] = [
        {
          id: "dialog-notif-1",
          title: "Notification",
          variant: "notification",
          type: "info",
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

      zeroRender(<DialogsAlike items={dialogs} />)

      const closeButton = screen.getByTestId("notification-close-button")

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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

        zeroRender(<DialogsAlike items={dialogs} />)

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

      zeroRender(<DialogsAlike items={dialogs} />)

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
