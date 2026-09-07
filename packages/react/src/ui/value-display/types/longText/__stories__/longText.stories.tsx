import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Long Text",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders long text with ellipsis truncation and tooltip support. Supports custom line limits and full text display.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const LongTextType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Description",
      render: () => ({
        type: "longText",
        value:
          "This is a very long description that demonstrates the longText cell type functionality. The text will be truncated with ellipsis when it exceeds the specified number of lines, and a tooltip will show the full content when hovering over the truncated text.",
      }),
    },
  },
}

export const LongTextWithLines: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Description",
      render: () => ({
        type: "longText",
        value: {
          text: "This is a very long description that demonstrates the longText cell type functionality. The text will be truncated with ellipsis when it exceeds the specified number of lines, and a tooltip will show the full content when hovering over the truncated text.",
          lines: 5,
        },
      }),
    },
  },
}

export const LongTextFullText: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Description (full text)",
      render: () => ({
        type: "longText",
        value: {
          text: "This is a very long description that demonstrates the longText cell type with a specific number of lines. The text will be truncated after 2 lines and show an ellipsis. When you hover over the text, a tooltip will display the full content. This is useful for maintaining consistent row heights in tables while still showing more content than a single line would allow.",
          full: true,
        },
      }),
    },
  },
}

export const LongTextWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Description",
      render: () => ({
        type: "longText",
        value: {
          text: undefined,
          placeholder: "No description available",
        },
      }),
    },
  },
}
