import type { Meta, StoryObj } from "@storybook/react-vite"
import React, { useState } from "react"
import { expect, userEvent, within } from "storybook/test"
import { F0Button } from "@/components/F0Button"
import { useDialog } from "../useDialog"
import { DialogActionValue } from "../../../lib/providers/dialogs/types"
import { Delete } from "@/icons/app"
import { Pencil } from "lucide-react"

const meta = {
  title: "Dialogs",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["A hook that allows to trigger a dialog."]
          .map((line) => `<p>${line}</p>`)
          .join("\n"),
      },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof F0Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  render: () => {
    const { openDialog, alert, confirm, openNotificationDialog } = useDialog()

    const dialogTrigger = async () => {
      const res = await openDialog({
        title: "Dialog Title",
        description: "Dialog Description",
        content: <div>Dialog Content</div>,
        actions: {
          primary: {
            value: "primary",
            label: "Primary Action",
          },
          secondary: [
            {
              value: "secondary",
              label: "Secondary Action",
            },
          ],
        },
      })
      console.log(res)
    }

    const alertTrigger = async () => {
      const res = await alert({ title: "Alert Title", msg: "Alert Message" })
      console.log(res)
    }

    const notificationTrigger = async () => {
      const res = await openNotificationDialog({
        title: "Notification Title",
        msg: "Notification Message",
        actions: {
          primary: {
            value: "primary",
            label: "Primary Action",
          },
        },
      })
      console.log(res)
    }

    const confirmTrigger = async () => {
      const res = await confirm({
        title: "Confirm Title",
        msg: "Confirm Message",
      })
      if (res) {
        alert({ title: "Item deleted", msg: "Item has been deleted" })
      }
      console.log(res)
    }

    return (
      <div className="flex flex-col gap-4">
        <F0Button onClick={dialogTrigger} label="Open Dialog" />

        <F0Button onClick={alertTrigger} label="Open Alert" />

        <F0Button onClick={confirmTrigger} label="Open Confirm" />

        <F0Button
          onClick={notificationTrigger}
          label="Open Notification Dialog"
        />
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    // Dialogs render in portals, so search the full page
    const page = within(canvasElement.closest("body")!)

    await step("Open dialog and verify it appears", async () => {
      const dialogButton = canvas.getByRole("button", { name: "Open Dialog" })
      await userEvent.click(dialogButton)

      // Wait for dialog to appear
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Verify dialog content
      expect(page.getByText("Dialog Title")).toBeInTheDocument()
      expect(page.getByText("Dialog Description")).toBeInTheDocument()
      expect(page.getByText("Dialog Content")).toBeInTheDocument()
      expect(
        page.getByRole("button", { name: "Primary Action" })
      ).toBeInTheDocument()
      expect(
        page.getByRole("button", { name: "Secondary Action" })
      ).toBeInTheDocument()

      // Close dialog by clicking primary action
      await userEvent.click(
        page.getByRole("button", { name: "Primary Action" })
      )
    })

    await step("Open alert and verify it appears", async () => {
      const alertButton = canvas.getByRole("button", { name: "Open Alert" })
      await userEvent.click(alertButton)

      // Wait for dialog to appear
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Verify alert content
      expect(page.getByText("Alert Title")).toBeInTheDocument()
      expect(page.getByText("Alert Message")).toBeInTheDocument()

      // Close alert
      const okButton = page.getByRole("button", { name: /ok/i })
      await userEvent.click(okButton)
    })

    await step("Open confirm and verify it appears", async () => {
      const confirmButton = canvas.getByRole("button", {
        name: "Open Confirm",
      })
      await userEvent.click(confirmButton)

      // Wait for dialog to appear
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Verify confirm content
      expect(page.getByText("Confirm Title")).toBeInTheDocument()
      expect(page.getByText("Confirm Message")).toBeInTheDocument()

      // Close confirm by clicking cancel
      const cancelButton = page.getByRole("button", { name: /cancel/i })
      await userEvent.click(cancelButton)
    })
  },
}

