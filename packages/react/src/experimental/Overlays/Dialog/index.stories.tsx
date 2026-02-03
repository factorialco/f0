import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { Delete } from "@/icons/app"

import { Dialog } from "./index"

const meta = {
  title: "Overlays/Dialog",
  component: Dialog,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "400px" },
    },
  },
  args: {
    header: {
      title: "Remove job opening",
      description:
        "If you cancel the job opening, you won’t see it on your company’s career page or receive new candidates.",
      type: "critical",
    },
    actions: {
      primary: {
        label: "Remove",
        icon: Delete,
        onClick: () => alert("Remove"),
        variant: "critical",
      },
      secondary: {
        label: "Cancel",
        onClick: () => alert("Cancel"),
      },
    },
    open: true,
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story, { args }) => {
      const [isOpen, setIsOpen] = useState(true)

      return (
        <div className="flex h-full w-full items-center justify-center">
          <F0Button
            variant="critical"
            icon={Delete}
            label="Open dialog"
            onClick={() => setIsOpen(true)}
          />
          <Story
            args={{
              ...args,
              open: isOpen,
              onClose: () => setIsOpen(false),
              actions: {
                primary: {
                  ...args.actions?.primary,
                  label: args.actions?.primary?.label || "",
                  onClick: (e) => {
                    args.actions?.primary?.onClick?.(e)
                    setIsOpen(false)
                  },
                },
                secondary: {
                  ...args.actions?.secondary,
                  label: args.actions?.secondary?.label || "",
                  onClick: (e) => {
                    args.actions?.secondary?.onClick?.(e)
                    setIsOpen(false)
                  },
                },
              },
            }}
          />
        </div>
      )
    },
  ],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Critical: Story = {}

export const Warning: Story = {
  args: {
    header: {
      title: "Top up account",
      description:
        "Your account balance is under 1.000,00 €. Top up to avoid failed payments.",
      type: "warning",
    },
    actions: {
      primary: {
        label: "Add money",
        onClick: () => alert("Add money"),
      },
      secondary: {
        label: "Cancel",
        onClick: () => alert("Cancel"),
      },
    },
  },
}

export const Info: Story = {
  args: {
    header: {
      title: "Account number is missing",
      description:
        "Hellen the HR’s account number is missing. Review now to avoid failed payroll.",
      type: "info",
    },
    actions: {
      primary: {
        label: "Review",
        onClick: () => alert("Review"),
        variant: "neutral",
      },
      secondary: {
        label: "Cancel",
        onClick: () => alert("Cancel"),
      },
    },
  },
}

export const WithTrigger = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="flex h-full w-full items-center justify-center">
        <F0Button
          variant="critical"
          icon={Delete}
          label="Delete file"
          onClick={() => setIsOpen(true)}
        />
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          header={{
            title: "Delete file",
            description: "Are you sure you want to delete this file?",
            type: "critical",
          }}
          actions={{
            primary: {
              label: "Delete",
              icon: Delete,
              variant: "critical",
              onClick: () => {
                alert("Confirmed")
                setIsOpen(false)
              },
            },
            secondary: {
              label: "Cancel",
              onClick: () => setIsOpen(false),
            },
          }}
        />
      </div>
    )
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Critical.args,
    dataTestId: "dialog-test-id",
    open: true,
  },
  play: async ({ canvasElement }) => {
    // Dialog uses Portal, so we need to look in the body
    const body = canvasElement.ownerDocument.body
    const canvas = within(body)
    await expect(canvas.getByTestId("dialog-test-id")).toBeInTheDocument()
  },
}
