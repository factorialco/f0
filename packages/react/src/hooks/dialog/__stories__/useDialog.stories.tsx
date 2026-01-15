import type { Meta, StoryObj } from "@storybook/react-vite"
import React, { useState } from "react"
import { F0Button } from "@/components/F0Button"
import { useDialog } from "../useDialog"
import { DialogActionValue } from "../types"
import { Delete } from "@/icons/app"
import { Pencil } from "lucide-react"
import { DialogWidth } from "@/components/F0Dialog/types"

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
  tags: ["autodocs", "experimental", "internal"],
} satisfies Meta<typeof F0Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  render: () => {
    const { openDialog, alert, confirm } = useDialog()

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
      const res = await alert("Alert Title", "Alert Message")
      console.log(res)
    }

    const confirmTrigger = async () => {
      const res = await confirm("Confirm Title", "Confirm Message")
      if (res) {
        alert("Item deleted", "Item has been deleted")
      }
      console.log(res)
    }

    return (
      <div className="flex flex-col gap-4">
        <F0Button onClick={dialogTrigger} label="Open Dialog" />

        <F0Button onClick={alertTrigger} label="Open Alert" />

        <F0Button onClick={confirmTrigger} label="Open Confirm" />
      </div>
    )
  },
}

export const Alert: Story = {
  render: () => {
    const { alert } = useDialog()
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const alertTrigger = async () => {
      const res = await alert("Alert Title", "Alert Message")
      setRes(res)
    }

    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <F0Button onClick={alertTrigger} label="Open Alert" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

const renderConfirm = ({ width }: { width?: DialogWidth } = {}) => {
  const { confirm } = useDialog()
  const [res, setRes] = useState<DialogActionValue>(undefined)

  const alertTrigger = async () => {
    const res = await confirm("Confirm Title", "Confirm Message", {
      width,
    })
    setRes(res)
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <F0Button onClick={alertTrigger} label="Open Alert" />
      <p>Last action result: {res?.toString()}</p>
    </div>
  )
}

export const Confirm: Story = {
  render: () => renderConfirm(),
}

export const ConfirmWithSmWidth: Story = {
  render: () => renderConfirm({ width: "sm" }),
}

export const ConfirmWithPromiseAndCustomLabel: Story = {
  render: () => {
    const { confirm } = useDialog()
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const alertTrigger = async () => {
      const res = await confirm("Confirm Title", "Confirm Message", {
        confirm: {
          value: () => {
            console.log("Saving started...")
            return new Promise((resolve) =>
              setTimeout(() => resolve("Saved"), 4000)
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