export const Notification: Story = {
  render: () => {
    const { openNotificationDialog } = useDialog()
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const notificationTrigger = async () => {
      const res = await openNotificationDialog({
        title: "Notification Title",
        msg: "Notification Message",
        type: "positive",
        actions: {
          primary: {
            value: "primary",
            label: "Primary Action",
          },
        },
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <F0Button
          onClick={notificationTrigger}
          label="Open Notification Dialog"
        />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const Alert: Story = {
  render: () => {
    const { alert } = useDialog()
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const alertTrigger = async () => {
      const res = await alert({ title: "Alert Title", msg: "Alert Message" })
      setRes(res)
    }

    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <F0Button onClick={alertTrigger} label="Open Alert" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    // Dialogs render in portals, so search the full page
    const page = within(canvasElement.closest("body")!)

    await step("Open alert dialog", async () => {
      const alertButton = canvas.getByRole("button", { name: "Open Alert" })
      await userEvent.click(alertButton)

      // Wait for dialog to appear
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Verify alert content
      expect(page.getByText("Alert Title")).toBeInTheDocument()
      expect(page.getByText("Alert Message")).toBeInTheDocument()
    })

    await step(
      "Click OK and verify dialog closes and result updates",
      async () => {
        const okButton = page.getByRole("button", { name: /ok/i })
        await userEvent.click(okButton)

        // Wait for dialog to close and state to update
        await new Promise((resolve) => setTimeout(resolve, 200))

        // Verify dialog is closed
        expect(page.queryByText("Alert Title")).not.toBeInTheDocument()

        // Verify result text shows the action result
        const resultText = canvas.getByText(/Last action result:/)
        expect(resultText).toBeInTheDocument()
      }
    )
  },
}

export const Confirm: Story = {
  render: () => {
    const { confirm } = useDialog()
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const alertTrigger = async () => {
      const res = await confirm({
        title: "Confirm Title",
        msg: "Confirm Message",
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <F0Button onClick={alertTrigger} label="Open Alert" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    // Dialogs render in portals, so search the full page
    const page = within(canvasElement.closest("body")!)

    await step("Open confirm dialog", async () => {
      const confirmButton = canvas.getByRole("button", { name: "Open Alert" })
      await userEvent.click(confirmButton)

      // Wait for dialog to appear
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Verify confirm content
      expect(page.getByText("Confirm Title")).toBeInTheDocument()
      expect(page.getByText("Confirm Message")).toBeInTheDocument()
      expect(page.getByRole("button", { name: /ok/i })).toBeInTheDocument()
      expect(page.getByRole("button", { name: /cancel/i })).toBeInTheDocument()
    })

    await step("Test cancel action", async () => {
      const cancelButton = page.getByRole("button", { name: /cancel/i })
      await userEvent.click(cancelButton)

      // Wait for dialog to close and state to update
      await new Promise((resolve) => setTimeout(resolve, 200))

      // Verify dialog is closed
      expect(page.queryByText("Confirm Title")).not.toBeInTheDocument()

      // Verify result text shows false (cancel)
      const resultText = canvas.getByText(/Last action result:/)
      expect(resultText).toBeInTheDocument()
    })

    await step("Test confirm action", async () => {
      // Open dialog again
      const confirmButton = canvas.getByRole("button", { name: "Open Alert" })
      await userEvent.click(confirmButton)

      // Wait for dialog to appear
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Click confirm
      const okButton = page.getByRole("button", { name: /ok/i })
      await userEvent.click(okButton)

      // Wait for dialog to close and state to update
      await new Promise((resolve) => setTimeout(resolve, 200))

      // Verify dialog is closed
      expect(page.queryByText("Confirm Title")).not.toBeInTheDocument()
    })
  },
}

export const ConfirmWithPromiseAndCustomLabel: Story = {
  render: () => {
    const { confirm } = useDialog()
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const alertTrigger = async () => {
      const res = await confirm({
        title: "Confirm Title",
        msg: "Confirm Message",
        confirm: {
          value: () => {
            console.log("Saving started...")
            return new Promise((resolve) =>
              setTimeout(() => resolve("Saved"), 2500)
            )
          },
          label: "Save",
        },
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <F0Button onClick={alertTrigger} label="Open Alert" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    // Dialogs render in portals, so search the full page
    const page = within(canvasElement.closest("body")!)

    await step("Open confirm dialog with promise", async () => {
      const confirmButton = canvas.getByRole("button", { name: "Open Alert" })
      await userEvent.click(confirmButton)

      // Wait for dialog to appear
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Verify confirm content
      expect(page.getByText("Confirm Title")).toBeInTheDocument()
      expect(page.getByText("Confirm Message")).toBeInTheDocument()
      expect(page.getByRole("button", { name: "Save" })).toBeInTheDocument()
    })

    await step("Click Save and verify promise execution", async () => {
      const saveButton = page.getByRole("button", { name: "Save" })
      await userEvent.click(saveButton)

      // Wait for promise to resolve (4 seconds)
      await new Promise((resolve) => setTimeout(resolve, 4500))

      // Verify dialog is closed
      expect(page.queryByText("Confirm Title")).not.toBeInTheDocument()

      // Verify result text shows "Saved"
      const resultText = canvas.getByText(/Last action result:/)
      expect(resultText).toHaveTextContent("Saved")
    })
  },
}

export const Dialog: Story = {
  render: () => {
    const { openDialog } = useDialog()
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await openDialog({
        title: "Dialog Title",
        description: "Dialog Description",
        content: <div>Dialog Content</div>,
        actions: {
          primary: {
            value: "primary",
            label: "Primary Action",
          },
          secondary: [
            {
              value: "delete",
              icon: Delete,
              label: "Delete",
            },
            {
              value: "other",
              icon: Pencil,
              label: "Other",
            },
            {
              value: "cancel",
              disabled: true,
              label: "Cancel",
            },
          ],
        },
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <F0Button onClick={trigger} label="Open Dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    // Dialogs render in portals, so search the full page
    const page = within(canvasElement.closest("body")!)

    await step("Open dialog and verify content", async () => {
      const dialogButton = canvas.getByRole("button", { name: "Open Dialog" })
      await userEvent.click(dialogButton)

      // Wait for dialog to appear
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Verify dialog content
      expect(page.getByText("Dialog Title")).toBeInTheDocument()
      expect(page.getByText("Dialog Description")).toBeInTheDocument()
      expect(page.getByText("Dialog Content")).toBeInTheDocument()
      expect(
        page.getByRole("button", { name: "Primary Action" })
      ).toBeInTheDocument()
      expect(page.getByRole("button", { name: "Delete" })).toBeInTheDocument()
      expect(page.getByRole("button", { name: "Other" })).toBeInTheDocument()
    })

    await step("Test primary action", async () => {
      const primaryButton = page.getByRole("button", {
        name: "Primary Action",
      })
      await userEvent.click(primaryButton)

      // Wait for dialog to close and state to update
      await new Promise((resolve) => setTimeout(resolve, 200))

      // Verify dialog is closed
      expect(page.queryByText("Dialog Title")).not.toBeInTheDocument()

      // Verify result text shows "primary"
      const resultText = canvas.getByText(/Last action result:/)
      expect(resultText).toHaveTextContent("primary")
    })

    await step("Test secondary action", async () => {
      // Open dialog again
      const dialogButton = canvas.getByRole("button", { name: "Open Dialog" })
      await userEvent.click(dialogButton)

      // Wait for dialog to appear
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Click secondary action (Delete)
      const deleteButton = page.getByRole("button", { name: "Delete" })
      await userEvent.click(deleteButton)

      // Wait for dialog to close and state to update
      await new Promise((resolve) => setTimeout(resolve, 200))

      // Verify dialog is closed
      expect(page.queryByText("Dialog Title")).not.toBeInTheDocument()

      // Verify result text shows "delete"
      const resultText = canvas.getByText(/Last action result:/)
      expect(resultText).toHaveTextContent("delete")
    })
  },
}

export const DialogFullScreen: Story = {
  render: () => {
    const { openDialog } = useDialog()
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await openDialog({
        title: "Dialog Title",
        size: "fullscreen",
        description: "Dialog Description",
        content: <div>Dialog Content</div>,
        actions: {
          primary: {
            value: "primary",
            label: "Primary Action",
          },
          secondary: [
            {
              value: "delete",
              icon: Delete,
              label: "Delete",
            },
            {
              value: "other",
              icon: Pencil,
              label: "Other",
            },
            {
              value: "cancel",
              disabled: true,
              label: "Cancel",
            },
          ],
        },
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <F0Button onClick={trigger} label="Open Dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const DialogWithDropdownAndPromises: Story = {
  render: () => {
    const { openDialog } = useDialog()
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await openDialog({
        title: "Dialog Title",
        description: "Dialog Description",
        content: <div>Dialog Content</div>,
        actions: {
          primary: [
            {
              value: "p1",
              label: "Action 1",
            },
            {
              label: "Primary Action 2",
              value: () =>
                new Promise((resolve) =>
                  setTimeout(() => resolve("Saved"), 4000)
                ),
            },
          ],
          secondary: [
            {
              value: "delete",
              icon: Delete,
              label: "Delete",
            },
            {
              value: "other",
              icon: Pencil,
              label: "Other",
            },
            {
              value: "cancel",
              disabled: true,
              label: "Cancel",
            },
          ],
        },
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <F0Button onClick={trigger} label="Open Dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const DialogTriggersADialog: Story = {
  render: () => {
    const { openDialog, confirm } = useDialog()
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await openDialog({
        title: "Dialog Title",
        description: "Dialog Description",
        content: <div>Dialog Content</div>,
        actions: {
          primary: [
            {
              value: "p1",
              label: "Action 1",
            },
          ],
          secondary: [
            {
              label: "Open Confirm",
              value: async () => {
                return `Confirm-result-${
                  (
                    await confirm({
                      title: "Confirm Title",
                      msg: "Confirm Message",
                    })
                  )?.toString() ?? ""
                }`
              },
            },
          ],
        },
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <F0Button onClick={trigger} label="Open Dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}
