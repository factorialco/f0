import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Folder",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a folder icon with a name. Used for displaying folder information in data collections.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const FolderType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Folder",
      render: () => ({
        type: "folder",
        value: {
          name: "My folder",
        },
      }),
    },
  },
}
