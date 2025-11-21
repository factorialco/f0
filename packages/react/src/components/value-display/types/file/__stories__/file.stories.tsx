import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/File",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a file avatar (for file type) and file name. Supports both File objects and file definitions.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const FileType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "File",
      render: () => ({
        type: "file",
        value: {
          name: "My file",
          type: "application/pdf",
        },
      }),
    },
  },
}
