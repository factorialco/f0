import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Delete, Pencil } from "@/icons/app"

import { dialog } from "../imperative"
import { dialogsAlikeStore } from "../store"
import { DialogActionValue } from "../types"

const meta = {
  title: "Dialogs",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Imperative API to open dialogs from anywhere."]
          .map((line) => `<p>${line}</p>`)
          .join("\n"),
      },
    },
  },
  tags: ["!autodocs", "experimental"],
  // The imperative dialog store is a global singleton — clear it between
  // stories so a dialog opened in one story doesn't leak into the next.
  beforeEach: () => {
    dialogsAlikeStore.clear()
  },
} satisfies Meta<typeof F0Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  render: () => {
    const dialogTrigger = async () => {
      const res = await dialog.open({
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
      const res = await dialog.alert({
        title: "Alert Title",
        msg: "Alert Message",
      })
      console.log(res)
    }

    const notificationTrigger = async () => {
      const res = await dialog.openNotification({
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
      const res = await dialog.confirm({
        title: "Confirm Title",
        msg: "Confirm Message",
        type: "critical",
        confirm: {
          value: () => {
            return new Promise((resolve) =>
              setTimeout(() => resolve("confirm"), 1000)
            )
          },
          label: "Confirm",
        },
      })
      if (res) {
        dialog.alert({ title: "Item deleted", msg: "Item has been deleted" })
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
}

export const Notification: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const notificationTrigger = async () => {
      const res = await dialog.openNotification({
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
      <div className="flex flex-col items-center justify-center gap-4">
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
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const alertTrigger = async () => {
      const res = await dialog.alert({
        title: "Alert Title",
        msg: "Alert Message",
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={alertTrigger} label="Open Alert" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const Confirm: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const alertTrigger = async () => {
      const res = await dialog.confirm({
        title: "Confirm Title",
        msg: "Confirm Message",
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={alertTrigger} label="Open Alert" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const ConfirmWithPromiseAndCustomLabel: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const alertTrigger = async () => {
      const res = await dialog.confirm({
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
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={alertTrigger} label="Open Alert" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const Dialog: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await dialog.open({
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
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={trigger} label="Open Dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const DialogFullScreen: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await dialog.open({
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
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={trigger} label="Open Dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const DialogWithDropdownAndPromises: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await dialog.open({
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
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={trigger} label="Open Dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const DialogTriggersADialog: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await dialog.open({
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
                    await dialog.confirm({
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
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={trigger} label="Open Dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const DialogWithModule: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await dialog.open({
        title: "Performance Review",
        description: "Quarterly performance review discussion",
        module: {
          id: "performance",
          label: "Performance",
          href: "/performance",
        },
        content: <div>Performance review content...</div>,
        actions: {
          primary: {
            value: "approve",
            label: "Approve Review",
          },
          secondary: {
            value: "cancel",
            label: "Cancel",
          },
        },
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={trigger} label="Open Module Dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const Modal: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await dialog.open({
        title: "Modal Dialog",
        description:
          "This is a modal dialog that cannot be closed by clicking outside or pressing Escape",
        content: (
          <div className="flex flex-col gap-2">
            <p>
              Modal dialogs require user interaction with the action buttons to
              close them.
            </p>
            <p>
              Clicking outside the dialog or pressing Escape will not close this
              dialog.
            </p>
          </div>
        ),
        modal: true,
        actions: {
          primary: {
            value: "confirm",
            label: "Confirm",
          },
          secondary: {
            value: "cancel",
            label: "Cancel",
          },
        },
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={trigger} label="Open Modal Dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}
