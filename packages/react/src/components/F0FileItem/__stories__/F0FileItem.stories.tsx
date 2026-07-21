import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"
import { expect, within } from "storybook/test"

import { CrossedCircle, Download } from "@/icons/app"

import { F0FileItem } from ".."

const meta = {
  component: F0FileItem,
  title: "FileItem",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    file: {
      description: "The File object to display",
      control: false,
    },
    actions: {
      description:
        "Array of actions to display. A single action shows an icon button, multiple actions show a dropdown menu",
      control: false,
    },
    disabled: {
      description: "Disables all interactions and action buttons",
      control: "boolean",
    },
  },
} satisfies Meta<typeof F0FileItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: "lg",
    file: new File(["test"], "test.txt", { type: "text/plain" }),
    actions: [
      {
        label: "Delete file",
        onClick: fn(),
      },
    ],
    disabled: false,
  },
}

export const WithMultipleActions: Story = {
  args: {
    size: "lg",
    file: new File(["test"], "test of a long file name.pdf", {
      type: "application/pdf",
    }),
    actions: [
      {
        icon: Download,
        label: "Download file",
        onClick: fn(),
      },
      {
        icon: CrossedCircle,
        label: "Delete file",
        onClick: fn(),
        critical: true,
      },
    ],
  },
}

export const WithoutActions: Story = {
  args: {
    size: "lg",
    file: new File(["test"], "test of a long file name.pdf", {
      type: "application/pdf",
    }),
    actions: [],
  },
}

export const WithSubtitle: Story = {
  args: {
    size: "lg",
    file: new File(["test"], "invoice-F001.pdf", { type: "application/pdf" }),
    subtitle: "09 June, 2026",
    actions: [
      {
        icon: Download,
        label: "Download file",
        onClick: fn(),
      },
    ],
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    dataTestId: "file-item-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("file-item-test-id")).toBeInTheDocument()
  },
}
