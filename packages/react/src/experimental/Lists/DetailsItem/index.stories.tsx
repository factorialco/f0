import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { DetailsItem } from "./index"

const meta = {
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
} satisfies Meta<typeof DetailsItem>

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

/**
 * Set `fullWidth` to drop the default ~320px (`max-w-80`) cap so the item
 * stretches to 100% of its container. Reach for it when the item lives in a
 * wide surface such as a side panel or drawer, instead of abusing
 * `isHorizontal` to remove the cap. `fullWidth` is independent of
 * `isHorizontal` / `verticalLayout` (those control layout direction, this
 * controls width). The 600px bordered box below shows the two side by side.
 */
export const FullWidth: Story = {
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
  decorators: [
    (Story) => (
      <div className="w-[600px] rounded-md border border-solid border-f1-border-secondary p-4">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-f1-foreground-secondary">
          Default: capped at ~320px
        </span>
        <DetailsItem {...args} fullWidth={false} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-f1-foreground-secondary">
          fullWidth: fills the 600px container
        </span>
        <DetailsItem {...args} fullWidth />
      </div>
    </div>
  ),
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

export const FileVariant: Story = {
  args: {
    title: "Document",
    content: {
      type: "file",
      file: { name: "contract.pdf", type: "application/pdf" },
      actions: [
        {
          label: "Open",
          onClick: () => window.open("https://example.com/contract.pdf"),
        },
      ],
    },
  },
}

export const FileVariantImage: Story = {
  args: {
    title: "Attachment",
    content: {
      type: "file",
      file: { name: "screenshot.png", type: "image/png" },
    },
  },
}
