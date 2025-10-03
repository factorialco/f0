import { F0Button } from "@/components/F0Button"
import { Delete } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Dialog } from "./index"

const meta = {
  title: "Dialog",
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
