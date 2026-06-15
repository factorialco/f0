import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Delete, Pencil } from "@/icons/app"

import { openDrawer } from "../imperative"
import { dialogsAlikeStore } from "../store"
import { DialogActionValue } from "../types"

const meta = {
  title: "Drawers API",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Imperative API to open drawers from anywhere."]
          .map((line) => `<p>${line}</p>`)
          .join("\n"),
      },
    },
  },
  tags: ["!autodocs", "experimental"],
  // The imperative drawer store is a global singleton — clear it between
  // stories so a drawer opened in one story doesn't leak into the next.
  beforeEach: () => {
    dialogsAlikeStore.clear()
  },
} satisfies Meta<typeof F0Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  render: () => {
    const drawerTrigger = async () => {
      const res = await openDrawer({
        title: "Drawer Title",
        description: "Drawer Description",
        content: <div>Drawer Content</div>,
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

    return (
      <div className="flex flex-col gap-4">
        <F0Button onClick={drawerTrigger} label="Open Drawer" />
      </div>
    )
  },
}

export const DrawerLeft: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await openDrawer({
        title: "Left Drawer",
        description: "This drawer opens from the left",
        position: "left",
        content: <div>Drawer Content</div>,
        actions: {
          primary: {
            value: "primary",
            label: "Primary Action",
          },
          secondary: [
            {
              value: "cancel",
              label: "Cancel",
            },
          ],
        },
      })
      setRes(res)
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <F0Button onClick={trigger} label="Open Left Drawer" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const DrawerWithDropdown: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await openDrawer({
        title: "Drawer with Dropdown Actions",
        description: "This drawer has multiple secondary actions",
        content: <div>Check the actions menu</div>,
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
        <F0Button onClick={trigger} label="Open Drawer with Dropdown" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const DrawerWithPromises: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await openDrawer({
        title: "Drawer with Async Action",
        description: "The primary action takes time to resolve",
        content: <div>Click the primary action to see the loading state</div>,
        actions: {
          primary: {
            label: "Save (Async)",
            value: () =>
              new Promise((resolve) =>
                setTimeout(() => resolve("Saved"), 2000)
              ),
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
        <F0Button onClick={trigger} label="Open Drawer with Promise" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const DrawerWithModule: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await openDrawer({
        title: "Time Off Request",
        description: "Request time off for your vacation",
        module: {
          id: "timeoff",
          label: "Time Off",
          href: "/timeoff",
        },
        content: <div>Time off request form content...</div>,
        actions: {
          primary: {
            value: "submit",
            label: "Submit Request",
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
        <F0Button onClick={trigger} label="Open Module Drawer" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}

export const DrawerModal: Story = {
  render: () => {
    const [res, setRes] = useState<DialogActionValue>(undefined)

    const trigger = async () => {
      const res = await openDrawer({
        title: "Modal Drawer",
        description: "This drawer behaves like a modal (blocks interaction)",
        modal: true,
        content: (
          <div className="flex flex-col gap-4">
            <p>
              This drawer has an overlay and blocks interaction with the rest of
              the page.
            </p>
            <p>
              Try clicking outside - it should close only if you click the
              actions or overlay (depending on config).
            </p>
          </div>
        ),
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
        <F0Button onClick={trigger} label="Open Modal Drawer" />
        <p>Last action result: {res?.toString()}</p>
      </div>
    )
  },
}
