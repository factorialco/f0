import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Delete, Pencil } from "@/icons/app"

import {
  alertDialog,
  confirmDialog,
  notifyDialog,
  openDialog,
} from "../imperative"
import { dialogsAlikeStore } from "../store"
import { DialogActionValue } from "../types"

const meta = {
  title: "Dialogs API",
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
      const res = await alertDialog({
        title: "Alert Title",
        msg: "Alert Message",
      })
      console.log(res)
    }

    const notificationTrigger = async () => {
      const res = await notifyDialog({
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
      const res = await confirmDialog({
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
        alertDialog({ title: "Item deleted", msg: "Item has been deleted" })
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
      const res = await notifyDialog({
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
      const res = await alertDialog({
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
      const res = await confirmDialog({
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
      const res = await confirmDialog({
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
                    await confirmDialog({
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
      const res = await openDialog({
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

// `keepOpen`: the action resolves the promise but the dialog is NOT removed,
// so it stays open. The action's `value` function still runs on every click,
// which makes it ideal for "apply"-style actions. Close it with a non-keepOpen
// action (here "Done") or `closeDialog(id)`.
export const KeepOpen: Story = {
  render: () => {
    const [count, setCount] = useState(0)

    const trigger = () => {
      openDialog({
        id: "keep-open-demo",
        title: "Keep Open",
        description:
          'Clicking "Increment" runs the action but keeps the dialog open. Use "Done" to close it.',
        content: (
          <div>Click Increment a few times — the dialog stays open.</div>
        ),
        actions: {
          primary: {
            label: "Increment (keepOpen)",
            keepOpen: true,
            value: () => {
              setCount((c) => c + 1)
              return Promise.resolve("incremented")
            },
          },
          secondary: {
            value: "done",
            label: "Done",
          },
        },
      })
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={trigger} label="Open keep-open dialog" />
        <p>Increment clicks: {count}</p>
      </div>
    )
  },
}

// `nonBlocking`: a promise-returning action normally disables every action
// (and the close button) until it resolves. With `nonBlocking: true` the other
// actions stay interactive — here "Cancel" remains clickable while the 3s
// primary action runs.
export const NonBlocking: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const result = await openDialog({
        title: "Non-Blocking Action",
        description:
          'The primary action runs for 3s. Because it is nonBlocking, "Cancel" stays clickable while it runs.',
        content: (
          <div>Click "Start", then notice "Cancel" is still enabled.</div>
        ),
        actions: {
          primary: {
            label: "Start (nonBlocking, 3s)",
            nonBlocking: true,
            value: () =>
              new Promise((resolve) =>
                setTimeout(() => resolve("completed"), 3000)
              ),
          },
          secondary: {
            value: "cancel",
            label: "Cancel",
          },
        },
      })
      setRes(result)
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={trigger} label="Open non-blocking dialog" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const Modal: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await openDialog({
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
