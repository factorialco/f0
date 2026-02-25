import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { DetailsItem } from "./index"

const meta: Meta = {
  title: "List/DetailsItem",
  component: DetailsItem,
  tags: ["autodocs", "experimental"],
  args: {
    title: "Email",
    content: {
      type: "item",
      text: "alicia.keys@factorial.co",
      action: {
        type: "copy",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLongText: Story = {
  args: {
    title: "Address",
    content: {
      type: "item",
      text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
      action: {
        type: "copy",
      },
    },
  },
}

export const WithMoreLinesThanAllowed: Story = {
  args: {
    title: "Address",
    content: {
      type: "item",
      text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta\nPaseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
      action: {
        type: "copy",
      },
    },
  },
}

export const Horizontal: Story = {
  args: {
    title: "Address",
    content: {
      type: "item",
      text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
    },
    isHorizontal: true,
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    dataTestId: "details-item-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("details-item-test-id")).toBeInTheDocument()
  },
}
